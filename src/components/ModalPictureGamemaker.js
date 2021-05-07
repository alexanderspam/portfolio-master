import React from "react";
import gameMaker from '../images/gamemaker.jpg'
export default class ImageComponent extends React.Component {
  state = { isOpen: false };
  state = { isOpen2: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("cliked");
  };
  handleShowDialog2 = () => {
    this.setState({ isOpen2: !this.state.isOpen });
    console.log("cliked");
  };

  render() {
    return (
      <div>
        <img
          className="small"
          src={gameMaker}
          height={150}
          weight={200}
          onClick={this.handleShowDialog}
          alt="no image"
        />
        {this.state.isOpen && (
          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open
            onClick={this.handleShowDialog}
          >
            <img
              className="image"
              src={gameMaker}
              onClick={this.handleShowDialog}
              height={150}
              weight={200}
            />
          </dialog>
        )}

        <img
          className="small"
          src="/Anj.png"
          onClick={this.handleShowDialog2}
          alt="no image"
        />
        {this.state.isOpen2 && (
          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open
            onClick={this.handleShowDialog2}
          >
            <img
              className="image"
              src="/Anj.png"
              onClick={this.handleShowDialog2}
              alt="no image"
            />
          </dialog>
        )}
      </div>
    );
  }
}
