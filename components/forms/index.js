import PropTypes from 'prop-types'
import styles from './styles/style.module.scss'
import {Button, LinkButton} from "../button";
import ArrowRightLineIcon from "remixicon-react/ArrowRightLineIcon";
import CheckboxCircleLineIcon from "remixicon-react/CheckboxCircleLineIcon";
import {useEffect, useState} from "react";

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
            {!props.isNoAction && <div className={styles.action}>
                <Button isSubmit={true}
                        label={props.isLoading ? 'Loading...' : (props.submitLabel ? props.submitLabel : 'Submit')}
                        isDisabled={props.isDisabled || props.isLoading}
                        rightIcon={props.useArrowIcon ? <ArrowRightLineIcon size={20}/> : <></>} isSmall={true}/>
                {props.otherLink &&
                <LinkButton href={props.otherLink} label={props.otherLabel ? props.otherLabel : 'Batal'}
                            variant={props.otherVariant ? props.otherVariant : 'outline-invert'} isSmall={true}/>}
            </div>}
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
        <FormGroup isError={!!props.errorsObj[props.name]}>
            {props.icon && <div className={styles.icon}>{props.icon}</div>}
            <div className={styles.input}>
                {props.label && <label htmlFor={props.name} className={styles.label}>{props.label}</label>}
                <div className={styles.multi}>
                    {props.prefix && <span className={styles.prefix}>{props.prefix}</span>}
                    <input defaultValue={props.value} id={props.name} name={props.name} type={props.type}
                           ref={props.reference} placeholder={props.placeholder}/>
                </div>
            </div>
        </FormGroup>
    )
}
const TextArea = (props) => {
    return (
        <FormGroup isError={!!props.errorsObj[props.name]}>
            {props.icon && <div className={styles.icon}>{props.icon}</div>}
            <div className={styles.input}>
                {props.label && <label htmlFor={props.name} className={styles.label}>{props.label}</label>}
                <textarea id={props.name} name={props.name} ref={props.reference} defaultValue={props.value}
                          placeholder={props.placeholder}/>
            </div>
        </FormGroup>
    )
}
const DropDown = (props) => {
    const [value, setValue] = useState('');
    const onChange = (e) => {
        setValue(e.target.value)
    }

    useEffect(() => {

        // If value available.
        if (props.value) {

            // Save into state.
            setValue(props.value)
        }
    }, [props.value])
    return (
        <FormGroup isError={!!props.errorsObj[props.name]}>
            {props.icon && <div className={styles.icon}>{props.icon}</div>}
            <div className={styles.input}>
                {props.label && <label htmlFor={props.name} className={styles.label}>{props.label}</label>}
                <div className={styles.multi}>
                    <select id={props.name} onChange={onChange} ref={props.reference}
                            value={value}
                            name={props.name}>
                        <DropDownValues values={props.values}/>
                    </select>
                    {props.affix && <span>{props.affix}</span>}
                </div>
            </div>
        </FormGroup>
    )
}
const DateDropDown = (props) => {
    let yearVal = []
    const [dayValue, setDayValue] = useState('')
    const [monthValue, setMonthValue] = useState('')
    const [yearValue, setYearValue] = useState('')
    for (let i = 1950; i <= 2020; i++) {
        yearVal.push(i)
    }

    const onDayChange = (e) => {
        setDayValue(e.target.value)
    }
    const onMonthChange = (e) => {
        setMonthValue(e.target.value)
    }
    const onYearChange = (e) => {
        setYearValue(e.target.value)
    }
    useEffect(() => {

        // If day value is available.
        if (props.value && props.value[0]) {

            // Save into state.
            setDayValue(props.value[0])
        }

        if (props.value && props.value[1]) {
            setMonthValue(props.value[1])
        }

        if (props.value && props.value[2]) {
            setYearValue(props.value[2])
        }
    }, props.value)
    return (
        <FormGroup isError={false}>
            {props.icon && <div className={styles.icon}>{props.icon}</div>}
            <div className={styles.input}>
                {props.label && <label htmlFor={props.isNoDay ? `${props.name}_month` : `${props.name}_day`}
                                       className={styles.label}>{props.label}</label>}
                <div className={styles.multi}>
                    <div className={styles.inner}>
                        {!props.isNoDay && <div>
                            <select id={`${props.name}_day`} name={`${props.name}_day`} ref={props.reference}
                                    disabled={props.isDisabled} value={dayValue}
                                    onChange={onDayChange}>
                                <DropDownValues
                                    values={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]}/>
                            </select>
                        </div>}
                        <div>
                            <select id={`${props.name}_month`} name={`${props.name}_month`} ref={props.reference}
                                    disabled={props.isDisabled} value={monthValue}
                                    onChange={onMonthChange}>
                                <DropDownValues
                                    values={['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']}/>
                            </select>
                        </div>
                        <div>
                            <select id={`${props.name}_year`} name={`${props.name}_year`} ref={props.reference}
                                    disabled={props.isDisabled} value={yearValue}
                                    onChange={onYearChange}>
                                <DropDownValues
                                    values={yearVal}/>
                            </select>
                        </div>
                    </div>
                    {props.isWithCheckbox && <div className={styles.cb}>
                        <input id={`${props.name}_cb`} name={`${props.name}_cb`} value={'yes'} type={'checkbox'}
                               onChange={props.onChangeCheckbox} ref={props.reference} checked={props.isDisabled}/>
                        <label
                            htmlFor={`${props.name}_cb`}>{props.labelCheckbox}</label>
                    </div>}
                </div>
            </div>
        </FormGroup>
    )
}
const IdInput = (props) => {
    const [typeValue, setTypeValue] = useState('');
    useEffect(() => {
        if (props.value[0]) {
            setTypeValue(props.value[0])
        }
    }, [props.value])
    const onChange = (e) => {
        setTypeValue(e.target.value)
    }
    return (
        <FormGroup isError={!!props.errorsObj[`${props.name}_value`]}>
            {props.icon && <div className={styles.icon}>{props.icon}</div>}
            <div className={styles.input}>
                {props.label && <label className={styles.label}>{props.label}</label>}
                <div className={styles.multi}>
                    <div className={styles.inner}>
                        <div>
                            <select id={`${props.name}_type`} onChange={onChange} name={`${props.name}_type`}
                                    ref={props.reference}
                                    value={typeValue}>
                                <DropDownValues
                                    values={['KTP', 'SIM', 'Passport']}/>
                            </select>
                        </div>
                        <div>
                            <input id={`${props.name}_value`} name={`${props.name}_value`} type={'text'}
                                   ref={props.reference}
                                   placeholder={props.placeholder} defaultValue={props.value ? props.value[1] : ''}/>
                        </div>
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
                    <CheckboxCircleLineIcon size={48}/>
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
    useArrowIcon: PropTypes.bool,
    isNoAction: PropTypes.bool
}
IdInput.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.object,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    reference: PropTypes.func.isRequired,
    errorsObj: PropTypes.object.isRequired,
    value: PropTypes.array
}
TextBox.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.object,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    reference: PropTypes.func.isRequired,
    errorsObj: PropTypes.object.isRequired,
    value: PropTypes.string,
    prefix: PropTypes.string
}
TextArea.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.object,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    reference: PropTypes.func.isRequired,
    errorsObj: PropTypes.object.isRequired,
    value: PropTypes.string
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
    values: PropTypes.array.isRequired,
    value: PropTypes.string,
    affix: PropTypes.string
}
DateDropDown.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.object,
    label: PropTypes.string,
    reference: PropTypes.func.isRequired,
    isNoDay: PropTypes.bool,
    isWithCheckbox: PropTypes.bool,
    labelCheckbox: PropTypes.string,
    onChangeCheckbox: PropTypes.func,
    isDisabled: PropTypes.bool,
    value: PropTypes.array
}
ToggleItem.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    label: PropTypes.string,
    reference: PropTypes.func.isRequired,
    onChange: PropTypes.func
}

export {Form, TextBox, TextArea, DropDown, DateDropDown, IdInput, ImageToggle, ToggleItem, FormGroup}