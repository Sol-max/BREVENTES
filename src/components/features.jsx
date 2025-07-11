import React from "react";
import "../features.css";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Teenused</h2>
          </div>
        </div>
        <div className="row">
          {props.data ? (
            props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                <div className="icon-container">
                  <i className={`fa ${d.icon || "fa-question"}`}></i> {/* Fallback icon */}
                </div>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))
          ) : (
            "Loading..."
          )}
        </div>
      </div>
    </div>
  );
};