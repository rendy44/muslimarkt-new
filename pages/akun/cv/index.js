import {GlobalDashboardPage} from "../../../components/dashboard";
import {CVAdd, CVFile} from "../../../components/dashboard/cv";
import {ListItems} from "../../../components/dashboard/list";

export default function PageCV() {
    return (
        <GlobalDashboardPage title={'CV'}>
            <ListItems>
                <CVAdd/>
                <CVFile title={'Resume.pdf'}
                        slug={'asdasd'}
                        url={'http://download.com'}
                        uploadDate={'22 Jun 2020 13:30:15'}/>
                <CVFile slug={'aas'}
                        url={'http://fb.com'}
                        title={'Resumex.pdf'}
                        uploadDate={'20 Mei 2020 21:04:07'}
                        isActive={true}/>
                <CVFile slug={'aosid'}
                        url={'http://youtu,be'}
                        title={'Resume (3).pdf'}
                        uploadDate={'14 April 2020 07:123:02'}/>
            </ListItems>
        </GlobalDashboardPage>
    )
}