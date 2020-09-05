import {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import Icon from 'react-icons-kit'
import {chevronRight} from 'react-icons-kit/feather/chevronRight'
import {chevronLeft} from 'react-icons-kit/feather/chevronLeft'

const Slider = (props) => {
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(page);
    let dots = [];
    const prev = (e) => {
        setPage(page - 1)
        props.onChangePage(page - 1)
    }
    const next = (e) => {
        setPage(page + 1)
        props.onChangePage(page + 1)
    }

    useEffect(() => {
        setMaxPage(props.children.length)
    }, [props, page])

    for (let i = 1; i <= maxPage; i++) {
        dots.push(<li className={page === i ? styles.active : ''} key={i}><a onClick={() => {
            setPage(i)
            props.onChangePage(i)
        }}/></li>)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                {props.children}
            </div>
            <div className={styles.navigation}>
                <button className={page <= 1 ? `${styles.prev} ${styles.hide}` : styles.prev}
                        onClick={prev}><Icon icon={chevronLeft} size={48}/>
                </button>
                <button className={page >= maxPage ? `${styles.next} ${styles.hide}` : styles.next}
                        onClick={next}><Icon icon={chevronRight} size={48}/>
                </button>
            </div>
            <div className={styles.dots}>
                <ul>{dots}</ul>
            </div>
        </div>
    )
}
Slider.propTypes = {
    onChangePage: PropTypes.func.isRequired,
}

const SliderItem = (props) => {
    return (
        <div className={props.isActive ? `${styles.item} ${styles.active}` : styles.item}>
            {props.children}
        </div>
    )
}
SliderItem.propTypes = {
    isActive: PropTypes.bool.isRequired
}

export {Slider, SliderItem}