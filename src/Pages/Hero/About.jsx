import React from "react";
import { Slide } from "react-awesome-reveal";

function About() {
  return (
    <div className="mt-16">
      <Slide direction="left">
        <h1 className="text-3xl font-bold text-center text-green-600">
          About Penny Wise
        </h1>
      </Slide>
      <Slide direction="right">
        <div className="flex justify-start ml-12 my-12">
          <div className="z-30 bg-green-50 border-4 border-gray-400 p-8 w-34 lg:w-1/2 rounded-3xl">
            <p className="text-green-600 leading-relaxed text-base lg:text-lg">
              Welcome to <span className="font-bold">Penny Wise</span>, where
              your journey to financial freedom begins. We believe that everyone
              deserves the tools and resources to take control of their
              finances, and our app is designed to help you do just that.
            </p>
          </div>
        </div>
      </Slide>

      <Slide>
        <div className="flex justify-end mr-12 my-12">
          <div className="z-30 bg-green-50 border-4 border-gray-400 p-8 w-34 lg:w-1/2 rounded-3xl">
            <p className="text-green-600 leading-relaxed text-base lg:text-lg text-center">
              At <span className="font-bold">Penny Wise</span>, our mission is
              simple: to make saving money easier, smarter, and more accessible
              for everyone. We understand that managing your finances can be
              challenging, so we've created a platform that simplifies the
              process, allowing you to save more, spend wisely, and achieve your
              financial goals with confidence.
            </p>
          </div>
        </div>
      </Slide>

      <Slide direction="right">
        <div className="flex justify-start ml-12 my-12">
          <div className="z-30 bg-green-50 border-4 border-gray-400 p-8 w-34 lg:w-1/2 rounded-3xl">
            <p className="text-green-600 leading-relaxed text-base lg:text-lg">
              We are committed to continuously improving{" "}
              <span className="font-bold">Penny Wise</span> to better serve your
              needs. Your feedback drives our innovation, and we are always here
              to support you as you work towards your financial goals.
            </p>
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default About;
