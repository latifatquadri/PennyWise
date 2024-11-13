import React from "react";
import Penny_img from "../../Assets/images/Penny_img.jpg";
import About from "./About";
import { Slide } from "react-awesome-reveal";
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Slide direction="right">
          <img src={Penny_img} alt="Penny wise" className="w-full h-100" />
        </Slide>
        <Slide direction="left">
          <div className="w-[80%] mx-auto gap-6 lg:mt-28">
            <p className="text-3xl lg:text-5xl italic font-semibold lg:font-bold text-green-600 text-start py-8 ">
              A penny saved is a <br /> penny earned
            </p>
            <p className="text-green-600 text-base lg:text-lg leading-loose">
              <span className="font-bold text-xl text-green-600">"</span>Every
              penny counts when it comes to building your financial future. Just
              like a single penny can eventually grow into a substantial sum,
              small, consistent savings can lead to significant financial
              achievements.
              <span className="font-bold text-xl text-green-600">"</span>
            </p>
            <button className="bg-green-600 text-white w-32 h-12 rounded mt-4">
              <Link to="/register">Get Started</Link>
            </button>
          </div>
        </Slide>
      </div>
      <About />
      <Contact />
    </div>
  );
}

export default Hero;
