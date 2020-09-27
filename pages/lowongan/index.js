import {GlobalPage} from "../../components/global";
import {Filter, Results} from "../../components/job/list";

export default function PageVacancies() {
    return (
        <GlobalPage docTitle={'Telusuri Lowongan'}>
            <Filter/>
            <Results/>
        </GlobalPage>
    )
}