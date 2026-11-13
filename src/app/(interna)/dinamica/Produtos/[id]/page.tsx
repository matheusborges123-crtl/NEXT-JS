export default async function Page({ params,searchParams }: any) {
  const { id } = await params;
  const {nome,categoria} =  await searchParams;
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl text-zinc-500 font-black">Produto: {id}</h1>
      <h2 className="text-5xl text-zinc-500 font-black">Nome: {nome}</h2>
      <h2 className="text-5xl text-zinc-500 font-black">Categoria: {categoria}</h2>
    </div>
  );
}
