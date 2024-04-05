import React, { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  {
    code: "en",
    code1: "EN",
    label: "English",
    img: "images/icons/flags/1.png",
  },
  {
    code: "fr",
    code1: "FR",
    label: "French",
    img: "images/icons/flags/5.png",
  },
  {
    code: "es",
    code1: "ES",
    label: "Spanish",
    img: "images/icons/flags/3.png",
  },
  {
    code: "de",
    code1: "DE",
    label: "German",
    img: "images/icons/flags/2.png",
  },
  {
    code: "it",
    code1: "IT",
    label: "Italian",
    img: "images/icons/flags/4.png",
  },
  {
    code: "cn",
    code1: "CN",
    label: "Chinese",
    img: "images/icons/flags/6.png",
  },
  {
    code: "jp",
    code1: "JP",
    label: "Japanese",
    img: "images/icons/flags/7.png",
  },
  {
    code: "kr",
    code1: "KR",
    label: "Korean",
    img: "images/icons/flags/8.png",
  },
  {
    code: "id",
    code1: "ID",
    label: "Indonesian",
    img: "images/icons/flags/9.png",
  },
  {
    code: "tr",
    code1: "TR",
    label: "Turkish",
    img: "images/icons/flags/10.png",
  },
  // Add more languages as needed
];

const TranslatorDropdown = () => {
  const [selected, setSelected] = useState(languages[0]); // Default to the first language
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (language) => {
    console.log(language)
    i18n.changeLanguage(language.code);
    setSelected(language);
  };
  useEffect(() => {
    changeLanguageHandler(selected);
  }, [selected]);

  return (
    <div className="translator__dropdown--wrapper">
      <div>
        <img src={selected.img} alt="" className="mr-2" /> {selected.code1}
      </div>
      <ul className="menu-sub menu-drop">
        {languages.map((language) => (
          <li
            className="menu-item"
            key={language.code}
            onClick={() => changeLanguageHandler(language)}
          >
            <img src={language.img} alt="" className="mr-2" />
            {language.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TranslatorDropdown;
