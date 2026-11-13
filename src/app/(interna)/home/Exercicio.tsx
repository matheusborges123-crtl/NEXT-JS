import Link from "next/link";
import React from "react";

export interface ExercicioProps {
  titulo: string;
  icone: any;
  url: string;
}

export default function Exercicio(props: ExercicioProps) {
  return (
    <Link href={props.url} className="flex flex-col overflow-hidden border border-zinc-700  items-center rounded-lg">
      {React.cloneElement(props.icone, {
        size: 80,
        stroke: 1,
        className:'py-3d'
      })}
      <h3 className="bg-black flex justify-center p-3 w-full">{props.titulo}</h3>
    </Link>
  );
}
