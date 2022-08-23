import React from "react";

export function Calendar() {
  return (
    <>
      <div className="flex flex-col justify-center mt-4">
        <div className="flex flex-col text-center">
          <h1 className="text-5xl text-orange-300 font-bold mt-0 mb-6">
            CALENDARIO 2022
          </h1>
          <h5 className="text-3xl text-orange-500 font-bold mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            magnam?
          </h5>
        </div>
        <div className="flex justify-center mb-8 mt-8">
          <img
            src="https://mdbootstrap.com/img/new/slides/041.jpg"
            className="max-w-full h-auto"
            alt="..."
          />
        </div>

      </div>
    </>
  );
}
