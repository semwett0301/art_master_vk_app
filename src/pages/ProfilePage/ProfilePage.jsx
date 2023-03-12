import React, {useRef, useState} from 'react';
import TextInput from "../../components/UI/TextInput/TextInput";
import Radio from "../../components/UI/Radio/Radio";
import FilePicker from "../../components/UI/FilePicker/FilePicker";
import Layout from "../../components/Layout/Layout";
import fileLogo from '../../components/UI/FilePicker/img/paper-clip.svg'
import Checkbox from "../../components/UI/Checkbox/Checkbox";
import {useLocation, useNavigate} from "react-router-dom";
import CustomSelect from "../../components/UI/CustomSelect/CustomSelect";

const ProfilePage = () => {
    const [sex, setSex] = useState('мужской')
    const [wantParticipate, setWantParticipate] = useState(false)
    const passport = useRef()

    const navigate = useNavigate()
    const location = useLocation()

    return (
        <Layout buttonPlaceholder={'Перейти к заполнению портфолио'} headerText={'Профиль'}
                submitFunction={() => navigate('/portfolio', {
                    location: location
                })} firstColumn={[
            <TextInput label={'Имя'} placeholder={'Например, Иван'}/>,
            <TextInput label={'Фамилия'} placeholder={'Например, Иванов'}/>,
            <TextInput label={'Отчество'} placeholder={'Например, Иванович'}/>,
            <Radio label={'Пол'} required selected={sex} setSelected={setSex} content={[
                'мужской',
                'женский'
            ]}/>,
            <FilePicker id={'file'} label={'Скан паспорта'} required
                        description={'Или иные документы, согласно пунктам 2.4 Приложения №1 и №2 к Положению о Чемпионате. Допустимый формат: jpg, png, pdf'}
                        imgSrc={fileLogo} buttonLabel={'Загрузить'}
                        instruction={'До 10 файлов (общий размер - до 20 Мб)'} inputRef={passport}/>,
            <CustomSelect label={'Образование'} placeholder={'не выбрано'}/>,
            <TextInput label={'Место работы'} placeholder={'Например, ООО “Рога и копыта”'}/>,
        ]} secondColumn={[
            <TextInput label={'Должность'} placeholder={'Младший помощник ст. технички'}/>,
            <TextInput label={'Место учебы'} placeholder={'Колледж имени Петросяна'}/>,
            <TextInput label={'VK'} placeholder={'vk.com/.......................'}/>,
            <TextInput label={'Telegram'} placeholder={'@name'}/>,
            <CustomSelect label={'Откуда узнали о Чемпионате'} placeholder={'не выбрано'}/>,
            <Checkbox content={[
                {
                    type: 'text',
                    text: 'Хочу участвовать в командных соревнованиях'
                }
            ]} checked={wantParticipate} setChecked={setWantParticipate}/>,
            <TextInput label={'Направление командных соревнований'} placeholder={'не выбрано'}/>
        ]}/>
    );
}

export default ProfilePage;
