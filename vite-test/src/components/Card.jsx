import React, { useEffect, useState } from 'react';
import { getFact, todaysFact } from './AxiosComponent';



function Card() {
    const [facts, setFacts] = useState("");

    useEffect(() => {
    getFact()
      .then((data) => {
        console.log(data)
        setFacts(data); // Spara allafakta
        
      });
      
  }, []);

  

   const updateFact = () => {
    getFact()
      .then((data) => {
        console.log(data)
        setFacts(data); // Spara allafakta
        
      });
    }

      
      
    const updateTodaysFact = () => {
    todaysFact()
      .then((data) => {
        console.log(data)
        setFacts(data); // Spara allafakta
        
      })
  }

  return (
  

<div className ="cardwrapper">
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="https://media.istockphoto.com/id/1484795521/sv/foto/two-interracial-best-friends-laughing-and-having-a-good-time-together-in-a-studio.jpg?s=2048x2048&w=is&k=20&c=vGDrOtSMD2yFzZyZ8FtsyZui2UO6kA2Z4r17ffZd17w="
            className="d-block mx-lg-auto img-fluid"
            alt="two girls laughing"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          
          <p className="lead">
         {facts.text}
         
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button className="btn btn-primary" onClick={updateFact}>Give me more!</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={updateTodaysFact}>
              Todays special fact
            </button>
          </div>
        </div>
      </div>
    </div>
 </div>
  );
}

export default Card;
