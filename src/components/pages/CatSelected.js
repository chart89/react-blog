import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router';
import FilteredPostsByCat from '../features/FilteredPostsByCat';

const CatSelected = () => {

    const { categoryName } = useParams();
    

    return (
        <div>
            <Container className="my-3">
                <Row>
                    <Col><h1>Category: {categoryName}</h1></Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <FilteredPostsByCat cat={categoryName} />
                </Row>
            </Container>
        </div>
    );
}

export default CatSelected;
