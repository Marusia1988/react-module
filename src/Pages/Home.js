import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import { Container, CardGroup, Card , Button} from "react-bootstrap";


export default class Home extends Component {
  render() {
    return (
      <>
       <CarouselBox />
         <Container>
           <h2 className="text-center m-4">Our team </h2>
           <CardGroup>
              <Card className="m-4">
                <Card.Img variant="top"
                src="https://images.pexels.com/photos/3182784/pexels-photo-3182784.jpeg?auto=compress&cs=tinysrgb&w=400"
                />
                <Card.Body>
                  <Card.Title>Developers</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor Lorem ipsum dolor sit amet, 
                    </Card.Text>
                    <Button variant="primary">About team</Button>
                </Card.Body>
              </Card>
              <Card className="m-4">
                <Card.Img variant="top"
                src="https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg?auto=compress&cs=tinysrgb&w=400"
                />
                <Card.Body>
                  <Card.Title>Developers</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor Lorem ipsum dolor sit amet, 
                    </Card.Text>
                    <Button variant="primary">About team</Button>
                </Card.Body>
              </Card>
              <Card className="m-4">
                <Card.Img variant="top"
                src="https://images.pexels.com/photos/5256816/pexels-photo-5256816.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
                <Card.Body>
                  <Card.Title>Developers</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor Lorem ipsum dolor sit amet, 
                    </Card.Text>
                    <Button variant="primary">About team</Button>
                </Card.Body>
              </Card>
           </CardGroup>
         </Container>
      </>
    )
  }
}
