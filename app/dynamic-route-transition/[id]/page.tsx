const page = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));

  return <div>ali</div>;
};

export default page;
