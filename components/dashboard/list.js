import PropTypes from 'prop-types'
import styles from './styles/list.module.scss'
import Link from "next/link";
import DeleteBinLineIcon from "remixicon-react/DeleteBinLineIcon";

const ListItems = (props) => {
    return (
        <div className={styles.items}>{props.children}</div>
    )
}

const Item = (props) => {
    return (!props.isDeleted && <div className={props.extraClass ? `${props.extraClass} ${styles.item}` : styles.item}>
            <div className={styles.inner}>
                <div className={styles.title}>
                    <Link href={props.linkTo}><a>{props.title}</a></Link>
                </div>
                <div className={styles.action}>
                    <button><DeleteBinLineIcon size={16}/></button>
                </div>
                <div className={styles.body}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

Item.propTypes = {
    extraClass: PropTypes.string,
    isDeleted: PropTypes.bool,
    linkTo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export {ListItems, Item}