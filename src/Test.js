import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Card } from "react-bootstrap";

function AllCollapseExample() {
  const [activeKey, setActiveKey] = useState(null);

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <Accordion activeKey={activeKey}>
      <Accordion.Item eventKey="0">
        <Card>
          <Card.Header
            onClick={() => handleToggle("0")}
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Accordion Item #1</span>
            <span>{activeKey === "0" ? " -" : " +"}</span>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Card>
          <Card.Header
            onClick={() => handleToggle("1")}
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Accordion Item #2</span>
            <span>{activeKey === "1" ? " -" : " +"}</span>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample;
