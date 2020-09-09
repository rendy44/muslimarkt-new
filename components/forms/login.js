import Icon from 'react-icons-kit'
import {basic_mail} from 'react-icons-kit/linea/basic_mail'
import {basic_lock} from 'react-icons-kit/linea/basic_lock'
import {useForm} from "react-hook-form";
import {Form, TextBox} from "./index";
import {useState} from "react";
import {useRouter} from "next/router";
import {FullLoading} from "../global";

const FormLogin = () => {
    const [isLoading, setIsLoading] = useState(false)
    const {register, handleSubmit, watch, errors} = useForm();
    const router = useRouter()

    const onSubmit = (data) => {

        // Enable loading status.
        setIsLoading(true)

        // Perform fake registration process.
        setTimeout(() => {

            // Send redirection after success register.
            router.push('/akun')

        }, 3000)
    }

    return (isLoading ? <FullLoading/> :
        <Form onSubmit={handleSubmit(onSubmit)} submitLabel={'Masuk'} otherLink={'/daftar'} otherLabel={'Daftar'} useArrowIcon={true}>
            <TextBox name={'email'} icon={<Icon icon={basic_mail} size={32}/>} label={'Alamat email'} type={'email'}
                     reference={register({required: true})} errorsObj={errors} placeholder={'Contoh: nama@gmail.com'}/>
            <TextBox name={'password'} icon={<Icon icon={basic_lock} size={32}/>} label={'Kata sandi'}
                     type={'password'}
                     reference={register({required: true, minLength: 8})} errorsObj={errors}
                     placeholder={'Minimal 8 digit'}/>
        </Form>)
}

export default FormLogin