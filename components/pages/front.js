import {useState} from 'react'
import PropTypes from 'prop-types'
import {Section} from "../global";
import {LinkButton} from "../button";
import styles from './styles/front.module.scss'
import {Slider, SliderItem} from "../slider";

const Hero = () => {
    return (
        <Section id={'hero'} extraClass={styles.hero} innerExtraClass={styles.bg}>
            <h1 className={styles.title}>Portal Pekerjaan<br/>Kaum Muslimin</h1>
            <p className={styles.lead}>Insya Allah berkah dan amanah</p>
            <div className={styles.action}>
                <LinkButton href={'/lowongan'} label={'Telusuri Lowongan'} variant={'warning'} rightIcon={true}/>
            </div>
        </Section>
    )
}
const About = () => {
    return (
        <Section id={'about'} extraClass={styles.about}>
            <div className={styles.wrapper}>
                <img src={'/about.jpg'} alt={'Connecting illustration'}/>
                <div className={styles.block}>
                    <h2>Apa itu Muslimarkt?</h2>
                    <p>Muslimarkt ialah portal pekerjaan kaum muslimin, memiliki misi untuk penghubungkan para pengusaha
                        muslim dengan para talenta muslim dalam ikatan profesionalisme.</p>
                    <LinkButton href={'/tentang'} label={'Selengkapnya'} variant={'outline-invert warning'} rightIcon={true}/>
                </div>
            </div>
        </Section>
    )
}
const WhyItem = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.inner}>
                <div className={styles.icon}>
                    <img src={props.iconUrl} alt={'Icon'}/>
                </div>
                <div className={styles.detail}>
                    <h4>{props.title}</h4>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    )
}
const Why = () => {
    return (
        <Section id={'why'} extraClass={styles.why} isDark={true} title={'Mengapa harus Muslimarkt?'}>
            <div className={styles.items}>
                <WhyItem
                    iconUrl={'/puzzle.png'}
                    title={'Muslim First'}
                    desc={'Menghubungkan pengusaha muslim dan talenta muslim dalam ikatan profesionalisme'}
                />
                <WhyItem
                    iconUrl={'/globe.png'}
                    title={'Jangkauan Luas'}
                    desc={'Dapat diakses oleh pengusaha dan talenta muslim di seluruh Indonesia dan bahkan dunia'}
                />
                <WhyItem
                    iconUrl={'/free.png'}
                    title={'Tanpa Biaya'}
                    desc={'Proses pelamaran pekerjaan dan rekrutmen talenta tanpa menggunakan biaya administrasi'}
                />
                <WhyItem
                    iconUrl={'/click.png'}
                    title={'Proses Cepat'}
                    desc={'Proses pelamaran pekerjaan dan rekrutmen talenta dapat dilakukan dalam hitungan menit'}
                />
            </div>
        </Section>
    )
}
const Testimonial = () => {
    const [page, setPage] = useState(1)

    const onChangePage = (page) => {
        setPage(page)
    }

    return (
        <Section extraClass={styles.testimonial} id={'testimonial'} title={'Kata mereka tentang Muslimarkt?'}
                 isTitleCenter={true}>
            <div className={'frow'}>
                <div className={'col-sm-3-4 col-md-2-3'}>
                    <Slider onChangePage={onChangePage}>
                        <SliderItem isActive={page === 1}>
                            <TestimonialItem
                                content={'Aliquam rhoncus lorem sit amet magna pellentesque bibendum. Vestibulum sollicitudin mattis lacinia. Etiam ut sem at velit commodo efficitur rutrum ac ligula.'}
                                name={'Fulan bin Abdullah'} location={'Yogyakarta'}/>
                        </SliderItem>
                        <SliderItem isActive={page === 2}>
                            <TestimonialItem
                                content={'Nam sit amet ipsum ante. Nullam vitae feugiat sem. Integer placerat, mauris sed tempus placerat, magna tellus porttitor mauris,'}
                                name={'Muhammad'} location={'Bojonegoro'}/>
                        </SliderItem>
                        <SliderItem isActive={page === 3}>
                            <TestimonialItem
                                content={'Nam sit amet ipsum ante. Nullam vitae feugiat sem. Integer placerat, mauris sed tempus placerat, magna tellus porttitor mauris,'}
                                name={'Rendy'} location={'Surabaya'}/>
                        </SliderItem>
                    </Slider>
                </div>
            </div>
        </Section>
    )
}
const TestimonialItem = (props) => {
    return (
        <div className={styles.item}>
            <blockquote>{props.content}</blockquote>
            <div className={styles.author}>
                <img src={props.userUrl ? props.userUrl : '/user.png'} alt={'Image'}/>
                <div className={styles.name}>
                    <p>{props.name}<span>{props.location}</span></p>
                </div>
            </div>
        </div>
    )
}
const Register = () => {
    return (
        <Section id={'register'} extraClass={styles.register}>
            <div className={styles.inner}>
                <h2>Mari Terhubung!</h2>
                <div className={styles.wrapper}>
                    <div className={styles.text}>
                        <p>Para pengusaha dan talenta muslim di seluruh Indonesia sudah menunggu.</p>
                    </div>
                    <div className={styles.action}>
                        <LinkButton href={'/daftar'} label={'Ayo Bergabung'} variant={'warning'} rightIcon={true}/>
                    </div>
                </div>
            </div>
        </Section>
    )
}

WhyItem.propTypes = {
    iconUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
}
TestimonialItem.propTypes = {
    content: PropTypes.string.isRequired,
    userUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
}

export {Hero, About, Why, Testimonial, Register}