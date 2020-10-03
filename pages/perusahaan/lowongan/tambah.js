import {GlobalDashboardPage} from "../../../components/dashboard";
import {FormJob} from "../../../components/forms/dashboard/company/job";

export default function PageAddNewJob() {
    return (<GlobalDashboardPage title={'Tambah Lowongan'} isEmployer={true}>
        <FormJob/>
    </GlobalDashboardPage>)
}