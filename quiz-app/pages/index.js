import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import Quiz from "../components/Quiz";
import { useAppContext } from "../context/state";

export default function Home() {
  const mycontext = useAppContext();

  return (
    <div className="h-screen">
      <Head>
        <title>Hero's Journey Personality Quiz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="h-[30.5%] w-full p-[0.5rem] bg-[#180520]">
        <section className="flex flex-col w-full h-[100%]  justify-center  align-center content-center border-dotted bg-[#180520] box-border border-[0.5rem] border-[#E1A774]">
          <h1 className="self-center text-[6.5vh] font-bold text-[#E1A774]">
            {" "}
            Hero's Journey
          </h1>
          <h3 className="self-center text-center text-[#E1A774]">
            Answer the questions below to find out which stage of the Hero's
            Journey you are currently on
          </h3>
        </section>
      </div>
      <Quiz />
    </div>
  );
}

/* 
- global state 
- each answer button will be agree - a, slightly agree -b 
- each time the button is selected it adds a score
- if 
*/
