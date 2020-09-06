import styles from './login.module.scss'
import Icon from 'react-icons-kit'
import {basic_mail} from 'react-icons-kit/linea/basic_mail'
import {basic_lock} from 'react-icons-kit/linea/basic_lock'
import {useForm} from "react-hook-form";
import {Form, TextBox} from "./index";
import {LinkButton} from "../button";

const FormLogin = () => {
    const {register, handleSubmit, watch, errors} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <>
            <Form onsubmit={handleSubmit(onSubmit)} submitLabel={'Masuk'}>
                <TextBox name={'email'} icon={<Icon icon={basic_mail} size={32}/>} label={'Alamat email'} type={'email'}
                         reference={register({required: true})} placeholder={'Contoh: nama@gmail.com'}/>
                <TextBox name={'password'} icon={<Icon icon={basic_lock} size={32}/>} label={'Kata sandi'}
                         type={'password'}
                         reference={register({required: true, minLength: 8})} placeholder={'Minimal 8 digit'}/>
            </Form>
            <div className={styles.otherAction}>
                <LinkButton href={'/daftar'} label={'Mendaftar'} variant={'success'}/>
            </div>
        </>
    )
}

export default FormLogin