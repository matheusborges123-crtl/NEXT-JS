import Cabeçalho from "./shared/Cabeçalho"
import Rodape from "./shared/Rodape"

export default function Layout(props:any) {
    return(
        <div className=" flex flex-col">
            <Cabeçalho />
            <main className="flex mt-18">
                {props.children}

            </main>
            <Rodape />
        </div>
    )
}
