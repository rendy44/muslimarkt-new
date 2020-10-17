import {GlobalPage} from "../../../components/global";
import {useRouter} from "next/router";
import {ApplyAction, CompanyOverview, JobDetail} from "../../../components/job/detail";
import Job from "../../../src/company/job";

// This function gets called at build time
export async function getStaticPaths() {

    let jobs = {}

    // Call an external API endpoint to get posts
    await Job.frontAll()
        .then(result => {
            jobs = result.data.data
        })

    // Get the paths we want to pre-render based on posts
    const paths = jobs.map((job) => ({
        params: {slug: job.slug},
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {paths, fallback: false}
}

// This also gets called at build time
export async function getStaticProps({params}) {

    let job = {}

    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    await Job.frontDetail(params.slug)
        .then(result => {
            job = result.data.data
        })

    // Pass post data to the page via props
    return {props: {job}}
}

export default function VacancyPage({job}) {
    return (
        <GlobalPage docTitle={'Yaa'}>
            <CompanyOverview
                logo={job.user.avatar_url}
                position={job.position}
                company={job.user.display_name}
                location={'Bandung, Indonesia'} industry={'Nganggur'} type={'Kontrak'} experience={'1'}
                education={'SLTA'}/>
            <ApplyAction/>
            <JobDetail/>
        </GlobalPage>
    )
}