import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Logo from "../../images/LogoTwoHalf.svg"
import { InfoSVG, CloseSVg } from './NavigationSVG'
import { Modal } from '../Partials'
import './navigation.scss';


const Navigation = () => {
    let history = useHistory();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function postPage() {
        return history.push("/add_post");
    }

    const ModalContent = () => (
        <Modal>
            <div id="modal-body" onClick={handleClose}></div>
            <div className="modal-content">
                <button className="cancel-btn" onClick={handleClose}>
                    <CloseSVg />
                </button>
                
                
                <h2>About</h2>
                <p>
                    2020 has been an interesting year to say the least.
                </p>
                <p>
                    Looking at the rollercoaster ride, the uncertainty,
                    anxiety and all the change this year has brought with it, we asked a couple of friends what they will tell their kids about 2020.
                    There are humorous, reflective and interesting answers.
                </p>
                <p>
                    We invite you to include your own answer and flick through the answers on the platform.
                    You never know, you may find your soul mate.
                </p>
                <div>
                    <p className="owners">
                        <span>Initiator:</span> Toyin Jolapamo
                    </p>
                    <p className="owners">
                        <span>UI Design:</span> Nnaemeka Otti
                    </p>
                    <p className="owners">
                        <span>Software Developer:</span> Samuel Egbajie
                    </p>
                </div>
<a href="/add_post">
                <button onClick={() => {
                    postPage();
                    handleClose();
                }} className="share-btn">
                    Share a story
                </button>
                </a>
        </div>
        </Modal>
    )

    return (
        <div className="navigation-wrapper">
            <div className="logo-wrapper">
                <NavLink to="/">
                	<img src={Logo} alt="logo" />
                </NavLink>
            </div>

            <div onClick={handleShow} className="about-wrapper">
                <span><InfoSVG /></span>
                <p>About</p>
            </div>

            {show ? <ModalContent /> : null}
        </div>
    )
}

export default Navigation;