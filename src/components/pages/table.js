import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


const Table = () => {
    return (
        <Container>
            <Row>
                <Col sm={2}><h2>Table X</h2></Col>
                <Col sm={8}><h4>Status: ... </h4></Col>
                <Col sm={2}><Button variant="primary">Show More</Button></Col>
            </Row>
        </Container>
    )
}

export default Table;