import React from "react";
import TopBar from "./top-bar";
import SecondBar from "./second-bar";
import Navigation from "./navigation";
import Hero from "./hero-section";
import Category from "./categories";
import FeatureCategory from "./feature-category";
import JoinWhatsApp from "./join-whatsapp";

function Home() {
  return (
    <>
      <div>
        <TopBar />
        <SecondBar />
        <Navigation />
        <Hero />
        <Category />
        <FeatureCategory />
        <JoinWhatsApp />
      </div>
    </>
  );
}
export default Home;
