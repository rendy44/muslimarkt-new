import {Item, ItemInfo} from "./list";
import styles from './styles/education.module.scss'
import PropTypes from 'prop-types'

const EducationItem = (props) => {
    return (
        <Item linkTo={'/akun/pendidikan/[slug]'} title={props.institute} linkAs={`/akun/pendidikan/${props.slug}`}>
            <div className={styles.education}>
                <p className={styles.qualification}>{props.qualification}<span>{props.country}</span></p>
                <p className={styles.period}>{props.dateGraduation}</p>
                <div className={styles.details}>
                    <ItemInfo label={'Jurusan'} value={props.major}/>
                </div>
            </div>
        </Item>
    )
}

EducationItem.propTypes = {
    slug: PropTypes.string.isRequired,
    institute: PropTypes.string.isRequired,
    dateGraduation: PropTypes.string.isRequired,
    qualification: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired
}

export default EducationItem