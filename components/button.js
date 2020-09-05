import PropTypes from 'prop-types'
import Link from "next/link";
import styles from './button.module.scss'

const Button = (props) => {
    return (
        <>
        </>
    )
}
Button.propTypes = {
    variant: PropTypes.string
}

const LinkButton = (props) => {
    const variant = props.variant ? props.variant : 'main';
    return (
        <Link href={props.href}>
            <a className={`${styles.button} ${variant}`}>{props.label}</a>
        </Link>
    )
}
LinkButton.propTypes = {
    variant: PropTypes.string,
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}
export {Button, LinkButton}