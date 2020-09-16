import {useContext, useState} from 'react'
import {useRouter} from 'next/router'
import User from "../src/user";
import {useEffect} from "react";
import UserContext from "../components/context/user";
import Head from "next/head";

export default function PageEmailValidation() {
    const router = useRouter();
    const [isSuccess, setIsSuccess] = useState(false);
    const [displayedValue, setDisplayedValue] = useState('');
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

                        // Save loading status.
                        setIsSuccess(true);

                        // Push page route.
                        router.push('/validasi')
                    } else {
                        setDisplayedValue(result.data.data)
                    }
                })
                .catch(err => {
                    console.log(err.message)
                })
        }
    }, [key, displayedValue])

    return (
        <>
            <Head>
                <title>{!isSuccess ? 'Kesalahan' : ''}</title>
            </Head>
            {!isSuccess && displayedValue}
        </>
    )
}