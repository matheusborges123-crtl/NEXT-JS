import { IconSquare } from "@tabler/icons-react";
import Link from "next/link";

export default function Logo() {
    return(
        <Link href="/" className="">
            <div className="relative w-10 h-10 flex items-center justify-center rotate-45">
                <IconSquare stroke={3} size={40}  className="text-zinc-600 absolute" />
                <IconSquare stroke={3} size={20}  className="text-zinc-400 absolute" />
            </div>
        </Link>
    )
}
