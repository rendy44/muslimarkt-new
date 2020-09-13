import PropTypes from 'prop-types'
import styles from './styles/footer.module.scss'
import FacebookLineIcon from "remixicon-react/FacebookLineIcon";
import TwitterLineIcon from "remixicon-react/TwitterLineIcon";
import PhoneLineIcon from "remixicon-react/PhoneLineIcon";
import MailLineIcon from "remixicon-react/MailLineIcon";

const BaseFooter = (props) => {
    return (
        <footer className={props.class}>
            <div className={'frow-container'}>
                <div className={styles.inner}>
                    <p>&copy; 2020 {props.siteName}. All rights reserved</p>
                    {props.children}
                </div>
            </div>
        </footer>
    )
}
const Footer = (props) => {
    return (
        <BaseFooter siteName={props.siteName} class={`${styles.footer} ${styles.rich}`}>
            <div className={styles.socialNetwork}>
                <ul>
                    <li>
                        <a href={'https://facebook.com'} target={'_blank'} rel={'nofollow'}>
                            <FacebookLineIcon size={24}/>
                        </a>
                    </li>
                    <li>
                        <a href={'https://twitter.com'} target={'_blank'} rel={'nofollow'}>
                            <TwitterLineIcon size={24}/>
                        </a>
                    </li>
                    <li>
                        <a href={'https://whatsapp.com'} target={'_blank'} rel={'nofollow'}>
                            <PhoneLineIcon size={24}/>
                        </a>
                    </li>
                    <li>
                        <a href={'https://gmail.com'} target={'_blank'} rel={'nofollow'}>
                            <MailLineIcon size={24}/>
                        </a>
                    </li>
                </ul>
            </div>
        </BaseFooter>
    )
}
const SimpleFooter = (props) => {
    return (
        <BaseFooter siteName={props.siteName} class={styles.footer}/>
    )
}

BaseFooter.propTypes = {
    siteName: PropTypes.string.isRequired,
    class: PropTypes.string
}
Footer.propTypes = {
    siteName: PropTypes.string.isRequired
}
SimpleFooter.propTypes = {
    siteName: PropTypes.string.isRequired
}

export {Footer, SimpleFooter}