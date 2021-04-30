import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardLink,
  Collapse,
  Button,
} from "reactstrap";

const CommentComponent = (comments) => {
  const [details_comment, setDetails_comment] = React.useState(false);
  const toggle = () => setDetails_comment(!details_comment);
  console.log("COMMENTS", comments.comments[0]);
  if (comments !== null) {
    return (
      <>
        <h3>Discussion</h3>
        {comments.comments.map((comment) => {
          return (
            <Card key={comment.id}>
              <CardBody>
                <CardText>{comment.content}</CardText>
                <Button
                  color="primary"
                  onClick={toggle}
                  style={{ marginBottom: "1rem" }}
                >
                  {comment.reply_count} replies
                </Button>
                <Collapse isOpen={details_comment}>
                  <Card>
                    <CardBody>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </CardBody>
                  </Card>
                </Collapse>
              </CardBody>
            </Card>
          );
        })}
      </>
    );
  }
  return <></>;
};

export default CommentComponent;
