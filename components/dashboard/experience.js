import {Item, ItemInfo} from "./list";
import styles from './styles/experience.module.scss'
import PropTypes from 'prop-types'

const ExperienceItem = (props) => {
    return (
        <Item linkTo={'/akun/pengalaman/[slug]'} title={props.position} linkAs={`/akun/pengalaman/${props.slug}`}>
            <div className={styles.experience}>
                <p className={styles.company}>{props.company}</p>
                <p className={styles.period}>{props.dateStart} - {props.dateEnd ? props.dateEnd : 'sekarang'}</p>
                <div className={styles.details}>
                    <ItemInfo label={'Industri'} value={props.industry}/>
                    <ItemInfo label={'Jabatan'} value={props.role}/>
                </div>
            </div>
        </Item>
    )
}

ExperienceItem.propTypes = {
    slug: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    dateStart: PropTypes.string.isRequired,
    dateEnd: PropTypes.string,
    company: PropTypes.string.isRequired,
    industry: PropTypes.string.isRequired
}

export default ExperienceItem