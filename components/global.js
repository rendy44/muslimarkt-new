import PropTypes from 'prop-types'
import styles from './styles/global.module.scss'
import {TopNav} from "./header";
import Head from "next/head";
import {Footer, SimpleFooter} from "./footer";
import ReactLoading from 'react-loading';

const siteTitle = 'Muslimarkt'
const siteDescription = 'Portal Pekerjaan Kaum Muslimin'

const GlobalPage = (props) => {
    const maybeFooter = !props.isNoFooter ? (props.isSimpleFooter ? <SimpleFooter siteName={siteTitle}/> :
        <Footer siteName={siteTitle}/>) : <></>
    return (
        <>
            <Head>
                <title>{props.docTitle ? `${props.docTitle} | ${siteTitle}` : `${siteTitle} | ${siteDescription}`}</title>
            </Head>
            <TopNav isPlainHeader={props.isPlainHeader} isDashboard={props.isDashboard} onClick={props.onClick}
                    isOpen={props.isOpen}/>
            {props.children}
            {maybeFooter}
        </>
    )
}
const GenericPage = (props) => {
    return (
        <GlobalPage docTitle={props.title}>
            <Section id={'title'} extraClass={styles.pageTitle}>
                <h1>{props.title}</h1>
            </Section>
            <Section id={'content'} extraClass={styles.pageContent}>
                {props.children}
            </Section>
        </GlobalPage>
    )
}
const Section = (props) => {
    const elmClass = props.isDark ? `${styles.section} ${styles.dark}` : styles.section
    return (
        <div className={props.extraClass ? `${elmClass} ${props.extraClass}` : elmClass}>
            <div className={'frow-container'}>
                <div className={styles.inner}>
                    {props.title && <div className={props.isTitleCenter ? 'frow text-center' : 'frow row-start'}>
                        <div className={'col-sm-2-3'}><h2 className={styles.title}>{props.title}</h2></div>
                    </div>}
                    {props.children}
                </div>
            </div>
        </div>
    )
}
const FullLoading = () => {
    return (
        <div className={styles.full}>
            <ReactLoading type={'bubbles'} color={'#773377'} width={100}/>
        </div>
    )
}
GlobalPage.propTypes = {
    onClick: PropTypes.func,
    isOpen: PropTypes.bool,
    docTitle: PropTypes.string.isRequired,
    isPlainHeader: PropTypes.bool,
    isDashboard: PropTypes.bool,
    isSimpleFooter: PropTypes.bool,
    isNoFooter: PropTypes.bool
}
GenericPage.propTypes = {
    title: PropTypes.string.isRequired
}
Section.propTypes = {
    id: PropTypes.string.isRequired,
    extraClass: PropTypes.string,
    title: PropTypes.string,
    isTitleCenter: PropTypes.bool,
    isDark: PropTypes.bool
}

export {GlobalPage, GenericPage, Section, FullLoading}