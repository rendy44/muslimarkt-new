import PropTypes from 'prop-types'
import styles from './styles/style.module.scss'
import {Button, LinkButton} from "../button";

const Form = (props) => {
    return (
        <form className={styles.form} onSubmit={props.onsubmit}>
            <div className={styles.fields}>
                {props.children}
            </div>
            <div className={styles.action}>
                <Button isSubmit={true}
                        label={props.isLoading ? 'Loading...' : (props.submitLabel ? props.submitLabel : 'Submit')}
                        isDisabled={props.isLoading}/>
                {props.otherLink &&
                <LinkButton href={props.otherLink} label={props.otherLabel ? props.otherLabel : 'Batal'}
                            variant={props.otherVariant ? props.otherVariant : 'outline-invert'}/>}
            </div>
        </form>
    )
}
const FormGroup = (props) => {
    return (
        <div className={props.isError ? `${styles.group} ${styles.error}` : styles.group}>
            {props.children}
        </div>
    )
}
const TextBox = (props) => {
    return (
        <FormGroup isError={props.errorsObj[props.name]}>
            {props.icon && <div className={styles.icon}>{props.icon}</div>}
            <div className={styles.input}>
                {props.label && <label className={styles.label}>{props.label}</label>}
                <input id={props.name} name={props.name} type={props.type} ref={props.reference}
                       placeholder={props.placeholder}/>
            </div>
        </FormGroup>
    )
}

FormGroup.propTypes = {
    isError: PropTypes.bool
}

Form.propTypes = {
    onsubmit: PropTypes.func.isRequired,
    submitLabel: PropTypes.string,
    isLoading: PropTypes.bool,
    otherLink: PropTypes.string,
    otherLabel: PropTypes.string,
    otherVariant: PropTypes.string
}
TextBox.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.object,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    reference: PropTypes.func.isRequired,
    errorsObj: PropTypes.object
}
export {Form, TextBox}