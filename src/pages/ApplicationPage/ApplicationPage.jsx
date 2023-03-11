import React, {useState} from 'react';
import cl from './ApplicationPage.module.css'
import Header from "../../components/Header/Header";
import TextInput from "../../components/UI/TextInput/TextInput";
import Checkbox from "../../components/UI/Checkbox/Checkbox";
import Button from "../../components/UI/Button/Button";
import Radio from "../../components/UI/Radio/Radio";
import TextField from "../../components/UI/TextField/TextField";
import FilePicker from "../../components/UI/FilePicker/FilePicker";
import icon from '../../components/UI/FilePicker/img/paper-clip.svg'

const ApplicationPage = () => {
    const [dataPermission, setDataPermission] = useState(false)
    const [codexPermission, setCodexPermission] = useState(false)

    const [selected, setSelected] = useState('мужской')

    return (
        <div className={cl.wrapper}>
            <Header text={'Заявка'} className={cl.header}/>
            <div className={cl.content}>
                <div className={cl.contentBlock}>
                    <TextInput required label={'Имя'} placeholder={'Например, Иван'} description={'Как в паспорте'} />
                    <TextInput required label={'Фамилия'} placeholder={'Например, Иванов'} description={'Как в паспорте'} />
                    <TextInput required label={'Дата рождения'} placeholder={'00.00.0000'} />
                    <TextInput required label={'Компетенция'} placeholder={'не выбрано'} />
                    <TextInput required label={'Гражданство'} placeholder={'не выбрано'} />
                </div>
                <div className={cl.contentBlock}>
                    <TextInput required label={'Место проживания'} placeholder={'Начните вводить название'} />
                    <TextInput required label={'Компетенция'} placeholder={'+7 (999) 999-99-99'} />
                    <TextInput required label={'Гражданство'} placeholder={'info@artmasters.ru'} />
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
                    ]} checked={dataPermission} setChecked={setDataPermission}/>
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
                </div>
            </div>
            <Button className={cl.button} placeholder={'Перейти к заполнению профиля'} />
        </div>
    );
};

export default ApplicationPage;
