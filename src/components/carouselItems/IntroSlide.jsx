import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React, { useEffect, useRef, useState } from "react";
import emojiPalette from "../assets/json/EmojiPalette.json";
import { useSelector } from "react-redux";
import wowlywaves from "../assets/images/wave_white.png";
import template from "../assets/images/templates/template1.png";
import template2 from "../assets/images/templates/template2.png";
import template3 from "../assets/images/templates/template3.png";
import template4 from "../assets/images/templates/template4.png";
import template5 from "../assets/images/templates/template5.png";
import template6 from "../assets/images/templates/template6.png";
import template7 from "../assets/images/templates/template7.png";
import template8 from "../assets/images/templates/template8.png";
import template9 from "../assets/images/templates/template9.png";
import template10 from "../assets/images/templates/template10.png";
import { useTranslation } from "react-i18next";
import TextArea from "../TextArea";
import Button from "../Button";
import Input from "../Input";
import StyledSentence from "../RenderTitle";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
const IntroSlide = (props) => {
  const inputRef = useRef(null);
  const [paletteType, setPaletteType] = useState("smileys");
  const [introInputValues, setIntroInputValues] = useState({
    description: true,
    descriptionValue: "Then you will read this.",
    descriptionTextSize: "15px",
  });
  const { t } = useTranslation();
  const [title, settitle] = useState({
    status: true,
    value: "You will read <c>this</c> first",
    titleTextSize: "30px",
  });
  const [subTitle, setsubTitle] = useState({
    status: true,
    value: "And you will read this last",
  });
  const [emoji, setemoji] = useState({
    status: true,
    value: "😜",
  });
  const [swipeIndicator, setswipeIndicator] = useState({
    status: true,
    value: "",
  });
  const { brandingType } = useSelector((state) => state.branding);
  const { personalInfo } = useSelector((state) => state.brandingPersonal);
  const { companyInfo } = useSelector((state) => state.brandingCompany);
  const { colorPalate } = useSelector((state) => state.colorPalateReducers);
  const { alignment } = useSelector((state) => state.textAlign);
  const { fontFamily, fontFamily2 } = useSelector((state) => state.fonts);
  const { backgroundElement } = useSelector((state) => state.background);
  const { carouselfInfo } = useSelector((state) => state.carouselType);
  const [background, setbackground] = useState("");
  const handleItalicInsertion = () => {
    const inputElement = inputRef.current;
    const startPos = inputElement.selectionStart;
    const endPos = inputElement.selectionEnd;
    const selectedText = title.value.substring(startPos, endPos);
    const updatedText =
      title.value.substring(0, startPos) +
      `<i>${selectedText}</i>` +
      title.value.substring(endPos);
    console.log({ updatedText });
    settitle({ ...title, value: updatedText });
  };
  const increaseTitleTextSize = () => {
    // Increase the text size by a certain value, e.g., 2 pixels
    const newSize = parseInt(title.titleTextSize) + 2;
    settitle({
      ...title,
      titleTextSize: `${newSize}px`,
    });
  };
  const increaseDiscriptionTextSize = () => {
    // Increase the text size by a certain value, e.g., 2 pixels
    const newSize = parseInt(introInputValues.descriptionTextSize) + 2;
    setIntroInputValues({
      ...introInputValues,
      descriptionTextSize: `${newSize}px`,
    });
  };
  const decreaseDiscriptionTextSize = () => {
    // Increase the text size by a certain value, e.g., 2 pixels
    const newSize = parseInt(introInputValues.descriptionTextSize) - 2;
    setIntroInputValues({
      ...introInputValues,
      descriptionTextSize: `${newSize}px`,
    });
  };
  const decreaseTextSize = () => {
    // Decrease the text size by a certain value, e.g., 2 pixels
    const newSize = parseInt(title.titleTextSize) - 2;
    settitle({
      ...title,
      titleTextSize: `${newSize}px`,
    });
  };
  const [selectedMasterButton, setSelectedMasterButton] = useState("smileys");

  const handlePaletteTypeChange = (type) => {
    setPaletteType(type);
    setSelectedMasterButton(type);
  };

  const handleColorInsertion = () => {
    const inputElement = inputRef.current;
    const startPos = inputElement.selectionStart;
    const endPos = inputElement.selectionEnd;
    const newText = "<c></c>";

    const updatedText =
      title.value.substring(0, startPos) +
      newText +
      title.value.substring(endPos);
    settitle({ ...title, value: updatedText });
  };

  const backgroundImages = {
    lines: template6,
    bauhaus: template5,
    blobs: template,
    rombos: template2,
    radar: template7,
    topo: template10,
    dots: template9,
    wave: wowlywaves,
    arrows: template4,
    noise: template3,
    dots: template8,
  };

  const setBackground = () => {
    setbackground(backgroundImages[backgroundElement.element] || template);
  };

  useEffect(() => {
    setBackground();
  }, [backgroundElement]);

  useEffect(() => {
    settitle({ ...title, value: t("intro-title") });
    setsubTitle({ ...subTitle, value: t("intro-subtitle") });
    setIntroInputValues({
      ...introInputValues,
      descriptionValue: t("intro-desc"),
    });
  }, [t]);
  return (
    <div className="slide-wrapper">
      <div
        className={`slide_container intro-slide ${
          alignment === "center"
            ? "text-center"
            : alignment === "right"
            ? "text-end"
            : "text-start"
        } ${
          carouselfInfo.type === "igStories" || carouselfInfo.type === "tikTok"
            ? "slide_container--lg"
            : ""
        }`}
        style={{
          backgroundColor: colorPalate?.first,
        }}
      >
        <div
          className="design_element"
          style={{
            backgroundImage: backgroundElement?.status
              ? `url(${background})`
              : "",
          }}
        ></div>
        {brandingType === "company" && (
          <div className="company__details-wrapper">
            <div className="logo">
              <img src={companyInfo?.logo} alt="logo" className="img-fluid" />
            </div>
            {companyInfo?.isWebsite && (
              <div className="website__name" style={{ color: "#fff" }}>
                {companyInfo?.website}
              </div>
            )}
          </div>
        )}
        <div
          className={`slide-content intro-content text-white ${
            alignment === "center"
              ? "align-items-center"
              : alignment === "right"
              ? "align-items-end"
              : "align-items-start"
          }`}
        >
          {subTitle?.status && (
            <div
              className="subtitle"
              style={{
                color: colorPalate.third,
                fontFamily: fontFamily2,
              }}
            >
              {subTitle?.value}
            </div>
          )}
          {title?.status && (
            <div
              className="title"
              style={{
                color: colorPalate.third,
                fontSize: title.titleTextSize,
                fontFamily: fontFamily,
              }}
            >
              <StyledSentence
                color={colorPalate.second}
                sentence={title.value}
              />
            </div>
          )}
          {introInputValues?.description && (
            <div
              className="text"
              style={{
                color: colorPalate.third,
                fontSize: introInputValues.descriptionTextSize,
                fontFamily: fontFamily2,
              }}
            >
              {introInputValues?.descriptionValue}
            </div>
          )}
          {emoji?.status && <div className="emoji_text">{emoji?.value}</div>}
        </div>
        {brandingType === "personal" && (
          <div className="contentSlide__bottom-data d-flex align-items-center justify-content-between gap-2">
            <div className="branding_data d-flex align-items-center gap-2">
              {personalInfo?.isHeadShoot && (
                <img
                  src={personalInfo?.headShoot}
                  alt="branding"
                  className="rounded-circle"
                />
              )}
              <div>
                {personalInfo?.isName && (
                  <h6
                    className="m-0"
                    style={{ color: colorPalate.third, fontFamily: fontFamily }}
                  >
                    {personalInfo?.name}
                  </h6>
                )}
                {personalInfo?.isHandle && (
                  <p
                    className="m-0 fs-xs"
                    style={{
                      color: colorPalate.third,
                      fontFamily: fontFamily2,
                    }}
                  >
                    {personalInfo?.handle}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
        {swipeIndicator?.status && (
          <div
            className="swipeIndicator"
            style={{
              backgroundColor: colorPalate.second,
              color: colorPalate.first,
            }}
          >
            {swipeIndicator?.value && swipeIndicator?.value}{" "}
            <FeatherIcon icon="chevron-right" size={24} />
          </div>
        )}
      </div>

      <div className="slide_individual_settings">
        <div className="top__buttons-wrapper d-flex ">
          <Button
            type="button"
            className="btn btn-secondary w-100"
            onClick={props.delete}
            name={
              <>
                <FeatherIcon icon="trash-2" size={14} /> {t("delete")}
              </>
            }
          />
        </div>
        <div className="configure-title">{t("intro-slide-setting")}</div>
        <div className="configure-container">
          <div className="form-check form-switch">
            <Input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="subtitle"
              name="subtitle"
              checked={subTitle.status}
              handleChange={() =>
                setsubTitle({
                  ...subTitle,
                  status: !subTitle.status,
                })
              }
            />
            <label className="form-check-label" htmlFor="subtitle">
              {t("subtitle")}
            </label>
          </div>
          <div className="form-group">
            <Input
              type="text"
              name="subTitleValue"
              id="subTitleValue"
              className="fs-sm"
              value={subTitle.value}
              handleChange={(e) =>
                setsubTitle({
                  ...subTitle,
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="configure-container">
          <div className="form-check form-switch">
            <Input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="title"
              name="title"
              checked={title.status}
              handleChange={() =>
                settitle({
                  ...title,
                  status: !title.status,
                })
              }
            />
            <label className="form-check-label" htmlFor="title">
              {t("title")}
            </label>
          </div>
          <div className="form-group">
            <div className="mxboxarea">
              <div className="setting__box  hasButtons">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="italic-text">Add italic text</Tooltip>}
                >
                  <button
                    type="button"
                    className="btn"
                    onClick={() => handleItalicInsertion("red")}
                  >
                    <FeatherIcon icon="code" size={16} strokeWidth={3} />
                  </button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id="italic-text">Add highlighted text</Tooltip>
                  }
                >
                  <button
                    type="button"
                    className="btn"
                    onClick={handleColorInsertion}
                  >
                    <FeatherIcon icon="droplet" size={16} strokeWidth={3} />
                  </button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id="italic-text">Increase font size</Tooltip>
                  }
                >
                  <button
                    type="button"
                    className="btn"
                    onClick={increaseTitleTextSize}
                  >
                    <FeatherIcon icon="plus" size={16} strokeWidth={3} />
                  </button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id="italic-text">Decrease font size</Tooltip>
                  }
                >
                  <button
                    type="button"
                    className="btn"
                    onClick={decreaseTextSize}
                  >
                    <FeatherIcon icon="minus" size={16} strokeWidth={3} />
                  </button>
                </OverlayTrigger>
              </div>
              <TextArea
                className="fs-sm"
                value={title.value}
                placeholder="Enter Title"
                name="titleValue"
                id="titleValue"
                inputRef={inputRef}
                handleChange={(e) => {
                  settitle({ ...title, value: e.target.value });
                }}
              />
            </div>
          </div>
        </div>

        <div className="configure-container">
          <div className="form-check form-switch">
            <Input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="description"
              name="description"
              checked={introInputValues.description}
              handleChange={() =>
                setIntroInputValues({
                  ...introInputValues,
                  description: !introInputValues.description,
                })
              }
            />
            <label className="form-check-label" htmlFor="title">
              {t("description")}
            </label>
          </div>
          <div className="form-group">
            <div className="mxboxarea">
              <div className="setting__box  hasButtons">
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id="italic-text">Increase font size</Tooltip>
                  }
                >
                  <button
                    type="button"
                    className="btn"
                    onClick={increaseDiscriptionTextSize}
                  >
                    <FeatherIcon icon="plus" size={16} strokeWidth={3} />
                  </button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id="italic-text">Decrease font size</Tooltip>
                  }
                >
                  <button
                    type="button"
                    className="btn"
                    onClick={decreaseDiscriptionTextSize}
                  >
                    <FeatherIcon icon="minus" size={16} strokeWidth={3} />
                  </button>
                </OverlayTrigger>
              </div>
              <TextArea
                className="fs-sm"
                value={introInputValues.descriptionValue}
                placeholder="Enter Description"
                name="descriptionValue"
                id="descriptionValue"
                handleChange={(e) =>
                  setIntroInputValues({
                    ...introInputValues,
                    descriptionValue: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>

        <div className="configure-container">
          <div className="form-check form-switch">
            <Input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="emoji"
              name="emoji"
              checked={emoji.status}
              handleChange={() =>
                setemoji({
                  ...emoji,
                  status: !emoji.status,
                })
              }
            />
            <label className="form-check-label" htmlFor="title">
              {t("emoji")}
            </label>
          </div>
          <div className="form-group">
            <div className="mxboxarea">
              <div className="setting__box  hasButtons">
                <button
                  type="button"
                  className={`btn ${
                    selectedMasterButton === "smileys" ? "highlighted" : ""
                  }`}
                  onClick={() => handlePaletteTypeChange("smileys")}
                >
                  😄
                </button>
                <button
                  type="button"
                  className={`btn ${
                    selectedMasterButton === "animals" ? "highlighted" : ""
                  }`}
                  onClick={() => handlePaletteTypeChange("animals")}
                >
                  🐶
                </button>
                <button
                  type="button"
                  className={`btn ${
                    selectedMasterButton === "food" ? "highlighted" : ""
                  }`}
                  onClick={() => handlePaletteTypeChange("food")}
                >
                  🍕
                </button>
                <button
                  type="button"
                  className={`btn ${
                    selectedMasterButton === "clocks" ? "highlighted" : ""
                  }`}
                  onClick={() => handlePaletteTypeChange("clocks")}
                >
                  🕑
                </button>
                <button
                  type="button"
                  className={`btn ${
                    selectedMasterButton === "vehicles" ? "highlighted" : ""
                  }`}
                  onClick={() => handlePaletteTypeChange("vehicles")}
                >
                  🚗
                </button>
              </div>
              <div className="emojis__wrapper--box">
                {paletteType === "smileys" && (
                  <>
                    {emojiPalette.map((palettes) => (
                      <ul key={palettes}>
                        {palettes.smileys.map((em) => (
                          <li
                            onClick={() => setemoji({ ...emoji, value: em })}
                            key={em}
                            style={{
                              backgroundColor:
                                emoji.value === em ? "#AED6F1" : "transparent",
                            }}
                          >
                            {em}
                          </li>
                        ))}
                      </ul>
                    ))}
                  </>
                )}

                {paletteType === "animals" && (
                  <>
                    {emojiPalette.map((palettes) => (
                      <ul key={palettes}>
                        {palettes.animals.map((em) => (
                          <li
                            onClick={() => setemoji({ ...emoji, value: em })}
                            key={em}
                            style={{
                              backgroundColor:
                                emoji.value === em ? "#AED6F1" : "transparent",
                            }}
                          >
                            {em}
                          </li>
                        ))}
                      </ul>
                    ))}
                  </>
                )}
                {paletteType === "food" && (
                  <>
                    {emojiPalette.map((palettes) => (
                      <ul key={palettes}>
                        {palettes.food.map((em) => (
                          <li
                            onClick={() => setemoji({ ...emoji, value: em })}
                            key={em}
                            style={{
                              backgroundColor:
                                emoji.value === em ? "#AED6F1" : "transparent",
                            }}
                          >
                            {em}
                          </li>
                        ))}
                      </ul>
                    ))}
                  </>
                )}
                {paletteType === "clocks" && (
                  <>
                    {emojiPalette.map((palettes) => (
                      <ul key={palettes}>
                        {palettes.clocks.map((em) => (
                          <li
                            onClick={() => setemoji({ ...emoji, value: em })}
                            key={em}
                            style={{
                              backgroundColor:
                                emoji.value === em ? "#AED6F1" : "transparent",
                            }}
                          >
                            {em}
                          </li>
                        ))}
                      </ul>
                    ))}
                  </>
                )}
                {paletteType === "vehicles" && (
                  <>
                    {emojiPalette.map((palettes) => (
                      <ul key={palettes}>
                        {palettes.vehicles.map((em) => (
                          <li
                            onClick={() => setemoji({ ...emoji, value: em })}
                            key={em}
                            style={{
                              backgroundColor:
                                emoji.value === em ? "#AED6F1" : "transparent",
                            }}
                          >
                            {em}
                          </li>
                        ))}
                      </ul>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="configure-container">
          <div className="form-check form-switch">
            <Input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="swipeIndicator"
              name="swipeIndicator"
              checked={swipeIndicator.status}
              handleChange={() =>
                setswipeIndicator({
                  ...swipeIndicator,
                  status: !swipeIndicator.status,
                })
              }
            />
            <label className="form-check-label" htmlFor="swipeIndicator">
              {t("swipe-indicator")}
            </label>
          </div>
          <div className="form-group">
            <Input
              type="text"
              name="swipeIndicatorValue"
              id="swipeIndicatorValue"
              className="fs-sm"
              placeholder={t("swipe-indicate-place")}
              value={swipeIndicator.value}
              handleChange={(e) =>
                setswipeIndicator({
                  ...swipeIndicator,
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSlide;
