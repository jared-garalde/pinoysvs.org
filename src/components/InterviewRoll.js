import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class InterviewRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-full" key={post.id}>
              <article
                className={`is-child card ${
                  post.frontmatter.featuredpost ? "is-featured" : ""
                }`}
              >
                <div className="card-content">
                  <div className="post-meta content">
                    <p className="title has-text-primary is-4">
                      <Link
                        className="title has-text-primary is-4"
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title}
                      </Link>
                    </p>
                    <p className="subtitle is-6 is-spaced">
                      {post.frontmatter.date}
                    </p>
                  </div>
                  <div className="content">
                    <p>
                      {post.excerpt}
                      <br />
                      <br />
                      <Link
                        className="button is-primary is-outlined is-small"
                        to={post.fields.slug}
                      >
                        Keep Reading →
                      </Link>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          ))}
      </div>
    );
  }
}

InterviewRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query InterviewRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "interview-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <InterviewRoll data={data} count={count} />}
  />
);
