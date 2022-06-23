import { Container } from "react-bootstrap";
import Table from "./table";
import TableForm from "./tableForm";
const Home = () => {
    return (
        <Container>
            <h1>ALL TABLES</h1>
            <Table />
            <TableForm />
        </Container>
    )
};

export default Home;