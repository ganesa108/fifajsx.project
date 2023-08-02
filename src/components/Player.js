import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Player({ playerName, team, nationality, jerseyNumber, age, image }) {
  return (
    <>
      <Card style={{ width: "18rem", border: "none" }}>
        {/* image */}
        <Card.Img
          variant="top"
          src={image}
          style={{ width: 320, height: 400 }}
        />
        {/* card contents */}
        <Card.Body>
          {/* player name */}
          <Card.Title>{playerName}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {/* team */}
          <ListGroup.Item>{team}</ListGroup.Item>
          {/* nationality */}
          <ListGroup.Item>{nationality}</ListGroup.Item>
          {/* jerseyNumber */}
          <ListGroup.Item>{jerseyNumber}</ListGroup.Item>
          {/* age */}
          <ListGroup.Item>{age} years old.</ListGroup.Item>
        </ListGroup>
        <Card.Body></Card.Body>
      </Card>
    </>
  );
}

export default Player;
