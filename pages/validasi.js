import {FullLoading, GlobalPage} from "../components/global";
import Validation from "../components/pages/validation";
import UserContext from "../components/context/user";
import {useEffect, useContext, useState} from "react";

export default function PageValidation() {
    const {userKey} = useContext(UserContext);

    return (
        <GlobalPage docTitle={'Validasi'} isPlainHeader={true}>
            <Validation/>
        </GlobalPage>
    )
}