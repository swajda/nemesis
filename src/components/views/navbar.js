import { Container, NavLink, Nav, Navbar, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { } from "react-router-dom";


const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Col sm={11}><Navbar.Brand as={NavLink} to="/">NEMESIS APP</Navbar.Brand></Col>
                <Col sm={1}>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    </Nav>
                </Col>
            </Container>
        </Navbar>
    )
};

export default NavBar;