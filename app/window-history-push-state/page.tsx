'use client';

export default function Page() {
  function updateSorting(sortOrder: string) {
    const params = new URLSearchParams(window.location.search);
    params.set('sort', sortOrder);
    window.history.pushState(null, '', `?${params.toString()}`);
  }

  return (
    <>
      <button onClick={() => updateSorting('asc')}>Sort Ascending</button>
      <button onClick={() => updateSorting('desc')}>Sort Descending</button>
    </>
  );
}
