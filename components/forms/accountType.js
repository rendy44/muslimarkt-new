import {useState, useContext} from "react";
import PropTypes from 'prop-types'
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {Form, ImageToggle, ToggleItem} from "./index";
import {FullLoading} from "../global";
import user from "../../src/user";
import withReactContent from "sweetalert2-react-content";
import Swal from 'sweetalert2'
import UserContext from "../context/user";

const FormAccountType = (props) => {
    const [accountType, setAccountType] = useState('personal')
    const [isSelected, setIsSelected] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const {register, handleSubmit} = useForm();
    const router = useRouter()
    const {saveUserType} = useContext(UserContext)

    const onChange = (e) => {
        setAccountType(e.target.value)
        setIsSelected(true)
    }

    const onSubmit = (data) => {

        // Enable loading status.
        setIsLoading(true)

        user.switchType(props.userKey, data)
            .then(result => {

                // Validate result.
                if (result.data.success) {

                    // Update user type.
                    saveUserType(accountType)

                    // Update page route.
                    router.push('employee' === accountType ? '/akun' : '/perusahaan')
                } else {

                    // Normalize loading.
                    setIsLoading(false)

                    // Instance a new alert.
                    const errAlert = withReactContent(Swal)
                    errAlert.fire({
                        text: result.data.data,
                        icon: 'error'
                    })
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (isLoading ? <FullLoading/> :
            <Form onSubmit={handleSubmit(onSubmit)} isLoading={isLoading} submitLabel={'Lanjutkan'}
                  isDisabled={!isSelected} useArrowIcon={true}>
                <ImageToggle>
                    <ToggleItem reference={register} onChange={onChange} name={'type'} value={'employee'}
                                image={'/employee.png'}
                                label={'Saya mendaftar untuk mencari pekerjaan'}/>
                    <ToggleItem reference={register} onChange={onChange} name={'type'} value={'employer'}
                                image={'/building.png'}
                                label={'Saya mendaftar untuk mencari talenta'}/>
                </ImageToggle>
            </Form>
    )
}

FormAccountType.propTypes = {
    userKey: PropTypes.string.isRequired
}

export default FormAccountType