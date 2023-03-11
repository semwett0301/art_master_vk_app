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
    const [permission, setPermission] = useState(false)
    const [selected, setSelected] = useState('мужской')

    return (
        <div className={cl.wrapper}>
            <Header/>
            <TextInput label={'Имя'} description={'Как в паспорте'} required={true} placeholder={'Например, Иван'}/>
            <TextInput label={'Фамилия'} description={'Как в паспорте'} required={true}
                       placeholder={'Например, Иванов'}/>
            <TextInput label={'Дата рождения'} required={true} placeholder={'00.00.0000'}/>
            <TextInput label={'Место проживания'} required={true} placeholder={'Начните вводить название'}/>
            <TextInput label={'Телефон'} required={true} placeholder={'+7 (999) 999-99-99'}/>
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
            ]} checked={permission} setChecked={setPermission}/>
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
            ]} checked={permission} setChecked={setPermission}/>
            <Radio required={true} label={'Пол'} content={[
                'мужской',
                'женский'
            ]} selected={selected} setSelected={setSelected}/>
            <TextField required={true} label={'Вопрос'} placeholder={'Длинное текстовое поле'}/>
            <FilePicker className={cl.testWrapper} label={'Скан паспорта'} id={'scan_passport'} required={true} buttonLabel={'Загрузить'}
                        instruction={'До 10 файлов (общий размер - до 20 Мб)'}
                        description={'Или иные документы, согласно пунктам 2.4 Приложения №1 и №2 к Положению о Чемпионате. Допустимый формат: jpg, png, pdf'}
                        imgSrc={icon}/>
            {/*<Button placeholder={'Перейти к заполнению профиля'}/>*/}
        </div>
    );
};

export default ApplicationPage;
