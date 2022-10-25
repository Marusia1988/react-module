import React, { Component } from 'react';
import {Container, Nav, Tab , Row , Col} from 'react-bootstrap';


export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
           <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                 <Nav.Item>
                  <Nav.Link eventKey="first"> Design</Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                  <Nav.Link eventKey="second"> Team</Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                  <Nav.Link eventKey="third"> Programming</Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                  <Nav.Link eventKey="fourth"> Frameworks</Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                  <Nav.Link eventKey="fifth"> Libraries</Nav.Link>
                 </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-2">
                <Tab.Pane eventKey="first">
                   <img className='col-xl-6 col-lg-9' src="https://th.jobsdb.com/th-th/wp-content/uploads/sites/3/2022/02/Design-Thinking_content.png"/>
                   <p className='col-xl-6 col-lg-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                   <img className='col-xl-6 col-lg-9' src="https://startupsmagazine.co.uk/sites/default/files/2020-11/AdobeStock_291895827ed.jpg"/>
                   <p className='col-xl-6 col-lg-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                   <img className='col-xl-6 col-lg-9' src="https://indonesiacoding.com/wp-content/uploads/2021/06/belajar-programming.jpg"/>
                   <p className='col-xl-6 col-lg-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                   <img className='col-xl-6 col-lg-9' src="https://www.netsolutions.com/insights/wp-content/uploads/2021/10/what-is-a-framework-in-programming-and-why-you-should-choose-one.jpg"/>
                   <p className='col-xl-6 col-lg-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                   <img className='col-xl-6 col-lg-9' src="https://kruschecompany.com/wp-content/uploads/2022/02/Cover-image-for-blog-post-defining-the-difference.png"/>
                   <p className='col-xl-6 col-lg-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
           </Row>
        </Tab.Container>
      </Container>
    )
  }
}
