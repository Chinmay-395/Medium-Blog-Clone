import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import ReactMarkdown from "react-markdown";

export const BlogDetailComponent = (props) => {
  console.log("COMPONENT", props);
  return (
    <>
      {props.details ? (
        <Card>
          {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
          <CardBody>
            <CardTitle tag="h5">{props.details.title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Author: {props.details.user}
            </CardSubtitle>
            <CardText>
              {/* {props.details.content} */}
              <div
                dangerouslySetInnerHTML={{
                  __html: `${props.details.html}`,
                }}
              />
            </CardText>
            {/* <ReactMarkdown source={markdown} /> */}
          </CardBody>
        </Card>
      ) : (
        <></>
      )}
    </>
  );
};
