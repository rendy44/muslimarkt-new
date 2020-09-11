import {GlobalPage} from "../global";
import PropTypes from 'prop-types'

const GlobalDashboardPage = (props) => {
    return (
        <GlobalPage docTitle={props.title} isPlainHeader={true} isSimpleFooter={true}>{props.children}</GlobalPage>
    )
}


GlobalDashboardPage.propTypes = {
    title: PropTypes.string.isRequired
}
export {GlobalDashboardPage}