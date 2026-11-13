import Logo from "@/app/shared/Logo";
import Menu from "./shared/Menu";
import Cabecalho from "./shared/Cabecalho";

export default function Layout(props: any) {
  return (
    <div className="flex bg-zinc-900 min-h-screen">
      <aside
        className="
            flex flex-col
            bg-black w-72 p-7 gap-10

      "
      >
        <Logo />
        <Menu />
      </aside>
      <div className="flex-1 flex flex-col ">
        <Cabecalho />
        <main className="flex-1 p-7">{props.children}</main>
      </div>
    </div>
  );
}
