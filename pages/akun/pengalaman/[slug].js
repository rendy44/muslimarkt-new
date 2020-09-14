import {GlobalDashboardPage} from "../../../components/dashboard";
import FormExperience from "../../../components/forms/dashboard/experience";
import {useRouter} from "next/router";

export default function PageEditExperience() {
    let router = useRouter();
    let {slug} = router.query;

    return (
        <GlobalDashboardPage title={'Edit Pengalaman'}>
            <FormExperience slug={slug}/>
        </GlobalDashboardPage>
    )
}