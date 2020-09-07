import {useState} from 'react';
import PropTypes from 'prop-types';
import styles from "./header.module.scss";
import Link from "next/link";
import {LinkButton} from "./button";

const TopNav = (props) => {
    const [isOpened, setIsOpened] = useState(false);
    console.log(isOpened)
    return (
        <div className={isOpened ? `${styles.nav} ${styles.open}` : styles.nav}>
            <div className={'frow-container'}>
                <div className={styles.inner}>
                    <div className={styles.brand}>
                        <Link href={'/'}>
                            <a>Muslim<span>arkt</span></a>
                        </Link>
                    </div>
                    {!props.isPlainHeader && <div className={styles.menu}>
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
                </div>
            </div>
        </div>
    )
}

TopNav.propTypes = {
    isPlainHeader: PropTypes.bool
}

export {TopNav}