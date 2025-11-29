declare module 'react-google-recaptcha' {
  import * as React from 'react';

  export interface ReCAPTCHAProps {
    sitekey: string;
    onChange?: (token: string | null) => void;
    theme?: 'light' | 'dark';
    type?: 'image' | 'audio';
    tabindex?: number;
    onExpired?: () => void;
    onErrored?: () => void;
    onLoad?: () => void;
    hl?: string;
    size?: 'normal' | 'compact' | 'invisible';
    badge?: 'bottomright' | 'bottomleft' | 'inline';
    stoken?: string;
    grecaptcha?: unknown;
    isolated?: boolean;
    children?: React.ReactNode;
  }

  export class ReCAPTCHA extends React.Component<ReCAPTCHAProps> {
    getValue(): string | null;
    reset(): void;
    execute(): void;
    executeAsync(): Promise<string>;
  }

  export default ReCAPTCHA;
}
