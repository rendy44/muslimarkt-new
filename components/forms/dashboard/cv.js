import AddLineIcon from "remixicon-react/AddLineIcon";
import styles from './styles/cv.module.scss'
import {useState, useContext} from "react";
import Media from "../../../src/media";
import UserContext from "../../context/user";

const FormCV = (props) => {
    const {userKey} = useContext(UserContext)
    // const [tempFile, setTempFile] = useState(undefined)
    const doUpload = (e) => {
        // formData.append('file', e.target.files)
        let used_file = e.target.files[0]

        if (used_file) {
            Media.upload(userKey, used_file)
                .then(result => {
                    console.log(result)
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            console.log('yaaa')
        }
    }

    return (
        <form className={styles.frmAdd} encType={'multipart/form-data'}>
            <label htmlFor={'addCsv'}><AddLineIcon size={96}/><span>Hanya file .pdf yang diperbolehkan</span></label>
            <input id={'addCsv'} type={'file'} accept={"application/pdf"} onChange={doUpload}/>
        </form>
    )
}

export default FormCV