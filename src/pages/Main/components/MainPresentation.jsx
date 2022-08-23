import React from "react";

function MainPresentation() {
  return (
    <>
		<div className="flex flex-col justify-center mb-8">
      <div className="flex justify-center">
          <img src="./src/assets/img/logo/ORTHO_LOGO_high-01.png" className="max-w-full h-auto" alt="..." />
      </div>
      <div className="relative overflow-hidden bg-no-repeat bg-cover"
			style={{backgroundPosition: '50', backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/new/slides/146.webp)', height: '350px'}}>
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{ backgroundColor: 'rgb(0,0,0,0.75)' }}>
          <div className="flex justify-center items-center h-full">
            <div className="text-center text-white px-6 md:px-12">
              <h1 className="text-5xl font-bold mt-0 mb-6">
                Lorem ipsum dolor sit amet.
              </h1>
              <h3 className="text-3xl font-bold mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                magnam?
              </h3>
            </div>
          </div>
        </div>
      </div>

		</div>
    </>
  );
}

export default MainPresentation;
