'use client';

export default function LoginPage() {
  function goToOtp(phone: string) {
    window.history.replaceState({ phone }, '', '/push-get-window-state/otp');
    window.location.href = '/push-get-window-state/otp';
  }

  return (
    <>
      <button onClick={() => goToOtp('+989121234567')}>ادامه → صفحه OTP</button>
    </>
  );
}
