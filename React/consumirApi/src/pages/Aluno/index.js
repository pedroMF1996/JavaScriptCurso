import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import {get} from 'lodash';
import {isEmail, isInt, isFloat} from 'validator';
import {useDispatch} from 'react-redux';
import {FaUserCircle, FaEdit} from 'react-icons/fa';

import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

import Loading from '../../components/Loading';

import {Container} from '../../style/globalStyles';
import {Form, ProfilePicture, Title} from './styles';

export default function Aluno({match}) {
    const dispatch = useDispatch();

    const id = get(match, 'params.id', '');
    const [nome, setNome] = useState('');
    const [sobreNome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [foto, setFoto] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    

    useEffect(()=>{
        if(!id) return;
        async function getData(){
            try {
                setIsLoading(true);
                const {data} = await axios.get(`/alunos/${id}`);
                const Foto = get(data,'Fotos[0].url','');

                Foto && setFoto(Foto);

                setNome(data.nome);
                setSobrenome(data.sobrenome);
                setEmail(data.email);
                setIdade(data.idade);
                setPeso(data.peso);
                setAltura(data.altura);

                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
                const status = get(err, 'response.status', 0);
                const errors = get(err, 'response.data.errors', []);

                if(status === 400)   errors.map(error => toast.error(error));
                history.push('/');
            }
        }
        getData();
    }, [id]);

    const handleSubmit = async e => {
        setIsLoading(true);
        e.preventDefault();
        let formErrors = false;
        console.log({id, nome, sobreNome, email, idade, peso, altura});
        if(nome.length< 3 || nome.length > 255){
            toast.error('Nome precisa ter entre 3 e 255 caractéres.');
            formErrors = true;
        }
        if(sobreNome.length< 3 || sobreNome.length > 255){
            toast.error('Nome precisa ter entre 3 e 255 caractéres.');
            formErrors = true;
        }
        if(!isEmail(email)){
            toast.error('Email inválido.');
            formErrors = true;
        }
        if(!isInt(idade)){
            toast.error('Idade precisa ser um número inteiro.');
            formErrors = true;
        }
        if(!isFloat(peso) && !isInt(peso)){
            toast.error('Peso precisa ser um número inteiro ou de ponto flutuante.');
            formErrors = true;
        }
        if(!isFloat(altura) && !isInt(altura)){
            toast.error('Altura precisa ser um número inteiro ou de ponto flutuante.');
            formErrors = true;
        }

        if(formErrors) return;

        try {
            if(id){
                //editando
                await axios.put(`/alunos/${id}`, {nome,sobrenome: sobreNome,email,idade,peso,altura});
                toast.success('Aluno editado com sucesso.');
            }else{
                //criando
                const {data} = await axios.post(`/alunos/`, {nome,sobrenome: sobreNome,email,idade,peso,altura});
                toast.success('Aluno editado com sucesso.');
                history.push(`/aluno/${data.id}/edit`);
            }
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            const status = get(err, 'response.status', 0);
            const data = get(err, 'response.data', {});
            const errors = get(err, 'response.data.errors', []);

            if(status === 400)   errors.map(error => toast.error(error));

            if(status === 401){
                toast.error('Seu token não é válido.');
                dispatch(actions.loginFailure(data));
            }
        }
    }

    return (
        <Container>
            <Loading isLoading={isLoading}/>
            <Title>{id ? 'Editar aluno' : 'Novo aluno'}</Title>
            {id && 
                (
                    <ProfilePicture> 
                        {foto? 
                            (
                                <img src={foto} alt={nome} />
                            ) : ( 
                                <FaUserCircle size={180}/>
                            )}
                            <Link to={`/fotos/${id}`}>
                                <FaEdit size={24}/>
                            </Link>
                    </ProfilePicture>
                )
            }
            <Form onSubmit={handleSubmit}>
                <input 
                    type="name"
                    value={nome}
                    onChange={e => {setNome(e.target.value)}}
                    placeholder="Nome"
                />
                <input 
                    type="text"
                    value={sobreNome}
                    onChange={e => {setSobrenome(e.target.value)}}
                    placeholder="sobrenome"
                />
                <input 
                    type="email"
                    value={email}
                    onChange={e => {setEmail(e.target.value)}}
                    placeholder="Email"
                />
                <input 
                    type="text"
                    value={idade}
                    onChange={e => {setIdade(e.target.value)}}
                    placeholder="Idade"
                />
                <input 
                    type="text"
                    value={peso}
                    onChange={e => {setPeso(e.target.value)}}
                    placeholder="Peso"
                />
                <input 
                    type="text"
                    value={altura}
                    onChange={e => {setAltura(e.target.value)}}
                    placeholder="Altura"
                />
                <button type="submit">Enviar</button>
            </Form>
        </Container>
    )
}

