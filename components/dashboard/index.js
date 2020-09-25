import {GlobalPage} from "../global";
import PropTypes from 'prop-types'
import styles from './styles/style.module.scss'
import Link from "next/link";
import {useState} from "react";
import AddLineIcon from "remixicon-react/AddLineIcon";
import DashboardLineIcon from "remixicon-react/DashboardLineIcon";
import UserLineIcon from "remixicon-react/UserLineIcon";
import SuitcaseLineIcon from "remixicon-react/SuitcaseLineIcon";
import AttachmentLineIcon from "remixicon-react/AttachmentLineIcon";
import SettingsLineIcon from "remixicon-react/SettingsLineIcon";
import StarLineIcon from "remixicon-react/StarLineIcon";
import SaveLineIcon from "remixicon-react/SaveLineIcon";
import AwardLineIcon from "remixicon-react/AwardLineIcon";
import DiscussLineIcon from "remixicon-react/DiscussLineIcon";
import SendPlaneLineIcon from "remixicon-react/SendPlaneLineIcon";

const GlobalDashboardPage = (props) => {
    const [isOpened, setIsOpened] = useState(false);
    const onClick = (e) => {
        setIsOpened(!isOpened)
    }

    const addNewLbl = <><AddLineIcon
        sizs={32}/><span>{props.addNewLabel ? props.addNewLabel : 'Tambah'}</span></>
    return (
        <GlobalPage docTitle={props.title} isPlainHeader={true} isDashboard={true} isNoFooter={true} isOpen={isOpened}
                    onClick={onClick}>
            <div className={isOpened ? `${styles.wrapper} ${styles.open}` : styles.wrapper}>
                <Sidebar isEmployer={props.isEmployer}/>
                <div className={styles.center}>
                    <div className={styles.top}>
                        {!props.isHideTitle && <h1>{props.title}</h1>}
                        {props.addNewLink && !props.addNewOnClick &&
                        <Link href={props.addNewLink}><a>{addNewLbl}</a></Link>}
                        {!props.addNewLink && props.addNewOnClick &&
                        <button onClick={props.addNewOnClick}>{addNewLbl}</button>}
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
                {props.isEmployer && <>
                    <LinkItem label={'Dasbor'} link={'/perusahaan'} icon={<DashboardLineIcon size={24}/>}/>
                    <LinkItem label={'Pengaturan'} isTitle={true}/>
                    <LinkItem label={'Akun'} link={'/perusahaan/edit'} icon={<UserLineIcon size={24}/>}/>
                    <LinkItem label={'Aktivitas'} isTitle={true}/>
                    <LinkItem label={'Lowongan'} link={'/perusahaan/lowongan'} icon={<SuitcaseLineIcon size={24}/>}/>
                    <LinkItem label={'Lamaran'} link={'/perusahaan/lamaran'} icon={<SendPlaneLineIcon size={24}/>}/>
                    <LinkItem label={'Wawancara'} link={'/perusahaan/wawancara'} icon={<DiscussLineIcon size={24}/>}/>
                </>}
                {!props.isEmployer && <>
                    <LinkItem label={'Dasbor'} link={'/akun'} icon={<DashboardLineIcon size={24}/>}/>
                    <LinkItem label={'Pengaturan'} isTitle={true}/>
                    <LinkItem label={'Akun'} link={'/akun/edit'} icon={<UserLineIcon size={24}/>}/>
                    <LinkItem label={'Pengalaman'} link={'/akun/pengalaman'} icon={<SuitcaseLineIcon size={24}/>}/>
                    <LinkItem label={'Pendidikan'} link={'/akun/pendidikan'} icon={<AwardLineIcon size={24}/>}/>
                    <LinkItem label={'CV'} link={'/akun/cv'} icon={<AttachmentLineIcon size={24}/>}/>
                    <LinkItem label={'Lainya'} link={'/akun/lain'} icon={<SettingsLineIcon size={24}/>}/>
                    <LinkItem label={'Lowongan'} isTitle={true}/>
                    <LinkItem label={'Rekomendasi'} link={'/akun/rekomendasi'} icon={<StarLineIcon size={24}/>}/>
                    <LinkItem label={'Disimpan'} link={'/akun/disimpan'} icon={<SaveLineIcon size={24}/>}/>
                </>}
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
    const labelIcon = props.icon ? <a>{props.icon}<span>{props.label}</span></a> :
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
    isHideTitle: PropTypes.bool,
    addNewLink: PropTypes.string,
    addNewLabel: PropTypes.string,
    addNewOnClick: PropTypes.func,
    isEmployer: PropTypes.bool
}
Sidebar.propTypes = {
    isEmployer: PropTypes.bool
}
LinkItem.propTypes = {
    isTitle: PropTypes.bool,
    label: PropTypes.string.isRequired,
    link: PropTypes.string,
    icon: PropTypes.object
}
export {GlobalDashboardPage}