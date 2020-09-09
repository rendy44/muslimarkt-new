import {Section} from "../global";
import styles from './styles/validation.module.scss'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import FormAccountType from "../forms/accountType";

const MySwal = withReactContent(Swal)
MySwal.fire({
    title: 'Berhasil Verifikasi!',
    text: 'Silahkan lengkapi profil Anda berikut.',
    icon: 'success'
})

const Validation = () => {
    return (
        <Section id={'validation'} extraClass={styles.validation}>
            <div className={'frow'}>
                <div className={'col-sm-4-5 col-md-2-3 col-lg-1-2'}>
                    <FormAccountType/>
                </div>
            </div>
        </Section>
    )
}

export default Validation