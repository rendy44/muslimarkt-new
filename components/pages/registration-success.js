import styles from './styles/registration.success.module.scss'
import {Section} from "../global";

const RegistrationSuccess = () => {
    return (
        <Section id={'registration-success'} extraClass={styles.regSuccess}>
            <div className={styles.wrapper}>
                <img src={'/reg-success.png'} alt={'Registration success illustration'}/>
                <h1>Pendaftaran Sukses!</h1>
                <p>Silahkan cek email Anda untuk melakukan konfirmasi.</p>
            </div>
        </Section>
    )
}

export default RegistrationSuccess;