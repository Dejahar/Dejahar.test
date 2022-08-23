import React from "react";
import { Link } from "react-router-dom";

function MainCards() {
  return (
    <>
      <div className="flex-col justify-center gap-8 sm:flex-col md:flex-row lg:flex">
        <div className="flex justify-center md:flex-row md:max-w-xl">
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <Link className="navbar-brand" to="/">
              <img
                className="rounded-t-lg md:rounded-none md:rounded-l-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </Link>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Card title
              </h5>
              <p className="text-gray-700 text-base mb-4">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="button"
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Button
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:flex-row md:max-w-xl">
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <Link className="navbar-brand" to="/">
              <img
                className="rounded-t-lg md:rounded-none md:rounded-l-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </Link>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Card title
              </h5>
              <p className="text-gray-700 text-base mb-4">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="button"
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Button
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:flex-row md:max-w-xl">
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <Link className="navbar-brand" to="/">
              <img
                className="rounded-t-lg md:rounded-none md:rounded-l-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </Link>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Card title
              </h5>
              <p className="text-gray-700 text-base mb-4">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="button"
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainCards;
