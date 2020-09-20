import {DateDropDown, DropDown, Form, TextArea, TextBox} from "../index";
import {useEffect, useState, useContext} from "react";
import {useForm} from "react-hook-form";
import {FullLoading} from "../../global";
import FileTextLineIcon from "remixicon-react/FileTextLineIcon";
import CalendarLineIcon from "remixicon-react/CalendarLineIcon";
import StackLineIcon from "remixicon-react/StackLineIcon";
import Building2LineIcon from "remixicon-react/Building2LineIcon";
import PropTypes from 'prop-types'
import Building3LineIcon from "remixicon-react/Building3LineIcon";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import Education from "../../../src/education";
import UserContext from "../../context/user";
import {useRouter} from "next/router";

const FormEducation = (props) => {
    const [dataDb, setDataDb] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isCurrentEducation, setIsCurrentEducation] = useState(false)
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
            Education.detail(userKey, props.slug)
                .then(result => {

                    // Validate result.
                    if (result.data.success) {

                        // Parse details.
                        setDataDb(result.data.data)

                        // Check whether cb is checked or not.
                        setIsCurrentEducation(!!result.data.data.date_graduation_cb)

                        console.log(result.data.data)
                    } else {

                        // Force redirect.
                        router.push('/akun/pendidikan')
                    }

                    setIsLoading(false)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [props])

    const onChangeEndPeriod = (e) => {
        setIsCurrentEducation(e.target.checked)
    }
    const onSubmit = (data, e) => {

        // Instance result.
        const expAlert = withReactContent(Swal);

        // Enable loading status.
        setIsLoading(true)

        // Check whether create a new experience or update exisitng.
        if (isEdit) {

            // Perform update request.
            Education.update(userKey, props.slug, data)
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
            Education.add(userKey, data)
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
        <Form onSubmit={handleSubmit(onSubmit)} submitLabel={'Simpan'} otherLink={'/akun/pendidikan'}
              otherLabel={isEdit ? 'Batal' : 'Kembali'}>
            <div className={'frow gutters row-start items-start'}>
                <div className={'col-md-1-2'}>
                    <div className={'mb-1'}>
                        <TextBox name={'institute'} icon={<Building3LineIcon size={32}/>} label={'Institusi'}
                                 type={'text'}
                                 reference={register({required: true})} errorsObj={errors}
                                 placeholder={'Nama institusi'} value={dataDb.institute}/>
                        <DateDropDown name={'date_graduation'} label={'Tanggal kelulusan'} reference={register}
                                      icon={<CalendarLineIcon size={32}/>} isNoDay={true} isWithCheckbox={true}
                                      labelCheckbox={'Belum lulus'} isDisabled={isCurrentEducation}
                                      onChangeCheckbox={onChangeEndPeriod}
                                      value={[0, dataDb.date_graduation_month, dataDb.date_graduation_year]}/>
                    </div>
                </div>
                <div className={'col-md-1-2'}>
                    <div className={'mb-1'}>
                        <DropDown name={'qualification'} label={'Kualifikasi'} reference={register}
                                  icon={<StackLineIcon size={32}/>}
                                  errorsObj={errors}
                                  values={['SD', 'SLTP', 'SLTA', 'Diploma (D3)', 'Sarjana (S1)', 'Magister (S2)', 'Doktor (D3)']}
                                  value={dataDb.qualification}/>
                        <TextBox name={'major'} type={'text'} label={'Jurusan'} icon={<Building2LineIcon size={32}/>}
                                 reference={register({required: true})}
                                 errorsObj={errors} placeholder={'Contoh: Ilmu Pengetahuan & Teknologi'}
                                 value={dataDb.major}/>
                    </div>
                </div>
                <div className={'col-xs-1-1'}>
                    <TextArea name={'notes'} label={'Catatan'} reference={register} errorsObj={errors}
                              placeholder={'Info tambahan tentang pendidikan Anda'}
                              icon={<FileTextLineIcon size={32}/>} value={dataDb.notes}/>
                </div>
            </div>
        </Form>)
}

FormEducation.propTypes = {
    slug: PropTypes.string
}

export default FormEducation