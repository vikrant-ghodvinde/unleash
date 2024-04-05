import React, { useState, useEffect } from "react";
import colorPaletteData from "../assets/json/colorPalate.json";
import { setColorPalateAction } from "../../stateManagement/actions/themeAction";
import { useDispatch, useSelector } from "react-redux";
import { ChromePicker } from "react-color";
import { t } from "i18next";
import { Col, Row } from "react-bootstrap";

const ColorPalette = () => {
  const { templateNo } = useSelector((state) => state.template);
  const dispatch = useDispatch();
  const [color1, setColor1] = useState("#070A10");
  const [color2, setColor2] = useState("#7D7D8D");
  const [color3, setColor3] = useState("#7E7EFF");

  const [showColorPicker1, setShowColorPicker1] = useState(false);
  const [showColorPicker2, setShowColorPicker2] = useState(false);
  const [showColorPicker3, setShowColorPicker3] = useState(false);

  const handleColorChange1 = (color) => {
    setColor1(color.hex);
  };

  const handleColorChange2 = (color) => {
    setColor2(color.hex);
  };

  const handleColorChange3 = (color) => {
    setColor3(color.hex);
  };
  const defaultPalettes = {
    1: {
      first: "#1a1d29",
      second: "#e6e6e6",
      third: "#c5c5ff",
    },
    2: {
      first: "#F2D7EE",
      second: "#262626",
      third: "#4F4A7C",
    },
    3: {
      first: "#dde5e7",
      second: "#67727e",
      third: "#d4674c",
    },
  };

  const [selectedColors, setSelectedColors] = useState(
    defaultPalettes[templateNo] || {
      first: "#f6f0f0",
      second: "#0567a8",
      third: "#60e3d5",
    }
  );

  useEffect(() => {
    setSelectedColors(
      defaultPalettes[templateNo] || {
        first: "#f6f0f0",
        second: "#0567a8",
        third: "#60e3d5",
      }
    );
  }, [templateNo]);

  useEffect(() => {
    dispatch(setColorPalateAction(selectedColors));
  }, [selectedColors, dispatch]);

  const handleColorPalette = (e) => {
    const target = e.target;
    const paletteDiv = target.closest(".palette-wrapper");
    const colorInputs = paletteDiv.querySelectorAll('input[type="color"]');
    const colors = Array.from(colorInputs).map((input) => input.value);
    const selectedColorsObj = {
      first: colors[0],
      second: colors[1],
      third: colors[2],
    };
    setColor1(colors[0]);
    setColor2(colors[1]);
    setColor3(colors[2]);
    setSelectedColors(selectedColorsObj);
    // console.log(selectedColorsObj);
  };
  const handleColorPaletteCustom = () => {
    const selectedColorsObj = {
      first: color1,
      second: color2,
      third: color3,
    };
    setSelectedColors(selectedColorsObj);
    console.log(selectedColorsObj);
  };
  useEffect(() => {
    handleColorPaletteCustom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color1, color2, color3]);

  return (
    <div className="palette__box--wrapper">
      <div className="column">
        {colorPaletteData?.map((palette) => (
          <div
            className="palette-wrapper"
            id={palette.id}
            key={palette.id}
            onClick={handleColorPalette}
          >
            <input type="color" disabled value={palette.color1} />
            <input type="color" disabled value={palette.color2} />
            <input type="color" disabled value={palette.color3} />
          </div>
        ))}
        <Row className="g-1 w-100 mt-3">
          <Col xs={4}>
            <span className="fs-sm">{t("background")}</span>
            <button
              type="button"
              onClick={() => {
                setShowColorPicker1(!showColorPicker1);
                setShowColorPicker2(false);
                setShowColorPicker3(false);
              }}
              className={`btn btn-secondary w-100 fs-xs ${
                showColorPicker1 ? "has-active" : ""
              }`}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  backgroundColor: color1,
                  border: `1px solid ${color1}`, // Optional: adds a border to the color circle
                }}
              ></span>
              {color1}
            </button>
          </Col>
          <Col xs={4}>
            <span className="fs-sm">{t("Textcolor")}</span>
            <button
              type="button"
              onClick={() => {
                setShowColorPicker1(false);
                setShowColorPicker2(!showColorPicker2);
                setShowColorPicker3(false);
              }}
              className={`btn btn-secondary w-100 fs-xs ${
                showColorPicker2 ? "has-active" : ""
              }`}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  backgroundColor: color2,
                  border: `1px solid ${color2}`, // Optional: adds a border to the color circle
                }}
              ></span>
              {color2}
            </button>
          </Col>
          <Col xs={4}>
            <span className="fs-sm">{t("highlighter")}</span>
            <button
              type="button"
              onClick={() => {
                setShowColorPicker1(false);
                setShowColorPicker2(false);
                setShowColorPicker3(!showColorPicker3);
              }}
              className={`btn btn-secondary w-100 fs-xs ${
                showColorPicker3 ? "has-active" : ""
              }`}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  backgroundColor: color3,
                  border: `1px solid ${color3}`, // Optional: adds a border to the color circle
                }}
              ></span>
              {color3}
            </button>
          </Col>
        </Row>
        <div className="w-100">
          {showColorPicker1 && (
            <ChromePicker color={color1} onChange={handleColorChange1} />
          )}
          {showColorPicker2 && (
            <ChromePicker color={color2} onChange={handleColorChange2} />
          )}
          {showColorPicker3 && (
            <ChromePicker color={color3} onChange={handleColorChange3} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
