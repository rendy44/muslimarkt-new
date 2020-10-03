import PropTypes from 'prop-types'
import styles from './styles/detail.module.scss'
import Link from "next/link";
import {Section} from "../global";
import FacebookLineIcon from "remixicon-react/FacebookLineIcon";
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import TwitterLineIcon from "remixicon-react/TwitterLineIcon";
import YoutubeLineIcon from "remixicon-react/YoutubeLineIcon";
import LinkedinLineIcon from "remixicon-react/LinkedinLineIcon";
import LinksLineIcon from "remixicon-react/LinksLineIcon";
import {useState} from "react";
import {Button, LinkButton} from "../button";
import HeartLineIcon from "remixicon-react/HeartLineIcon";
import HeartFillIcon from "remixicon-react/HeartFillIcon";
import {Slider, SliderItem} from "../slider";

const CompanyOverview = (props) => {
    return (
        <Section id={'compOverview'} extraClass={styles.companyOverview}>
            <div className={styles.inner}>
                <div className={styles.logo}>
                    <img src={'/logo.png'} alt={'Logo perusahaan'}/>
                </div>
                <div className={styles.detail}>
                    <h1 className={styles.title}>WordPress Developer</h1>
                    <Link href={'/perusahaan/abc'}><a className={styles.company}>PT. Nama Perusahaan<span
                        className={styles.location}>Jawa Timur, Indonesia</span></a></Link>
                    <p className={styles.salary}>Rp 5.000.000 - 9.000.000</p>
                </div>
            </div>
            <div className={styles.extras}>
                <ul>
                    <li>Industri<span>Teknologi Informasi</span></li>
                    <li>Tipe<span>Kontrak</span></li>
                    <li>Pengalaman<span>2 tahun</span></li>
                    <li>Pendidikan<span>Diploma (D3)</span></li>
                </ul>
            </div>
        </Section>
    )
}
const ActionButton = (props) => {
    const [isLiked, setIsLiked] = useState(false)
    const like = (e) => {
        setIsLiked(!isLiked)
    }
    return (
        <div className={styles.applyAction}>
            <LinkButton href={'#'} label={'Lamar Sekarang'} variant={'success'}/>
            <Button label={isLiked ? <HeartFillIcon size={20}/> : <HeartLineIcon size={20}/>}
                    variant={'outline-invert'} onClick={like}/>
        </div>
    )
}
const ApplyAction = (props) => {
    return (
        <Section id={'apply'} extraClass={styles.actionMobile}>
            <ActionButton/>
        </Section>
    )
}
const CompanyGallery = (props) => {
    const [page, setPage] = useState(1)

    const onChangePage = (page) => {
        setPage(page)
    }
    return (
        <Slider onChangePage={onChangePage}>
            {props.sources.map((gal, index) => {
                return (
                    <SliderItem key={index} isActive={index === page - 1}>
                        <img src={gal} alt={'Galery'}/>
                    </SliderItem>
                )
            })}
        </Slider>
    )
}
const CardBlock = (props) => {
    const cssClass = props.extraClass ? `${styles.cardBlock} ${props.extraClass}` : styles.cardBlock
    return (
        <div className={props.isTransparentMobile ? `${cssClass} ${styles.transparent}` : cssClass}>
            {props.title && <div className={styles.title}><h3>{props.title}</h3></div>}
            <div className={styles.body}>{props.children}</div>
        </div>
    )
}
const JobDetail = (props) => {
    return (
        <Section id={'jobDesc'} extraClass={styles.jobDesc}>
            <div className={styles.grid}>
                <div className={styles.content}>
                    <CardBlock title={'Deskripsi Pekerjaan'}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                            luctus dolor sed quam viverra egestas. Donec venenatis sit amet augue suscipit
                            dignissim. In
                            malesuada fringilla magna non scelerisque. Cras porta mattis dui, commodo tincidunt enim
                            faucibus hendrerit. Nunc leo risus, mollis eget tellus eget, consequat tempor nisi.</p>
                    </CardBlock>
                    <CardBlock title={'Persyaratan'}>
                        <p>Pellentesque ut velit aliquet, vulputate diam a, semper est. In vel ultrices erat. Nam
                            sit amet justo at enim vulputate vestibulum sit amet et quam. Interdum et malesuada
                            fames ac ante ipsum primis in faucibus. Quisque vestibulum odio at porta sagittis. Sed
                            tempus urna neque. Nulla efficitur ultricies enim nec euismod.</p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                            <li>Aliquam tincidunt mauris eu risus.</li>
                            <li>Vestibulum auctor dapibus neque.</li>
                        </ul>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                            egestas.</p>
                    </CardBlock>
                    <CardBlock title={'Keahlian'}>
                        <ul className={styles.skills}>
                            <li>WordPress</li>
                            <li>WooCommerce</li>
                            <li>PHP</li>
                            <li>JavaScript</li>
                            <li>SASS</li>
                            <li>ReactJs</li>
                            <li>MySQL</li>
                        </ul>
                    </CardBlock>
                </div>
                <div className={styles.sidebar}>
                    <div className={styles.actionDesktop}>
                        <ActionButton/>
                    </div>
                    <CardBlock isTransparentMobile={true} title={'Tentang Perusahaan'}>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                            libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
                            leo.</p>
                        <ul className={styles.info}>
                            <li>Lokasi<span>Jawa Timur, Indonesia</span></li>
                            <li>Industri<span>Teknologi Informasi</span></li>
                            <li>Karyawan<span>10 - 50 orang</span></li>
                        </ul>
                    </CardBlock>
                    <ul className={styles.socNet}>
                        <li>
                            <a href={'http://fb.com'} target={'_blank'} rel={'nofollow'}>
                                <FacebookLineIcon size={16}/>
                            </a>
                        </li>
                        <li>
                            <a href={'http://instagram.com'} target={'_blank'} rel={'nofollow'}>
                                <InstagramLineIcon size={16}/>
                            </a>
                        </li>
                        <li>
                            <a href={'http://twitter.com'} target={'_blank'} rel={'nofollow'}>
                                <TwitterLineIcon size={16}/>
                            </a>
                        </li>
                        <li>
                            <a href={'http://youtube.com'} target={'_blank'} rel={'nofollow'}>
                                <YoutubeLineIcon size={16}/>
                            </a>
                        </li>
                        <li>
                            <a href={'http://linkedin.com'} target={'_blank'} rel={'nofollow'}>
                                <LinkedinLineIcon size={16}/>
                            </a>
                        </li>
                        <li>
                            <a href={'http://sample.com'} target={'_blank'} rel={'nofollow'}>
                                <LinksLineIcon size={16}/>
                            </a>
                        </li>
                    </ul>
                    <CardBlock isTransparentMobile={true} title={'Galeri Perusahaan'}>
                        <CompanyGallery sources={[
                            '/slide1.jpg',
                            '/slide6.jpg',
                            '/slide2.jpg',
                            '/slide3.jpg',
                            '/slide4.jpg',
                            '/slide5.jpg',
                        ]}/>
                    </CardBlock>
                </div>
            </div>
        </Section>
    )
}

CardBlock.propTypes = {
    isTransparentMobile: PropTypes.bool,
    title: PropTypes.string,
    extraClass: PropTypes.string
}
CompanyGallery.propTypes = {
    sources: PropTypes.array
}

export {CompanyOverview, ApplyAction, JobDetail}