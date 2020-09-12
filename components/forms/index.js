import PropTypes from 'prop-types'
import styles from './styles/style.module.scss'
import {Button, LinkButton} from "../button";
import Icon from 'react-icons-kit'
import {check} from 'react-icons-kit/metrize/check'
import {arrowRight} from 'react-icons-kit/feather/arrowRight'

const DropDownValues = (props) => {
    let valueHtml = []

    props.values.map((value, index) => {
        return (
            valueHtml.push(<option key={index}>{value}</option>)
        )
    })
    return (valueHtml)
}
const Form = (props) => {
    return (
        <form className={styles.form} onSubmit={props.onSubmit}>
            <div className={styles.fields}>
                {props.children}
            </div>
            <div className={styles.action}>
                <Button isSubmit={true}
                        label={props.isLoading ? 'Loading...' : (props.submitLabel ? props.submitLabel : 'Submit')}
                        isDisabled={props.isDisabled || props.isLoading}
                        rightIcon={props.useArrowIcon ? <Icon icon={arrowRight}/> : <></>}/>
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
const DropDown = (props) => {
    let valueHtml = []

    props.values.map((value, index) => {
        return (
            valueHtml.push(<option key={index}>{value}</option>)
        )
    })
    return (
        <FormGroup isError={props.errorsObj[props.name]}>
            {props.icon && <div className={styles.icon}>{props.icon}</div>}
            <div className={styles.input}>
                {props.label && <label className={styles.label}>{props.label}</label>}
                <select>{valueHtml}</select>
            </div>
        </FormGroup>
    )
}
const DateDropDown = (props) => {
    let yearVal = []
    for (let i = 1950; i <= 2020; i++) {
        yearVal.push(i)
    }

    return (
        <FormGroup isError={false}>
            {props.icon && <div className={styles.icon}>{props.icon}</div>}
            <div className={styles.input}>
                {props.label && <label className={styles.label}>{props.label}</label>}
                <div className={'frow'}>
                    <div className={'col-xs-2-9'}>
                        <select id={`${props.id}_day`} name={`${props.name}_day`} ref={props.reference}>
                            <DropDownValues
                                values={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]}/>
                        </select>
                    </div>
                    <div className={'col-xs-3-9'}>
                        <select id={`${props.id}_month`} name={`${props.name}_month`} ref={props.reference}>
                            <DropDownValues
                                values={['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']}/>
                        </select>
                    </div>
                    <div className={'col-xs-4-9'}>
                        <select id={`${props.id}_year`} name={`${props.name}_year`} ref={props.reference}>
                            <DropDownValues
                                values={yearVal}/>
                        </select>
                    </div>
                </div>
            </div>
        </FormGroup>
    )
}
const ImageToggle = (props) => {
    return (
        <div className={styles.imageToggle}>
            {props.children}
        </div>
    )
}
const ToggleItem = (props) => {
    return (
        <div className={styles.toggle}>
            <div className={styles.inner}>
                <input onChange={props.onChange} id={props.value} type={'radio'} name={props.name} value={props.value}
                       ref={props.reference}/>
                <label htmlFor={props.value}>
                    <img src={props.image} alt={'Radio'}/>
                    <p>{props.label}</p>
                </label>
                <div className={styles.icon}>
                    <Icon icon={check} size={32}/>
                </div>
            </div>
        </div>
    )
}

FormGroup.propTypes = {
    isError: PropTypes.bool
}
Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    submitLabel: PropTypes.string,
    isLoading: PropTypes.bool,
    otherLink: PropTypes.string,
    otherLabel: PropTypes.string,
    otherVariant: PropTypes.string,
    isDisabled: PropTypes.bool,
    useArrowIcon: PropTypes.bool
}
TextBox.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.object,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    reference: PropTypes.func.isRequired,
    errorsObj: PropTypes.object.isRequired
}
DropDownValues.propTypes = {
    values: PropTypes.array.isRequired
}
DropDown.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.object,
    label: PropTypes.string,
    reference: PropTypes.func.isRequired,
    errorsObj: PropTypes.object.isRequired,
    values: PropTypes.array.isRequired
}
DateDropDown.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.object,
    label: PropTypes.string,
    reference: PropTypes.func.isRequired,
}
ToggleItem.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    label: PropTypes.string,
    reference: PropTypes.func.isRequired,
    onChange: PropTypes.func
}
export {Form, TextBox, DropDown, DateDropDown, ImageToggle, ToggleItem}