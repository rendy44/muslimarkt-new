import PropTypes from 'prop-types'
import styles from './styles/front.module.scss'

const Panel = (props) => {
    return (
        <div className={!props.title ? `${styles.panel} ${styles.noTitle}` : styles.panel}>
            {props.title && <div className={styles.title}>{props.title}</div>}
            <div className={styles.body}>
                {props.children}
            </div>
        </div>
    )
}

Panel.propTypes = {
    title: PropTypes.string
}
export {Panel}