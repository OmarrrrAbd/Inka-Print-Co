'use client';

import React, { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { formatFileSize } from '@/lib/utils';
import { getCategories, getCategoryDisplayName } from '@/lib/products';

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
  const formRef = useRef<HTMLFormElement>(null);
  
  // Récupérer les catégories de produits depuis le JSON
  const categories = getCategories();

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

    // Récupérer les données du formulaire
    const formData = new FormData(e.currentTarget);

    // Vérifier la taille du fichier (max 10MB)
    if (uploadedFile && uploadedFile.size > 10 * 1024 * 1024) {
      setSubmitError('Le fichier est trop volumineux (maximum 10MB)');
      setIsSubmitting(false);
      return;
    }

    try {
      // Préparer les données pour Netlify Forms
      const netlifyFormData = new FormData();
      netlifyFormData.append('form-name', 'contact');
      netlifyFormData.append('fullName', formData.get('fullName') as string);
      netlifyFormData.append('email', formData.get('email') as string);
      netlifyFormData.append('productType', (formData.get('productType') as string) || '');
      netlifyFormData.append('message', formData.get('message') as string);
      if (uploadedFile) {
        netlifyFormData.append('file', uploadedFile);
      }

      // Envoyer à Netlify Forms
      const netlifyResponse = await fetch('/', {
        method: 'POST',
        body: netlifyFormData,
      });

      if (netlifyResponse.ok) {
        setFormSubmitted(true);
        // Réinitialiser le formulaire
        formRef.current?.reset();
        setUploadedFile(null);
      } else {
        setSubmitError('Une erreur est survenue lors de l\'envoi. Veuillez réessayer plus tard.');
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
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-neutral-dark mb-4">
            {t.contact.requestQuote}
          </h1>
          <p className="text-lg text-slate-neutral max-w-2xl mx-auto mb-4">
            {t.contact.subtitle}
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="text-ink-primary hover:text-ink-primary-dark font-semibold underline transition-colors"
          >
            {t.contact.contactInfo}
          </button>
        </div>

        <div className="bg-slate-neutral-50 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-neutral-dark mb-6">
            {t.contact.requestQuote}
          </h2>
          <form 
            ref={formRef} 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            netlify-honeypot="bot-field"
            className="space-y-6" 
            onSubmit={handleSubmit}
          >
            {/* Champ caché pour Netlify Forms */}
            <input type="hidden" name="form-name" value="contact" />
            {/* Honeypot pour la protection anti-spam Netlify */}
            <div style={{ display: 'none' }}>
              <label>
                Ne remplissez pas ce champ si vous êtes humain: <input name="bot-field" />
              </label>
            </div>
            {!formSubmitted ? (
              <>
                <div>
                  <label className="block text-sm font-semibold text-slate-neutral-dark mb-2">
                    {t.contact.fullName}
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    className="w-full px-4 py-3 border border-slate-neutral-100 rounded-lg focus:ring-2 focus:ring-ink-primary focus:border-ink-primary transition-all"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-neutral-dark mb-2">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-slate-neutral-100 rounded-lg focus:ring-2 focus:ring-ink-primary focus:border-ink-primary transition-all"
                    placeholder="jean.dupont@exemple.fr"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-neutral-dark mb-2">
                    {t.contact.productType}
                  </label>
                  <select
                    name="productType"
                    className="w-full px-4 py-3 border border-slate-neutral-100 rounded-lg focus:ring-2 focus:ring-ink-primary focus:border-ink-primary transition-all"
                  >
                    <option value="">{t.contact.selectProduct}</option>
                    {categories.map((category) => (
                      <option key={category.slug} value={category.name}>
                        {getCategoryDisplayName(category.slug)}
                      </option>
                    ))}
                    <option value="other">{t.contact.other}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-neutral-dark mb-2">
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
                        ? 'border-coral-accent bg-coral-accent-50'
                        : uploadedFile
                        ? 'border-coral-accent bg-coral-accent-50'
                        : 'border-slate-neutral-100 bg-slate-neutral-50 hover:border-ink-primary hover:bg-ink-primary-50'
                    }`}
                  >
                    {uploadedFile ? (
                      <div className="space-y-2">
                        <div className="w-16 h-16 bg-coral-accent-50 rounded-full flex items-center justify-center mx-auto mb-3">
                          <i className="fas fa-check-circle text-coral-accent text-2xl"></i>
                        </div>
                        <p className="text-sm font-semibold text-slate-neutral-dark">
                          {uploadedFile.name}
                        </p>
                        <p className="text-xs text-slate-neutral">
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
                        <div className="w-16 h-16 bg-ink-primary-50 rounded-full flex items-center justify-center mx-auto">
                          <i className="fas fa-cloud-upload-alt text-ink-primary text-2xl"></i>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-neutral-dark mb-1">
                            Cliquez pour téléverser ou glissez-déposez
                          </p>
                          <p className="text-xs text-slate-neutral">
                            PDF, JPG, PNG, AI, EPS, PSD (max 10MB)
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-neutral-dark mb-2">
                    {t.contact.message}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-neutral-100 rounded-lg focus:ring-2 focus:ring-ink-primary focus:border-ink-primary resize-none transition-all"
                    placeholder="Décrivez votre projet et vos besoins..."
                  ></textarea>
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
                  className="w-full bg-coral-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-coral-accent-dark transition-all transform hover:scale-[1.02] disabled:bg-slate-neutral disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center shadow-lg shadow-coral-accent/30"
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
                <div className="w-16 h-16 bg-coral-accent-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-check text-coral-accent text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-slate-neutral-dark mb-2">
                  {t.contact.messageSent}
                </h3>
                <p className="text-slate-neutral">{t.contact.messageSentDesc}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

