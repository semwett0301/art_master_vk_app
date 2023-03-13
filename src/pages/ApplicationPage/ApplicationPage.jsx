import React, {useCallback, useState} from 'react';
import TextInput from "../../components/UI/TextInput/TextInput";
import Checkbox from "../../components/UI/Checkbox/Checkbox";
import Layout from "../../components/Layout/Layout";
import {useLocation, useNavigate} from "react-router-dom";
import CustomSelect from "../../components/UI/CustomSelect/CustomSelect";
import {useForm, Controller} from "react-hook-form";

const ApplicationPage = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const {control, handleSubmit, formState, watch} = useForm({
        mode: 'all'
    })

    const onSubmit = useCallback(() => {

    }, [])

    return (
        <Layout buttonPlaceholder={'Перейти к заполнению профиля'} headerText={'Заявка'}
                submitFunction={handleSubmit(() => {
                    console.log('click')
                    onSubmit()
                    navigate('/profile', {
                        location: location
                    })
                })}
            buttonDisabled={!formState.isValid}
                firstColumn={[
                    <Controller control={control} name={'name'} rules={
                        {
                            required: 'Поле обязательно'
                        }
                    }
                                render={({field: {onChange, value}, fieldState: {error}}) =>
                                    <TextInput required label={'Имя'} placeholder={'Например, Иван'}
                                               description={'Как в паспорте'} value={value} onInput={onChange}
                                               emptyMessage={error?.type === 'required' ? error?.message : undefined}
                                               errorMessage={error?.type !== 'required' ? error?.message : undefined}/>
                                }>
                    </Controller>,
                    <Controller control={control} name={'surname'} rules={
                        {
                            required: 'Поле обязательно'
                        }
                    }
                                render={({field: {onChange, value}, fieldState: {error}}) =>
                                    <TextInput required label={'Фамилия'} placeholder={'Например, Иванов'}
                                               description={'Как в паспорте'}
                                               value={value} onInput={onChange}
                                               emptyMessage={error?.type === 'required' ? error?.message : undefined}
                                               errorMessage={error?.type !== 'required' ? error?.message : undefined}
                                    />
                                }>
                    </Controller>,
                    <Controller control={control} name={'birth_date'} rules={
                        {
                            required: 'Поле обязательно',
                            // pattern: {
                            //     value: / [0-9][0-9]\.[0-9][0-9]\.[0-9][0-9][0-9][0-9]/,
                            //     message: 'Используйте правильный формат'
                            // }
                        }
                    }
                                render={({field: {onChange, value}, fieldState: {error}}) =>
                                    <TextInput required label={'Дата рождения'} placeholder={'00.00.0000'} value={value}
                                               onInput={onChange}
                                               emptyMessage={error?.type === 'required' ? error?.message : undefined}
                                               errorMessage={error?.type !== 'required' ? error?.message : undefined}
                                    />
                                }>
                    </Controller>,
                    // <CustomSelect required label={'Компетенция'} placeholder={'не выбрано'} options={[
                    //     {
                    //         label: 'ABC'
                    //     },
                    //     {
                    //         label: 'DDD'
                    //     }
                    // ]} selectedOption={competition} setSelectedOption={setCompetition}
                    //               description={'Перед выбором компетенции укажите дату рождения'}/>,
                    <CustomSelect required label={'Гражданство'} placeholder={'не выбрано'}/>
                ]} secondColumn={[
            <Controller control={control} name={'place_of_living'} rules={
                {
                    required: 'Поле обязательно',
                    // pattern: {
                    //     value: /^[А-ЯЁ][a-яё]*$/,
                    //     message: 'Используйте только русский язык'
                    // }
                }
            }
                        render={({field: {onChange, value}, fieldState: {error}}) =>
                            <TextInput required label={'Место проживания'} placeholder={'Начните вводить название'}
                                       value={value} onInput={onChange}
                                       emptyMessage={error?.type === 'required' ? error?.message : undefined}
                                       errorMessage={error?.type !== 'required' ? error?.message : undefined}
                            />
                        }/>,
            <Controller control={control} name={'phone'} rules={
                {
                    required: 'Поле обязательно',
                    pattern: {
                        value: /^(\+7\s\()(\d{3})(\)\s)(\d{3})(-\d{2}){2}$/,
                        message: 'Используйте правильный формат'
                    }
                }
            }
                        render={({field: {onChange, value}, fieldState: {error}}) =>
                            <TextInput required label={'Телефон'} placeholder={'+7 (999) 999-99-99'}
                                       value={value} onInput={onChange}
                                       emptyMessage={error?.type === 'required' ? error?.message : undefined}
                                       errorMessage={error?.type !== 'required' ? error?.message : undefined}
                            />
                        }/>,
            <Controller control={control} name={'email'} rules={
                {
                    required: 'Поле обязательно',
                    pattern: {
                        value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                        message: 'Используйте правильный формат'
                    }
                }
            }
                        render={({field: {onChange, value}, fieldState: {error}}) =>
                            <TextInput required label={'Адрес электронной почты'} placeholder={'info@artmasters.ru'}
                                       value={value} onInput={onChange}
                                       emptyMessage={error?.type === 'required' ? error?.message : undefined}
                                       errorMessage={error?.type !== 'required' ? error?.message : undefined}
                            />
                        }/>,
            // <Checkbox content={[
            //     {
            //         id: 1,
            //         type: 'text',
            //         text: 'Я согласен на обработку '
            //     },
            //     {
            //         id: 2,
            //         type: 'link',
            //         text: 'персональных данных',
            //         link: 'https://localhost:10888/'
            //     }
            // ]} checked={dataPermission} setChecked={setDataPermission}/>,
            // <Checkbox content={[
            //     {
            //         id: 1,
            //         type: 'text',
            //         text: 'Я ознакомился с '
            //     },
            //     {
            //         id: 2,
            //         type: 'link',
            //         text: 'Положением о Чемпионате',
            //         link: 'https://localhost:10888/'
            //     },
            //     {
            //         id: 3,
            //         type: 'text',
            //         text: ', Кодексом этики и '
            //     },
            //     {
            //         id: 4,
            //         type: 'link',
            //         text: 'принимаю условия',
            //         link: 'https://localhost:10888/'
            //     },
            //     {
            //         id: 5,
            //         type: 'text',
            //         text: ', необходимые для участия в Чемпионате'
            //     }
            // ]} checked={codexPermission} setChecked={setCodexPermission}/>
        ]}/>
    );
};

export default ApplicationPage;
