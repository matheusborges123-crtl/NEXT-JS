import { IconMoodSadSquint } from "@tabler/icons-react"

export default function Page() {
    const obj : any = undefined
    return(
        <div className="flex flex-col h-96 items-center justify-center">
            <IconMoodSadSquint size={150} stroke={1} className="text-red-500" />
            <h1 className="text-4xl font-black">Ops.... Ocorreu um erro!</h1>
        </div>
    )
}
