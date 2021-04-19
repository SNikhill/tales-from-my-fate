import React from "react";

const Header = () => {
  return (
    <div className="container flex justify-between">
      <p className={"w-72 p-1 text-4xl text-center font-bold border-b-4 border-black"}>
        tales from fate
      </p>
    </div>
  );
};

const Home = () => {
  return (
    <div className={"h-screen flex flex-col"}>
      <Header />
      <main
        className={
          "h-full grid grid-rows-5 justify-center items-center font-bold text-black"
        }
      >
        <section className={"row-span-3 flex flex-col content-center"}>
          <p className={"text-6xl "}>
            i am Nikhil Seth, a human from the planet earth.
          </p>
          <p className={"text-3xl text-gray mt-4"}>
            i shape the web one component and a commit at a time.
          </p>
        </section>
        <section className={"flex justify-center"}>
          <button className={"w-60 h-16 border-4 border-black shadow-lg text-4xl font-bold"}>Projects</button>
        </section>
        <footer>
          <p className={"text-3xl text-gray"}>
            i love open source & use linux as my daily driver.
          </p>
          <p className={"text-xl"}>I just say that to brag and sound cool. ;)</p>
        </footer>
      </main>
    </div>
  );
};

export default Home;
