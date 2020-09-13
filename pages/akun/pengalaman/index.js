import {GlobalDashboardPage} from "../../../components/dashboard";
import {ListItems} from "../../../components/dashboard/list";
import ExperienceItem from "../../../components/dashboard/experience";

export default function PageExperience() {
    return (
        <GlobalDashboardPage title={'Pengalaman'} addNewLink={'/akun/pengalaman/tambah'}>
            <ListItems>
                <ExperienceItem
                    slug={'asdasd'} position={'Junior .Net Developer'} role={'Staff'} dateStart={'Jul 2013'}
                    location={'Malang'} company={'PT. Alfasoft'} industry={'Konsultan IT'} dateEnd={'Mar 2014'}/>
                <ExperienceItem
                    slug={'asert'} position={'Front-end Developer'} role={'Staff'} dateStart={'Sep 2014'}
                    location={'Malang'} company={'CV. Kodesfoty'} industry={'Konsultan IT'} dateEnd={'Apr 2016'}/>
                <ExperienceItem
                    slug={'sfdk'} position={'WordPress Developer'} role={'Staff'} dateStart={'Apr 2016'}
                    location={'Yogyakarta'} company={'Harnods'} industry={'Konsultan IT'} dateEnd={'Feb 2019'}/>
                <ExperienceItem
                    slug={'moipasd'} position={'WordPress Developer'} role={'Staff'} dateStart={'Feb 2019'}
                    location={'Yogyakarta'} company={'PT. SoftwareSeni'} industry={'Konsultan IT'}/>
            </ListItems>
        </GlobalDashboardPage>
    )
}