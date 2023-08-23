import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, type }) => {
  const [alert, setAlert] = useState(false);
  const rgbColor = `rgb(${rgb.join(",")})`;
  const rgbToHexColor = rgbToHex(...rgb);
  const shade = type === "shade";
  const handleCopyColor = () => {
    setAlert(true);
    navigator.clipboard.writeText(rgbToHexColor);
  };
  useEffect(() => {
    const alertTimeout = setTimeout(() => setAlert(false), 1000);
    return () => clearTimeout(alertTimeout);
  }, [alert]);

  return (
    <article
      onClick={handleCopyColor}
      className={`color ${shade && "color-light"}`}
      style={{ backgroundColor: `${rgbColor}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{rgbToHexColor}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
