import {useState} from "react";
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {Form, ImageToggle, TextBox, ToggleItem} from "./index";

const FormAccountType = () => {
    const [isSelected, setIsSelected] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const {register, handleSubmit, watch, errors} = useForm();
    const router = useRouter()

    const onChange = (e) => {
        setIsSelected(true)
    }

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)} isLoading={isLoading} submitLabel={'Lanjutkan'}
              isDisabled={!isSelected}>
            <ImageToggle>
                <ToggleItem onChange={onChange} name={'type'} value={'personal'} image={'/employee.png'}
                            label={'Saya mendaftar untuk mencari pekerjaan'}/>
                <ToggleItem onChange={onChange} name={'type'} value={'company'} image={'/building.png'}
                            label={'Saya mendaftar untuk mencari talenta'}/>
            </ImageToggle>
        </Form>
    )
}

export default FormAccountType