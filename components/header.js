import {useState, useEffect, useContext} from 'react';
import PropTypes from 'prop-types';
import styles from "./styles/header.module.scss";
import Link from "next/link";
import {LinkButton} from "./button";
import Menu2LineIcon from "remixicon-react/Menu2LineIcon";
import UserLineIcon from "remixicon-react/UserLineIcon";
import SettingsLineIcon from "remixicon-react/SettingsLineIcon";
import LogoutCircleRLineIcon from "remixicon-react/LogoutCircleRLineIcon";
import UserContext from "./context/user";

const Toggle = (props) => {
    return (
        <button className={props.isOpen ? `${styles.toggle} ${styles.open}` : styles.toggle} onClick={props.onClick}>
            <span/>
            <span/>
            <span/>
        </button>
    )
}
const TopNav = (props) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isOpened, setIsOpened] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navStyle = props.isDashboard ? `${styles.nav} ${styles.dashboard}` : styles.nav
    const {userKey, userData} = useContext(UserContext);
    useEffect(() => {

        // Check user key availability.
        if (userKey) {

            // Set status into login.
            setIsLoggedIn(true)
            setIsLoaded(true);
        }
    }, [userKey])
    return (
        <div className={isOpened ? `${navStyle} ${styles.open}` : navStyle}>
            <div className={!props.isDashboard ? 'frow-container' : 'width-100'}>
                <div className={styles.inner}>
                    <div className={props.isPlainHeader ? `${styles.brand} ${styles.plain}` : styles.brand}>
                        {props.isDashboard && <button
                            className={props.isOpen ? `${styles.dashboardMenu} ${styles.open}` : styles.dashboardMenu}
                            onClick={props.onClick}>
                            <Menu2LineIcon size={32}/>
                        </button>}
                        <Link href={'/'}>
                            <a>Muslim<span>arkt</span></a>
                        </Link>
                    </div>
                    {isLoggedIn && (props.isDashboard || !props.isPlainHeader) && <div className={styles.menuLoggedIn}>
                        <ul>
                            <li>
                                <div className={styles.profile}>
                                    <Link href={'#'}>
                                        <a onClick={(e) => {
                                            e.preventDefault();
                                            setIsOpened(!isOpened)
                                        }}>
                                            {userData.avatar_url && userData.display_name && <>
                                                <img src={userData.avatar_url} alt={'User profile picture'}/>
                                                <span>{userData.display_name}</span>
                                            </>}
                                        </a>
                                    </Link>
                                </div>
                                <ul className={isOpened ? styles.open : ''}>
                                    <li>
                                        <Link href={'/profil'}>
                                            <a><UserLineIcon size={16}/><span>Lihat profil</span></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/akun'}>
                                            <a><SettingsLineIcon size={16}/><span>Akun saya</span></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/keluar'}>
                                            <a><LogoutCircleRLineIcon size={16}/><span>Keluar</span></a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>}
                    {!isLoggedIn && !props.isPlainHeader && <div className={styles.menu}>
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
                        <Toggle onClick={() => {
                            setIsOpened(!isOpened)
                        }} isOpen={isOpened}/>
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
                </div>
            </div>
        </div>
    )
}

Toggle.propTypes = {
    onClick: PropTypes.func.isRequired,
    isOpen: PropTypes.bool
}
TopNav.propTypes = {
    isPlainHeader: PropTypes.bool,
    isDashboard: PropTypes.bool,
    onClick: PropTypes.func,
    isOpen: PropTypes.bool,
    isRightOpen: PropTypes.bool
}

export {TopNav}