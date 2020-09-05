import {About, Hero} from "../components/front";
import {GlobalPage} from "../components/global";

export default function Home() {
    return (
        <GlobalPage docTitle={''}>
            <Hero/>
            <About/>
        </GlobalPage>
    )
}
