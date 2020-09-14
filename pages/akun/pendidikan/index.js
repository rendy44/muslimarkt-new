import {GlobalDashboardPage} from "../../../components/dashboard";
import {ListItems} from "../../../components/dashboard/list";
import EducationItem from "../../../components/dashboard/education";

export default function PageEducation() {
    return (
        <GlobalDashboardPage title={'Pendidikan'} addNewLink={'/akun/pendidikan/tambah'}>
            <ListItems>
                <EducationItem slug={'asdipidsa'} institute={'SMK Negeri Ngasem'} dateGraduation={'Jul 2013'}
                               qualification={'SLTA'} major={'Rekayasa Perangkat Lunak'}/>
            </ListItems>
        </GlobalDashboardPage>
    )
}