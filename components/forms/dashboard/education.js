import {DateDropDown, DropDown, Form, TextArea, TextBox} from "../index";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {FullLoading} from "../../global";
import FileTextLineIcon from "remixicon-react/FileTextLineIcon";
import CalendarLineIcon from "remixicon-react/CalendarLineIcon";
import StackLineIcon from "remixicon-react/StackLineIcon";
import Building2LineIcon from "remixicon-react/Building2LineIcon";
import PropTypes from 'prop-types'
import Building3LineIcon from "remixicon-react/Building3LineIcon";

const FormEducation = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isCurrentEducation, setIsCurrentEducation] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const {register, handleSubmit, watch, errors} = useForm();

    useEffect(() => {

        // Check whether currently is editing or not.
        if (props.slug) {
            setIsEdit(true)
        }
    }, [props])

    const onChangeEndPeriod = (e) => {
        setIsCurrentEducation(e.target.checked)
    }
    const onSubmit = (data) => {

        // Enable loading status.
        setIsLoading(true)

        // Perform fake registration process.
        setTimeout(() => {

        }, 3000)
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
                                 placeholder={'Nama institusi'}/>
                        <DateDropDown name={'date_graduation'} label={'Tanggal kelulusan'} reference={register}
                                      icon={<CalendarLineIcon size={32}/>} isNoDay={true} isWithCheckbox={true}
                                      labelCheckbox={'Belum lulus'} isDisabled={isCurrentEducation}
                                      onChangeCheckbox={onChangeEndPeriod}/>
                    </div>
                </div>
                <div className={'col-md-1-2'}>
                    <div className={'mb-1'}>
                        <DropDown name={'qualification'} label={'Kualifikasi'} reference={register}
                                  icon={<StackLineIcon size={32}/>}
                                  errorsObj={errors}
                                  values={['SD', 'SLTP', 'SLTA', 'Diploma (D3)', 'Sarjana (S1)', 'Magister (S2)', 'Doktor (D3)']}/>
                        <TextBox name={'major'} type={'text'} label={'Jurusan'} icon={<Building2LineIcon size={32}/>}
                                 reference={register({required: true})}
                                 errorsObj={errors} placeholder={'Contoh: Ilmu Pengetahuan & Teknologi'}/>
                    </div>
                </div>
                <div className={'col-xs-1-1'}>
                    <TextArea name={'notes'} label={'Catatan'} reference={register} errorsObj={errors}
                              placeholder={'Info tambahan tentang pendidikan Anda'}
                              icon={<FileTextLineIcon size={32}/>}/>
                </div>
            </div>
        </Form>)
}

FormEducation.propTypes = {
    slug: PropTypes.string
}

export default FormEducation