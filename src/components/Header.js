import React from 'react';

function Header() {
  return (
    <div className="header">
      <div className="header-center">
        <button href=".home" className="btn btn-home" type="submit">
          Home
        </button>
        <button href=".about" className="btn btn-About" type="submit">
          About
        </button>
        <button href=".resume" className="btn btn-resume" type="submit">
          Resume
        </button>
        <button href=".contact" className="btn btn-Contact" type="submit">
          Contact
        </button>
      </div>
    </div>
  );
}

export default Header;
