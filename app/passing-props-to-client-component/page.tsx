import LinkButton from './LinkButton';

export default async function Page() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
  const result = await response.json();

  return (
    <div>
      server partial
      <LinkButton data={result.title} />
    </div>
  );
}
