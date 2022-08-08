import React from 'react';
import Item from './Card';
import Header from './Header';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return (
        <React.Fragment>
            <div className="App">
                <Header />
                <Container style={{padding: "40px"}}>
                    <Row style={{marginTop:"100px"}}>
                    <Col md="3" xs="12"><Item link="http://localhost:3000/profissionais" titulo="Listar Profissionais" desc="Exibe a lista de profissionais cadastrados" /></Col>
                    <Col md="3" xs="12"><Item link="http://localhost:3000/tipos" titulo="Listar Tipos" desc="Exibe a lista de profissionais cadastrados" /></Col>
                    <Col md="3" xs="12"><Item link="http://localhost:3000/cadastrar-profissional" titulo="Cadastrar Profissional" desc="Exibe a lista de profissionais cadastrados" /></Col>
                    <Col md="3" xs="12"><Item link="http://localhost:3000/cadastrar-tipo" titulo="Cadastrar Tipo" desc="Exibe a lista de profissionais cadastrados" /></Col>
                    </Row>
                </Container>
                <Footer />
        </div>
        </React.Fragment>
      );
    }
    export default Home;