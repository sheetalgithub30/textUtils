import React from "react";

function About() {
  return (
    <div id="about">
      <h1>About Us</h1>
      <div id="about-inner">
        <div className="box">
          <h3>Analyse Your Text</h3>
          <div className="none">
            <b>
              Textutils gives you a way to analyze your text quickly and
              efficently.It let you to count word, count charecters or reading
              time required.It has both light and dark mode for better
              compartable.
            </b>
          </div>
        </div>
        <div className="box">
          <h3>Free To Use</h3>
          <div className="none">
            <b>
              TextUtils is a free charecter counter tool that provided instant
              charecter count and word count statics for a given text. TextUtils
              reports the number of words and charecter. Thus it is suitable for
              writing text with word / charecter limit.
            </b>
          </div>
        </div>
        <div className="box">
          <h3>Browser Compatible</h3>
          <div className="none">
            <b>
              This word counter software works in any web browser such as Chrome
              , Firefox ,Internet Explorer ,Safari,Opera etc.
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
