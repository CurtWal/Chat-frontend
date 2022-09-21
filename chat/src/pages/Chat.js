import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import MessageForm from "../components/MessageForm";
import Switch from "@brookr/react-switch";
import "../index.css";
function Chat() {
    const [checked, setChecked] = useState(false)
  const [theme, setTheme] = useState("theme" ? "light" : "dark");
  const switchTheme = (checked) => {
    setChecked(checked)
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div data-theme={theme}>
        ToggleMode
        <br></br>
      <Switch 
            checked={checked}
              onChange={switchTheme}
              offColor="#00000"
              onColor="#f5deb2"
              className="react-switch mx-auto"
              width={75}
              height={20}
              uncheckedIcon={
                <span
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "20px",
                    color: "#353239",
                  }}
                ></span>
              }
              checkedIcon={
                <span
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "10px",
                    color: "#fff",
                  }}
                ></span>
              }
              id="icon-switch"
            />

      <Container>
        <Row>
          <Col md={4}>
            <Sidebar />
          </Col>
          <Col md={8}>
            <MessageForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Chat;
