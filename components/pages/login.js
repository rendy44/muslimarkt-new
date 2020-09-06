import styles from './login.module.scss'
import {Section} from "../global";
import FormLogin from "../forms/login";

const Login = () => {
    return (
        <Section id={'login'} extraClass={styles.login}>
            <div className={styles.wrapper}>
                <div className={styles.illustration}>
                    <img src={'/login.png'} alt={'Login illustration'}/>
                </div>
                <div className={styles.form}>
                    <h1>Selamat datang kembali!</h1>
                    <p>Untuk mengakses semua menu, silahkan masuk menggunakan email dan kata sandi yang sudah
                        didaftarkan</p>
                    <FormLogin/>
                </div>
            </div>
        </Section>
    )
}

export default Login