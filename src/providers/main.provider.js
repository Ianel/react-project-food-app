import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const RecipeeContext = createContext();

export const MainProvider = ({ children }) => {
  const [recipee, setRecipee] = useState({});
  const [idRecipee, setIdRecipee] = useState("623f398348e3f81275520a12");

  return (
    <RecipeeContext.Provider
      value={{
        recipee,
        setRecipee,
        idRecipee,
        setIdRecipee,
      }}
    >
      {children}
    </RecipeeContext.Provider>
  );
};

MainProvider.defaultProps = {
  children: <div></div>,
};

MainProvider.propTypes = {
  children: PropTypes.node,
};
