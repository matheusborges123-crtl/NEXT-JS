import Titulo from "../shared/Título"

function carregarNumeroPesado() : Promise<number> {
    return new Promise((resolve)=> {
        setTimeout(()=> resolve(1100),5000)
    })
}






export default async function Page() {
    const numeroPesado =  await carregarNumeroPesado()
    return(
        <div>
            <Titulo

                texto="Pagina loading"
                legenda="Demostrando o uso de loading em uma pagina"

            />

            <div className="flex flex-col justify-center items-center h-96">

                <span className="text-7xl font-black">{numeroPesado}</span>

                <span className="text-zinc-500">Demorou 5 segundos...</span>

                </div>


        </div>
    )
}
