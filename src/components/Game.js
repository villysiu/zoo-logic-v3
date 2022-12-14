import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GameBoard from './GameBoard';
const Game = ({width}) =>{
    console.log(width)
    return (
        <Container>
            <Row>
                <Col lg="1">blank</Col>
                <Col><GameBoard width={width} /></Col>
                <Col lg="2">right</Col>
                
            </Row>
            
        </Container>
    )
}
export default Game