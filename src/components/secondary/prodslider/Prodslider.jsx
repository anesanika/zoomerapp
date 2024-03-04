import { useState } from 'react';
import './Prodslider.css';


function Prodcutpage (props) {

  const [sliderVal, setSliderVal] = useState(0);
  
  
  return(

    <div className='slider-cont'>
      <div className="prod-title-cont">
        <h4>{props.prodTitle}</h4>
      </div>
      <div className="slider-mian-image">
        <img 
          style={{transform: `translateX(-${sliderVal * 100}%)`}}
          src="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F5bbd3e79-6644-472a-8972-4d363ae358a5_Thumb.jpeg&w=384&q=100" alt="s" 
        />
        
        <img 
          style={{transform: `translateX(-${sliderVal * 100}%)`}}
          src="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F94ca4c76-1729-425b-81dc-2ce40b49481d_Thumb.jpeg&w=384&q=100" alt="/s"
        />
        
        <img 
          style={{transform: `translateX(-${sliderVal * 100}%)`}}
          src="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F28aab96c-fb9a-4bd3-a4a8-4c884eac65e3_Thumb.jpeg&w=384&q=100" alt="/s"
        />
        
      </div>
      
      <div className="sliders">
        <div className="slider-images" style={sliderVal === 0 ? {border: '1px solid #ec5e2a'} : null} onClick={() => setSliderVal(0)}>
          <img src="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F5bbd3e79-6644-472a-8972-4d363ae358a5_Thumb.jpeg&w=384&q=100" alt="/"/>
        </div>
        <div className="slider-images" style={sliderVal === 1 ? {border: '1px solid #ec5e2a'} : null} onClick={() => setSliderVal(1)}>
          <img src="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F94ca4c76-1729-425b-81dc-2ce40b49481d_Thumb.jpeg&w=384&q=100" alt="/"/>
        </div>
        <div className="slider-images" style={sliderVal === 2 ? {border: '1px solid #ec5e2a'} : null} onClick={() => setSliderVal(2)}>
          <img src="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F28aab96c-fb9a-4bd3-a4a8-4c884eac65e3_Thumb.jpeg&w=384&q=100" alt="/"/>
        </div>
      </div>
    </div>
  );
}

export default Prodcutpage;