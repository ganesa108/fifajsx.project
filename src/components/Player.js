import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Player({playerName, team, nationality, jerseyNumber, age, image}) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{playerName}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{team}</ListGroup.Item>
          <ListGroup.Item>{nationality}</ListGroup.Item>
          <ListGroup.Item>{jerseyNumber}</ListGroup.Item>
          <ListGroup.Item>{age} years old.</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        </Card.Body>
      </Card>
    </>
  );
}

export default Player;
