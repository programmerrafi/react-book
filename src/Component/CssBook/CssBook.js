import React, { useState } from "react";
import "./CssBook.css";
import PageCard from "./PageCard";
import { Button } from "@mui/material";

const CssBook = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleNext = () => {
    if (show1 === true) {
      setShow2(true);
    }
    if (show === true) {
      setShow1(true);
    }
    setShow(true);
  };
  const handlePrev = () => {
    if (show2 === true) {
      setShow2(false);
      setShow1(true);
      setShow(true);
    } else if (show1 === true) {
      setShow1(false);
      setShow(true);
    } else {
      setShow(false);
    }
  };
  return (
    <section className="book_section">
      <Button variant="contained" className="prev" onClick={handlePrev}>
        Prev
      </Button>
      <div className="book">
        <div
          className={`page ${show && "page_rotter"}`}
          style={show ? { zIndex: "1" } : null}
        >
          <h2>React Book</h2>
          <div className={`page-bg ${show && "page_show"}`}></div>
        </div>

        <PageCard show={show} show1={show1} isPage1 text="Md Rafi" />
        <PageCard show1={show1} show2={show2} isPage2 text="Anaya" />
        <PageCard show2={show2} isPage3 text="Farzana" />
      </div>
      <Button variant="contained" className="next" onClick={handleNext}>
        Next
      </Button>
    </section>
  );
};

export default CssBook;
