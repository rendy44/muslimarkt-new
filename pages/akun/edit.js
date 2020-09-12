import {GlobalDashboardPage} from "../../components/dashboard";
import FormAccount from "../../components/forms/dashboard/account";

export default function PageEditAccount(){
    return(
        <GlobalDashboardPage title={'Edit Akun'}>
            <FormAccount/>
        </GlobalDashboardPage>
    )
}