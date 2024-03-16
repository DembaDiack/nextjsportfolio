import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import connectToDb from "@/config/database";
import React from "react";

async function HomePage() {
  await connectToDb();
  return (
    <>
      <Hero />
      <InfoBoxes />
    </>
  );
}

export default HomePage;
