import {GlobalPage} from "../components/global";
import Register from "../components/pages/register";

export default function PageLogin() {
    return (
        <GlobalPage docTitle={'Daftar'} isRegistration={true}>
            <Register/>
        </GlobalPage>
    )
}