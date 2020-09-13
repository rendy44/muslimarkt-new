import {useState} from 'react'
import {useRouter} from "next/router";
import {useForm} from "react-hook-form";
import {Form, TextBox} from "./index";
import {FullLoading} from "../global";
import MailLineIcon from "remixicon-react/MailLineIcon";
import LockPasswordLineIcon from "remixicon-react/LockPasswordLineIcon";

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
        <Form onSubmit={handleSubmit(onSubmit)} submitLabel={'Daftar'} otherLink={'/masuk'} otherLabel={'Masuk'} useArrowIcon={true}>
            <TextBox name={'email'} icon={<MailLineIcon size={32}/>} label={'Alamat email'} type={'email'}
                     reference={register({required: true})} errorsObj={errors}
                     placeholder={'Contoh: nama@gmail.com'}/>
            <TextBox name={'password'} icon={<LockPasswordLineIcon size={32}/>} label={'Kata sandi'}
                     type={'password'}
                     reference={register({required: true, minLength: 8})} errorsObj={errors}
                     placeholder={'Minimal 8 digit'}/>
            <TextBox name={'password2'} icon={<LockPasswordLineIcon size={32}/>} label={'Konfirmasi'}
                     type={'password'}
                     reference={register({required: true, minLength: 8})} errorsObj={errors}
                     placeholder={'Ulangi kata sandi'}/>
        </Form>)
}

export default FormRegister