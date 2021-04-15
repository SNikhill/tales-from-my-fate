import React from "react";

const Header = () => {
  return (
    <div className="container flex justify-between">
      <p className={"text-4xl pl-3 font-bold border-b-8 border-black"}>tales from fate</p>
    </div>
  );
};

const Home = () => {
  return <Header />;
};

export default Home;
