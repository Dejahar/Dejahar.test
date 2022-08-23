import React from "react";

export function About() {
  return (
    <>
      <div className="flex justify-center">
        <img
          src="./src/assets/img/logo/ORTHO_LOGO_high-01.png"
          className="max-w-full h-auto"
          alt="..."
        />
      </div>

      <div className="flex-col p-4 sm:flex-col md:flex-row lg:flex">
        <figure className="flex-auto bg-slate-100 rounded-xl p-8 m-4 dark:bg-yellow-500">
          <img
            className="w-48 h-48 rounded-full mx-auto"
            src="https://mdbootstrap.com/img/new/slides/041.jpg"
            alt=""
            width="384"
            height="512"
          />
          <div className="pt-6 text-center space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale on
                large teams. It’s easy to customize, adapts to any design, and
                the build size is tiny.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
              <div className="text-slate-700 dark:text-slate-500">
                Staff Engineer, Algolia
              </div>
            </figcaption>
          </div>
        </figure>

        <figure className="flex-auto bg-slate-100 rounded-xl p-8 m-4 dark:bg-yellow-500">
          <img
            className="w-48 h-48 rounded-full mx-auto"
            src="https://mdbootstrap.com/img/new/slides/041.jpg"
            alt=""
            width="384"
            height="512"
          />
          <div className="pt-6 text-center space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale on
                large teams. It’s easy to customize, adapts to any design, and
                the build size is tiny.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
              <div className="text-slate-700 dark:text-slate-500">
                Staff Engineer, Algolia
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </>
  );
}
