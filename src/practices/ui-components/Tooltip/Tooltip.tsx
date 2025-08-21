import React from "react";
import "./index.css";

interface TooltipProps {
  text?: string;
  children?: React.ReactNode;
  position?: "top" | "right" | "left" | "bottom";
}

const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  position = "top",
}) => {
  return (
    <div className="tooltip-container">
      {children}
      <span className={`tooltip-text tooltip-${position}`}>{text}</span>
    </div>
  );
};

export default Tooltip;
