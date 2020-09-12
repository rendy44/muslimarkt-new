import {GlobalDashboardPage} from "../../components/dashboard";
import {Panel} from "../../components/dashboard/front";
import Link from "next/link";
import {LinkButton} from "../../components/button";

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
                    <Panel title={'Judul Panel Pertama'}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod dictum libero vel
                            dapibus. Cras gravida tellus eget viverra gravida. Donec at nisi elit.</p>
                    </Panel>
                </div>
                <div className={'col-md-1-2'}>
                    <Panel title={'Judul Panel Kedua'}>
                        <p>Quisque aliquet mollis felis vel consectetur. Duis dictum eget eros a feugiat. Ut et est sit
                            amet sapien ultrices ultrices eget eget eros. Mauris dui sem, faucibus malesuada ante in,
                            accumsan feugiat enim. Nunc vel rhoncus augue, vitae pretium libero. Fusce fringilla
                            consequat massa.</p>
                    </Panel>
                </div>
            </div>
        </GlobalDashboardPage>
    )
}