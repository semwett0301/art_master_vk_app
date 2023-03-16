import React, {useMemo} from 'react';
import Layout from "../../components/Layout/Layout";
import {useLocation, useNavigate} from "react-router-dom";
import {config} from "./config";
import {Controller, useForm} from "react-hook-form";
import TextField from "../../components/UI/TextField/TextField";
import TextInput from "../../components/UI/TextInput/TextInput";
import FilePicker from "../../components/UI/FilePicker/FilePicker";

const PortfolioPage = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const currentConfig = useMemo(() => {
        return config['photograph']
    }, [])

    const {control, handleSubmit, formState, setError, watch} = useForm({
        mode: 'all'
    })

    return (
        <Layout buttonPlaceholder={'Сохранить'} headerText={'Портфолио'}
                submitFunction={handleSubmit(() => navigate('/end   ', {
                    location: location
                }))} firstColumn={[currentConfig.text]} secondColumn={[currentConfig.components.map(component => {
            return <Controller control={control} rules={
                {
                    ...component.validation
                }
            } render={({field: {value, onChange}, fieldState: {error, invalid, isDirty}}) => {
                const props = {
                    ...component.props,
                    errorMessage: error?.type !== 'required' ? error?.message : undefined,
                    isComplete: !invalid && isDirty,
                    isEmpty: error?.type === 'required'
                }

                switch (component.type) {
                    case 'TextField':
                        return <TextField {...props} value={value} onInput={onChange}/>
                    case 'TextInput':
                        return <TextInput {...props} value={value} onInput={onChange}/>
                    case 'FilePicker':
                        return <FilePicker {...props} id={component.name}/>
                    default:
                        return <></>
                }
            }
            } name={component.name}/>
        })]}/>
    );
};

export default PortfolioPage;
