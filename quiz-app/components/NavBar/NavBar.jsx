import Image from "next/image";

export default function NavBar() {
    return (
      <nav className="flex justify-between bg-[#271E2B] w-full h-[13%] text-lg items-center">
        <Image
          className="flex justify-self-start"
          src="/vercel.svg"
          alt="Vercel Logo"
          width={72}
          height={16}
        />
        <ul className="flex justify-self-end  space-x-4 text-[#F4EFEF]">
          <li>
            <button className="bg-[#463343] py-[2vh] px-[2vw] rounded">Journey Types</button>
          </li>
          <li>
            <button className="bg-[#463343] py-[2vh] px-[2vw]">Login</button>
          </li>
        </ul>
      </nav>
    );
}

