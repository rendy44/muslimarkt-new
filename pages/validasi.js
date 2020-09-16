import {FullLoading, GlobalPage} from "../components/global";
import Validation from "../components/pages/validation";
import UserContext from "../components/context/user";
import {useEffect, useContext, useState} from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function PageValidation() {
    const {userKey} = useContext(UserContext);
    useEffect(() => {

        // Make sure it has userkey.
        if (userKey) {

            // Instance a new alert.
            const MySwal = withReactContent(Swal)
            MySwal.fire({
                title: 'Berhasil Verifikasi!',
                text: 'Silahkan lengkapi profil Anda berikut.',
                icon: 'success'
            })
        }
    }, [userKey])

    return (
        <GlobalPage docTitle={'Validasi'} isPlainHeader={true}>
            <Validation/>
        </GlobalPage>
    )
}