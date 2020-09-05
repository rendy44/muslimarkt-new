import {Section} from "./global";
import styles from './front.module.scss'
import {LinkButton} from "./button";

const Hero = () => {
    return (
        <Section extraClass={styles.hero}>
            <h1 className={styles.title}>Portal Pekerjaan<br/>Kaum Muslimin</h1>
            <p className={styles.lead}>Insya Allah amanah dan barakah</p>
            <div className={styles.action}>
                <LinkButton href={'/semua-lowongan'} label={'Telusuri Lowongan'} variant={'warning'}/>
            </div>
        </Section>
    )
}

export {Hero}