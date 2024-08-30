import React from "react";
import Hero from "./components/Landing Page/Hero";
import Features from "./components/Landing Page/Features";
import Working from "./components/Landing Page/Working";

function App() {
  return (
    <div className="font-sans bg-gray-100">
      <Hero />
      <Features />
      <Working />      
    </div>
  );
}

export default App;
