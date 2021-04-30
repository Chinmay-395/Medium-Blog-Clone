import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardLink,
} from "reactstrap";
import ReactMarkdown from "react-markdown";
import CommentComponent from "./CommentComponent";

export const BlogDetailComponent = (props) => {
  const [content, setContent] = React.useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    console.log("THE CONTENT after submit", content);
  };
  console.log("All the posts", props);
  console.log("CONTENT", content);

  return (
    <>
      {props.details ? (
        <>
          <Card>
            <CardBody>
              <CardTitle tag="h5">{props.details.title}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Author: {props.details.user}
              </CardSubtitle>
              <CardText>
                {props.details.content}
                {/* <div
                  dangerouslySetInnerHTML={{
                    __html: `${props.details.html}`,
                  }}
                /> */}
              </CardText>
            </CardBody>
          </Card>
          {/* Rendering the comments */}
          <CommentComponent comments={props.details.comments} />
          <>
            <h2>Add Comments</h2>
            <Card>
              <CardBody>
                <CardTitle>Enter your comments below</CardTitle>
                <CardText>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mt-3">
                      <label htmlFor="title">
                        <strong></strong>
                      </label>
                      <input
                        type="text"
                        name="content"
                        id="content"
                        onChange={handleChange} //(e) => setContent(e.target.value)
                        value={content}
                      />
                      <button
                        type="submit"
                        className="btn btn-success btn-lg mt-2"
                      >
                        SAVE
                      </button>
                    </div>
                  </form>
                </CardText>
              </CardBody>
            </Card>
          </>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
