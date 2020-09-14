import {About, Hero, Register, Testimonial, Why} from "../components/pages/front";
import {GlobalPage} from "../components/global";

export default function PageHome() {
    // console.log(process.env.NEXT_PUBLIC_HOST)
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
