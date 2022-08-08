import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Header from './Header';
import Footer from './Footer';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Axios from "axios";

const initialValues = {
    nome: '',
    telefone: '',
    email: '',
    tipo_profissional: '',
    status_cadastro: ''
}

const CadastrarProfissional = () => {
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
            Axios.post("http://localhost:3001/cadastraProfissional", {
                nome: values.nome,
                telefone: values.telefone,
                email: values.email,
                endereco: values.endereco,
                tipo_profissional: values.tipo_profissional,
                status_cadastro: values.status_cadastro, 
            }).then((response) => {
                setSuccess('Formulário enviado com sucesso!');
            });
            return;
        }
        setError('Preencha todos os campos corretamente.')
        // console.log(values);
    }

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
                    <Row style={{marginTop:"80px"}}>
                        <h1 style={{fontSize: "20px", textAlign: "left"}}>Cadastrar Profissional</h1>
                        <Col md="6" xs="12" className='card'  style={{padding:"20px", marginTop: '20px'}}>
                            {/* <Form style={{textAlign: "left"}} method='POST'> */}
                                
                                <form autoComplete='off' onSubmit={handleClickButton}>
                                    <Form.Group className="mb-3" style={{textAlign: "left"}}>
                                        <Form.Label>Nome completo</Form.Label>
                                        <Form.Control name="nome" type="text" placeholder="Nome:" onChange={handleChangeValues} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" style={{textAlign: "left"}}>
                                        <Form.Label>Telefone</Form.Label>
                                        <Form.Control name="telefone" type="text" placeholder="Telefone:" onChange={handleChangeValues}  />
                                    </Form.Group>

                                    <Form.Group className="mb-3" style={{textAlign: "left"}}>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control name="email" type="email" placeholder="Email:" onChange={handleChangeValues}  />
                                        <Form.Text className="text-muted">
                                            Este será o login do usuário.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" style={{textAlign: "left"}}>
                                        <Form.Label>Tipo de profissional:</Form.Label>
                                        <Form.Select name="tipo_profissional" onChange={handleChangeValues} required>
                                            <option>Selecione</option>
                                            { typeof lista_tipos != "undefined" && lista_tipos.map((value)=>{
                                                return(
                                                    <option key={value.id_tipo} value={value.id_tipo}>{value.descricao}</option>
                                                );
                                            })}
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3" style={{textAlign: "left"}}>
                                        <Form.Label>Situação do cadastro:</Form.Label>
                                        <Form.Select name="status_cadastro" onChange={handleChangeValues} required>
                                            <option>Selecione</option>
                                            <option value="1">Ativo</option>
                                            <option value="0">Bloqueado</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <p style={{color: 'red'}}>{error && error}</p>
                                    <p style={{color: 'green'}}>{success && success}</p>

                                    <Button variant="primary" type="submit" disabled={!!success}>
                                        Cadastrar
                                    </Button>
                                </form>
                            {/* </Form> */}
                        </Col>
                    </Row>
                </Container>
                <Footer />
        </div>
        </React.Fragment>
      );
    }
    export default CadastrarProfissional;