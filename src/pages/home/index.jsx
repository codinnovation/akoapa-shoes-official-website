import React from "react";
import TopBar from "./top-bar";
import SecondBar from "./second-bar";
import Navigation from "./navigation";
import Hero from "./hero-section";
import Category from "./categories";

function Home() {
  return (
    <>
      <div>
        <TopBar />
        <SecondBar />
        <Navigation />
        <Hero />
        <Category/>
      </div>
    </>
  );
}
export default Home;
