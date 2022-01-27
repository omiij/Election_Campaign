import React from "react";
import "../Footer/Footer.css";
import { FooterData } from "../All_Data/All_DATA";

function Copyright() {
  return (
    <>
      <div className="footer-copyright">
        <i className="far fa-copyright" /> 2022
      </div>
    </>
  );
}

export default function Footer() {
  return (
    <>
      <footer className="page">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="flex-center">
                {FooterData.map((item, index) => {
                  return (
                    <a href={item.url} className={item.caName} key={index}>
                      <i className={item.Cname}> </i>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Copyright />
    </>
  );
}
