import {useState} from 'react'
import {useRouter} from "next/router";
import Icon from 'react-icons-kit'
import {basic_mail} from 'react-icons-kit/linea/basic_mail'
import {basic_lock} from 'react-icons-kit/linea/basic_lock'
import {useForm} from "react-hook-form";
import {Form, TextBox} from "./index";
import {FullLoading} from "../global";

const FormRegister = () => {
    const [isLoading, setIsLoading] = useState(false)
    const {register, handleSubmit, errors} = useForm();
    const router = useRouter()

    const onSubmit = (data) => {

        // Enable loading status.
        setIsLoading(true)

        // Perform fake registration process.
        setTimeout(() => {

            // Send redirection after success register.
            router.push('/pendaftaran-sukses')

        }, 3000)
    }

    return (isLoading ? <FullLoading/> :
        <Form onSubmit={handleSubmit(onSubmit)} submitLabel={'Daftar'} otherLink={'/masuk'} otherLabel={'Masuk'}>
            <TextBox name={'email'} icon={<Icon icon={basic_mail} size={32}/>} label={'Alamat email'} type={'email'}
                     reference={register({required: true})} errorsObj={errors}
                     placeholder={'Contoh: nama@gmail.com'}/>
            <TextBox name={'password'} icon={<Icon icon={basic_lock} size={32}/>} label={'Kata sandi'}
                     type={'password'}
                     reference={register({required: true, minLength: 8})} errorsObj={errors}
                     placeholder={'Minimal 8 digit'}/>
            <TextBox name={'password2'} icon={<Icon icon={basic_lock} size={32}/>} label={'Konfirmasi'}
                     type={'password'}
                     reference={register({required: true, minLength: 8})} errorsObj={errors}
                     placeholder={'Ulangi kata sandi'}/>
        </Form>)
}

export default FormRegister