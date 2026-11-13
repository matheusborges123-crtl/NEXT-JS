import MenuItem from "./MenuItem";

export default function Menu() {
    return(
        <nav className="flex gap-5">
            <MenuItem texto="Produtos" url="/" />
            <MenuItem texto="Clientes" url="/" />
            <MenuItem texto="Blog" url="/" />
            <MenuItem texto="Produtos" url="/" />
        </nav>
    )
}
