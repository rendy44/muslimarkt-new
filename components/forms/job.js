import {useForm} from "react-hook-form";
import {Form, TextBox} from "./index";
import SearchLineIcon from "remixicon-react/SearchLineIcon";

const FormJobFilter = (props) => {
    const {register, handleSubmit, watch, errors} = useForm();
    const filter = (data, e) => {

    }
    return (
        <Form onSubmit={filter} isNoAction={true}>
            <TextBox name={'search'} type={'text'} reference={register} errorsObj={errors} placeholder={'Cari pekerjaan'} icon={<SearchLineIcon size={32}/>}/>
        </Form>
    )
}

export {FormJobFilter}