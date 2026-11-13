import Cabeçalho from "./shared/Cabeçalho";
import Rodape from "./shared/Rodape";

export default function Layout(props: any) {
  return (
    <div className=" flex flex-col">
      <Cabeçalho />
      <div className="flex justify-center mt-18">
        <div className="w-[1110px] py-7 ">
          <main>{props.children}</main>

        </div>
      </div>
          <Rodape />
    </div>
  );
}
