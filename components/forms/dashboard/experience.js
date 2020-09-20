import {DateDropDown, DropDown, Form, TextArea, TextBox} from "../index";
import {useEffect, useState, useContext} from "react";
import {useRouter} from "next/router";
import {useForm} from "react-hook-form";
import {FullLoading} from "../../global";
import CreativeCommonsByLineIcon from "remixicon-react/CreativeCommonsByLineIcon";
import BuildingLineIcon from "remixicon-react/BuildingLineIcon";
import FileTextLineIcon from "remixicon-react/FileTextLineIcon";
import CalendarLineIcon from "remixicon-react/CalendarLineIcon";
import Calendar2LineIcon from "remixicon-react/Calendar2LineIcon";
import StackLineIcon from "remixicon-react/StackLineIcon";
import Building2LineIcon from "remixicon-react/Building2LineIcon";
import industries from '../../../src/industry.json'
import PropTypes from 'prop-types'
import Experience from "../../../src/experience";
import UserContext from "../../context/user";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const FormExperience = (props) => {
    const [dataDb, setDataDb] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isCurrentJob, setIsCurrentJob] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const {register, handleSubmit, watch, errors} = useForm();
    const {userKey} = useContext(UserContext)
    const router = useRouter()

    useEffect(() => {

        // Check whether currently is editing or not.
        if (props.slug) {
            setIsEdit(true)
            setIsLoading(true)

            // Get details.
            Experience.detail(userKey, props.slug)
                .then(result => {

                    // Validate result.
                    if (result.data.success) {

                        // Parse details.
                        setDataDb(result.data.data)

                        // Check whether cb is checked or not.
                        if (result.data.data.date_end_cb) {
                            setIsCurrentJob(true)
                        }
                    } else {

                        // Force redirect.
                        router.push('/akun/pengalaman')
                    }

                    setIsLoading(false)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [props])

    const onChangeEndPeriod = (e) => {
        setIsCurrentJob(e.target.checked)
    }
    const onSubmit = (data, e) => {

        // Instance result.
        const expAlert = withReactContent(Swal);

        // Enable loading status.
        setIsLoading(true)

        // Check whether create a new experience or update exisitng.
        if (isEdit) {

            // Perform update request.
            Experience.update(userKey, props.slug, data)
                .then(result => {

                    // Prepare alert args.
                    let alertArgs = {
                        text: result.data.message,
                        icon: 'error'
                    }

                    // Validate request result.
                    if (result.data.success) {

                        // Update alert args.
                        alertArgs.icon = 'success'
                        alertArgs.text = 'Berhasil disimpan.'

                        // Update preview data.
                        setDataDb(data)
                    }

                    // reset loading.
                    setIsLoading(false)

                    // Trigger alert.
                    expAlert.fire(alertArgs)
                })
        } else {

            // Perform request.
            Experience.add(userKey, data)
                .then(result => {

                    // Prepare alert args.
                    let alertArgs = {
                        text: result.data.message,
                        icon: 'error'
                    }

                    // Validate request result.
                    if (result.data.success) {

                        // Reset form.
                        e.target.reset()

                        // Update alert args.
                        alertArgs.icon = 'success'
                        alertArgs.text = 'Berhasil disimpan.'
                    }

                    // reset loading.
                    setIsLoading(false)

                    // Trigger alert.
                    expAlert.fire(alertArgs)
                })
        }
    }

    return (isLoading ? <FullLoading/> :
        <Form onSubmit={handleSubmit(onSubmit)} submitLabel={'Simpan'} otherLink={'/akun/pengalaman'}
              otherLabel={isEdit ? 'Batal' : 'Kembali'}>
            <div className={'frow gutters row-start items-start'}>
                <div className={'col-md-1-2'}>
                    <div className={'mb-1'}>
                        <TextBox name={'position'} icon={<CreativeCommonsByLineIcon size={32}/>} label={'Posisi'}
                                 type={'text'}
                                 reference={register({required: true})} errorsObj={errors}
                                 placeholder={'Contoh: Web Developer'} value={dataDb.position}/>
                        <DateDropDown name={'date_start'} label={'Tanggal mulai'} reference={register}
                                      icon={<CalendarLineIcon size={32}/>} isNoDay={true}
                                      value={[0, dataDb.date_start_month, dataDb.date_start_year]}/>
                        <DateDropDown name={'date_end'} label={'Tanggal selesai'} reference={register}
                                      icon={<Calendar2LineIcon size={32}/>} isNoDay={true} isWithCheckbox={true}
                                      labelCheckbox={'Masih bekerja'} isDisabled={isCurrentJob}
                                      onChangeCheckbox={onChangeEndPeriod}
                                      value={[0, dataDb.date_end_month, dataDb.date_end_year]}/>
                    </div>
                </div>
                <div className={'col-md-1-2'}>
                    <div className={'mb-1'}>
                        <TextBox name={'company'} icon={<BuildingLineIcon size={32}/>} label={'Perusahaan'}
                                 type={'text'} reference={register({required: true})} errorsObj={errors}
                                 placeholder={'Nama perusahaan'} value={dataDb.company}/>
                        <DropDown name={'role'} label={'Jabatan'} reference={register} icon={<StackLineIcon size={32}/>}
                                  errorsObj={errors}
                                  values={['CEO / Direktur', 'Menejer', 'Supervisor / Kordinator', 'Pegawai', 'Lulusan baru']}
                                  value={dataDb.role}/>
                        <DropDown name={'industry'} label={'Industri'} reference={register} errorsObj={errors}
                                  values={industries} icon={<Building2LineIcon size={32}/>} value={dataDb.industry}/>
                    </div>
                </div>
                <div className={'col-xs-1-1'}>
                    <TextArea name={'notes'} label={'Catatan'} reference={register} errorsObj={errors}
                              placeholder={'Info tambahan tentang pekerjaan Anda'}
                              icon={<FileTextLineIcon size={32}/>} value={dataDb.notes}/>
                </div>
            </div>
        </Form>)
}

FormExperience.propTypes = {
    slug: PropTypes.string
}

export default FormExperience