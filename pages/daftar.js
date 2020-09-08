import {GlobalPage} from "../components/global";
import Register from "../components/pages/daftar";

export default function PageLogin() {
    return (
        <GlobalPage docTitle={'Daftar'} isPlainHeader={true}>
            <Register/>
        </GlobalPage>
    )
}