import {Item} from "./list";
import styles from './styles/experience.module.scss'
import PropTypes from 'prop-types'

const Info = (props) => {
    return (
        <div className={styles.info}>
            <span className={styles.label}>{props.label}</span>
            <span>{props.value ? props.value : '-'}</span>
        </div>
    )
}
const ExperienceItem = (props) => {
    return (
        <Item linkTo={`/akun/pengalaman/${props.slug}`} title={props.position}>
            <div className={styles.experience}>
                <p className={styles.company}>{props.company}<span>{props.location}</span></p>
                <p className={styles.period}>{props.dateStart} - {props.dateEnd ? props.dateEnd : 'sekarang'}</p>
                <div className={styles.details}>
                    <Info label={'Industri'} value={props.industry}/>
                    <Info label={'Jabatan'} value={props.role}/>
                </div>
            </div>
        </Item>
    )
}

Info.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string
}
ExperienceItem.propTypes = {
    slug: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    dateStart: PropTypes.string.isRequired,
    dateEnd: PropTypes.string,
    location: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    industry: PropTypes.string.isRequired
}

export default ExperienceItem