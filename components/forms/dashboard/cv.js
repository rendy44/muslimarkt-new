import AddLineIcon from "remixicon-react/AddLineIcon";
import styles from './styles/cv.module.scss'

const FormCV = (props) => {
    return (
        <form className={styles.frmAdd}>
            <label htmlFor={'addCsv'}><AddLineIcon size={96}/><span>Hanya file .pdf yang diperbolehkan</span></label>
            <input id={'addCsv'} type={'file'} accept={"application/pdf"}/>
        </form>
    )
}

export default FormCV