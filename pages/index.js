import {About, Hero, Testimonial, Why} from "../components/front";
import {GlobalPage} from "../components/global";

export default function Home() {
    return (
        <GlobalPage docTitle={''}>
            <Hero/>
            <About/>
            <Why/>
            <Testimonial/>
        </GlobalPage>
    )
}
