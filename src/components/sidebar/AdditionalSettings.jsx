import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setBackgroundElement } from "../../stateManagement/actions/backgroundElement";
import { setSlideCounterAction } from "../../stateManagement/actions/slideCounterAction";
import logo from "../assets/images/logo.svg";
import placeholderImage from "../assets/images/placeholder.png";
import man from "../assets/images/man.jpg";
import {
  setBrandingComapny,
  setBrandingPersonal,
  setBrandingTypeAction,
} from "../../stateManagement/actions/brandingPersonal";
import SelectBox from "../SelectBox";
import { backgroundDesignoptions } from "../assets/js/selectBoxOptions";
import Input from "../Input";
import { useTranslation } from "react-i18next";
import axios from "axios";
const AdditionalSettings = () => {
  const [additionalSetting, setAdditionalSetting] = useState({
    backgroundDesign: true,
    backgroundDesignTheme: "",
    slidesCounter: true,
    carouselBranding: true,
    brandingType: "personal",
    onlyIntroOutroBranding: false,
    headshot: true,
    headshotImage: "",
    brandingNameSwitch: true,
    brandingName: "Fernando",
    brandingWebsiteOrHandleSwitch: true,
    brandingWebsiteOrHandle: "@Fer_MOMENTO",
    brandingWebsiteSwitch: false,
    brandingWebsite: "www.website.com",
  });
  const [slideCounterInfo, setslideCounterInfo] = useState({
    status: true,
    position: "top",
  });
  const [background, setbackground] = useState({
    element: "wave",
    status: true,
  });
  const [personalInfo, setpersonalInfo] = useState({
    name: "Bharat Patil",
    handle: "@bharat7423",
    isHandle: true,
    isName: true,
    isHeadShoot: true,
    headShoot: man,
    isBranding: true,
    introOutroOnly: true,
  });

  const [companyInfo, setcompanyInfo] = useState({
    isWebsite: true,
    website: "www.google.com",
    logo: logo,
    introOutroOnly: true,
  });

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleSlideCounter = () => {
    dispatch(setSlideCounterAction(slideCounterInfo));
  };
  const [images, setImages] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [image, setimage] = useState(placeholderImage);

  const fetchImages = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.pexels.com/v1/search?query=${searchTerm}`,
        {
          headers: {
            Authorization:
              "RBiLiPZ7ihVFrrt1QKIZV8khN5YST0yMO38PXAZikmCz93ecVEq37J9G",
          },
        }
      );
      setImages(response.data.photos);
      console.log(response.data.photos);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };
  const handleHeadShoot = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setpersonalInfo({ ...personalInfo, headShoot: fileReader.result });
    };
    fileReader.readAsDataURL(file);
  };
  const handleSearchImageHeadShoot = (src) => {
    setpersonalInfo({ ...personalInfo, headShoot: src });
  };
  const handleSearchImageCompanyLogo = (src) => {
    setcompanyInfo({ ...companyInfo, logo: src });
  };
  const handleLogo = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setcompanyInfo({ ...companyInfo, logo: fileReader.result });
    };
    fileReader.readAsDataURL(file);
  };

  useEffect(() => {
    handleSlideCounter();
  }, [slideCounterInfo]);

  useEffect(() => {
    dispatch(setBrandingPersonal(personalInfo));
  }, [personalInfo]);

  useEffect(() => {
    dispatch(setBrandingComapny(companyInfo));
  }, [companyInfo]);

  return (
    <div>
      <div className="form-check form-switch">
        <Input
          type="checkbox"
          role="switch"
          id="slidesCounter"
          className="form-check-input"
          name="slidesCounter"
          checked={slideCounterInfo.status}
          handleChange={() =>
            setslideCounterInfo({
              ...slideCounterInfo,
              status: !slideCounterInfo.status,
            })
          }
        />
        <label className="form-check-label" htmlFor="slidesCounter">
          {t("slide-counter")}
        </label>
      </div>

      <div className="form-check form-switch">
        <Input
          type="checkbox"
          role="switch"
          id="carouselBranding"
          className="form-check-input"
          name="carouselBranding"
          checked={personalInfo.isBranding}
          handleChange={() =>
            setpersonalInfo({
              ...personalInfo,
              isBranding: !personalInfo.isBranding,
            })
          }
        />
        <label className="form-check-label" htmlFor="carouselBranding">
          {t("branding")}
        </label>
      </div>

      {personalInfo.isBranding && (
        <>
          <div className="mt-2">
            <div className="btn-group w-100">
              <Input
                type="radio"
                id="personalBranding"
                className="btn-check"
                value="personal"
                name="brandingType"
                checked={additionalSetting.brandingType === "personal"}
                handleChange={(e) => {
                  setAdditionalSetting({
                    ...additionalSetting,
                    brandingType: e.target.value,
                  });
                  dispatch(setBrandingTypeAction("personal"));
                }}
              />
              <label
                className="btn btn__radio-check"
                htmlFor="personalBranding"
              >
                {t("personal")}
              </label>
              <Input
                type="radio"
                value="company"
                id="companyBranding"
                className="btn-check"
                name="brandingType"
                checked={additionalSetting.brandingType === "company"}
                handleChange={(e) => {
                  setAdditionalSetting({
                    ...additionalSetting,
                    brandingType: e.target.value,
                  });
                  dispatch(setBrandingTypeAction("company"));
                }}
              />
              <label className="btn btn__radio-check" htmlFor="companyBranding">
                {t("company")}
              </label>
            </div>
          </div>

          <div className="mt-2">
            {personalInfo?.isBranding &&
              additionalSetting?.brandingType === "company" && (
                <div>
                  <div className="form-check form-switch">
                    <Input
                      type="checkbox"
                      role="switch"
                      id="onlyIntroOutroBranding"
                      className="form-check-input"
                      name="onlyIntroOutroBranding"
                      checked={companyInfo.introOutroOnly}
                      handleChange={() =>
                        setcompanyInfo({
                          ...companyInfo,
                          introOutroOnly: !companyInfo.introOutroOnly,
                        })
                      }
                    />
                    <label
                      className="form-check-label"
                      htmlFor="onlyIntroOutroBranding"
                    >
                      {t("showintrooutro")}
                    </label>
                  </div>
                  <div className="configure-container">
                    <span className="fs-sm">{t("image")}</span>
                    <form onSubmit={fetchImages}>
                      <Row className="gy-3 gx-2">
                        <Col sm={12} md={6}>
                          <div className="form-group">
                            <Input
                              type="text"
                              name="fimageSearchValue"
                              id="fimageSearchValue"
                              className="fs-sm"
                              placeholder={t("search-image")}
                              value={searchTerm}
                              handleChange={(e) =>
                                setsearchTerm(e.target.value)
                              }
                            />
                          </div>
                        </Col>
                        <Col sm={12} md={6}>
                          <button
                            type="submit"
                            className="btn btn-secondary w-100"
                          >
                            {t("search")}
                          </button>
                        </Col>
                        {images?.length > 0 && (
                          <Col xs={12}>
                            <div className="searched__images-result">
                              {images && images.length > 0
                                ? images?.map((image, index) => {
                                    return (
                                      <img
                                        src={image.src.medium}
                                        onClick={() =>
                                          handleSearchImageCompanyLogo(
                                            image.src.original
                                          )
                                        }
                                        alt=""
                                        className="img-fluid"
                                      />
                                    );
                                  })
                                : ""}
                            </div>
                          </Col>
                        )}
                        <Col xs={12}>
                          <div className="image__upload--box">
                            <span>
                              <FeatherIcon icon="upload" size="14" />{" "}
                              {t("upload-logo")}
                            </span>
                            <Input
                              type="file"
                              id="headshotImage"
                              name="headshotImage"
                              accept="image/*"
                              handleChange={(e) => handleLogo(e)}
                            />
                          </div>
                        </Col>
                        <Col xs={12}></Col>
                      </Row>
                    </form>
                  </div>
                </div>
              )}

            {personalInfo?.isBranding &&
              additionalSetting?.brandingType === "personal" && (
                <div>
                  <div className="form-check form-switch">
                    <Input
                      type="checkbox"
                      role="switch"
                      id="onlyIntroOutroBranding"
                      className="form-check-input"
                      name="onlyIntroOutroBranding"
                      checked={personalInfo.introOutroOnly}
                      handleChange={() =>
                        setpersonalInfo({
                          ...personalInfo,
                          introOutroOnly: !personalInfo.introOutroOnly,
                        })
                      }
                    />
                    <label
                      className="form-check-label"
                      htmlFor="onlyIntroOutroBranding"
                    >
                      {t("showintrooutro")}
                    </label>
                  </div>
                  <div className="form-check form-switch">
                    <Input
                      type="checkbox"
                      role="switch"
                      id="headshot"
                      className="form-check-input"
                      name="headshot"
                      checked={personalInfo.isHeadShoot}
                      handleChange={() =>
                        setpersonalInfo({
                          ...personalInfo,
                          isHeadShoot: !personalInfo.isHeadShoot,
                        })
                      }
                    />
                    <label className="form-check-label" htmlFor="headshot">
                      {t("headshot")}
                    </label>
                  </div>
                  <div className="configure-container">
                    <span className="fs-sm">{t("image")}</span>
                    <form onSubmit={fetchImages}>
                      <Row className="gy-3 gx-2">
                        <Col sm={12} md={6}>
                          <div className="form-group">
                            <Input
                              type="text"
                              name="fimageSearchValue"
                              id="fimageSearchValue"
                              className="fs-sm"
                              placeholder={t("search-image")}
                              value={searchTerm}
                              handleChange={(e) =>
                                setsearchTerm(e.target.value)
                              }
                            />
                          </div>
                        </Col>
                        <Col sm={12} md={6}>
                          <button
                            type="submit"
                            className="btn btn-secondary w-100"
                          >
                            {t("search")}
                          </button>
                        </Col>
                        {images?.length > 0 && (
                          <Col xs={12}>
                            <div className="searched__images-result">
                              {images && images.length > 0
                                ? images?.map((image, index) => {
                                    return (
                                      <img
                                        src={image.src.medium}
                                        onClick={() =>
                                          handleSearchImageHeadShoot(
                                            image.src.original
                                          )
                                        }
                                        alt=""
                                        className="img-fluid"
                                      />
                                    );
                                  })
                                : ""}
                            </div>
                          </Col>
                        )}
                        <Col xs={12}>
                          <div className="image__upload--box">
                            <span>
                              <FeatherIcon icon="upload" size="14" />{" "}
                              {t("upload-head")}
                            </span>
                            <Input
                              type="file"
                              id="headshotImage"
                              name="headshotImage"
                              accept="image/*"
                              handleChange={(e) => handleHeadShoot(e)}
                            />
                          </div>
                        </Col>
                        <Col xs={12}></Col>
                      </Row>
                    </form>
                  </div>
                </div>
              )}

            {additionalSetting.brandingType === "personal" &&
              personalInfo?.isBranding && (
                <>
                  <Row className="g-2 mt-1">
                    <Col xs={6}>
                      <div className="form-check form-switch">
                        <Input
                          type="checkbox"
                          role="switch"
                          id="brandingNameSwitch"
                          className="form-check-input"
                          name="brandingNameSwitch"
                          checked={personalInfo.isName}
                          handleChange={() =>
                            setpersonalInfo({
                              ...personalInfo,
                              isName: !personalInfo.isName,
                            })
                          }
                        />
                        <label
                          className="form-check-label"
                          htmlFor="brandingNameSwitch"
                        >
                          {t("name")}
                        </label>
                      </div>
                      <div className="form-group">
                        <Input
                          type="text"
                          name="brandingName"
                          id="brandingName"
                          className="fs-sm"
                          value={personalInfo?.name}
                          handleChange={(e) =>
                            setpersonalInfo({
                              ...personalInfo,
                              name: e.target.value,
                            })
                          }
                        />
                      </div>
                    </Col>
                    <Col xs={6}>
                      <div className="form-check form-switch">
                        <Input
                          type="checkbox"
                          role="switch"
                          id="brandingWebsiteOrHandleSwitch"
                          className="form-check-input"
                          name="brandingWebsiteOrHandleSwitch"
                          checked={personalInfo.isHandle}
                          handleChange={() =>
                            setpersonalInfo({
                              ...personalInfo,
                              isHandle: !personalInfo.isHandle,
                            })
                          }
                        />
                        <label
                          className="form-check-label"
                          htmlFor="brandingWebsiteOrHandleSwitch"
                        >
                          {t("website")}
                        </label>
                      </div>
                      <div className="form-group">
                        <Input
                          type="text"
                          name="brandingWebsiteOrHandle"
                          id="brandingWebsiteOrHandle"
                          className="fs-sm"
                          value={personalInfo?.website}
                          handleChange={(e) =>
                            setpersonalInfo({
                              ...personalInfo,
                              handle: e.target.value,
                            })
                          }
                        />
                      </div>
                    </Col>
                  </Row>
                </>
              )}
            {additionalSetting.brandingType === "company" &&
              personalInfo?.isBranding && (
                <Row className="g-2 mt-1">
                  <Col xs={12}>
                    <div className="form-check form-switch">
                      <Input
                        type="checkbox"
                        role="switch"
                        id="brandingWebsiteSwitch"
                        className="form-check-input"
                        name="brandingWebsiteSwitch"
                        checked={companyInfo.isWebsite}
                        handleChange={() =>
                          setcompanyInfo({
                            ...companyInfo,
                            isWebsite: !companyInfo.isWebsite,
                          })
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor="brandingWebsiteSwitch"
                      >
                        {t("websiteonly")}
                      </label>
                    </div>
                    <div className="form-group">
                      <Input
                        type="text"
                        name="brandingWebsite"
                        id="brandingWebsite"
                        className="fs-sm"
                        value={companyInfo?.website}
                        handleChange={(e) =>
                          setcompanyInfo({
                            ...companyInfo,
                            website: e.target.value,
                          })
                        }
                      />
                    </div>
                  </Col>
                </Row>
              )}
          </div>
        </>
      )}
    </div>
  );
};

export default AdditionalSettings;
