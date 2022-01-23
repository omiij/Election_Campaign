import React from "react";
import "./Issues.css";
import WorkData from "../All_Data/All_DATA";
import Form from "../Form/Form";

export default function Isuues() {
  return (
    <>
      <main className="wrapper">
        <section className="head-content">
          <h1>Vote For Change</h1>
          {/* <p>
            Consequatur voluptatum pariatur eum, ipsum, aut iure. Assumenda
            natus porro nesciunt ab minus. Doloribus, nisi, sint deleniti
            aperiam iure voluptate ducimus, amet corporis fuga, cupiditate ullam
            asperiores commodi laborum quis?
          </p> */}
        </section>

        <section className="work-content">
          {WorkData.map((item, index) => {
            return (
              <article key={index}>
                <>
                  <figure>
                    <img src={item.image} alt={item.alt} />
                    <figcaption>
                      <h3>{item.heading}</h3>
                    </figcaption>
                  </figure>
                  <p>{item.information}</p>
                </>
              </article>
            );
          })}
        </section>
      </main>
      <Form />
    </>
  );
}
