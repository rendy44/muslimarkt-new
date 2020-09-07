import {GlobalPage} from "../components/global";
import Login from "../components/pages/login";

export default function PageLogin() {
    return (
        <GlobalPage docTitle={'Masuk'} isPlainHeader={true}>
            <Login/>
        </GlobalPage>
    )
}