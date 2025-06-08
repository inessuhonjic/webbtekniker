import React, { useEffect, useState } from 'react';
import { getFact, todaysFact } from '../api/facts';
import { AnimatePresence, motion } from "motion/react"



function Card() {
  const [facts, setFacts] = useState("");
  const [isVisible, setIsVisible] = useState(true)

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
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <motion.img
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            src="https://media.istockphoto.com/id/1484795521/sv/foto/two-interracial-best-friends-laughing-and-having-a-good-time-together-in-a-studio.jpg?s=2048x2048&w=is&k=20&c=vGDrOtSMD2yFzZyZ8FtsyZui2UO6kA2Z4r17ffZd17w="
            className="d-block mx-lg-auto img-fluid"
            alt="two girls laughing"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <div style={container}>
              <motion.button
              className="btn btn-primary"
                onClick={() => setIsVisible(!isVisible)}
                whileTap={{ scale: 0.95 }}
              >
                {isVisible ? "Hide fact" : "Show fact"}
              </motion.button>

              <AnimatePresence>
                {isVisible && (
                  <motion.div
                    key="factBox"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    style={{ marginTop: "10px" }}
                  >
                    <div className="m-5">
                    <p className="p-5 m-5">{facts.text}</p>
                    </div>
                    <button
                      style={button}
                      onClick={updateFact}
                      className="btn btn-outline-secondary btn-sm"
                    >
                      Get new fact
                    </button>
                    <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
                onClick={updateTodaysFact}
                style={{ marginTop: "10px" }}
              >
                Todays special fact
              </button>
                  </motion.div>
                )}
              </AnimatePresence>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
export default Card;

