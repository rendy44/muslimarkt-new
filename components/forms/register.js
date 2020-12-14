import {useState} from 'react'
import {useRouter} from "next/router";
import {useForm} from "react-hook-form";
import {Form, TextBox} from "./index";
import {FullLoading} from "../global";
import MailLineIcon from "remixicon-react/MailLineIcon";
import LockPasswordLineIcon from "remixicon-react/LockPasswordLineIcon";
import User from "../../src/user";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const FormRegister = () => {
    const [dataForm, setDataForm] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const {register, handleSubmit, errors} = useForm();
    const router = useRouter()

    const onSubmit = (data) => {

        // Save form data into state.
        setDataForm(data)

        // Enable loading status.
        setIsLoading(true)

        // Process the registration.
        User.register(data)
            .then(result => {

                // Validate result.
                if (result.data.success) {

                    // Send redirection after success register.
                    router.push('/pendaftaran-sukses')
                } else {

                    // Instance sweet alert.
                    const regAlert = withReactContent(Swal)
                    regAlert.fire({
                        text: result.data.data,
                        icon: 'error'
                    })

                    // Reset loading status.
                    setIsLoading(false)
                }
            })
    }

    return (isLoading ? <FullLoading/> :
        <Form onSubmit={handleSubmit(onSubmit)} submitLabel={'Daftar'} otherLink={'/masuk'} otherLabel={'Masuk'}
              useArrowIcon={true}>
            <TextBox name={'email'} icon={<MailLineIcon size={32}/>} label={'Alamat email'} type={'email'}
                     reference={register({required: true})} errorsObj={errors}
                     placeholder={'Contoh: nama@gmail.com'} value={dataForm.email}/>
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