import PropTypes from 'prop-types'
import Link from "next/link";
import styles from './styles/button.module.scss'
import ArrowRightLineIcon from "remixicon-react/ArrowRightLineIcon";
import React from "react";

const Button = (props) => {
    const variant = props.variant ? props.variant : 'main';
    const isSmallCss = props.isSmall ? styles.small : ''
    return (
        <button
            className={`${styles.button} ${variant} ${isSmallCss}`}
            type={props.isSubmit ? 'submit' : 'button'}
            disabled={props.isDisabled}>
            {props.label}{props.rightIcon && <span className={styles.rightIcon}><ArrowRightLineIcon size={14}/></span>}
        </button>
    )
}
const LinkButton = (props) => {
    const variant = props.variant ? props.variant : 'main';
    const isSmallCss = props.isSmall ? styles.small : ''
    return (
        <Link href={props.href}>
            <a className={`${styles.button} ${variant} ${isSmallCss}`}>
                {props.label}{props.rightIcon &&
            <span className={styles.rightIcon}><ArrowRightLineIcon size={14}/></span>}
            </a>
        </Link>
    )
}

Button.propTypes = {
    isSubmit: PropTypes.bool,
    variant: PropTypes.string,
    label: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    rightIcon: PropTypes.object,
    isSmall: PropTypes.bool
}
LinkButton.propTypes = {
    variant: PropTypes.string,
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    rightIcon: PropTypes.bool,
    isSmall: PropTypes.bool
}
export {Button, LinkButton}