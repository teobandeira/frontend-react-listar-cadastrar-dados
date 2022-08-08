import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Header from './Header';
import Footer from './Footer';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Axios from "axios";

const initialValues = {
    descricao: '',
    status_cadastro: ''
}

const CadastrarTipo = () => {

    // Pega os valores dos campos do formulário
    const [values, setValues] = useState(initialValues);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChangeValues = (value) =>{
        setValues(prevValue=>({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    }
    const handleClickButton = (e) =>{
        e.preventDefault();

        const fieldValues = Object.values(values);
        const fieldsFilled = fieldValues.filter((field) => field).length;
        
        if(fieldsFilled === fieldValues.length){
            setError(null);
            Axios.post("http://localhost:3001/cadastraTipo", {
                descricao: values.descricao,
                status_cadastro: values.status_cadastro,
            }).then((response) => {
                setSuccess('Formulário enviado com sucesso!');
            });
            return;
        }
        setError('Preencha todos os campos corretamente.')
        // console.log(values);
    }

    return (
        <React.Fragment>
            <div className="App">
                <Header />
                <Container style={{padding: "40px"}}>
                    <Row style={{marginTop:"80px"}}>
                        <h1 style={{fontSize: "20px", textAlign: "left"}}>Cadastrar Tipo</h1>
                        <Col md="6" xs="12" className='card'  style={{padding:"20px", marginTop: '20px'}}>
                            
                            <Form autoComplete='off' onSubmit={handleClickButton}>
                                
                                <Form.Group className="mb-3" style={{textAlign: "left"}}>
                                    <Form.Label>Descrição</Form.Label>
                                    <Form.Control name="descricao" type="text" placeholder="Descrição:"  onChange={handleChangeValues} />
                                </Form.Group>

                                <Form.Group className="mb-3" style={{textAlign: "left"}}>
                                    <Form.Label>Situação do cadastro:</Form.Label>
                                    <Form.Select name="status_cadastro" aria-label="Default select example"  onChange={handleChangeValues}>
                                        <option>Selecione:</option>
                                        <option value="1">Ativo</option>
                                        <option value="2">Bloqueado</option>
                                    </Form.Select>
                                </Form.Group>

                                <p style={{color: 'red'}}>{error && error}</p>
                                <p style={{color: 'green'}}>{success && success}</p>

                                <Button variant="primary" type="submit" disabled={!!success}>
                                    Cadastrar
                                </Button>

                            </Form>
                        </Col>
                    </Row>
                </Container>
                <Footer />
        </div>
        </React.Fragment>
      );
    }
    export default CadastrarTipo;