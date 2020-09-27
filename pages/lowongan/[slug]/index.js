import {GlobalPage} from "../../../components/global";
import {useRouter} from "next/router";
import {ApplyAction, CompanyOverview, JobDetail} from "../../../components/job/detail";

export default function VacancyPage() {
    const router = useRouter()
    return (
        <GlobalPage docTitle={'Yaa'}>
            <CompanyOverview/>
            <ApplyAction/>
            <JobDetail/>
        </GlobalPage>
    )
}