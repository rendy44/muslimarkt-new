import {GlobalDashboardPage} from "../../components/dashboard";
import {Panel} from "../../components/dashboard/front";
import Link from "next/link";
import {LinkButton} from "../../components/button";
import {NotFound} from "../../components/global";

export default function PageAccount() {
    return (
        <GlobalDashboardPage title={'Dasbor'}>
            <div className={'frow gutters row-start items-start'}>
                <div className={'col-md-1-1'}>
                    <Panel>
                        <h2>Selamat datang di Muslimarkt</h2>
                        <div className={'frow gutters'}>
                            <div className={'col-sm-1-2 col-md-3-5'}>
                                <p>Silahkan lengkapi profil Anda untuk mendapatkan kesempatan lebih besar untuk
                                    mendepatkan
                                    pekerjaan impian Anda.</p>
                                <p><LinkButton href={'/akun/edit'} label={'Perbarui Profil'} variant={'warning'}/></p>
                            </div>
                            <div className={'col-sm-1-2 col-md-2-5'}>
                                <p><strong>Lainnya:</strong></p>
                                <ul>
                                    <li>
                                        <Link href={'/akun/pengalaman/tambah'}><a>Tambah riwayat pekerjaan</a></Link>
                                    </li>
                                    <li>
                                        <Link href={'/akun/pendidikan/tambah'}><a>Tambah riwayat pendidikan</a></Link>
                                    </li>
                                    <li>
                                        <Link href={'/akun/cv'}><a>Unggah CV</a></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Panel>
                </div>
                <div className={'col-md-1-2'}>
                    <Panel title={'Status Lamaran'}>
                        <NotFound content={'Belum ada lamaran dikirim.'}/>
                    </Panel>
                    <Panel title={'Jadwal Wawancara'}>
                        <NotFound content={'Belum ada jadwal wawancara.'}/>
                    </Panel>
                </div>
                <div className={'col-md-1-2'}>
                    <Panel title={'Lowongan Disimpan'}>
                        <NotFound content={'Belum ada lowongan disimpan.'}/>
                    </Panel>
                    <Panel title={'Rekomendasi Lowongan'}>
                        <NotFound content={'Belum ada rekomendasi lowongan.'}/>
                    </Panel>
                </div>
            </div>
        </GlobalDashboardPage>
    )
}