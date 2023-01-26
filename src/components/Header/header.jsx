import React from "react";
import cl from "./header.module.css";

let Header = () => {
  return (
    <header className={cl.header}>
      <img
        src="https://i.pinimg.com/236x/a4/ac/5e/a4ac5e9779b16adc4bef330c4e7b4826.jpg"
        alt="cock"
        height={60}
      />
    </header>
  );
};

export default Header;
