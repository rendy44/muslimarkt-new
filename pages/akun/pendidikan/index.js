import {GlobalDashboardPage} from "../../../components/dashboard";
import {ListItems} from "../../../components/dashboard/list";
import EducationItem from "../../../components/dashboard/education";
import UserContext from "../../../components/context/user";
import {useContext, useEffect, useState} from "react";
import Education from "../../../src/education";
import {FullLoading} from "../../../components/global";

export default function PageEducation() {
    const {userKey} = useContext(UserContext)
    const [isLoaded, setIsLoaded] = useState(false)
    const [htmlLayout, setHtmlLayout] = useState([])
    useEffect(() => {
        let expItems = []

        // Make sure key is available.
        if (userKey) {

            // Perform request.
            Education.get(userKey)
                .then(result => {

                    // Validate result.
                    if (result.data.success) {

                        result.data.data.map((item, index) => {
                            return (
                                expItems.push(<EducationItem
                                    key={index} slug={item.slug} institute={item.institute}
                                    dateGraduation={item.date_graduation_cb ? 'belum lulus' : `${item.date_graduation_month} ${item.date_graduation_year}`}
                                    qualification={item.qualification}
                                    major={item.major}/>)
                            )
                        })

                        setHtmlLayout(expItems)
                    }

                    setIsLoaded(true)
                })
        }
    }, [userKey])

    return (
        <GlobalDashboardPage title={'Pendidikan'} addNewLink={'/akun/pendidikan/tambah'}>
            <ListItems>
                {isLoaded ? htmlLayout : <FullLoading/>}
            </ListItems>
        </GlobalDashboardPage>
    )
}