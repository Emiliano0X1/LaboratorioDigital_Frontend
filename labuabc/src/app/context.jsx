"use client";

import React, { useState, useContext, createContext } from "react";

const typeExContextState = {
  pageDash: "",
  setPageDash: () => {},
  managePages: () => {}
};

const ComponentContext = createContext(typeExContextState);

const ComponentProvider = ({ children }) => {
  const [pageDash, setPageDash] = useState(" ");

  const managePages = (pageName) => {
    setPageDash(pageName);
  };

  return (
    <ComponentContext.Provider value={{ pageDash, setPageDash, managePages }}>
      {children}
    </ComponentContext.Provider>
  );
};

const usePages = () => useContext(ComponentContext);

export { ComponentProvider, usePages };
