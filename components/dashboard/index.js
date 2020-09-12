import {GlobalPage} from "../global";
import PropTypes from 'prop-types'
import styles from './styles/style.module.scss'
import Icon from 'react-icons-kit'
import Link from "next/link";
import {attachment} from 'react-icons-kit/icomoon/attachment'
import {briefcase} from 'react-icons-kit/entypo/briefcase'
import {starFull} from 'react-icons-kit/icomoon/starFull'
import {settings} from 'react-icons-kit/feather/settings'
import {user} from 'react-icons-kit/ikons/user'
import {save} from 'react-icons-kit/feather/save'
import {cap} from 'react-icons-kit/entypo/cap'
import {activity} from 'react-icons-kit/feather/activity'
import {useState} from "react";

const GlobalDashboardPage = (props) => {
    const [isOpened, setIsOpened] = useState(false);
    const onClick = (e) => {
        setIsOpened(!isOpened)
    }

    return (
        <GlobalPage docTitle={props.title} isPlainHeader={true} isDashboard={true} isNoFooter={true} isOpen={isOpened}
                    onClick={onClick}>
            <div className={isOpened ? `${styles.wrapper} ${styles.open}` : styles.wrapper}>
                <Sidebar/>
                <div className={styles.center}>
                    <div className={styles.top}>
                        {!props.isHideTitle && <h1>{props.title}</h1>}
                    </div>
                    {props.children}
                </div>
            </div>
        </GlobalPage>
    )
}
const Sidebar = (props) => {
    return (
        <aside className={styles.left}>
            <SidebarLinks>
                <LinkItem label={'Dasbor'} link={'/akun'} icon={activity}/>
                <LinkItem label={'Pengaturan'} isTitle={true}/>
                <LinkItem label={'Akun'} link={'/akun/edit'} icon={user}/>
                <LinkItem label={'Pengalaman'} link={'/akun/pengalaman'} icon={briefcase}/>
                <LinkItem label={'Pendidikan'} link={'/akun/pendidikan'} icon={cap}/>
                <LinkItem label={'CV'} link={'/akun/cv'} icon={attachment}/>
                <LinkItem label={'Lainya'} link={'/akun/lain'} icon={settings}/>
                <LinkItem label={'Lowongan'} isTitle={true}/>
                <LinkItem label={'Rekomendasi'} link={'/akun/rekomendasi'} icon={starFull}/>
                <LinkItem label={'Disimpan'} link={'/akun/disimpan'} icon={save}/>
            </SidebarLinks>
        </aside>
    )
}
const SidebarLinks = (props) => {
    return (
        <ul className={styles.links}>{props.children}</ul>
    )
}
const LinkItem = (props) => {
    const labelIcon = props.icon ? <a><Icon icon={props.icon} size={18}/><span>{props.label}</span></a> :
        <a><span>{props.label}</span></a>
    return (
        <li className={props.isTitle ? styles.title : ''}>
            {props.isTitle ? <span>{props.label}</span> :
                <Link href={props.link}>{labelIcon}</Link>}
        </li>
    )
}

GlobalDashboardPage.propTypes = {
    title: PropTypes.string.isRequired,
    isHideTitle: PropTypes.bool
}
LinkItem.propTypes = {
    isTitle: PropTypes.bool,
    label: PropTypes.string.isRequired,
    link: PropTypes.string,
    icon: PropTypes.object
}
export {GlobalDashboardPage}