import {DropDown, Form, TextBox} from "../../index";
import {useForm} from "react-hook-form";
import industries from '../../../../src/industry.json'
import Building2LineIcon from "remixicon-react/Building2LineIcon";
import FilePaperLineIcon from "remixicon-react/FilePaperLineIcon";
import StackLineIcon from "remixicon-react/StackLineIcon";
import CreativeCommonsByLineIcon from "remixicon-react/CreativeCommonsByLineIcon";
import Book2LineIcon from "remixicon-react/Book2LineIcon";
import BankCardLineIcon from "remixicon-react/BankCardLineIcon";

const FormJob = (props) => {
    const {register, handleSubmit, watch, errors} = useForm()
    const onSubmit = (data, e) => {

    }
    return <Form onSubmit={handleSubmit(onSubmit)} submitLabel={'Simpan'}>
        <div className={'frow gutters row-start items-start'}>
            <div className={'col-md-1-2'}>
                <div className={'mb-1'}>
                    <TextBox name={'position'} type={'text'} reference={register({required: true})} errorsObj={errors}
                             label={'Posisi'}
                             placeholder={'Posisi pekerjaan'} icon={<CreativeCommonsByLineIcon size={32}/>}/>
                    <DropDown name={'industry'} reference={register} errorsObj={errors} values={industries}
                              icon={<Building2LineIcon size={32}/>} label={'Industri'}/>
                    <DropDown name={'type'} reference={register} errorsObj={errors}
                              values={['Kontrak', 'Penuh', 'Paruh waktu', 'Pekerja lepas']}
                              label={'Jenis'} icon={<FilePaperLineIcon size={32}/>}/>
                </div>
            </div>
            <div className={'col-md-1-2'}>
                <div className={'mb-1'}>
                    <DropDown name={'role'} label={'Jabatan'} reference={register} icon={<StackLineIcon size={32}/>}
                              errorsObj={errors}
                              values={['CEO / Direktur', 'Menejer', 'Supervisor / Kordinator', 'Pegawai', 'Lulusan baru']}/>
                    <DropDown name={'education'} label={'Pendidikan'} reference={register}
                              icon={<Book2LineIcon size={32}/>}
                              errorsObj={errors}
                              values={['SD', 'SLTP', 'SLTA', 'Diploma (D3)', 'Sarjana (S1)', 'Magister (S2)', 'Doktor (D3)']}/>
                    <TextBox name={'salary'} type={'number'} reference={register} errorsObj={errors} label={'Gaji'}
                             placeholder={'Perkiraan gaji per bulan'} icon={<BankCardLineIcon size={32}/>}
                             prefix={'Rp'}/>
                </div>
            </div>
        </div>
    </Form>
}

export {FormJob}