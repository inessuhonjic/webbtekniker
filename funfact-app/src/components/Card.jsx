import React, { useEffect, useState } from 'react';
import { getFact, todaysFact } from '../api/facts';
import { AnimatePresence, motion } from "motion/react"



function Card({ setName,name }) {
  const [facts, setFacts] = useState("");
  const [isVisible, setIsVisible] = useState(false)

  const [bgColor, setBgColor] = useState("bg-white");

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
        setBgColor("bg-white");

      });
  }



  const updateTodaysFact = () => {
    todaysFact()
      .then((data) => {
        console.log(data)
        setFacts(data); // Spara allafakta
        setBgColor("bg-white");

      })
  }


   const askForName = () => {
        
        const newName = prompt("Vad heter du?")
        if (newName) {
            sessionStorage.setItem("name", newName)
            setName(newName)
        }
    }

  

  const container = {
    display: "flex",
    flexDirection: "column",
    width: 100,
    height: 160,
    position: "relative",
  };

  const box = {
    width: 100,
    height: 100,
    backgroundColor: "#0cdcf7",
    borderRadius: "10px",
  };

  const button = {
    backgroundColor: "#0cdcf7",
    borderRadius: "10px",
    padding: "10px 20px",
    color: "#0f1115",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  };


return (
  <div className="cardwrapper">
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg align-items-center justify-content-center mx-auto space-evenly g-5 py-5">

        {/* Bild */}
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

    

        {/* Knappen för show/hide */}
        <div className="col-lg-6">
          <button className="btn btn-primary me-3 mb-3" onClick={(askForName)}>Tell us who you are</button>
          <motion.button
            className="btn btn-primary mb-3"
            onClick={() => setIsVisible(!isVisible)}
            whileTap={{ scale: 0.95 }}
          >
            {isVisible ? "Hide fact" : "Show funfact"}
          </motion.button>

          {/* Faktarutan - kan placeras här, eller ännu en nivå djupare */}
          <AnimatePresence>
            {isVisible && (
              <motion.div
              className ="bgFactBox"
                key="factBox"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <p className={`p-3 border rounded fw-bold ${bgColor}`}>
                  {facts.text}
                </p>

                <button
                  onClick={updateFact}
                  className="btn btn-outline-secondary btn-sm me-2 mt-2"
                >
                  Get new fact
                </button>

                <button
                  className="btn btn-outline-secondary btn-sm mt-2"
                  onClick={updateTodaysFact}
                >
                  Todays special fact
                </button>

                 <button
                  onClick={() => setBgColor((prevColor) => (prevColor === "bg-success" ? "bg-white" : "bg-success"))}
                  className="btn btn-outline-secondary btn-sm me-2 mt-2"
                >
                  {bgColor === "bg-success" ? "This is not funny!" : "This is funny!"}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  </div>
);
}
export default Card;

