import {useContext} from 'react'
import {useRouter} from 'next/router'
import User from "../src/user";
import {useEffect} from "react";
import UserContext from "../components/context/user";

export default function PageEmailValidation() {
    const router = useRouter();
    const {key} = router.query;
    const {saveUserKey} = useContext(UserContext);

    useEffect(() => {

        // Only process if key is available.
        if (key) {
            User.activate(key)
                .then(result => {

                    // If success move to another page.
                    if (result.data.success) {
                        // Save user key into context.
                        saveUserKey(key)

                        // Push page route.
                        router.push('/validasi')
                    }
                    // console.log(result.data)
                })
        }
    }, [key])
    return (
        <>
        </>
    )
}