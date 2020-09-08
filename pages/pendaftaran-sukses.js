import {GlobalPage} from "../components/global";
import RegistrationSuccess from "../components/pages/registration-success";

export default function PageRegistered() {
    return (
        <GlobalPage docTitle={'Pendaftaran Sukses'} isPlainHeader={true}>
            <RegistrationSuccess/>
        </GlobalPage>
    )
}