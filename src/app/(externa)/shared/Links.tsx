import Link from "next/link";

export default function Links() {

    function renderizarLink(text:string, url:string) {

        return(
           <Link href={url} className="
           text-zinc-500 text-sm hover:text-zinc-300
           transition duration-300
           ">

            {text}

           </Link>
        )

    }


    return(
        <div className="flex gap-16">

            <div className="flex flex-col gap-5">
                <h3>
                    Recursos
                </h3>
                <div className="flex flex-col gap-2">
                    {renderizarLink('Docs','/')}
                    {renderizarLink('Aprenda','/')}
                    {renderizarLink('Blag','/')}
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <h3>
                    Sobre
                </h3>
                <div className="flex flex-col gap-2">
                    {renderizarLink('História','/')}
                    {renderizarLink('Github','/')}
                    {renderizarLink('Twitter','/')}
                </div>
            </div>



                  <div className="flex flex-col gap-5">
                <h3>
                    Mais
                </h3>
                <div className="flex flex-col gap-2">
                    {renderizarLink('Ação Social','/')}
                    {renderizarLink('Proejetos Antigos','/')}
                    {renderizarLink('Esporte & Lazer','/')}
                    {renderizarLink('Saude','/')}
                </div>
            </div>




                  <div className="flex flex-col gap-5">
                <h3>
                    Legal
                </h3>
                <div className="flex flex-col gap-2">
                    {renderizarLink('Polica de privacidade','/')}
                    {renderizarLink('Termos de uso','/')}
                    {renderizarLink('Proteção de dados','/')}
                </div>
            </div>

        </div>
    )
}
