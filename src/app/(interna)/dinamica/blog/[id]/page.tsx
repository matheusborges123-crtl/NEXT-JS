import Titulo from "@/app/(interna)/shared/Título";

export default async function Page(props: any) {
    const parametros = await props.params;

    return (
        <div>
            <Titulo
                texto="Rota Dinâmica #1"
                legenda="Exibindo os parâmetros passados na rota"
            />

            <div className="mt-10">
                <span className="text-3xl">
                    Id {parametros.id}
                </span>

                <code>
                    <pre className="text-2xl bg-black p-5 rounded-lg">
                        {JSON.stringify({ params: parametros }, null, 4)}
                    </pre>
                </code>
            </div>
        </div>
    );
}
