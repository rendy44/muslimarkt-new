import {GlobalPage} from "../../components/global";
import {useRouter} from "next/router";
import {CompanyOverview, JobDetail} from "../../components/job/detail";

export default function VacancyPage() {
    const router = useRouter()
    console.log(router)
    return (
        <GlobalPage docTitle={'Yaa'}>
            <CompanyOverview/>
            <JobDetail/>
        </GlobalPage>
    )
}