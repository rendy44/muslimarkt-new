import {GlobalDashboardPage} from "../../../components/dashboard";

export default function PageAdminJob(props) {
    return (
        <GlobalDashboardPage title={'Lowongan'} isEmployer={true}
                             addNewLink={'/perusahaan/lowongan/tambah'}>
            Yaa
        </GlobalDashboardPage>
    )
}