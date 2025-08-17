export const generateStaticParams = async () => {
  // for example
  // const posts = await fetch('https://.../posts').then(res => res.json());
  // return posts.map((post) => ({
  //   slug: post.slug,
  // }))

  return [{ slug: 'programming' }, { slug: 'database' }, { slug: 'ai' }];
};

const page = async ({ params }: { params: Promise<any> }) => {
  const { slug } = await params;

  return <div>{slug}</div>;
};

export default page;
