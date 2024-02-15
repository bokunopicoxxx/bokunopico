import React, { useState } from 'react';
import logo from '../assets/Logo.png';
import './Overlay.css';

export default function Overlay({ playAudio, playVideo }) {
  const [isOpen, setIsOpen] = useState(true);

  function toggle() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <>
      <div
        style={{
          opacity: isOpen ? 1 : 0,
          maxHeight: isOpen ? '1000px' : '0',
          overflow: 'hidden',
          transition: 'opacity 1s ease, max-height 1s ease',
        }}
        className="overlay"
      >
        <div className="overlay-inside">
          <div className="logoBlockOverlay">
            <img className="logoOverlay" alt="logo" src={logo} />
          </div>
          <div>
            <button onClick={toggle} className="buttonOverlay">
              CONFIRM
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
