import {Section} from "../global";
import styles from './styles/validation.module.scss'
import FormAccountType from "../forms/accountType";

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