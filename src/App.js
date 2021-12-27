import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Card } from './style-app';

function App() {
  const [toDo, setToDo] = useState([]);

  const loadData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    setToDo(data.slice(0, 5));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {console.log(toDo)}
      <Container>
        <Row>
          {toDo.map((item) => (
            <>
              <Col lg={4}>
                <Card key={item.id}>
                  <h1>{item.title}</h1>
                  <p>Completado: {item.completed ? 'true' : 'false'}</p>
                </Card>
              </Col>
            </>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
