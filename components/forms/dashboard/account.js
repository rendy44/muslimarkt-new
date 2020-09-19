import PropTypes from 'prop-types'
import {DateDropDown, DropDown, Form, IdInput, TextArea, TextBox} from "../index";
import {useState, useEffect, useContext} from "react";
import {useForm} from "react-hook-form";
import {FullLoading} from "../../global";
import UserLineIcon from "remixicon-react/UserLineIcon";
import MenLineIcon from "remixicon-react/MenLineIcon";
import CalendarLineIcon from "remixicon-react/CalendarLineIcon";
import SmartphoneLineIcon from "remixicon-react/SmartphoneLineIcon";
import MapPinLineIcon from "remixicon-react/MapPinLineIcon";
import FingerprintLineIcon from "remixicon-react/FingerprintLineIcon";
import FileTextLineIcon from "remixicon-react/FileTextLineIcon";
import UserContext from "../../context/user";
import Employee from "../../../src/employee";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const FormAccount = (props) => {
    const [dataDb, setDataDb] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const {register, handleSubmit, watch, errors} = useForm();
    const {userKey} = useContext(UserContext)

    useEffect(() => {

        // Make sure that user key is available.
        if (userKey && props.isEdit) {

            // Fetch user detail.
            Employee.detail(userKey)
                .then(result => {

                    // Validate data.
                    if (result.data.success) {

                        // Set loaded status.
                        setIsLoaded(true)

                        // Save data.
                        setDataDb(result.data.data)
                    }
                })
        }
    }, [userKey])
    const onSubmit = (data) => {

        console.log(data)
        // Enable loading status.
        setIsLoading(true)

        // Check whether its update or create new.
        if (props.isEdit) {

            Employee.update(userKey, data)
                .then(result => {

                    // Instance a new alert.
                    const updateAlert = withReactContent(Swal)
                    // Validate the request.
                    if (result.data.success) {

                        // Instance a new alert.
                        updateAlert.fire({
                            text: result.data.data,
                            icon: 'success',
                            onClose: () => {

                                // Hard reload.
                                location.reload()
                            }
                        })

                    } else {

                        // Reset loading.
                        setIsLoading(false)

                        // Trigger alert.
                        updateAlert.fire({
                            text: result.data.data,
                            icon: 'error'
                        })
                    }
                })
        }
    }

    return (isLoading || !isLoaded ? <FullLoading/> :
        <Form onSubmit={handleSubmit(onSubmit)} submitLabel={'Simpan Perubahan'}>
            <div className={'frow gutters row-start items-start'}>
                <div className={'col-md-1-2'}>
                    <div className={'mb-1'}>
                        <TextBox name={'name'} icon={<UserLineIcon size={32}/>} label={'Nama lengkap'} type={'text'}
                                 reference={register({required: true})} errorsObj={errors}
                                 placeholder={'Nama susuai identitas'} value={dataDb.name}/>
                        <DropDown name={'gender'} icon={<MenLineIcon size={32}/>} label={'Jenis kelamin'}
                                  reference={register} errorsObj={errors}
                                  values={['Laki-laki', 'Perempuan']} value={dataDb.gender}/>
                        <DateDropDown reference={register} name={'birthday'} label={'Tanggal lahir'}
                                      icon={<CalendarLineIcon size={32}/>}
                                      value={[dataDb.birthday_day, dataDb.birthday_month, dataDb.birthday_year]}/>
                    </div>
                </div>
                <div className={'col-md-1-2'}>
                    <div className={'mb-1'}>
                        <TextBox name={'phone'} icon={<SmartphoneLineIcon size={32}/>} label={'Nomor HP'}
                                 type={'number'} reference={register({required: true})} errorsObj={errors}
                                 placeholder={'Contoh: 08XXXXXX'} value={dataDb.phone}/>
                        <TextBox name={'address'} icon={<MapPinLineIcon size={32}/>} label={'Alamat'} type={'text'}
                                 reference={register({required: true})} errorsObj={errors}
                                 placeholder={'Alamat tempat tinggal'} value={dataDb.address}/>
                        <IdInput name={'identity'} label={'Nomor identitas'} reference={register({required: true})}
                                 errorsObj={errors} placeholder={'Nomor identitas'}
                                 icon={<FingerprintLineIcon size={32}/>}
                                 value={[dataDb.identity_type, dataDb.identity_value]}/>
                    </div>
                </div>
                <div className={'col-xs-1-1'}>
                    <TextArea name={'notes'} label={'Catatan'} reference={register} errorsObj={errors}
                              placeholder={'Info tambahan tentang diri Anda'} value={dataDb.notes}
                              icon={<FileTextLineIcon size={32}/>}/>
                </div>
            </div>
        </Form>)
}

FormAccount.propTypes = {
    isEdit: PropTypes.bool
}

export default FormAccount