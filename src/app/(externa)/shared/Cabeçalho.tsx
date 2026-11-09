import Logo from "@/app/shared/Logo";
import Menu from "./Menu";
import Botao from "@/app/shared/Botao";

export default function Cabeçalho() {
  return (
    <header
      className="
            flex justify-center items-center
            fixed top-0 left-0 right-0
            border-b border-zinc-800
             h-18 bg-black/70 backdrop-blur-sm

            "
    >
      <div className="flex gap-14 items-center w-[1400px] h-full">
        <Logo />
        <Menu />
        <div className="flex-1 "></div>
        <div className="flex gap-4">
        <Botao url="/home">Entrar</Botao>
        <Botao url="/home" destacado>Registrar </Botao>

        </div>
      </div>
    </header>
  );
}
