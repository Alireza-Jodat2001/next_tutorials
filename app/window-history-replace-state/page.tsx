'use client';

export default function LocaleSwitcher() {
  function switchLocale(locale: string) {
    const newPath = `/${locale}${window.location.pathname}`;
    window.history.replaceState(null, '', newPath);
  }

  return (
    <>
      <button onClick={() => switchLocale('en')}>English</button>
      <button onClick={() => switchLocale('fr')}>French</button>
    </>
  );
}
