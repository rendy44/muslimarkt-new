import {DateDropDown, DropDown, Form, TextBox} from "../index";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {FullLoading} from "../../global";
import Icon from "react-icons-kit";
import {basic_mail} from 'react-icons-kit/linea/basic_mail'
import {user} from 'react-icons-kit/feather/user'
import {ic_fingerprint} from 'react-icons-kit/md/ic_fingerprint'
import {mapPin} from 'react-icons-kit/feather/mapPin'
import {calendar} from 'react-icons-kit/feather/calendar'

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
                    <TextBox name={'name'} icon={<Icon icon={user} size={32}/>} label={'Nama lengkap'} type={'text'}
                             reference={register({required: true})} errorsObj={errors}
                             placeholder={'Nama susuai identitas'}/>
                    <DropDown name={'gender'} icon={<Icon icon={ic_fingerprint} size={32}/>} label={'Jenis kelamin'}
                              reference={register({required: true})} errorsObj={errors}
                              values={['Laki-laki', 'Perempuan']}/>
                    <DateDropDown reference={register} name={'birthday'} label={'Tanggal lahir'}
                                  icon={<Icon icon={calendar} size={32}/>}/>
                </div>
                <div className={'col-md-1-2'}>
                    <TextBox name={'email'} icon={<Icon icon={basic_mail} size={32}/>} label={'Alamat email'}
                             type={'email'}
                             reference={register({required: true})} errorsObj={errors}
                             placeholder={'Contoh: nama@gmail.com'}/>
                    <DropDown name={'province'} reference={register} errorsObj={errors} values={['Anu']}
                              label={'Provinsi'}
                              icon={<Icon icon={mapPin} size={32}/>}/>
                </div>
            </div>
        </Form>)
}

export default FormAccount