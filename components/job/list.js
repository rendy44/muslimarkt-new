import styles from './styles/list.module.scss'
import PropTypes from 'prop-types'
import {Section} from "../global";
import {FormJobFilter} from "../forms/job";
const Filter = (props) => {
    const filter = (data,e)=>{

    }
    return (
        <Section id={'filter'} extraClass={styles.filter}>
            <FormJobFilter/>
        </Section>
    )
}
const Results = (props) => {
    return (
        <Section id={'results'} extraClass={styles.results}></Section>
    )
}

export {Filter, Results}