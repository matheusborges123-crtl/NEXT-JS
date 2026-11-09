import Link from "next/link"

export interface MenuItemProps{
    url: string
    texto:string
    icone:any
    selecionado?:boolean


}



export default function MenuItem(props:MenuItemProps) {


    return(
        <Link href={props.url} className={`flex items-center
            hover:text-white transition duration-300
        ${props.selecionado ? 'text-white hover:text-zinc-500' : 'text-zinc-500'}
       `}>

            <span>{props.icone}</span>
            <span className="ml-3 text-lg">{props.texto}</span>
        </Link>
    )


}
