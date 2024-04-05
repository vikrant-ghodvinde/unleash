import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { useDispatch, useSelector } from "react-redux";
import { downloadToggleAction } from "../../stateManagement/actions/downloadfileAction";
import { setSlideTypeAction } from "../../stateManagement/actions/carouselType";

import {
  logOutAction,
  setUserAction,
} from "../../stateManagement/actions/userAction";
import { auth } from "../googleSignin/config";
import { signOut } from "firebase/auth";
import { useTranslation } from "react-i18next";
import LoadingBar from "react-top-loading-bar";
import TranslatorDropdown from "../TranslatorDropdown";
import { useEffect } from "react";
import Input from "../Input";
import LoginModal from "../Auth/LoginModal";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMyContext } from "../../context/context";
const Header = ({ sidebarToggler, setSidebarToggler }) => {
  const [loginModal, setLoginModal] = useState(false);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [slideType, setSlideType] = useState("single");
  const { downLoad } = useMyContext();

  const handleSlideTypeChange = (e) => {
    console.log(e.target.value);
    setSlideType(e.target.value);
  };

  const handleSlideChange = () => {
    dispatch(setSlideTypeAction(slideType));
  };
  useEffect(() => {
    handleSlideChange();
  }, [slideType]);
  // Page Loader
  const [downloadLoding, setDownloadLoding] = useState(0);
  const [menuToggler, setMenuToggler] = useState(false);

  const { user } = useSelector((state) => state.userInfo);
  const handletoggle = () => {
    if (!user) {
      // alert('first login with email');
      toast.warning("First login with email");
    } else {
      dispatch(downloadToggleAction({ show: true, hide: false }));
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        dispatch(logOutAction());
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };
  return (
    <header>
      <LoadingBar
        color="#f11946"
        progress={downloadLoding}
        onLoaderFinished={() => setDownloadLoding(0)}
      />
      <Container fluid>
        <nav>
          <div className="d-flex align-items-center">
            <div className="logo">
              <img
                src="/assets/images/logo.png"
                alt="logo"
                className="img-fluid"
              />
              <span>Unleash</span>
            </div>
            <span
              className="btn d-block d-xl-none"
              onClick={() => setSidebarToggler(!sidebarToggler)}
            >
              <FeatherIcon
                icon={!sidebarToggler ? "arrow-right-circle" : "x"}
                size="20"
              />
            </span>
          </div>
          <ul className={`exclusive__menus ${menuToggler ? "active" : ""}`}>
            {/* <li className="menu_item">
              <a href="#!" className="menu_link">
                {t("select-slide")}
              </a>
              <div className="submenu__wrapper">
                <Row className="gy-4">
                  <Col xs={12}>
                    <ul className="submenu">
                      <li className={`menu-item ${slideType === "single" ? "active": ""}`}>
                        <a href="#!" className="menu-link" onClick={() => setSlideType("single")}>
                          {t("single")}
                        </a>
                      </li>
                      <li className={`menu-item ${slideType === "multi" ? "active": ""} des`} >
                        <a href="#!" className="menu-link" onClick={() => setSlideType("multi")}>
                          {t("multi")}
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </li> */}
            {/* <li className="menu_item">
              <Link to="/" className="menu_link">
                {t('pricing')}
              </Link>
            </li>
            <li className="menu_item">
              <Link to="/" className="menu_link">
                {t("affiliates")}
              </Link>
            </li> */}
          </ul>
          <ul className="menus">
            <TranslatorDropdown />
            {user ? (
              <ul className={`exclusive__menus ${menuToggler ? "active" : ""}`}>
                <li className="menu_item">
                  <img
                    src={user.photoURL}
                    alt=""
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                    }}
                    className="mr-2"
                  />
                  <span className="ms-1">{user.displayName.split(" ")[0]}</span>
                  <div className="submenu__wrapper sm-wrapper">
                    <button className="btn nav_item" onClick={handleLogout}>
                      <FeatherIcon icon="log-out" size={16} className="me-2" />{" "}
                      logout
                    </button>
                  </div>
                </li>
              </ul>
            ) : (
              <li className="menu_item">
                <button
                  type="button"
                  className="btn nav_item"
                  onClick={() => setLoginModal(true)}
                >
                  <FeatherIcon icon="log-in" size="16" />{" "}
                  <span className="ms-1">{t("login")}</span>
                </button>
              </li>
            )}

            {/* <li>
              <Link to="/" className="btn btn-primary nav_item des" >
                <FeatherIcon icon="minus-circle" size="16" />{" "}
                <span>{t("upgrade-to-pro")}</span>
              </Link>
            </li> */}
            <li>
              <button
                className="btn btn-primary nav_item"
                onClick={handletoggle}
                disabled={downLoad}
              >
                <FeatherIcon icon="download" size="16" />{" "}
                <span>{t("download")}</span>
              </button>
            </li>
            <li className="rep__toggler">
              <span
                className="btn nav_item"
                onClick={() => setMenuToggler(!menuToggler)}
              >
                <FeatherIcon icon={!menuToggler ? "menu" : "x"} size="20" />
              </span>
            </li>
          </ul>
        </nav>
      </Container>
      <LoginModal show={loginModal} setShow={setLoginModal} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="dark"
        transition={Flip}
      />
    </header>
  );
};

export default Header;
