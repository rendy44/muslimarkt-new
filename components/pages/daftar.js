import styles from './styles/login.module.scss'
import {Section} from "../global";
import FormRegister from "../forms/register";

const Register = () => {
    return (
        <Section id={'login'} extraClass={styles.login}>
            <div className={styles.wrapper}>
                <div className={styles.illustration}>
                    <img src={'/register.png'} alt={'Register illustration'}/>
                </div>
                <div className={styles.form}>
                    <h1>Mari bergabung!</h1>
                    <p>Silahkan daftar dan buat akun Anda dengan melengkapi formula di bawah.</p>
                    <FormRegister/>
                </div>
            </div>
        </Section>
    )
}

export default Register