import React, {useCallback, useEffect, useMemo} from 'react';
import TextInput from "../../components/UI/TextInput/TextInput";
import Checkbox from "../../components/UI/Checkbox/Checkbox";
import Layout from "../../components/Layout/Layout";
import {useLocation, useNavigate} from "react-router-dom";
import CustomSelect from "../../components/UI/CustomSelect/CustomSelect";
import {Controller, useForm} from "react-hook-form";
import moment from 'moment';
import toOptionsList from "../../utils/toOptionsList";
import {junior, main, middle} from "./model/competition";
import citizenship from "./model/citizenship";

const ApplicationPage = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const {control, handleSubmit, formState, setError, watch} = useForm({
        mode: 'all',
        defaultValues: {
            first_name: '',
            last_name: '',
            birthdate: '',
            category: undefined,
            citizenship: undefined,
            region: '',
            email: '',
            phone: '',
            agree1: false,
            agree2: false
        }
    })

    const dateOfBirth = watch('birthdate')

    const competition = useMemo(() => {
        const date = moment(dateOfBirth, "DD.MM.YYYY", true)

        if (date.isValid()) {
            const years = moment().diff(date, 'year')

            if (years >= 14 && years < 18) {
                return toOptionsList(junior)
            } else {
                if (years >= 18 && years <= 35) {
                    const result = toOptionsList(main)

                    if (years >= 20) result.concat(toOptionsList(middle))

                    return result
                } else {
                    return []
                }
            }
        } else {
            return []
        }
    }, [dateOfBirth])

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
                firstColumn={[
                    <Controller control={control} name={'first_name'} rules={
                        {
                            required: 'Поле обязательно'
                        }
                    }
                                render={({
                                             field: {onChange, value},
                                             fieldState: {error, invalid, isDirty},
                                         }) =>
                                    <TextInput required label={'Имя'} placeholder={'Например, Иван'}
                                               description={`Как в паспорте`} value={value} onInput={onChange}
                                               isEmpty={error?.type === 'required'}
                                               isComplete={!invalid && isDirty}
                                               errorMessage={error?.type !== 'required' ? error?.message : undefined}/>
                                }>
                    </Controller>,
                    <Controller control={control} name={'last_name'} rules={
                        {
                            required: 'Поле обязательно'
                        }
                    }
                                render={({field: {onChange, value}, fieldState: {error, isDirty, invalid}}) =>
                                    <TextInput required label={'Фамилия'} placeholder={'Например, Иванов'}
                                               description={'Как в паспорте'}
                                               value={value} onInput={onChange}
                                               isEmpty={error?.type === 'required'}
                                               isComplete={!invalid && isDirty}
                                               errorMessage={error?.type !== 'required' ? error?.message : undefined}
                                    />
                                }>
                    </Controller>,
                    <Controller control={control} name={'birthdate'} rules={
                        {
                            required: 'Дозаполните дату',
                            validate: value => {
                                if (value.search('_') !== -1) {
                                    if (value.search(/\d?/)) {
                                        return true
                                    } else {
                                        return 'Дозаполните дату'
                                    }
                                }

                                const date = moment(value, "DD.MM.YYYY", true)

                                if (date.isValid()) {
                                    if (moment().diff(date, 'millisecond') < 0) {
                                        return 'Некорректная дата рождения'
                                    } else {
                                        if (moment().diff(date, 'year') > 35 || moment().diff(date, 'year') < 14) {
                                            return 'Вы не можете участвовать в конкурсе'
                                        } else {
                                            return true
                                        }
                                    }
                                } else {
                                    return 'Дата некорректна'
                                }
                            }
                        }
                    }
                                render={({field: {onChange, value}, fieldState: {error, invalid, isDirty}}) =>
                                    <TextInput required label={'Дата рождения'} placeholder={'00.00.0000'} mask={'99.99.9999'} value={value}
                                               onInput={onChange} v
                                               emptyMessage={error?.message === 'Дозаполните дату' ? error?.message : undefined}
                                               errorMessage={error?.message !== 'Дозаполните дату' ? error?.message : undefined}
                                               isComplete={!invalid && isDirty && value.search('_') === -1}
                                    />
                                }/>,
                    <Controller control={control} rules={
                        {
                            required: 'Заполните поле'
                        }
                    }
                                render={({field: {value, onChange}, fieldState: {error, invalid, isDirty}}) =>
                                    <CustomSelect required
                                                  label={'Компетенция'}
                                                  placeholder={'не выбрано'}
                                                  description={'Перед выбором компетенции укажите дату рождения'}
                                                  failDescription={formState.errors?.birthdate}
                                                  selectedOption={value}
                                                  setSelectedOption={onChange}
                                                  isEmpty={error?.type === 'required'}
                                                  isComplete={!invalid && isDirty}
                                                  onClick={() => {
                                                      if (!formState.errors?.birthdate && !formState.dirtyFields?.birthdate) {
                                                          setError('birthdate', {
                                                              type: 'required',
                                                              message: 'Заполните поле'
                                                          })
                                                      }
                                                  }}
                                                  options={competition}/>}
                                name={'category'}/>,
                    <Controller control={control} rules={
                        {
                            required: 'Заполните поле'
                        }
                    }
                                render={({field: {value, onChange}, fieldState: {error, invalid, isDirty}}) =>
                                    <CustomSelect required
                                                  label={'Гражданство'}
                                                  placeholder={'не выбрано'}
                                                  selectedOption={value}
                                                  setSelectedOption={onChange}
                                                  options={toOptionsList(citizenship)}
                                                  isEmpty={error?.type === 'required'}
                                                  isComplete={!invalid && isDirty}
                                    />}
                                name={'citizenship'}/>,
                ]} secondColumn={[
            <Controller control={control} name={'region'} rules={
                {
                    required: 'Поле обязательно',
                    pattern: {
                        value: /^[а-яА-ЯёЁ]+$/,
                        message: 'Используйте только русский язык'
                    }
                }
            }
                        render={({field: {onChange, value}, fieldState: {error, invalid, isDirty}}) =>
                            <TextInput required label={'Место проживания'} placeholder={'Начните вводить название'}
                                       value={value} onInput={onChange}
                                       isEmpty={error?.type === 'required'}
                                       isComplete={!invalid && isDirty}
                                       errorMessage={error?.type !== 'required' ? error?.message : undefined}
                            />
                        }/>,
            <Controller control={control} name={'phone'} rules={
                {
                    required: 'Дозаполните телефон',
                    pattern: {
                        value: /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/,
                        message: 'Дозаполните телефон'
                    }
                }
            }
                        render={({
                                     field: {value, onChange},
                                     fieldState: {error, invalid, isDirty},
                                     formState: {submitCount}
                                 }) =>
                            <TextInput required label={'Телефон'} placeholder={'+7 (999) 999-99-99'}
                                       mask={'+7 (999) 999-99-99'}
                                       value={value} onInput={onChange}
                                       isComplete={!invalid && isDirty && value.search('_') === -1}
                                       emptyMessage={(error?.type === 'pattern' || error?.type === 'required') && submitCount > 0 ? error.message : undefined}
                            />
                        }/>,
            <Controller control={control} name={'email'} rules={
                {
                    required: 'Поле обязательно',
                    pattern: {
                        value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((`[^<>()[\].,;:\s@"]`+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                        message: 'Используйте правильный формат'
                    }
                }
            }
                        render={({field: {onChange, value}, fieldState: {error, invalid, isDirty}}) =>
                            <TextInput required label={'Адрес электронной почты'} placeholder={'info@artmasters.ru'}
                                       value={value} onInput={onChange}
                                       isEmpty={error?.type === 'required'}
                                       isComplete={!invalid && isDirty}
                                       errorMessage={error?.type !== 'required' ? error?.message : undefined}
                            />
                        }/>,

            <Controller control={control}
                        rules={
                            {
                                required: true
                            }
                        }
                        render={({field: {onChange, value}, fieldState: {error},}) => <Checkbox content={[
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
                        ]} checked={value} setChecked={onChange} isError={error}/>} name={'agree1'}/>,

            <Controller control={control}
                        rules={
                            {
                                required: true
                            }
                        }
                        render={({field: {onChange, value}, fieldState: {error},}) => <Checkbox content={[
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
                        ]} checked={value} setChecked={onChange} isError={error}/>} name={'agree2'}/>
        ]}
        />)
}

export default ApplicationPage;
