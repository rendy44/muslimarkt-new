import {DropDown, Form, TextBox} from "../../index";
import {useForm} from "react-hook-form";
import SuitcaseLineIcon from "remixicon-react/SuitcaseLineIcon";
import industries from '../../../../src/industry.json'
import Building2LineIcon from "remixicon-react/Building2LineIcon";
import FilePaperLineIcon from "remixicon-react/FilePaperLineIcon";

const FormJob = (props) => {
    const {register, handleSubmit, watch, errors} = useForm()
    const onSubmit = (data, e) => {

    }
    return <Form onSubmit={handleSubmit(onSubmit)} submitLabel={'Simpan'}>
        <TextBox name={'position'} type={'text'} reference={register({required: true})} errorsObj={errors}
                 label={'Posisi'}
                 placeholder={'Posisi pekerjaan'} icon={<SuitcaseLineIcon size={32}/>}/>
        <DropDown name={'industry'} reference={register} errorsObj={errors} values={industries}
                  icon={<Building2LineIcon size={32}/>} label={'Industri'}/>
        <DropDown name={'type'} reference={register} errorsObj={errors} values={['Kontrak', 'Penuh', 'Paruh waktu']}
                  label={'Jenis'} icon={<FilePaperLineIcon size={32}/>}/>
    </Form>
}

export {FormJob}