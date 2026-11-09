import Image from "next/image";

export interface RecursosProps {
  titulo: string;
  texto: string;
  imagem: string;
}

export default function Recurso(props: RecursosProps) {
  return (
    <div className="border border-zinc-700 p-5 rounded-lg  flex flex-col ">
      <Image
        src={props.imagem}
        width={250}
        height={300}
        className="self-center h-[190px] mb-3"
        alt="Imagem do Recurso"
      />
      <h3 className="text-xl font-semibold mb-1">{props.titulo}</h3>

      <p className="text-zinc-500 text-sm">{props.texto}</p>
    </div>
  );
}
