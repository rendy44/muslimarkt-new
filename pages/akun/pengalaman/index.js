import {GlobalDashboardPage} from "../../../components/dashboard";
import {ItemPlaceholder, ListItems} from "../../../components/dashboard/list";
import ExperienceItem from "../../../components/dashboard/experience";
import {useState, useContext, useEffect} from 'react'
import UserContext from "../../../components/context/user";
import Experience from "../../../src/experience";
import {PlaceholderExperienceItem} from "../../../components/placeholder";
import {FullLoading} from "../../../components/global";

export default function PageExperience() {
    const {userKey} = useContext(UserContext)
    const [isLoaded, setIsLoaded] = useState(false)
    const [htmlLayout, setHtmlLayout] = useState([])
    useEffect(() => {
        let expItems = []

        // Make sure key is available.
        if (userKey) {

            // Perform request.
            Experience.get(userKey)
                .then(result => {

                    // Validate result.
                    if (result.data.success) {

                        result.data.data.map((item, index) => {
                            return (
                                expItems.push(<ExperienceItem
                                    key={index} slug={item.slug} position={item.position}
                                    role={item.role} dateStart={`${item.date_start_month} ${item.date_start_year}`}
                                    dateEnd={item.date_end_cb ? '' : `${item.date_end_month} ${item.date_end_year}`}
                                    company={item.company} industry={item.industry}/>)
                            )
                        })

                        setHtmlLayout(expItems)
                    }

                    setIsLoaded(true)
                })
        }
    }, [userKey])

    return (
        <GlobalDashboardPage title={'Pengalaman'} addNewLink={'/akun/pengalaman/tambah'}>
            <ListItems>
                {isLoaded ? htmlLayout : <FullLoading/>}
            </ListItems>
        </GlobalDashboardPage>
    )
}