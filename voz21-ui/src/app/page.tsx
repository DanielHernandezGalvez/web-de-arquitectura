import Image from "next/image";
import Head from "next/head";
import Navigation from "../Components/Navigation/Navigation";
import { Header } from "@/Components/Header/Header";
import { About } from "@/Components/About/About";
import Catalogue from "@/Components/Catalogue/Catalogue";
import Customers from "@/Components/Customers/Customers";

export default function Home() {
  return (
    <>
      <div className="bg-white min-h-screen">
        <Head>
          <title>Voz 21</title>
          <meta
            name="description"
            content="Agencia de voces para locucion y comerciales"
          />
        </Head>
        <Navigation />
        <Header />
        <About />
        <Catalogue />
        <Customers />
      </div>
    </>
  );
}
