import {About, Hero, Register, Testimonial, Why} from "../components/pages/front";
import {GlobalPage} from "../components/global";

export default function PageHome() {
    return (
        <GlobalPage docTitle={''}>
            <Hero/>
            <About/>
            <Why/>
            <Testimonial/>
            <Register/>
        </GlobalPage>
    )
}
