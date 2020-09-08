import Icon from 'react-icons-kit'
import {basic_mail} from 'react-icons-kit/linea/basic_mail'
import {basic_lock} from 'react-icons-kit/linea/basic_lock'
import {useForm} from "react-hook-form";
import {Form, TextBox} from "./index";

const FormLogin = () => {
    const {register, handleSubmit, watch, errors} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <>
            <Form onsubmit={handleSubmit(onSubmit)} submitLabel={'Masuk'} otherLink={'/daftar'} otherLabel={'Daftar'}>
                <TextBox name={'email'} icon={<Icon icon={basic_mail} size={32}/>} label={'Alamat email'} type={'email'}
                         reference={register({required: true})} errorsObj={errors} placeholder={'Contoh: nama@gmail.com'}/>
                <TextBox name={'password'} icon={<Icon icon={basic_lock} size={32}/>} label={'Kata sandi'}
                         type={'password'}
                         reference={register({required: true, minLength: 8})} errorsObj={errors} placeholder={'Minimal 8 digit'}/>
            </Form>
        </>
    )
}

export default FormLogin