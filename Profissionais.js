import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Header from './Header';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Axios from 'axios';

const Profissionais = () => {

    const [lista_profissionais, listaProfissionais] = useState();
    console.log(lista_profissionais);
    
    useEffect(() => {
        Axios.get("http://localhost:3001/profissionais").then((response) =>{
            listaProfissionais(response.data);
        });
    }, []);

    return (
        <React.Fragment>
            <div className="App">
                <Header />
                <Container style={{padding: "40px"}}>
                    <Row style={{marginTop:"100px"}}>
                    <Col md="12" xs="12">
                        <h1 style={{fontSize: "20px", textAlign: "left"}}>Lista de Profissionais Cadastrados</h1>
                        <Table striped bordered hover style={{marginTop: '20px'}}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nome</th>
                                    <th>Telefone</th>
                                    <th>Email</th>
                                    <th>Tipo</th>
                                    <th>Data cadastro</th>
                                    <th>Data alteração</th>
                                </tr>
                            </thead>
                            <tbody>
                                { typeof lista_profissionais != "undefined" && lista_profissionais.map((value)=>{
                                    return( <tr key={value.id_profissional}>
                                        <td> {value.id_profissional} </td>
                                        <td align="left">{value.nome}</td>
                                        <td align="left">{value.telefone}</td>
                                        <td align="left">{value.email}</td>
                                        <td align="left">{value.id_tipo}</td>
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
    export default Profissionais;