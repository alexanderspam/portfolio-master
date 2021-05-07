import React, {useState} from 'react';
import gameMaker from "../images/gamemaker.jpg";
import gameMakerPreview from "../images/gamemakers_preview.png";
import vaskaPreview from "../images/vaskaShop.png";
import vaska from "../images/vaskaShop.png";
import seed from "../images/hitandrun.jpg";
import seeding from "../images/seeder_preview.png";
import blcac from "../images/blcac.jpg";
import bj from "../images/blackJack_preview.png";
import greenreload from "../images/greenreload.png";
import greenreloadPreview from "../images/greenreload_preview.png";
import fortunaPreview from "../images/fortune_previews.png";
import fortuna from "../images/fortuna.jpg";
import close from "../images/close.svg";
import * as imageCaptions from './imageCaptions';

 const Portfolio = () => {
  function useToggle(initialValue = false) {
    const [value, setValue] = React.useState(initialValue);
    const toggle = React.useCallback(() => {
      setValue(v => !v);
    }, []);
    return [value, toggle];
  }
  function setImageFunctionVaska (){
    setImageCaption(imageCaptions.vaska);
    setImageComponent(vaska);
    setIdSection("#section__vaska");
      return(imageCaption, imageComponent,idSection)
  }
  function setImageFunctionGreenreloade (){
    setImageCaption(imageCaptions.greenreload);
    setImageComponent(greenreload);
    setIdSection("#section__greenreloade");
    return(imageCaption, imageComponent,idSection)
  }
  function setImageFunctionFortuna (){
    setImageCaption(imageCaptions.fortuna);
    setImageComponent(fortuna);
    setIdSection("#section__fortuna");
    return(imageCaption, imageComponent,idSection)
  }
  function setImageFunctionApp (){
    setImageCaption(imageCaptions.app);
    setImageComponent(blcac);
    setIdSection("#section__app");
    return(imageCaption, imageComponent,idSection)
  }
  function setImageFunctionIllustration (){
    setImageCaption(imageCaptions.app);
    setImageComponent(blcac);
    setIdSection("#section__app");
    return(imageCaption, imageComponent,idSection)
  }
  function setImageFunctionGamemaker (){
    setImageCaption(imageCaptions.app);
    setImageComponent(blcac);
    setIdSection("#section__app");
    return(imageCaption, imageComponent,idSection)
  }
  
  const [isOn, toggleIsOn] = useToggle();
  const [imageComponent, setImageComponent] = useState();
  const [imageCaption ,setImageCaption] = useState()
  const [idSection ,setIdSection] = useState()

  return (
    <section className="portfolio" id="portfolio-section">
    <h2>Portfolio</h2>
   
    <div className="row">
  
        
      
    <div className="col-lg-6">
    <div className="row">

        <div className="col-12 portfolio__case" id="section__fortuna" onClick={()=>setImageFunctionFortuna()}>
        <a href="#top-section"> <img
            className="small"
            src={fortunaPreview}
            onClick={toggleIsOn}
            alt=""
          /></a>
          <caption>
            
          </caption>
          
         
       

        </div>
        </div>
        <div className="row">
        <div className="col-md-6 portfolio__case" id="section__vaska" onClick={()=>setImageFunctionVaska()}>
        <a href="#top-section"><img
            className="small"
            src={vaskaPreview}
            onClick={toggleIsOn}
            alt=""
          /></a>
           <caption>
           Vaska.nu - webshop
                     </caption>
         
         </div>
<div className="col-md-6 portfolio__case" id="section__gamemaker" onClick={()=>setImageFunctionGamemaker()}>
<a href="#top-section"><img
            className="small"
            src={gameMakerPreview}
            onClick={toggleIsOn}
            alt=""
          /></a>
           <caption>
           Fortuna - design
          </caption>
         
         </div>
        </div>
      </div>
      <div className="col-lg-6" id="section__app">
        <div className="row">
        <div className="col-md-6 portfolio__case" onClick={()=>setImageFunctionApp()}>
       <a href="#top-section"> <img
            className="small"
            src={bj}
            onClick={toggleIsOn}
            alt=""
          /></a>
           <caption>
           Black jack - app
          </caption>
         
         </div>
<div className="col-md-6 portfolio__case" id="section__illustration" onClick={()=>setImageFunctionIllustration ()}>
<a href="#top-section"><img
            className="small"
            src={seeding}
            onClick={toggleIsOn}
            alt=""
          /></a>
           <caption>
           Illustration - Illustrator 
          </caption>
         
         </div>
        </div>
        <div className="row">
        <div className="col-12 portfolio__case" id="section__greenreloade" onClick={()=>setImageFunctionGreenreloade()}>  
        <a href="#top-section"><img
            className="small"
            src={greenreloadPreview}
            onClick={toggleIsOn}
            alt=""
          /></a>
           <caption>
           Green reload - design
          </caption>
         
         </div>

        </div>
      </div>
    </div>
    {isOn  &&( <div
            className="dialog col-12"
            href="#section3"
            style={{ position: "absolute", height: "100%" }}
            onClick={toggleIsOn}
          >
          <span className="close">
               <a href={idSection}> <img
                src={close} /></a>
          </span>
            <img
              className="image"
              src={imageComponent}
              style={{ height: "90%" }}
              onClick={toggleIsOn}
              alt="no image"
            />
            <p className="captions">{imageCaption}</p>
            </div> 
         ) }
  </section>
    
  ) };
   export default Portfolio