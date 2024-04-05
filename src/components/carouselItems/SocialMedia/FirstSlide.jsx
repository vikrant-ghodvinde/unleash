import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React, { useEffect, useRef, useState } from "react";
import Input from "../../Input";
import { useSelector } from "react-redux";
import wowlywaves from "../../assets/images/wave_white.png";
import template from "../../assets/images/templates/template1.png";
import template2 from "../../assets/images/templates/template2.png";
import template3 from "../../assets/images/templates/template3.png";
import template4 from "../../assets/images/templates/template4.png";
import template5 from "../../assets/images/templates/template5.png";
import template6 from "../../assets/images/templates/template6.png";
import template7 from "../../assets/images/templates/template7.png";
import template8 from "../../assets/images/templates/template8.png";
import template9 from "../../assets/images/templates/template9.png";
import template10 from "../../assets/images/templates/template10.png";
import template11 from "../../assets/images/templates/template11.png";

import socialIcons from "../../assets/images/icons/linkedin.png";
import { useTranslation } from "react-i18next";
import templatesArray from "../../assets/images/templates/template.json";
import TextArea from "../../TextArea";
import StyledSentence from "../../RenderTitle";
import { useMyContext } from "../../../context/context";
import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
const FirstSlide = (props) => {
  const {
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
    selectedSocials,
    setSelectedSocials,
    isVerified,
    setisVerified,
  } = useMyContext();

  const inputRef = useRef(null);
  const { t } = useTranslation();

  const [socialIcon, setsocialIcon] = useState(socialIcons);
  const [file, setfile] = useState(null);

  const [isProfile, setisProfile] = useState(true);
  const [isSocialIcon, setisSocialIcon] = useState(true);

  // const [currentDate, setCurrentDate] = useState(new Date());
  const [replaies, setreplaies] = useState("1500");
  const [share, setshare] = useState("1300");
  const [like, setlike] = useState("13323");
  const [postCountStatus, setpostCountStatus] = useState(true);

  const templates = templatesArray[0];

  const { backgroundElement } = useSelector((state) => state.background);
  const { colorPalate } = useSelector((state) => state.colorPalateReducers);
  const { textSize } = useSelector((state) => state.text);
  const { alignment } = useSelector((state) => state.textAlign);
  const { fontFamily } = useSelector((state) => state.fonts);
  const { carouselfInfo } = useSelector((state) => state.carouselType);

  const handleFile = (e) => {
    const file = e.target.files[0];
    setfile(file);
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setimage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  const handleSocialMedia = (e) => {
    const socialMedia = e.target.value;
    if (selectedSocials.includes(socialMedia)) {
      setSelectedSocials((prevSelected) =>
        prevSelected.filter((item) => item !== socialMedia)
      );
    } else {
      setSelectedSocials((prevSelected) => [...prevSelected, socialMedia]);
    }
  };

  // const formattedDate = () => {
  //   const hours = currentDate.getHours();
  //   const minutes = currentDate.getMinutes();
  //   const day = currentDate.getDate();
  //   const monthIndex = currentDate.getMonth();
  //   const year = currentDate.getFullYear();
  //   const ampm = hours >= 12 ? "PM" : "AM";
  //   const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  //   const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  //   const months = [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ];
  //   const month = months[monthIndex];
  //   return `${formattedHours}.${formattedMinutes} ${ampm} - ${day} ${month}, ${year}`;
  // };

  const formatNumber = (n) => {
    if (n >= 1e6) {
      return (n / 1e6).toFixed(1) + "M";
    } else if (n >= 1e3) {
      return (n / 1e3).toFixed(1) + "k";
    } else {
      return n.toString();
    }
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
    round: template11,
  };

  const setBackground = () => {
    console.log({ backgroundImages });
    setbackground(backgroundImages[backgroundElement.element] || template);
  };

  useEffect(() => {
    setBackground();
  }, [backgroundElement]);

  const handleItalicInsertion = () => {
    const inputElement = inputRef.current;
    const startPos = inputElement.selectionStart;
    const endPos = inputElement.selectionEnd;
    const selectedText = content.value.substring(startPos, endPos);
    const updatedText =
      content.value.substring(0, startPos) +
      `<i>${selectedText}</i>` +
      content.value.substring(endPos);

    setcontent({ ...content, value: updatedText });
  };

  const handleColorInsertion = () => {
    const inputElement = inputRef.current;
    const startPos = inputElement.selectionStart;
    const endPos = inputElement.selectionEnd;
    const selectedText = content.value.substring(startPos, endPos);
    const newText = `<c>${selectedText}</c>`;

    const updatedText =
      content.value.substring(0, startPos) +
      newText +
      content.value.substring(endPos);

    // Update the state with a new object
    setcontent({ ...content, value: updatedText });
  };

  const handleBoldInsertion = () => {
    const inputElement = inputRef.current;
    const startPos = inputElement.selectionStart;
    const endPos = inputElement.selectionEnd;
    const selectedText = content.value.substring(startPos, endPos);
    const updatedText =
      content.value.substring(0, startPos) +
      `<b>${selectedText}</b>` +
      content.value.substring(endPos);

    // Update the state with a new object
    setcontent({ ...content, value: updatedText });
  };
  useEffect(() => {
    if (content === "") {
      setcontent({ ...content, value: t("first-slide-content") });
    }
  }, [t]);

  // Variable for setting maxlength in description textarea
  const maxLength =
    textSize === "small"
      ? 140
      : textSize === "medium"
      ? 120
      : textSize === "big"
      ? 100
      : 80;

  return (
    <div className="slide-wrapper">
      <div
        className={`slide_container content-slide ${
          alignment === "center" ? "text-center" : "text-start"
        } ${
          carouselfInfo.type === "igStories" || carouselfInfo.type === "tikTok"
            ? "slide_container--lg"
            : ""
        }`}
        style={{
          backgroundColor: colorPalate.first,
        }}
        id="download"
      >
        <div
          className="design_element"
          style={{
            backgroundImage: backgroundElement?.status
              ? `url(${background})`
              : "",
            backgroundColor: colorPalate.first, // The First Color
          }}
        ></div>
        <div className="slide-content">
          <div className="twitter__post--container first__Slide--item">
            <div className="post__container--header">
              <div className="userDetails__box">
                {isProfile && (
                  <div className="userIcon">
                    <img
                      src={image ? image : "/assets/images/erience_logo.png"}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                )}
                <div className="userText">
                  {name.status && (
                    <div className="name" style={{ fontFamily: fontFamily }}>
                      {name.value}
                      {isVerified && (
                        <img
                          src={require("../../assets/icons/download.png")}
                          className="ms-1"
                          style={{ height: "20px", width: "20px" }}
                          alt="bluetick"
                        ></img>
                      )}
                    </div>
                  )}
                  {userName.status && (
                    <div
                      className="userName fs-sm"
                      style={{ fontFamily: fontFamily }}
                    >
                      {userName.value}
                    </div>
                  )}
                </div>
              </div>
              <div className="content_socialIcons-wrap">
                {selectedSocials?.map((social) => (
                  <div className="social__icon" key={social}>
                    <img
                      src={require(`../../assets/images/icons/${social}.png`)}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="post__container--body">
              {content.status && (
                <p
                  style={{
                    fontFamily: fontFamily,
                    textAlign: alignment,
                    whiteSpace: "pre-wrap",
                    color: colorPalate.second,
                  }}
                  className={`title m-0 description-font-${textSize}`}
                >
                  {/* {content.value} */}
                  <StyledSentence
                    sentence={content.value}
                    color={colorPalate.third}
                  />
                  {content.value.length > maxLength && (
                    <span className="text-danger">
                      Description is too long. Maximum allowed length is
                      {maxLength} characters.
                    </span>
                  )}
                </p>
              )}

              {postCountStatus && (
                <div>
                  {/* <p
                    className="fs-xs m-0"
                    style={{ fontFamily: fontFamily }}
                  >
                    {formattedDate()}
                  </p> */}
                  <div className="d-flex align-items-center gap-3">
                    <div className="fs-sm d-flex align-items-center gap-1">
                      <strong>{formatNumber(replaies)}</strong>{" "}
                      <FeatherIcon
                        icon="message-circle"
                        width={14}
                        height={14}
                      />
                    </div>
                    <div className="fs-sm d-flex align-items-center gap-1">
                      <strong>{formatNumber(share)}</strong>{" "}
                      <FeatherIcon icon="send" width={14} height={14} />
                    </div>
                    <div className="fs-sm d-flex align-items-center gap-1">
                      <strong>{formatNumber(like)}</strong>{" "}
                      <FeatherIcon icon="heart" width={14} height={14} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* <span style={{ color: 'white', fontSize: '12px',marginLeft: "305px",marginTop: "28px" }}></span> */}
        <div className="watermark__box">
          <div className="waterMarkBox">
            Created using Unleash
            <img
              src="/assets/images/logo-white.svg"
              alt="logo"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className={"slide_individual_settings"}>
        {/* <div className="configure-title">{t("linkedin-slide-setting")}</div> */}
        <div className="configure-container">
          <div className="form-check form-switch">
            <Input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="description"
              name="description"
              checked={isProfile}
              handleChange={() => setisProfile((pre) => !pre)}
            />
            <label className="form-check-label" htmlFor="description">
              {t("user-image")}
            </label>
          </div>
          <div className="image__upload--box">
            <span>
              <FeatherIcon icon="upload" size={14} /> {t("upload-image")}
            </span>
            <Input
              type="file"
              id="uploadedImageValue"
              name="uploadedImageValue"
              accept="image/*"
              handleChange={handleFile}
            />
          </div>
        </div>
        <div className="configure-container">
          <div className="btn-group w-100 mt-3">
            {["twitter", "linkedin", "instagram", "facebook"].map((type) => (
              <React.Fragment key={type}>
                <Input
                  type="checkbox"
                  name="carouselType"
                  id={type}
                  className="btn-check"
                  value={type}
                  checked={selectedSocials.includes(type)}
                  handleChange={handleSocialMedia}
                />
                <label className="btn btn__radio-check" htmlFor={type}>
                  {t(type)}
                </label>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <div className="configure-container">
              {/* <div className="form-check form-switch">
                <Input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="twitter-name"
                  name="twitter-name"
                  checked={name.status}
                  handleChange={() =>
                    setname({ ...name, status: !name.status })
                  }
                />

                <label className="form-check-label" htmlFor="twitter-name">
                  {t("name")}
                </label>
              </div> */}
              <label className="form-check-label" htmlFor="twitter-name">
                {t("name")}
              </label>
              <div className="form-group">
                <Input
                  type="text"
                  name="user-name"
                  id="user-name"
                  className="fs-sm"
                  placeholder="Enter Name"
                  value={name.value}
                  handleChange={(e) =>
                    setname({ ...name, value: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12">
            <div className="configure-container">
              {/* <div className="form-check form-switch">
                <Input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="user_name"
                  name="user_name"
                  checked={userName.status}
                  handleChange={() =>
                    setuserName({ ...userName, status: !userName.status })
                  }
                />
              </div> */}
              <label
                className="form-check-label d-flex align-items-center gap-2"
                htmlFor="user_name"
              >
                {t("user-name")}
                <div className="form-check form-switch mb-0">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="description"
                    name="description"
                    checked={isVerified}
                    handleChange={() => setisVerified((pre) => !pre)}
                  />
                  <label className="form-check-label" htmlFor="description">
                    {t("Verified")}
                  </label>
                </div>
              </label>
              <div className="form-group">
                <Input
                  type="text"
                  name="twitter_user_name"
                  id="twitter_user_name"
                  className="fs-sm"
                  placeholder="Enter Username"
                  value={userName.value}
                  handleChange={(e) =>
                    setuserName({ ...userName, value: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="configure-container">
          {/* <div className="form-check form-switch">
              <Input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="post-content"
                name="post-content"
                checked={content.status}
                handleChange={(e) =>
                  setcontent({ ...content, status: !content.status })
                }
              />
              <label className="form-check-label" htmlFor="post-content">
                {t("post-text")}
              </label>
            </div> */}

          <div className="form-group">
            <div className="mxboxarea">
              <div className="setting__box  hasButtons">
                <OverlayTrigger
                  placement="top"
                  message="Tooltip"
                  delay={{ show: 250, hide: 400 }}
                  overlay={<Tooltip id="tooltip-color">Insert Italic</Tooltip>}
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
                  message="Tooltip"
                  delay={{ show: 250, hide: 400 }}
                  overlay={<Tooltip id="tooltip-italic">Insert color</Tooltip>}
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
                  message="Tooltip"
                  delay={{ show: 250, hide: 400 }}
                  overlay={<Tooltip id="tooltip-color">Insert Bold</Tooltip>}
                >
                  <button
                    type="button"
                    className="btn"
                    onClick={() => handleBoldInsertion()}
                  >
                    <FeatherIcon icon="bold" size={16} strokeWidth={3} />
                  </button>
                </OverlayTrigger>
              </div>
              <TextArea
                className="fs-sm"
                value={content.value}
                placeholder="Enter your content here"
                name="titleValue"
                id="titleValue"
                inputRef={inputRef}
                handleChange={(e) =>
                  setcontent({ ...content, value: e.target.value })
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
              id="postCounts"
              name="postCounts"
              checked={postCountStatus}
              handleChange={() => setpostCountStatus((pre) => !pre)}
            />
            <label className="form-check-label" htmlFor="postCounts">
              {t("post-count")}
            </label>
          </div>
          <Row>
            <Col md={4}>
              <div className="form-group">
                <Input
                  type="number"
                  name="replies"
                  id="replies"
                  className="fs-sm"
                  placeholder="Replies"
                  value={replaies}
                  handleChange={(e) => setreplaies(e.target.value)}
                />
              </div>
            </Col>
            <Col md={4}>
              <div className="form-group">
                <Input
                  type="number"
                  name="shares"
                  id="shares"
                  className="fs-sm"
                  placeholder="Shares"
                  value={share}
                  handleChange={(e) => setshare(e.target.value)}
                />
              </div>
            </Col>
            <Col md={4}>
              <div className="form-group">
                <Input
                  type="number"
                  name="likes"
                  id="likes"
                  className="fs-sm"
                  placeholder="Likes"
                  value={like}
                  handleChange={(e) => setlike(e.target.value)}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default FirstSlide;
