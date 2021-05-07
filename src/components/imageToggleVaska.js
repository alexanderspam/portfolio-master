import React from "react";
import gameMaker from "../images/gamemaker.jpg";

const ImageVaska = () => {
  function useToggle(initialValue = false) {
    const [value, setValue] = React.useState(initialValue);
    const toggle = React.useCallback(() => {
      setValue(v => !v);
    }, []);
    return [value, toggle];
  }

  const [isOn, toggleIsOn] = useToggle();

  return (
    <div className={isOn ? "col-12" : "col-lg-6"}>
      <div className="row">
        <div href="#section1">
          <img
            className="small"
            src={gameMaker}
            onClick={toggleIsOn}
            width="50%"
            alt=""
          />
          <div
            className="dialog col-12"
            href="#section3"
            hidden={isOn ? false : true}
            style={{ position: "absolute", height: "100%" }}
            onClick={toggleIsOn}
          >
          <span className="close">
                X
          </span>
            <img
              className="image"
              src={gameMaker}
              style={{ height: "auto" }}
              onClick={toggleIsOn}
              alt="no image"
            />
            <p className="captions">adsjklajdskjaljdlaksdjlalsdjlkasj</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div></div>
        <div>ssss</div>
      </div>
    </div>
  );
};
export default ImageVaska;
