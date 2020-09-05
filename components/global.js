import PropTypes from 'prop-types'
import styles from './global.module.scss'
import {TopNav} from "./header";
import Head from "next/head";

const siteTitle = 'Muslimarkt'
const siteDescription = 'Portal Pekerjaan Kaum Muslimin'

const GlobalPage = (props) => {
    return (
        <>
            <Head>
                <title>{props.docTitle ? `${props.docTitle} | ${siteTitle}` : `${siteTitle} | ${siteDescription}`}</title>
            </Head>
            <TopNav/>
            {props.children}
        </>
    )
}
GlobalPage.propTypes = {
    docTitle: PropTypes.string.isRequired
}

const Section = (props) => {
    return (
        <div className={props.extraClass ? `${styles.section} ${props.extraClass}` : styles.section}>
            <div className={'frow-container'}>
                <div className={'frow'}>
                    <div className={'col-sm-1-1'}>{props.children}</div>
                </div>
            </div>
        </div>
    )
}
Section.propTypes = {
    extraClass: PropTypes.string
}

export {GlobalPage, Section}