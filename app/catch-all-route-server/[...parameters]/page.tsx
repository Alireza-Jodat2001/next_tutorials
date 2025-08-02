const page = async ({ params }: { params: { parameters: string[] } }) => {
  const { parameters } = await params;

  console.log(parameters);

  return <div>optional catch all route segment</div>;
};

export default page;
