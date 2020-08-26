import React, {useEffect, useState} from 'react';
import {get} from 'lodash';
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';
import {FaUserCircle, FaEdit, FaWindowClose, FaExclamation} from 'react-icons/fa';

import Load from '../../components/Loading';

import axios from '../../services/axios';

import {AlunoContainer, ProfilePicture, NovoAluno} from './styles';
import {Container} from '../../style/globalStyles';
import {userPhotoSize, editIconSize, deleteIconSize} from '../../config/sizes';

export default function Alunos() {
    const [alunos, setAlunos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(()=>{
        async function getData(){
            setIsLoading(true);
            const response = await axios.get('/alunos');
            setAlunos(response.data);
            setIsLoading(false);
        }

        getData();
    },[]);

    const handleDeleteAsk = e => {
        e.preventDefault();
        const exclamation = e.currentTarget.nextSibling;

        exclamation.setAttribute('display', 'block');
        e.currentTarget.remove();
    }

    const handleDelete = async (e, id, index) => {
        e.persist(); 
        try {
            setIsLoading(true);
            await axios.delete(`/alunos/${id}`);
            const novosAlunos = [...alunos];
            novosAlunos.splice(index, 1);
            setAlunos(novosAlunos);
            setIsLoading(false);
        } catch (error) {
            const status = get(error, 'response.status', 0);
            if(status === 401) 
            {
                toast.error('Você precisa efetuar o login.');
            } else {
                toast.error('Ocorreu um erro ao excluir aluno.');
            }
        }
    }

    return (
        <Container>
            <Load isLoading={isLoading}/>
            <h1>Alunos</h1>
            <NovoAluno to="/aluno/">Novo aluno</NovoAluno>
            <AlunoContainer>
                {alunos.map((aluno, index) => (
                    <div key={index}>
                        <ProfilePicture>
                            {get(aluno, 'Fotos[0].url', false)?(
                                <img src={aluno.Fotos[0].url} alt=""/>
                                ):(
                                    <FaUserCircle size={userPhotoSize} />
                                )
                            }
                        </ProfilePicture>
                        <span>{aluno.nome}</span>
                        <span>{aluno.email}</span>
                        <Link to={`/aluno/${aluno.id}/edit`}>
                            <FaEdit size={editIconSize}/>
                        </Link>
                        <Link onClick={handleDeleteAsk} to={`/aluno/${aluno.id}/delete`}>
                            <FaWindowClose size={deleteIconSize}/>
                        </Link>

                        <FaExclamation 
                            size={deleteIconSize} 
                            display="none" 
                            cursor="pointer" 
                            onClick={e => handleDelete(e, aluno.id, index)}
                        />
                    </div>))}
            </AlunoContainer>
        </Container>
    )
}
