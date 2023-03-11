import React from 'react';
import Layout from "../../components/Layout/Layout";
import TextInput from "../../components/UI/TextInput/TextInput";
import TextField from "../../components/UI/TextField/TextField";
import FilePicker from "../../components/UI/FilePicker/FilePicker";
import fileLogo from '../../components/UI/FilePicker/img/paper-clip.svg'

const PortfolioPage = () => {
    return (
        <Layout buttonPlaceholder={'Сохранить'} firstColumn={[
            <TextInput label={'Вопрос'} placeholder={'Ваш вопрос'}/>,
            <TextField label={'Вопрос'} placeholder={'Ваш вопрос'}/>,
            <FilePicker label={'Загрузите файл'} imgSrc={fileLogo} buttonLabel={'Выбрать'}/>
        ]}/>
    );
};

export default PortfolioPage;
