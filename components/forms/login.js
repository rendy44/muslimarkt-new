import { useForm } from "react-hook-form";
import { Form, TextBox } from "./index";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { FullLoading } from "../global";
import MailLineIcon from "remixicon-react/MailLineIcon";
import LockPasswordLineIcon from "remixicon-react/LockPasswordLineIcon";
import UserContext from '../context/user'
import User from '../../src/user'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const FormLogin = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [dataForm, setDataForm] = useState([])
    const { register, handleSubmit, watch, errors } = useForm();
    const router = useRouter()
    const { saveUserData, saveUserKey, saveUserType } = useContext(UserContext)

    const onSubmit = (data) => {

        // Save the form data into state.
        setDataForm(data)

        // Enable loading status.
        setIsLoading(true)

        // Process login.
        User.login(data)
            .then(result => {

                console.log(result)
                // Validate result.
                if (result.data.success) {

                    // Save details.
                    saveUserData(result.data.data)
                    saveUserKey(result.data.data.user_key)
                    saveUserType(result.data.data.type)

                    // Send redirection after success login.
                    router.push('employee' === result.data.data.tyoe ? '/akun' : '/perusahaan')
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

    return (isLoading ? <FullLoading /> :
        <Form onSubmit={handleSubmit(onSubmit)} submitLabel={'Masuk'} otherLink={'/daftar'} otherLabel={'Daftar'}
            useArrowIcon={true}>
            <TextBox name={'email'} icon={<MailLineIcon size={32} />} label={'Alamat email'} type={'email'}
                reference={register({ required: true })} errorsObj={errors} placeholder={'Contoh: nama@gmail.com'} value={dataForm.email} />
            <TextBox name={'password'} icon={<LockPasswordLineIcon size={32} />} label={'Kata sandi'}
                type={'password'}
                reference={register({ required: true, minLength: 8 })} errorsObj={errors}
                placeholder={'Minimal 8 digit'} value={dataForm.password} />
        </Form>)
}

export default FormLogin