const page = async ({ searchParams }: { searchParams: any }) => {
  const { id } = await searchParams;

  return <div>{id}</div>;
};

export default page;
