import { IconMenu2 } from "@tabler/icons-react";
import MenuUsuario from "./MenuUsuario";

export default function Cabecalho() {
  return (
    <header className="flex items-center justify-between px-7 h-20 bg-zinc-950">
      <IconMenu2 className="text-zinc-400 hover:text-zinc-200 cursor-pointer" />
      <MenuUsuario

        nome="UsuarioMock"
        email="usuario@zmail.com"
        imagem="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces&utm_source=chatgpt.com"
      />
    </header>
  );
}
