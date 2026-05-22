'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const SESSION_KEY = 'ceiil-preloader-shown';

export default function PagePreloader() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem(SESSION_KEY) === 'true') {
      return;
    }

    setIsVisible(true);
    const startedAt = Date.now();

    const finish = () => {
      const elapsed = Date.now() - startedAt;
      const delay = Math.max(0, 850 - elapsed);

      window.setTimeout(() => {
        setIsLeaving(true);
        window.sessionStorage.setItem(SESSION_KEY, 'true');
        window.setTimeout(() => setIsVisible(false), 360);
      }, delay);
    };

    if (document.readyState === 'complete') {
      finish();
      return;
    }

    window.addEventListener('load', finish, { once: true });
    return () => window.removeEventListener('load', finish);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`preloader ${isLeaving ? 'preloader-leaving' : ''}`} aria-hidden="true">
      <div className="preloader-mark">
        <Image
          src="/media/ceiil-litt.png"
          alt="Capital Express Indemnity Insurance Limited"
          width={216}
          height={70}
          priority
        />
      </div>
      <div className="preloader-line" />
    </div>
  );
}
