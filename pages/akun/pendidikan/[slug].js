import {GlobalDashboardPage} from "../../../components/dashboard";
import {useRouter} from "next/router";
import FormEducation from "../../../components/forms/dashboard/education";

export default function PageEditExperience() {
    let router = useRouter();
    let {slug} = router.query;

    return (
        <GlobalDashboardPage title={'Edit Pendidikan'}>
            <FormEducation slug={slug}/>
        </GlobalDashboardPage>
    )
}