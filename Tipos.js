import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Header from './Header';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Axios from 'axios';

const Tipos = () => {

    const [lista_tipos, listaTipos] = useState();
    console.log(lista_tipos);
    
    useEffect(() => {
        Axios.get("http://localhost:3001/tipos").then((response) =>{
            listaTipos(response.data);
        });
    }, []);

    return (
        <React.Fragment>
            <div className="App">
                <Header />
                <Container style={{padding: "40px"}}>
                    <Row style={{marginTop:"100px"}}>
                    <Col md="12" xs="12">
                        <h1 style={{fontSize: "20px", textAlign: "left"}}>Lista de Tipos Cadastrados</h1>
                        <Table striped bordered hover style={{ marginTop: '20px'}}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Descrição</th>
                                    <th>Status cadastro</th>
                                    <th>Data cadastro</th>
                                    <th>Data alteração</th>
                                </tr>
                            </thead>
                            <tbody>
                                { typeof lista_tipos != "undefined" && lista_tipos.map((value)=>{
                                    return( <tr key={value.id_tipo}>
                                        <td> {value.id_tipo} </td>
                                        <td align="left">{value.descricao}</td>
                                        <td> {value.situacao}</td>
                                        <td>{value.data_cadastro}</td>
                                        <td> -- {value.data_alteracao}</td>
                                    </tr>);
                                })}
                            </tbody>
                        </Table>
                    </Col>
                    </Row>
                </Container>
                <Footer />
        </div>
        </React.Fragment>
      );
    }
    export default Tipos;