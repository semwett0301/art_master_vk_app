import React, {useState} from 'react';
import TextInput from "../../components/UI/TextInput/TextInput";
import Checkbox from "../../components/UI/Checkbox/Checkbox";
import Layout from "../../components/Layout/Layout";
import {useLocation, useNavigate} from "react-router-dom";

const ApplicationPage = () => {
    const [dataPermission, setDataPermission] = useState(false)
    const [codexPermission, setCodexPermission] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()

    return (
        <Layout buttonPlaceholder={'Перейти к заполнению профиля'} headerText={'Заявка'}
                submitFunction={() => navigate('/profile', {
                    location: location
                })} firstColumn={[
            <TextInput required label={'Имя'} placeholder={'Например, Иван'} description={'Как в паспорте'}/>,
            <TextInput required label={'Фамилия'} placeholder={'Например, Иванов'} description={'Как в паспорте'}/>,
            <TextInput required label={'Дата рождения'} placeholder={'00.00.0000'}/>,
            <TextInput required label={'Компетенция'} placeholder={'не выбрано'}/>,
            <TextInput required label={'Гражданство'} placeholder={'не выбрано'}/>
        ]} secondColumn={[
            <TextInput required label={'Место проживания'} placeholder={'Начните вводить название'}/>,
            <TextInput required label={'Компетенция'} placeholder={'+7 (999) 999-99-99'}/>,
            <TextInput required label={'Гражданство'} placeholder={'info@artmasters.ru'}/>,
            <Checkbox content={[
                {
                    id: 1,
                    type: 'text',
                    text: 'Я согласен на обработку '
                },
                {
                    id: 2,
                    type: 'link',
                    text: 'персональных данных',
                    link: 'https://localhost:10888/'
                }
            ]} checked={dataPermission} setChecked={setDataPermission}/>,
            <Checkbox content={[
                {
                    id: 1,
                    type: 'text',
                    text: 'Я ознакомился с '
                },
                {
                    id: 2,
                    type: 'link',
                    text: 'Положением о Чемпионате',
                    link: 'https://localhost:10888/'
                },
                {
                    id: 3,
                    type: 'text',
                    text: ', Кодексом этики и '
                },
                {
                    id: 4,
                    type: 'link',
                    text: 'принимаю условия',
                    link: 'https://localhost:10888/'
                },
                {
                    id: 5,
                    type: 'text',
                    text: ', необходимые для участия в Чемпионате'
                }
            ]} checked={codexPermission} setChecked={setCodexPermission}/>
        ]}/>
    );
};

export default ApplicationPage;
