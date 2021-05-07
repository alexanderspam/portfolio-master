import React from "react";
import gameMaker from '../images/gamemaker.jpg'

export default class ImageComponent extends React.Component {
  state = { isOpen: false ,
          };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    

    console.log("cliked");
  };

  render() {
  
    return (

        
        <div className={this.state.isOpen ? 'row' : "col-lg-6"}>
        <div className="row">
      <div    href="#section1">
       
       <img
          className="small"
       
          src={gameMaker}
          onClick={this.handleShowDialog}
          width="50%"
        />
        {this.state.isOpen && (
          <dialog
            className="dialog col-12"
            href="#section3"

            style={{ position: "absolute", height:"100%"}}
            open
            onClick={this.handleShowDialog}
          >
            <img
              className="image"
              src={gameMaker}
              style={{   height:"auto"}}
              onClick={this.handleShowDialog}
              alt="no image"
            />
            <p className="captions" >adsjklajdskjaljdlaksdjlalsdjlkasj</p>
          </dialog>
        )}
      </div>
      </div>
          <div className="row">
          <div>

          </div>
          <div>ssss</div>

          </div>
        </div>
    );
  }
}
