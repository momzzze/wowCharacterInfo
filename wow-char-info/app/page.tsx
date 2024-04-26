import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Wow Char Info!</h1>
      <div className="flex gap-1 font-bold">
        <span>Char</span>
        <Image
          src="/wow-icon.svg"
          alt="World of Warcraft logo"
          width={24}
          height={24}
        />
        <span>Info</span>
      </div>
    </main>
  );
}
