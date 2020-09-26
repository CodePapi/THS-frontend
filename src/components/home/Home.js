// import React, { useState, useRef } from "react";
// import { Slide } from "react-slideshow-image";

// const AutoplayExample = () => {
//     const slideRef = useRef();
//   const [autoplay, setAutoplay] = useState(true);

//   const style = {
//     textAlign: "center",
//     background: "teal",
//     padding: "200px 0",
//     fontSize: "30px"
//   }
//   const back = () => {
//     slideRef.current.goBack();
//   }

//   const next = () => {
//     slideRef.current.goNext();
//   }

//   const goto = ({ target }) => {
//     slideRef.current.goTo(parseInt(target.value, 10));
//   }

//   return (
//     <div>
//       <div>
//         <Slide autoplay={autoplay}>
//           <div style={style}>
//             First Slide
//           </div>
//           <div style={style}>
//             Second Slide
//           </div>
//           <div style={style}>
//             Third Slide
//           </div>
//         </Slide>
//       </div>

//       <div className="autoplay-buttons">
//         Autplay is {autoplay ? 'on' : 'off'}
//       </div>
//       <div className="autoplay-buttons">
//         <button type="button" onClick={() => setAutoplay(false)}>Pause</button>
//         <button type="button" onClick={() => setAutoplay(true)}>Play</button>


//         <div className="autoplay-buttons">
//         <button type="button" onClick={back}>Back</button>
//         <button type="button" onClick={next}>Next</button>
//         <select onChange={goto}>
//           <option>--Select--</option>
//           <option value="0">First</option>
//           <option value="1">Second</option>
//           <option value="2">Third</option>
//         </select>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default AutoplayExample;





import React, { useRef } from "react";
import { Slide } from "react-slideshow-image";

const MethodsExample = () => {
  const slideRef = useRef();

//   const style = {
//     textAlign: "center",
//     background: "teal",
//     padding: "200px 0",
//     fontSize: "30px",
//     width:"100vw",
//     height:"80vh"
//   };

  const properties = {
    autoplay: false,
    arrows: false
  };

  const back = () => {
    slideRef.current.goBack();
  }

  const next = () => {
    slideRef.current.goNext();
  }

  const goto = ({ target }) => {
    slideRef.current.goTo(parseInt(target.value, 10));
  }

  return (
    <div>
      <div>
        <Slide ref={slideRef} {...properties}>
          <div style={{background:"black", width:"100vw",  height:"80vh"}}>
            First Slide
          </div>
          <div style={{background:"black", width:"100vw",  height:"80vh"}}>
            Second Slide
          </div>
          <div style={{background:"black", width:"100vw",  height:"80vh"}}>
            Third Slide
          </div>
        </Slide>
      </div>

      <div className="autoplay-buttons">
        <button type="button" onClick={back}>Back</button>
        <button type="button" onClick={next}>Next</button>
        <select onChange={goto}>
          <option>--Select--</option>
          <option value="0">First</option>
          <option value="1">Second</option>
          <option value="2">Third</option>
        </select>
      </div>
    </div>
  );
};

export default MethodsExample;