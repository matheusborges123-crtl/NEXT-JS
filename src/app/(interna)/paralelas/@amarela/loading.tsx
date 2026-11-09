import Image from "next/image";

export default function Loading() {
  return <Image src="/loading.gif" width={50} height={50} className="bg-zinc-500" alt="Loading" />;
}
