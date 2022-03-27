import propTypes from "prop-types";
import React from "react";

export const RecipeeCard = ({ recipee }) => {
  const { image, label, price } = recipee;

  return (
    <div className="shadow-md m-8">
      <img className="mx-auto" src={image} alt={label} />
      <div className="flex flex-row justify-between items-center py-4 lg:py-12">
        <p className="lg:px-12 px-4 md:px-8 md:text-lg md:py-4 text-sm lg:text-xl font-bold">
          {label}
        </p>
        <p className="lg:px-12 px-4 md:px-8 md:text-lg md:py-4 text-sm lg:text-xl font-bold">
          Ar {price}
        </p>
      </div>
    </div>
  );
};

RecipeeCard.defaultProps = {
  recipiee: {},
};

RecipeeCard.propTypes = {
  recipiee: propTypes.object,
};

export const MenuCard = ({ text, clickHandler }) => {
  return (
    <button className="shadow-md px-5 py-3" onClick={clickHandler}>
      {text}
    </button>
  );
};

MenuCard.defaultProps = {
  text: "Crevettes frites",
  clickHandler: () => {},
};

MenuCard.propTypes = {
  text: propTypes.string,
  clickHandler: propTypes.func,
};
