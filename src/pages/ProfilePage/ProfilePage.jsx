import React, {useRef, useState, useCallback} from 'react';
import TextInput from "../../components/UI/TextInput/TextInput";
import Radio from "../../components/UI/Radio/Radio";
import FilePicker from "../../components/UI/FilePicker/FilePicker";
import Layout from "../../components/Layout/Layout";
import fileLogo from '../../components/UI/FilePicker/img/paper-clip.svg'
import Checkbox from "../../components/UI/Checkbox/Checkbox";
import {useLocation, useNavigate} from "react-router-dom";
import CustomSelect from "../../components/UI/CustomSelect/CustomSelect";
import {Controller, useForm} from "react-hook-form";
import toOptionsList from "../../utils/toOptionsList";
import citizenship from "../ApplicationPage/model/citizenship";
import education from "./model/education";
import from from "./model/from";
import directions from "./model/directions";

const ProfilePage = () => {
    const passport = useRef()

    const navigate = useNavigate()
    const location = useLocation()

    const {control, handleSubmit, formState, setError, watch} = useForm({
        mode: 'all',
        defaultValues: {
            sex: 'мужской'
        }
    })

    const onSubmit = useCallback(() => {

    }, [])

    return (
        <Layout buttonPlaceholder={'Перейти к заполнению портфолио'} headerText={'Профиль'}
                submitFunction={handleSubmit(() => navigate('/portfolio', {
                    location: location
                }))} firstColumn={[
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
                                       value={value} onInput={onChange}
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
                                       value={value} onInput={onChange}
                                       isEmpty={error?.type === 'required'}
                                       isComplete={!invalid && isDirty}
                                       errorMessage={error?.type !== 'required' ? error?.message : undefined}
                            />
                        }>
            </Controller>,
            <Controller control={control} name={'third_name'}
                        render={({field: {onChange, value}, fieldState: {error, isDirty, invalid}}) =>
                            <TextInput label={'Отчество'} placeholder={'Например, Иванович'}
                                       value={value} onInput={onChange}
                                       isEmpty={error?.type === 'required'}
                                       isComplete={!invalid && isDirty && value !== ''}
                                       errorMessage={error?.type !== 'required' ? error?.message : undefined}
                            />
                        }>
            </Controller>,
            <Controller control={control} name={'sex'}
                        rules={
                            {
                                required: true
                            }
                        }
                        render={({field: {onChange, value}}) =>
                            <Radio label={'Пол'} required selected={value} setSelected={onChange} content={[
                                'мужской',
                                'женский'
                            ]}/>
                        }>
            </Controller>,
            <Controller control={control} name={'passport'}
                        rules={
                            {
                                required: true
                            }
                        }
                        render={({field: {onChange, value}, fieldState: {invalid, isDirty, error}}) =>
                            <FilePicker id={'file'} label={'Скан паспорта'} required
                                        description={'Или иные документы, согласно пунктам 2.4 Приложения №1 и №2 к Положению о Чемпионате. Допустимый формат: jpg, png, pdf'}
                                        imgSrc={fileLogo} buttonLabel={'Загрузить'}
                                        instruction={'До 10 файлов (общий размер - до 20 Мб)'} inputRef={passport}
                                        onInput={
                                            () => {
                                                onChange(passport.current.files?.length !== 0 ? passport.current.files : undefined)
                                            }
                                        }
                                        isEmpty={error?.type === 'required'}
                                        isComplete={!invalid && isDirty && value !== undefined}/>
                        }>
            </Controller>,
            <Controller control={control} rules={
                {
                    required: 'Заполните поле'
                }
            }
                        render={({field: {value, onChange}, fieldState: {error, invalid, isDirty}}) =>
                            <CustomSelect required
                                          label={'Образование'}
                                          placeholder={'не выбрано'}
                                          selectedOption={value}
                                          setSelectedOption={onChange}
                                          options={toOptionsList(education)}
                                          isEmpty={error?.type === 'required'}
                                          isComplete={!invalid && isDirty}
                            />}
                        name={'education'}/>,
            <Controller control={control} name={'work'}
                        render={({field: {onChange, value}, fieldState: {error, isDirty, invalid}}) =>
                            <TextInput label={'Место работы'} placeholder={'Например, ООО “Рога и копыта”'}
                                       value={value} onInput={onChange}
                                       isEmpty={error?.type === 'required'}
                                       isComplete={!invalid && isDirty && value !== ''}
                                       errorMessage={error?.type !== 'required' ? error?.message : undefined}
                            />
                        }>
            </Controller>,
        ]} secondColumn={[
            <Controller control={control} name={'dolz'}
                        render={({field: {onChange, value}, fieldState: {error, isDirty, invalid}}) =>
                            <TextInput label={'Должность'} placeholder={'Младший помощник ст. технички'}
                                       value={value} onInput={onChange}
                                       isEmpty={error?.type === 'required'}
                                       isComplete={!invalid && isDirty && value !== ''}
                                       errorMessage={error?.type !== 'required' ? error?.message : undefined}
                            />
                        }>
            </Controller>,
            <Controller control={control} name={'study'}
                        render={({field: {onChange, value}, fieldState: {error, isDirty, invalid}}) =>
                            <TextInput label={'Место учебы'} placeholder={'Колледж имени Петросяна'}
                                       value={value} onInput={onChange}
                                       isEmpty={error?.type === 'required'}
                                       isComplete={!invalid && isDirty && value !== ''}
                                       errorMessage={error?.type !== 'required' ? error?.message : undefined}
                            />
                        }>
            </Controller>,
            <Controller control={control} name={'vk'}
                        rules={{
                            pattern: {
                                value: /vk\.com\/(\w|\d)+?\/?$/,
                                message: 'Неверный формат'
                            }
                        }}
                        render={({field: {onChange, value}, fieldState: {error, isDirty, invalid}}) =>
                            <TextInput label={'VK'} placeholder={'vk.com/.......................'}
                                       value={value} onInput={onChange}
                                       isEmpty={error?.type === 'required'}
                                       isComplete={!invalid && isDirty && value !== ''}
                                       errorMessage={error?.type !== 'required' ? error?.message : undefined}
                            />
                        }>
            </Controller>,
            <Controller control={control} name={'tg'}
                        rules={{
                            pattern: {
                                value: /@(\w|\d)+?\/?$/,
                                message: 'Неверный формат'
                            }
                        }}
                        render={({field: {onChange, value}, fieldState: {error, isDirty, invalid}}) =>
                            <TextInput label={'Telegram'} placeholder={'@name'}
                                       value={value} onInput={onChange}
                                       isEmpty={error?.type === 'required'}
                                       isComplete={!invalid && isDirty && value !== ''}
                                       errorMessage={error?.type !== 'required' ? error?.message : undefined}
                            />
                        }>
            </Controller>,
            <Controller control={control}
                        render={({field: {value, onChange}, fieldState: {error, invalid, isDirty}}) =>
                            <CustomSelect required
                                          label={'Откуда узнали о Чемпионате'}
                                          placeholder={'не выбрано'}
                                          selectedOption={value}
                                          setSelectedOption={onChange}
                                          options={toOptionsList(from)}
                                          isEmpty={error?.type === 'required'}
                                          isComplete={!invalid && isDirty}
                            />}
                        name={'from'}/>,
            <Controller control={control}
                        render={({field: {onChange, value}}) => <Checkbox content={[
                            {
                                type: 'text',
                                text: 'Хочу участвовать в командных соревнованиях'
                            }]} checked={value} setChecked={onChange}/>} name={'agree1'}/>,
            <Controller control={control}
                        render={({field: {value, onChange}, fieldState: {error, invalid, isDirty}}) =>
                            <CustomSelect required
                                          label={'Направление командных соревнований'}
                                          placeholder={'не выбрано'}
                                          selectedOption={value}
                                          setSelectedOption={onChange}
                                          options={toOptionsList(directions)}
                                          isEmpty={error?.type === 'required'}
                                          isComplete={!invalid && isDirty}
                            />}
                        name={'direction'}/>
        ]}/>
    );
}

export default ProfilePage;
