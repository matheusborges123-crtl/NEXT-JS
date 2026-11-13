import { IconCircle, IconCircleFilled, IconSquare } from "@tabler/icons-react";
import Link from "next/link";

export default function Logo() {
    return(
        <Link href="/" className="flex items-center gap-4">
            <div className="relative w-10 h-10 flex items-center justify-center rotate-45">
                <IconSquare stroke={3} size={40}  className="text-zinc-600 absolute" />
                <IconSquare stroke={3} size={20}  className="text-zinc-400 absolute" />
                <IconCircleFilled size={8} className="text-zinc-100" />
            </div>
            <span className="
                font-black text-xl
                bg-clip-text text-transparent
                bg-linear-to-b from-zinc-300 to-zinc-400
            ">Minha APP</span>
        </Link>
    )
}
