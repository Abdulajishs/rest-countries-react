import React from "react";

const Borders = ({ borders, darkMode }) => {
  //   console.log(borders);
  return (
    <>
      {borders.length === 0 ? (
        <h1 className="text-2xl font-semibold mb-8 md:mb-0">
          Border Countries: N/A
        </h1>
      ) : (
        <section className="md:flex md:flex-row  md:items-center md:gap-5">
          <h1 className="text-2xl font-semibold mb-8 md:mb-0">
            Border Countries:
          </h1>
          <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
            {borders.map((border, index) => (
              <button
                className={`${
                  darkMode ? "bg-gray-900 text-white " : "bg-white  "
                } px-8 py-3 rounded-md shadow-md md:px-1 md:py-2 w-full text-center break-words`}
                key={index}
              >
                {border}
              </button>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Borders;
