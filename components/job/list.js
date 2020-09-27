import styles from './styles/list.module.scss'
import PropTypes from 'prop-types'
import {Section} from "../global";
import {FormJobFilter} from "../forms/job";
import Link from "next/link";
import MapPinLineIcon from "remixicon-react/MapPinLineIcon";
import CurrencyLineIcon from "remixicon-react/CurrencyLineIcon";
import TimeLineIcon from "remixicon-react/TimeLineIcon";

const Filter = (props) => {
    const filter = (data, e) => {

    }
    return (
        <Section id={'filter'} extraClass={styles.filter}>
            <FormJobFilter/>
        </Section>
    )
}
const Results = (props) => {
    return (
        <Section id={'results'} extraClass={styles.results}>
            <JobItems>
                <Item slug={'asdasd'} logo={'/network.png'} title={'Web Developer'} company={'PT. Maju Mundur Jaya'}
                      location={'DI Yogyakarta'}
                      update={'3 hari yang lalu'} salary={5000000}/>
                <Item slug={'soid'} logo={'/click.png'} title={'Front-end Developer'} company={'CV. Maju Enggak Mau'}
                      location={'DKI Jakarta'}
                      update={'4 hari yang lalu'} salary={9000000}/>
                <Item slug={'auds9asn'} logo={'/globe.png'} title={'Senior WordPress Developer'}
                      company={'Corporate Indonesia'} location={'Jawa Timur'}
                      update={'7 hari yang lalu'} salary={12000000}/>
            </JobItems>
        </Section>
    )
}
const JobItems = (props) => {
    return (
        <div className={styles.jobItems}>
            {props.children}
        </div>
    )
}
const Item = (props) => {
    return (
        <div className={styles.job}>
            <div className={styles.inner}>
                <div className={styles.block}>
                    <div className={styles.logo}>
                        <img src={props.logo} alt={'Logo perusahaan'}/>
                    </div>
                    <div className={styles.detail}>
                        <Link href={'/#'}>
                            <a className={styles.title}><h3>{props.title}</h3></a>
                        </Link>
                        <p className={styles.company}>{props.company}</p>
                        <p className={styles.location}>
                            <MapPinLineIcon size={16}/><span>{props.location}</span>
                        </p>
                        <p className={styles.salary}>
                            <CurrencyLineIcon size={16}/><span>{props.salary}</span>
                        </p>
                    </div>
                </div>
                <div className={styles.update}>
                    <p><TimeLineIcon size={12}/>{props.update}</p>
                </div>
            </div>
        </div>
    )
}

Item.propTypes = {
    slug: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    salary: PropTypes.number,
    update: PropTypes.string.isRequired
}

export {Filter, Results, JobItems, Item}