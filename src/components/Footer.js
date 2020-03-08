import React from "react";
import Continue from "./Continue";

function Footer({ highlight, onContinue }) {
  return (
    <div id="footer" className="footer col-10 offset-1 row">
      <Continue show={highlight === "correct"} onContinue={onContinue} />

      <small className="text-muted footer__credit">
        All images are from{" "}
        <a href="http://commons.wikimedia.org/wiki/Main_Page">
          Wikimedia Commons
        </a>{" "}
        and are in the public domain
      </small>
    </div>
  );
}

export default Footer;
