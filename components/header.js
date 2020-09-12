import {useState} from 'react';
import PropTypes from 'prop-types';
import styles from "./styles/header.module.scss";
import Link from "next/link";
import {LinkButton} from "./button";
import Icon from 'react-icons-kit'
import {menu} from 'react-icons-kit/feather/menu'

const TopNav = (props) => {
    const [isOpened, setIsOpened] = useState(false);
    const navStyle = props.isDashboard ? `${styles.nav} ${styles.dashboard}` : styles.nav
    return (
        <div className={isOpened ? `${navStyle} ${styles.open}` : navStyle}>
            <div className={!props.isDashboard ? 'frow-container' : ''}>
                <div className={styles.inner}>
                    <div className={props.isPlainHeader ? `${styles.brand} ${styles.plain}` : styles.brand}>
                        {props.isDashboard && <button className={props.isOpen ? `${styles.dashboardMenu} ${styles.open}` : styles.dashboardMenu} onClick={props.onClick}>
                            <Icon icon={menu} size={32}/>
                        </button>}
                        <Link href={'/'}>
                            <a>Muslim<span>arkt</span></a>
                        </Link>
                    </div>
                    {!props.isPlainHeader && !props.isLoggedIn && <div className={styles.menu}>
                        <ul>
                            <li>
                                <LinkButton href={'/perusahaan'} label={'Cari Talenta'} variant={'success'}/>
                            </li>
                            <li>
                                <Link href={'/masuk'}>
                                    <a>Masuk</a>
                                </Link>
                            </li>
                        </ul>
                        <button className={styles.toggle} onClick={() => {
                            setIsOpened(!isOpened)
                        }}>
                            <span/>
                            <span/>
                            <span/>
                        </button>
                        <div className={styles.dropdown}>
                            <div className={'frow-container'}>
                                <div className={styles.inner}>
                                    <div className={styles.links}>
                                        <ul>
                                            <li>
                                                <Link href={'/lowongan'}>
                                                    <a>Telusuri Lowongan</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/tentang'}>
                                                    <a>Tentang</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/kebijakan-layanan'}>
                                                    <a>Kebijakan Layanan</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={styles.account}>
                                        <LinkButton href={'/perusahaan'} label={'Cari Talenta'} variant={'success'}/>
                                        <LinkButton href={'/masuk'} label={'Masuk'} variant={'outline'}/>
                                        <p>Daftarkan segera perusahaan Anda untuk merekrut talenta muslim yang
                                            profesional.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
                    {props.isLoggedIn && <></>}
                </div>
            </div>
        </div>
    )
}

TopNav.propTypes = {
    isPlainHeader: PropTypes.bool,
    isDashboard: PropTypes.bool,
    onClick: PropTypes.func,
    isOpen: PropTypes.bool,
    isLoggedIn: PropTypes.bool,
    isRightOpen: PropTypes.bool
}

export {TopNav}