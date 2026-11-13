"use client";

import { IconArrowsJoin2, IconError404, IconLayoutDashboard, IconLoader, IconRoute } from "@tabler/icons-react";
import MenuItem from "./MenuItem";
import MenuGrupo from "./MenuGrupo";
import { usePathname } from "next/navigation";

export default function Menu() {
  const url = usePathname();
  return (
    <nav className="flex flex-col gap-4">
      <MenuItem
        url="/home"
        texto="Início"
        icone={<IconLayoutDashboard />}
        selecionado={url === "/home"}
      />

      <MenuGrupo titulo="Exercícios">
        <MenuItem
          url="/loading"
          texto="Loading"
          selecionado={url === "/loading"}
          icone={<IconLoader />}
        />

        <MenuItem
          url="/dinamica/blog/abc"
          texto="Rota Dinâmica #1"
          selecionado={url === "/dinamica/blog/abc"}
          icone={<IconRoute />}
        />

        <MenuItem
          url="/dinamica/curso/react/config-ambiente/123"
          texto="Rota Dinâmica #2"
          selecionado={url === "/dinamica/curso/react/config-ambiente/123"}
          icone={<IconRoute />}
        />

         <MenuItem
          url="/paralelas"
          texto="Rotas paralelas"
          selecionado={url === "/paralelas"}
          icone={<IconArrowsJoin2 />}
        />

        <MenuItem url="/erro" texto="Erro" selecionado={url === "/erro"} icone={<IconError404 />} />


      </MenuGrupo>


      <MenuGrupo titulo="Exercicios extras para estudo">

        <MenuItem
          url="/dinamica/Produtos/10?nome=Batata&categoria=Alimentos"
          texto="Rota Dinâmica Meu Exemplo"
          selecionado={url === "/dinamica/Produtos/10?nome=Batata&categoria=Alimentos"}
          icone={<IconRoute />}
        />


      </MenuGrupo>


    </nav>
  );
}
