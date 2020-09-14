import {GlobalDashboardPage} from "../../../components/dashboard";
import FormEducation from "../../../components/forms/dashboard/education";

export default function PageAddEducation() {
    return (
        <GlobalDashboardPage title={'Tambah Pendidikan'}>
            <FormEducation/>
        </GlobalDashboardPage>
    )
}