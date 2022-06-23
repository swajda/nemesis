import { Container, Form } from "react-bootstrap"

const TableForm = () => {

    return (
        <Container>
            <h1>Table X</h1>
            
                <Form.Select aria-label="Default select example">
                    <option value="0">Free</option>
                    <option value="1">Busy</option>
                    <option value="2">Reserved</option>
                    <option value="3">Cleaning</option>
                </Form.Select>

            
        </Container>
    )
}

export default TableForm;