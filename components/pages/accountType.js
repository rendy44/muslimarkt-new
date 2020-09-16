import {Section} from "../global";
import styles from './styles/accountType.module.scss'
import FormAccountType from "../forms/accountType";

const AccountType = () => {
    return (
        <Section id={'validation'} extraClass={styles.accountType}>
            <div className={'frow'}>
                <div className={'col-sm-4-5 col-md-2-3 col-lg-1-2'}>
                    <h1 className={styles.title}>Pilih Jenis Akun</h1>
                    <FormAccountType/>
                </div>
            </div>
        </Section>
    )
}

export default AccountType