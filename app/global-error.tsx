'use client';

import { useEffect } from 'react';

export default function GlobalError() {
  useEffect(() => {
    window.location.href = '/';
  }, []);

  return null;
}
