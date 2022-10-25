import React, { Component } from 'react';
import {Card, Container, Col, Row, ListGroup} from "react-bootstrap";



export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="7">
              <Card className="m-5">
                <img
                  width={150}
                  height={150}
                  className="mr-3"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
                />
                <Card.Body>
                     <h5 className="text-center mt-5">Blog post</h5>
                     <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                       exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </Card.Body>
              </Card>
              <Card className="m-5">
                <img
                  width={150}
                  height={150}
                  className="mr-3"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
                />
                <Card.Body>
                     <h5   className="text-center mt-5">Blog post</h5>
                     <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                       exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </Card.Body>
              </Card>
              <Card className="m-5">
                <img
                  width={150}
                  height={150}
                  className="mr-3"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
                />
                <Card.Body>
                     <h5 className="text-center mt-5">Blog post</h5>
                     <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                       exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </Card.Body>
              </Card>
          </Col>
          <Col md="3" className="m-3">
            <h5 className="text-center mt-5">Categories</h5>
            <Card>
              <ListGroup variant="flush">
                 <ListGroup.Item>Html?CSS</ListGroup.Item>
                 <ListGroup.Item>JavaScript</ListGroup.Item>
                 <ListGroup.Item>Piton</ListGroup.Item>
                 <ListGroup.Item>Java</ListGroup.Item>
                 <ListGroup.Item>C++</ListGroup.Item>
              </ListGroup>
            </Card>
            <Card className='mt-3' bg="light">
              <Card.Body>
                <Card.Title>Side widget</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                      incididunt ut labore et dolore magna aliqua. Ut </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
