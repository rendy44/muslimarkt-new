import {FullLoading, GlobalPage} from "../components/global";
import AccountType from "../components/pages/accountType";
import UserContext from "../components/context/user";
import {useEffect, useContext, useState} from "react";

export default function PageValidation() {
    const {userKey} = useContext(UserContext);

    return (
        <GlobalPage docTitle={'Jenis Akun'} isPlainHeader={true}>
            <AccountType/>
        </GlobalPage>
    )
}