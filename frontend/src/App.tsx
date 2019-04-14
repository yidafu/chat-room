import './App.css'
import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ChatBox from './components/ChatBox'

class App extends Component {
  public render(): React.ReactNode {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <ChatBox />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
