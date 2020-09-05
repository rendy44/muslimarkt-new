import {Section} from "./global";
import styles from './front.module.scss'
import {LinkButton} from "./button";

const Hero = () => {
    return (
        <Section id={'hero'} extraClass={styles.hero}>
            <h1 className={styles.title}>Portal Pekerjaan<br/>Kaum Muslimin</h1>
            <p className={styles.lead}>Insya Allah amanah dan barakah</p>
            <div className={styles.action}>
                <LinkButton href={'/semua-lowongan'} label={'Telusuri Lowongan'} variant={'warning'}/>
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
                    <LinkButton href={'/tentang'} label={'Selengkapnya'}/>
                </div>
            </div>
        </Section>
    )
}
export {Hero, About}