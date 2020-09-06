import PropTypes from 'prop-types'
import Icon from 'react-icons-kit'
import {socialFacebook} from 'react-icons-kit/metrize/socialFacebook'
import {telephone} from 'react-icons-kit/metrize/telephone'
import {mail} from 'react-icons-kit/metrize/mail'
import {socialTwitter} from 'react-icons-kit/metrize/socialTwitter'

import styles from './footer.module.scss'

const Footer = (props) => {
    return (
        <footer className={styles.footer}>
            <div className={'frow-container'}>
                <div className={styles.inner}>
                    <p>&copy; 2020 {props.siteName}. All rights reserved</p>
                    <div className={styles.socialNetwork}>
                        <ul>
                            <li>
                                <a href={'https://facebook.com'} target={'_blank'} rel={'nofollow'}>
                                    <Icon icon={socialFacebook} size={24}/>
                                </a>
                            </li>
                            <li>
                                <a href={'https://twitter.com'} target={'_blank'} rel={'nofollow'}>
                                    <Icon icon={socialTwitter} size={24}/>
                                </a>
                            </li>
                            <li>
                                <a href={'https://whatsapp.com'} target={'_blank'} rel={'nofollow'}>
                                    <Icon icon={telephone} size={24}/>
                                </a>
                            </li>
                            <li>
                                <a href={'https://gmail.com'} target={'_blank'} rel={'nofollow'}>
                                    <Icon icon={mail} size={24}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
Footer.propTypes = {
    siteName: PropTypes.string.isRequired
}

export {Footer}