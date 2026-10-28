import Logo from "@/app/shared/Logo";

export default function Cabeçalho() {
  return (
    <header
      className="
            flex justify-center items-center
            fixed top-0 left-0 right-0
            border-b border-zinc-800
             h-18 bg-black/70 backdrop-blur-sm

            "
    >
      <div className="flex items-center w-[1400px] h-full">
        <Logo />
      </div>
    </header>
  );
}
