import PropTypes from 'prop-types'
import styles from './styles/list.module.scss'
import Link from "next/link";
import DeleteBinLineIcon from "remixicon-react/DeleteBinLineIcon";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import {useEffect, useState} from "react";
import {FullLoading} from "../global";
import Connector from "../../src/connector";

const ListItems = (props) => {
    return (
        <div className={styles.items}>{props.children}</div>
    )
}
const ItemPlaceholder = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.inner}>
                <div className={styles.svg}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

const Item = (props) => {
    const [isDeleted, setIsDeleted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const delAlert = withReactContent(Swal)
    useEffect(() => {
        setIsDeleted(props.isDeleted)
    }, [props])
    const onClick = (e) => {
        delAlert.fire({
            text: 'Yakin ingin menghapus?',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Batal',
            confirmButtonText: 'Hapus',
        })
            .then(result => {

                // Check whether dialog is confirmed or not.
                if (result.isConfirmed) {

                    // Set to loading,
                    setIsLoading(true)
                }
            })
    }
    return (!isDeleted && <div className={props.extraClass ? `${props.extraClass} ${styles.item}` : styles.item}>
            {isLoading ? <FullLoading/> : <div className={styles.inner}>
                <div className={styles.title}>
                    <Link href={props.linkTo} as={props.linkAs}><a>{props.title}</a></Link>
                </div>
                <div className={styles.action}>
                    <button onClick={onClick}><DeleteBinLineIcon size={16}/></button>
                </div>
                <div className={styles.body}>
                    {props.children}
                </div>
            </div>}
        </div>
    )
}
const ItemInfo = (props) => {
    return (
        <div className={styles.info}>
            <span className={styles.label}>{props.label}</span>
            <span>{props.value ? props.value : '-'}</span>
        </div>
    )
}

Item.propTypes = {
    extraClass: PropTypes.string,
    isDeleted: PropTypes.bool,
    linkTo: PropTypes.string.isRequired,
    linkAs: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}
ItemInfo.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string
}

export {ListItems, Item, ItemInfo, ItemPlaceholder}