import {Item, ItemInfo} from "./list";
import styles from './styles/education.module.scss'
import PropTypes from 'prop-types'

const EducationItem = (props) => {
    return (
        <Item linkTo={'/akun/pendidikan/[slug]'} title={props.institute} linkAs={`/akun/pendidikan/${props.slug}`}>
            <div className={styles.education}>
                <p className={styles.qualification}>{props.qualification}<span>{props.dateGraduation}</span></p>
                <p className={styles.major}>{props.major}</p>
            </div>
        </Item>
    )
}

EducationItem.propTypes = {
    slug: PropTypes.string.isRequired,
    institute: PropTypes.string.isRequired,
    dateGraduation: PropTypes.string.isRequired,
    qualification: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired
}

export default EducationItem