'use client';

import React, { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ReCAPTCHA from 'react-google-recaptcha';
import { sendEmail, ContactFormData } from '@/lib/emailService';
import { formatFileSize } from '@/lib/utils';

interface ContactPageProps {
  setCurrentPage: (page: string) => void;
}

export default function ContactPage({ setCurrentPage }: ContactPageProps) {
  const { t } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    // Vérifier reCAPTCHA
    const recaptchaToken = recaptchaRef.current?.getValue();
    if (!recaptchaToken) {
      setSubmitError('Veuillez compléter la vérification reCAPTCHA');
      setIsSubmitting(false);
      return;
    }

    // Récupérer les données du formulaire
    const formData = new FormData(e.currentTarget);
    const contactData: ContactFormData = {
      fullName: formData.get('fullName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string || undefined,
      productType: formData.get('productType') as string || '',
      message: formData.get('message') as string,
      file: uploadedFile || undefined,
    };

    // Vérifier la taille du fichier (max 10MB)
    if (uploadedFile && uploadedFile.size > 10 * 1024 * 1024) {
      setSubmitError('Le fichier est trop volumineux (maximum 10MB)');
      setIsSubmitting(false);
      return;
    }

    try {
      // Envoyer l'email
      const result = await sendEmail(contactData, recaptchaToken);

      if (result.success) {
        setFormSubmitted(true);
        // Réinitialiser le formulaire
        formRef.current?.reset();
        setUploadedFile(null);
        recaptchaRef.current?.reset();
      } else {
        setSubmitError(result.message);
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Erreur formulaire:', error);
      }
      setSubmitError('Une erreur est survenue. Veuillez réessayer plus tard.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t.contact.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            {t.contact.subtitle}
          </p>
          <button
            onClick={() => setCurrentPage('contact-info')}
            className="text-blue-600 hover:text-blue-700 font-semibold underline"
          >
            {t.contact.contactInfo}
          </button>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {t.contact.requestQuote}
          </h2>
          <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
            {!formSubmitted ? (
              <>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.contact.fullName}
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="jean.dupont@exemple.fr"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.contact.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="+1 (514) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.contact.productType}
                  </label>
                  <select
                    name="productType"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="">{t.contact.selectProduct}</option>
                    <option value="flyers">{t.products.flyers}</option>
                    <option value="cards">{t.products.businessCards}</option>
                    <option value="brochures">{t.products.brochures}</option>
                    <option value="rollups">{t.products.rollups}</option>
                    <option value="banners">{t.products.banners}</option>
                    <option value="packaging">{t.products.packaging}</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.contact.uploadFile}
                  </label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png,.ai,.eps,.psd"
                  />
                  <div
                    onClick={handleClick}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                      isDragging
                        ? 'border-blue-500 bg-blue-50'
                        : uploadedFile
                        ? 'border-green-400 bg-green-50'
                        : 'border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50'
                    }`}
                  >
                    {uploadedFile ? (
                      <div className="space-y-2">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <i className="fas fa-check-circle text-green-600 text-2xl"></i>
                        </div>
                        <p className="text-sm font-semibold text-gray-900">
                          {uploadedFile.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {formatFileSize(uploadedFile.size)}
                        </p>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setUploadedFile(null);
                            if (fileInputRef.current) {
                              fileInputRef.current.value = '';
                            }
                          }}
                          className="mt-2 text-sm text-red-600 hover:text-red-700 font-medium"
                        >
                          <i className="fas fa-times mr-1"></i> Supprimer
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                          <i className="fas fa-cloud-upload-alt text-blue-600 text-2xl"></i>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-700 mb-1">
                            Cliquez pour téléverser ou glissez-déposez
                          </p>
                          <p className="text-xs text-gray-500">
                            PDF, JPG, PNG, AI, EPS, PSD (max 10MB)
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.contact.message}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                    placeholder="Décrivez votre projet et vos besoins..."
                  ></textarea>
                </div>

                {/* reCAPTCHA */}
                <div className="flex justify-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                    theme="light"
                  />
                </div>

                {/* Message d'erreur */}
                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-800 text-sm flex items-center">
                      <i className="fas fa-exclamation-circle mr-2"></i>
                      {submitError}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Envoi en cours...
                    </>
                  ) : (
                    t.contact.sendRequest
                  )}
                </button>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-check text-green-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t.contact.messageSent}
                </h3>
                <p className="text-gray-600">{t.contact.messageSentDesc}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

