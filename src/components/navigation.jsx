import React, { useCallback } from "react";

export const Navigation = (props) => {
  const handleScroll = useCallback((e) => { 
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href'); 
    const targetElement = document.getElementById(targetId.substring(1));
    if (targetElement && props.scrollProp) {       
      props.scrollProp.animateScroll(targetElement);
      const navbarCollapse = document.getElementById('bs-example-navbar-collapse-1');
      if (navbarCollapse && navbarCollapse.classList.contains('in')) {
        navbarCollapse.classList.remove('in');
        const navbarToggle = document.querySelector('.navbar-toggle');
        if (navbarToggle && !navbarToggle.classList.contains('collapsed')) {
          navbarToggle.classList.add('collapsed');
        }
      }
    } 
  }, [props.scrollProp]); 
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top" onClick={handleScroll}> {/* Добавил onClick и сюда */}
            Osaühing BREVENTES
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll" onClick={handleScroll}> {/* Теперь просто handleScroll */}
                Teenused
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll" onClick={handleScroll}> 
                Meist
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll" onClick={handleScroll}>
                Galerii
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll" onClick={handleScroll}> 
                Kontaktid
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};