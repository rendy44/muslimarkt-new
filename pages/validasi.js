import {GlobalPage} from "../components/global";
import Validation from "../components/pages/validation";

export default function PageValidation() {
    return (
        <GlobalPage docTitle={'Validasi'} isPlainHeader={true}>
            <Validation/>
        </GlobalPage>
    )
}