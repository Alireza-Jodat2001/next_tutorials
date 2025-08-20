'use client';

import { useEffect } from 'react';

export default function OtpPage() {
  useEffect(() => {
    console.log(window.history.state);
  }, []);

  return <div>صفحه OTP</div>;
}
