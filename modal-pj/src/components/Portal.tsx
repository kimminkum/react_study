import React from "react";
import { createPortal } from "react-dom";

interface Portal {
  children?: string;
  selector?: string;
}

const Portal: React.FC<Portal> = ({ children, selector }) => {
  const rootElement = selector && document.querySelector(selector);
  return <>{rootElement ? createPortal(children, rootElement) : children}</>;
};

export default Portal;
