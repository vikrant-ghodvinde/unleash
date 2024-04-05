import React, { createContext, useContext, useReducer, useState } from "react";
import placeholderImage from "../../src/components/assets/images/erience_logo.png";

const Context = createContext();

const initialState = {
  // Define your initial state here
  someValue: "",
  anotherValue: [],
};

const ContextProvider = ({ children }) => {
  const [image, setimage] = useState(placeholderImage);
  const [selectedSocials, setSelectedSocials] = useState(["linkedin"]);
  const [background, setbackground] = useState("");
  const [carouselType, setcarouselType] = useState("linkedin");
  const [isVerified, setisVerified] = useState(true);
  const [downLoad,setDownload]=useState(false)

  const [name, setname] = useState({
    value: "Erience Solutions",
    status: true,
  });
  const [userName, setuserName] = useState({
    value: "@erienceINT",
    status: true,
  });
  const [content, setcontent] = useState({
    value: `Turn your clicks into customers and your ideas into online empires 👑 Don't just be digitally present; be digitally unforgettable 😎.`,
    status: true,
  });

  return (
    <Context.Provider
      value={{
        name,
        setname,
        userName,
        setuserName,
        content,
        setcontent,
        image,
        setimage,
        background,
        setbackground,
        carouselType,
        setcarouselType,
        selectedSocials,
        setSelectedSocials,
        isVerified,
        setisVerified,
        downLoad,
        setDownload,

      }}
    >
      {children}
    </Context.Provider>
  );
};

const useMyContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useContext must be used within a ContextProvider");
  }
  return context;
};

export { ContextProvider, useMyContext };
