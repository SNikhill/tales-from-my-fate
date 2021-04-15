import React from "react";
import Home from "./Home/Home";
import "./index.css";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sarala:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Home />
    </>
  );
};

export default App;
