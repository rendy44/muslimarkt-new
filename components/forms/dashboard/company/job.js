import {useContext, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {DropDown, Form, TextArea, TextBox} from "../../index";
import {useForm} from "react-hook-form";
import industries from '../../../../src/industry.json'
import Building2LineIcon from "remixicon-react/Building2LineIcon";
import FilePaperLineIcon from "remixicon-react/FilePaperLineIcon";
import StackLineIcon from "remixicon-react/StackLineIcon";
import CreativeCommonsByLineIcon from "remixicon-react/CreativeCommonsByLineIcon";
import Book2LineIcon from "remixicon-react/Book2LineIcon";
import BankCardLineIcon from "remixicon-react/BankCardLineIcon";
import Job from "../../../../src/company/job";
import UserContext from "../../../context/user";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import {useRouter} from "next/router";
import {FullLoading} from "../../../global";
import FileTextLineIcon from "remixicon-react/FileTextLineIcon";
import InformationLineIcon from "remixicon-react/InformationLineIcon";
import ErrorWarningLineIcon from "remixicon-react/ErrorWarningLineIcon";

const FormJob = (props) => {
    const [dataDb, setDataDb] = useState({})
    const [isLoading, setIsLoading] = useState(false)
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
            Job.detail(userKey, props.slug)
                .then(result => {

                    // Validate result.
                    if (result.data.success) {

                        // Parse details.
                        setDataDb(result.data.data)

                    } else {

                        // Force redirect.
                        router.push('/perusahaan/lowongan')
                    }

                    setIsLoading(false)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [props])

    const onSubmit = (data, e) => {

        // Instance result.
        const expAlert = withReactContent(Swal);

        // Enable loading status.
        setIsLoading(true)

        // Check whether create a new experience or update existing.
        if (isEdit) {

            // Perform update request.
            Job.update(userKey, props.slug, data)
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
            Job.add(userKey, data)
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

    return isLoading ? <FullLoading/> :
        <Form onSubmit={handleSubmit(onSubmit)} submitLabel={'Simpan'} otherLink={'/perusahaan/lowongan'}>
            <div className={'frow gutters row-start items-start'}>
                <div className={'col-md-1-2'}>
                    <div className={'mb-1'}>
                        <TextBox name={'position'} type={'text'} reference={register({required: true})}
                                 errorsObj={errors}
                                 label={'Posisi'}
                                 placeholder={'Posisi pekerjaan'} icon={<CreativeCommonsByLineIcon size={32}/>}
                                 value={dataDb.position}/>
                        <DropDown name={'industry'} reference={register} errorsObj={errors} values={industries}
                                  icon={<Building2LineIcon size={32}/>} label={'Industri'}
                                  value={dataDb.industry}/>
                        <DropDown name={'type'} reference={register} errorsObj={errors}
                                  values={['Kontrak', 'Penuh', 'Paruh waktu', 'Pekerja lepas']}
                                  label={'Jenis'} icon={<FilePaperLineIcon size={32}/>}
                                  value={dataDb.type}/>
                    </div>
                </div>
                <div className={'col-md-1-2'}>
                    <div className={'mb-1'}>
                        <DropDown name={'role'} label={'Jabatan'} reference={register} icon={<StackLineIcon size={32}/>}
                                  errorsObj={errors}
                                  values={['CEO / Direktur', 'Menejer', 'Supervisor / Kordinator', 'Pegawai', 'Lulusan baru']}
                                  value={dataDb.role}/>
                        <DropDown name={'education'} label={'Pendidikan'} reference={register}
                                  icon={<Book2LineIcon size={32}/>}
                                  errorsObj={errors}
                                  values={['SD', 'SLTP', 'SLTA', 'Diploma (D3)', 'Sarjana (S1)', 'Magister (S2)', 'Doktor (D3)']}
                                  value={dataDb.education}/>
                        <TextBox name={'salary'} type={'number'} reference={register} errorsObj={errors} label={'Gaji'}
                                 placeholder={'Perkiraan gaji per bulan'} icon={<BankCardLineIcon size={32}/>}
                                 prefix={'Rp'}
                                 value={dataDb.salary}/>
                    </div>
                </div>
                <div className={'col-md-1-2'}>
                    <div className={'mb-1'}>
                        <TextArea name={'description'}
                                  label={'Deskripsi'}
                                  reference={register({required: true})}
                                  errorsObj={errors}
                                  placeholder={'Deskripsi pekerjaan'}
                                  icon={<InformationLineIcon size={32}/>}
                                  value={dataDb.description}/>
                    </div>
                </div>
                <div className={'col-md-1-2'}>
                    <div className={'mb-1'}>
                        <TextArea name={'requirement'}
                                  label={'Persyaratan'}
                                  reference={register({required: true})}
                                  errorsObj={errors}
                                  placeholder={'Deskripsi persyaratan'}
                                  icon={<ErrorWarningLineIcon size={32}/>}
                                  value={dataDb.description}/>
                    </div>
                </div>
                <div className={'col-xs-1-1'}>
                    <TextArea name={'notes'} label={'Catatan'} reference={register} errorsObj={errors}
                              placeholder={'Info tambahan tentang lowongan'}
                              icon={<FileTextLineIcon size={32}/>} value={dataDb.notes}/>
                </div>
            </div>
        </Form>
}

FormJob.propTypes = {
    slug: PropTypes.string
}

export {FormJob}