import { IconError404, IconLoader, IconRoute, IconRoute2 } from "@tabler/icons-react";
import Titulo from "../shared/Título";
import Exercicio from "./Exercicio";

export default function Page() {
  return (
    <div>
      <Titulo texto="Area do Aluno" legenda="Lista de todos os exercicios implementados" />
      <div className=" grid grid-cols-4 gap-5 mt-10">
        <Exercicio url="/loading" titulo="Loading" icone={<IconLoader />} />
        <Exercicio url="/erro" titulo="Erro" icone={<IconError404 />} />
        <Exercicio
          url="/dinamica/blog/123?filtro=inativos"
          titulo="Rota Dinâmica #1"
          icone={<IconRoute />}
        />
        <Exercicio
          url="/dinamica/curso/html-basico?esconderAulasConcluidas=true"
          titulo="Rota Dinâmica #2"
          icone={<IconRoute2 />}
        />
      </div>
    </div>
  );
}
