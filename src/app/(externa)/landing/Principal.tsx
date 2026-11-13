import Botao from "@/app/shared/Botao";

export default function Principal() {
  return (
    <div className="flex flex-col justify-center items-center h-[450px] gap-10 text-center">
      <h1 className="font-black text-6xl leading-[70px]
      bg-clip-text text-transparent
      bg-gradient-to-b from-zinc-200 to-zinc-400">Landing Page com Next.js</h1>
      <h2 className="text-zinc-500 w-3/4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu
      </h2>

      <div className="flex gap-4">
        <Botao url="/home" destacado maior>
          Inciar Aqui
        </Botao>
        <Botao  maior url="/home">Sobre Nós</Botao>
      </div>
    </div>
  );
}
