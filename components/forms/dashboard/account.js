import {DateDropDown, DropDown, Form, IdInput, TextArea, TextBox} from "../index";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {FullLoading} from "../../global";
import UserLineIcon from "remixicon-react/UserLineIcon";
import MenLineIcon from "remixicon-react/MenLineIcon";
import CalendarLineIcon from "remixicon-react/CalendarLineIcon";
import MailLineIcon from "remixicon-react/MailLineIcon";
import MapPinLineIcon from "remixicon-react/MapPinLineIcon";
import FingerprintLineIcon from "remixicon-react/FingerprintLineIcon";
import FileTextLineIcon from "remixicon-react/FileTextLineIcon";

const FormAccount = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    // const [dateValue, setDateValue] = useState(new Date())
    const {register, handleSubmit, watch, errors} = useForm();

    const onSubmit = (data) => {

        // Enable loading status.
        setIsLoading(true)

        // Perform fake registration process.
        setTimeout(() => {

        }, 3000)
    }

    return (isLoading ? <FullLoading/> :
        <Form onSubmit={handleSubmit(onSubmit)} submitLabel={'Simpan Perubahan'}>
            <div className={'frow gutters row-start items-start'}>
                <div className={'col-md-1-2'}>
                    <div className={'mb-1'}>
                        <TextBox name={'name'} icon={<UserLineIcon size={32}/>} label={'Nama lengkap'} type={'text'}
                                 reference={register({required: true})} errorsObj={errors}
                                 placeholder={'Nama susuai identitas'}/>
                        <DropDown name={'gender'} icon={<MenLineIcon size={32}/>} label={'Jenis kelamin'}
                                  reference={register({required: true})} errorsObj={errors}
                                  values={['Laki-laki', 'Perempuan']}/>
                        <DateDropDown reference={register} name={'birthday'} label={'Tanggal lahir'}
                                      icon={<CalendarLineIcon size={32}/>}/>
                    </div>
                </div>
                <div className={'col-md-1-2'}>
                    <div className={'mb-1'}>
                        <TextBox name={'email'} icon={<MailLineIcon size={32}/>} label={'Alamat email'}
                                 type={'email'} reference={register({required: true})} errorsObj={errors}
                                 placeholder={'Contoh: nama@gmail.com'}/>
                        <TextBox name={'address'} icon={<MapPinLineIcon size={32}/>} label={'Alamat'} type={'text'}
                                 reference={register({required: true})} errorsObj={errors}
                                 placeholder={'Alamat tempat tinggal'}/>
                        <IdInput name={'identity'} label={'Nomor identitas'} reference={register({required: true})}
                                 errorsObj={errors} placeholder={'Nomor identitas'}
                                 icon={<FingerprintLineIcon size={32}/>}/>
                    </div>
                </div>
                <div className={'col-xs-1-1'}>
                    <TextArea name={'catatan'} label={'Catatan'} reference={register} errorsObj={errors}
                              placeholder={'Info tambahan tentang diri Anda'} icon={<FileTextLineIcon size={32}/>}/>
                </div>
            </div>
        </Form>)
}

export default FormAccount