import React from "react";
import { Button, Glyphicon } from "react-bootstrap";
import classes from "./LoaderButton.css";

export default ({
  isLoading,//loading state
  text,//text passed in
  loadingText,//loading text passed in
  className = "",
  disabled = false,
  ...props
}) =>
  <Button
    className={`${classes["LoaderButton"]} ${className}`}
    disabled={disabled || isLoading}//if one is true then disabled will be set to true, if both are false then disabled will be set to false
    {...props}
  >
    {isLoading && <Glyphicon glyph="refresh" className="spinning" />}
    {!isLoading ? text : loadingText}
  </Button>;
