import Image from "next/image";

export default function NavBar() {
    return (
      <nav className="flex justify-between bg-[#271E2B] w-full h-[13%]">
        <Image className = "flex justify-self-start" src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        <ul className="flex justify-self-end space-x-4 text-[#F4EFEF]">
          <li>Journey Types</li>
          <li>Login</li>
        </ul>
      </nav>
    );
}

