import {useState} from "react";
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {Form, ImageToggle, TextBox, ToggleItem} from "./index";
import {FullLoading} from "../global";

const FormAccountType = () => {
    const [accountType, setAccountType] = useState('personal')
    const [isSelected, setIsSelected] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const {register, handleSubmit, watch, errors} = useForm();
    const router = useRouter()

    const onChange = (e) => {
        setAccountType(e.target.value)
        setIsSelected(true)
    }

    const onSubmit = (data) => {

        // Enable loading status.
        setIsLoading(true)

        // Perform fake registration process.
        setTimeout(() => {

            // Send redirection after success register.
            router.push('personal' === accountType ? '/akun' : '/perusahaan')

        }, 3000)
    }

    return (isLoading ? <FullLoading/> :
            <Form onSubmit={handleSubmit(onSubmit)} isLoading={isLoading} submitLabel={'Lanjutkan'}
                  isDisabled={!isSelected} useArrowIcon={true}>
                <ImageToggle>
                    <ToggleItem reference={register} onChange={onChange} name={'type'} value={'personal'}
                                image={'/employee.png'}
                                label={'Saya mendaftar untuk mencari pekerjaan'}/>
                    <ToggleItem reference={register} onChange={onChange} name={'type'} value={'company'}
                                image={'/building.png'}
                                label={'Saya mendaftar untuk mencari talenta'}/>
                </ImageToggle>
            </Form>
    )
}

export default FormAccountType