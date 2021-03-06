import React from "react";
import Layout from "../../components/Layout";
import InterviewRoll from "../../components/InterviewRoll";

export default class InterviewsIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              color: "white",
              padding: "1rem",
            }}
          >
            Latest Interviews
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <InterviewRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
