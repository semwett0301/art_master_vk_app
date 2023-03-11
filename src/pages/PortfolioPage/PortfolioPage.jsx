import React from 'react';
import Layout from "../../components/Layout/Layout";
import TextInput from "../../components/UI/TextInput/TextInput";
import FilePicker from "../../components/UI/FilePicker/FilePicker";
import TextField from "../../components/UI/TextField/TextField";
import fileLogo from '../../components/UI/FilePicker/img/paper-clip.svg'
import {useLocation, useNavigate} from "react-router-dom";

const PortfolioPage = () => {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <Layout buttonPlaceholder={'Сохранить'} headerText={'Портфолио'} submitFunction={() => navigate('/end   ', {
            location: location
        })} firstColumn={[
            <TextInput label={'Вопрос'} placeholder={'Ваш вопрос'}/>,
            <TextField label={'Вопрос'} placeholder={'Ваш вопрос'}/>,
            <FilePicker label={'Загрузите файл'} imgSrc={fileLogo} buttonLabel={'Выбрать'}/>
        ]}/>
    );
};

export default PortfolioPage;
