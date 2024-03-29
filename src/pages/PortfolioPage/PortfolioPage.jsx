import React, {useCallback, useMemo, useRef} from 'react';
import Layout from "../../components/Layout/Layout";
import {useLocation, useNavigate} from "react-router-dom";
import {config, configNameToAlias} from "./config";
import {Controller, useForm} from "react-hook-form";
import TextField from "../../components/UI/TextField/TextField";
import TextInput from "../../components/UI/TextInput/TextInput";
import FilePicker from "../../components/UI/FilePicker/FilePicker";
import {useSelector} from "react-redux";

const PortfolioPage = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const major = useSelector(state => state.major)

    const currentConfig = useMemo(() => {
        return config[major]
    }, [major])

    const {control, handleSubmit, formState, setError, watch} = useForm({
        mode: 'all'
    })

    const files = useRef({
        [major]: {}
    })

    const makeComponent = useCallback(component => {
        return <Controller control={control} rules={
            {
                ...component.validation
            }
        } render={({field: {value, onChange}, fieldState: {error, invalid, isDirty}}) => {
            const props = {
                ...component.props,
                errorMessage: error?.type !== 'required' && error?.message ? error?.message : undefined,
                isComplete: !invalid && isDirty && (component?.validation?.required || value !== ''),
                isEmpty: error?.type === 'required'
            }

            files.current[major][component.name] = {
                current: {}
            }

            switch (component.type) {
                case 'TextField':
                    return <TextField {...props} value={value} onInput={onChange}/>
                case 'TextInput':
                    return <TextInput {...props} value={value} onInput={onChange}/>
                case 'FilePicker':
                    return <FilePicker inputRef={files.current[major][component.name]} onInput={
                        () => {
                            onChange(files.current[major][component.name].current.files?.length !== 0 ? files.current[major][component.name].current.files : undefined)
                        }
                    } {...props} id={component.name} isEmpty={error?.type === 'required'}
                                       isComplete={!invalid && isDirty && value !== undefined}/>
                default:
                    return <></>
            }
        }
        } name={component.name}/>
    }, [control])

    return (
        <Layout buttonPlaceholder={'Сохранить'} headerText={`Портфолио ${configNameToAlias[major]}`}
                submitFunction={handleSubmit(() => navigate('/end   ', {
                    location: location
                }))} firstColumn={[
            ...currentConfig.text.split('\n').map(e => {
                return <div>{e}</div>
            }),
            ...currentConfig.components?.firstColumn?.map(makeComponent)
        ]}
                secondColumn={[currentConfig.components?.secondColumn?.map(makeComponent)]}/>
    );
}

export default PortfolioPage;
