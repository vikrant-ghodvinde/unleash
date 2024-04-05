import React, { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { auth, facebookProvider, provider, twitterProvider } from "../googleSignin/config";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch, useSelector } from "react-redux";
import { setUserAction } from "../../stateManagement/actions/userAction";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import StatusModal from "../Modal/StatusModal";
import { signInWithPopup, signOut } from 'firebase/auth';

const LoginModal = ({ show, setShow }) => {
    const [statusModal, setStatusModal] = useState(false);
    const [type, settype] = useState("");
    const [message, setmessage] = useState("")
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const { user } = useSelector((state) => state.userInfo)

    const handleSignin = (auth, provider, e) => {   
        e.preventDefault()
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                dispatch(setUserAction({ userName: user.displayName, isLogin: true, }))
                dispatch(setUserAction(user))
                setShow(false);
                settype("success")
                setmessage("User SignIn Successfully")
                setStatusModal(true)
            })
            .catch((error) => {
                console.log(error);
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Sign-in error:', errorCode, errorMessage);
                setShow(false);
                settype("danger")
                setmessage(errorMessage)
                setStatusModal(true)
            });
    };
    return (
        <React.Fragment>
            <Modal centered backdrop="static" show={show} onHide={() => setShow(false)}>
                {/* <Modal.Header closeButton>Unleash Login</Modal.Header> */}
                <Modal.Body>
                    <Row className='gy-4'>
                        <Col xs={12}>
                            <button onClick={(e) => handleSignin(auth, provider, e)} className='btn btn-primary mx-auto'>
                                Login with Google
                            </button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
            <StatusModal show={statusModal} setShow={setStatusModal} type={type} message={message} />
        </React.Fragment>
    )
}

export default LoginModal