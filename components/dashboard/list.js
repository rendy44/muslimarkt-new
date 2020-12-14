import PropTypes from 'prop-types'
import styles from './styles/list.module.scss'
import Link from "next/link";
import DeleteBinLineIcon from "remixicon-react/DeleteBinLineIcon";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import {useEffect, useState, useContext} from "react";
import {FullLoading} from "../global";
import Connector from "../../src/connector";
import UserContext from "../context/user";

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
const ItemWrapper = (props) => {
    return (
        <div className={props.extraClass ? `${styles.item} ${props.extraClass}` : styles.item}>
            <div className={props.innerExtraClass ? `${styles.inner} ${props.innerExtraClass}` : styles.inner}>
                {props.children}
            </div>
        </div>
    )
}
const Item = (props) => {
    const [isDeleted, setIsDeleted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const delAlert = withReactContent(Swal)
    const {userKey} = useContext(UserContext)
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

                    new Connector(`${props.deleteEndpoint}/${props.slug}/${userKey}`, 'delete')
                        .then(requestResult => {
                            if (requestResult.data.success) {

                                // Set delete state.
                                setIsDeleted(true)
                            } else {

                                // Reset loading.
                                setIsLoading(false)

                                // Instance a new alert.
                                delAlert.fire({
                                    icon: 'error',
                                    text: requestResult.data.message
                                })

                            }
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }
            })
    }
    return (!isDeleted && <div className={props.extraClass ? `${props.extraClass} ${styles.item}` : styles.item}>
            {isLoading ? <FullLoading/> :
                <div className={props.isStandOut ? `${styles.inner} ${styles.odd}` : styles.inner}>
                    <div className={styles.title}>
                        {props.linkAs ? <Link href={props.linkTo} as={props.linkAs}><a>{props.title}</a></Link> :
                            <a href={props.linkTo} target={'_blank'} rel={'nofollow'}>{props.title}</a>}
                    </div>
                    <div className={styles.action}>
                        {props.isWithMoreAction && props.moreAction && props.moreActionIcon &&
                        <button onClick={props.moreAction}>{props.moreActionIcon}</button>}
                        {!props.isHideDelete &&
                        <button className={styles.del} onClick={onClick}><DeleteBinLineIcon size={16}/></button>}
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

ItemWrapper.propTypes = {
    extraClass: PropTypes.string,
    innerExtraClass: PropTypes.string
}
Item.propTypes = {
    extraClass: PropTypes.string,
    isDeleted: PropTypes.bool,
    linkTo: PropTypes.string.isRequired,
    linkAs: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    deleteEndpoint: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    isHideDelete: PropTypes.bool,
    isStandOut: PropTypes.bool,
    isWithMoreAction: PropTypes.bool,
    moreAction: PropTypes.func,
    moreActionIcon: PropTypes.object
}
ItemInfo.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string
}

export {ListItems, Item, ItemWrapper, ItemInfo, ItemPlaceholder}