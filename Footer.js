import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//https://react-icons.github.io/react-icons/icons?name=fa

const Footer = () => {
    return (
        <div className="rodape" style={ { marginTop: "100px", background: "#f2f2f2", padding: "20px", bottom:"0", position: "relative", width:"100%" }}>
            <Container>
                <Row>
                    <Col xs={{ order: 'first' }} align="center">
                        <h5>Maxxidata</h5>
                        Todos os Direitos Reservados
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;