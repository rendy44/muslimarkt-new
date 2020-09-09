import PropTypes from 'prop-types'
import Link from "next/link";
import styles from './styles/button.module.scss'

const Button = (props) => {
    const variant = props.variant ? props.variant : 'main';
    return (
        <button className={`${styles.button} ${variant}`}
                type={props.isSubmit ? 'submit' : 'button'} disabled={props.isDisabled}>{props.label}{props.rightIcon &&
        <span className={styles.rightIcon}>{props.rightIcon}</span>}</button>
    )
}
const LinkButton = (props) => {
    const variant = props.variant ? props.variant : 'main';
    return (
        <Link href={props.href}>
            <a className={`${styles.button} ${variant}`}>{props.label}{props.rightIcon &&
            <span className={styles.rightIcon}>{props.rightIcon}</span>}</a>
        </Link>
    )
}

Button.propTypes = {
    isSubmit: PropTypes.bool,
    variant: PropTypes.string,
    label: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    rightIcon: PropTypes.object
}
LinkButton.propTypes = {
    variant: PropTypes.string,
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    rightIcon: PropTypes.object
}
export {Button, LinkButton}