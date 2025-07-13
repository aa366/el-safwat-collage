"use client";
import React, { useState } from "react";
interface props {
  children?: React.ReactNode;
  title?: string;
  contClass?: string;
  titleClass?: string;
  childrenClass?: string;
  defaultValue?: boolean;
}
const Collapse = ({
  children,
  title,
  contClass,
  titleClass,
  childrenClass,
  defaultValue,
}: props) => {

  const [isOpen, setIsOpen] = useState(defaultValue || false);
  
  return (
    <div className={`   ${contClass}`}>
      <h3 className={`   ${titleClass}`} onClick={() => setIsOpen(!isOpen)}>
        {title}
      </h3>
      {isOpen && <div className={` transition-all duration-300   ${childrenClass}`}>{children}</div>}
    </div>
  );
};

export default Collapse;
