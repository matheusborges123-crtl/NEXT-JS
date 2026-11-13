import Link from "next/link";

export interface BotaoProps {
  url?: string;
  onClick?: () => void;
  destacado?: boolean;
  children: any;
  maior?: boolean
}

export default function Botao(props: BotaoProps) {
  function renderizarBotao() {
    return (
      <button
        className={`
            ${props.destacado ? "bg-zinc-100 hover:bg-zinc-200 text-black " : " hover:bg-zinc-400  bg-black text-zinc-200"}
            ${props.maior ? 'px-3 py-3' : 'px-3 py-1.5 text-sm'}
            border border-zinc-600 rounded-lg text-sm px-2 py-1.5 transition duration-300
        `}
      >
        {props.children}
      </button>
    );
  }

  return props.url ? <Link href={props.url}>{renderizarBotao()}</Link> : renderizarBotao();
}
