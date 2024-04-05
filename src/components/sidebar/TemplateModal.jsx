import React, { useEffect, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
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
import template11 from "../assets/images/templates/template11.png";
import wowlywaves from "../assets/images/wave_white.png";
import { useDispatch, useSelector } from "react-redux";
import { setBackgroundElement } from '../../stateManagement/actions/backgroundElement';

const TemplateModal = ({ show, setShow }) => {
  const { colorPalate } = useSelector((state) => state.colorPalateReducers)
    const [selectedTemplate, setSelectedTemplate] = useState("");
    const [background, setbackground] = useState({
      element: "wave",
      status: true,
    })
    const dispatch = useDispatch()
	const handleBackgroundDesign = () => {
		dispatch(setBackgroundElement({ element: background.element, status: background.status }))
    console.log({ element: background.element, status: background.status });
	}
  const backgroundImages = [
    {
      image: template6,
      name: "lines",
    },
    {
      image: template5,
      name: "bauhaus",
    },
    {
      image: template,
      name: "blobs",
    },
    {
      image: template2,
      name: "rombos",
    },
    {
      image: template7,
      name: "radar",
    },
    {
      image: template10,
      name: "topo",
    },
    {
      image: template9,
      name: "dots",
    },
    {
      image: wowlywaves,
      name: "wave",
    },
    {
      image: template4,
      name: "arrows",
    },
    {
      image: template3,
      name: "noise",
    },
    {
      image: template11,
      name: "round",
    },
  ];
  useEffect(() => {
		handleBackgroundDesign()
	}, [background])
  return (
    <Modal centered backdrop="static" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title className="fs-6">Choose a Background</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="template__view--wrapper">
          <Row className="g-4">
            {backgroundImages?.map((item, index) => (
              <Col xs={12} sm={6} md={4} key={index} onClick={() => {
                setSelectedTemplate(item.name)
                setbackground({ ...background, element: item.name })}}
            >
                <div className="template_view-box">
                  <div className="image" style={{background: colorPalate.first}}>
                    <img src={item.image} alt="" className="img-fluid" />
                  </div>
                  <div className="name text-center mt-2">{item.name}</div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default TemplateModal;
