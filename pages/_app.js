import '../styles/app.scss';
import {useRouter} from 'next/router'
import {destroyCookie, parseCookies, setCookie} from "nookies";
import UserContext from '../components/context/user'
import User from "../src/user";
import {useEffect, useState} from "react";

export default function MyApp({Component, pageProps}) {
    const [userData, setUserData] = useState({});
    const router = useRouter();
    const saveLocal = (key, value) => {
        setCookie(null, key, value, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
        })
    }
    const getLocal = (key) => {
        let cookies = getLocals()
        return cookies[key];
    }
    const getLocals = () => {
        return parseCookies();
    }
    const removeLocal = (key) => {
        destroyCookie(null, key);
    }
    const saveUserData = (data) => {
        const allowedFields = ['active', 'avatar_url', 'display_name', 'email', 'first_name', 'is_profile_complete', 'last_name', 'type']
        let usedData = {};

        // Loop allowed fields.
        allowedFields.map((field, index) => {
            usedData[field] = data[field]
        })

        setUserData(usedData)
    }
    const saveUserKey = (userKey) => {

        // Save into cookie.
        saveLocal('uk', userKey)
    }
    const saveUserType = (userType) => {

        // Save into cookie.
        saveLocal('ut', userType)
    }
    const signOut = () => {

        // Remove key from cookie.
        removeLocal('uk')
        removeLocal('ut')

        // Force redirect.
        location.href = '/masuk'
    };

    // Get key from cookie.
    const userKey = getLocal('uk');
    const userType = getLocal('ut')

    useEffect(() => {

        // Define freeAccess Page.
        const freePage = ['/', '/masuk', '/daftar', '/validasi'];

        // Make sure that user key is exist.
        if (userKey) {

            // Fetch user details.
            User.detail(userKey)
                .then(result => {

                    // Validate result.
                    if (result.data.success) {

                        // Save login data.
                        saveUserKey(userKey)
                        saveUserType(result.data.data.type)
                        saveUserData(result.data.data)

                        // Check whether user type is defined or not.
                        if (!result.data.data.type && !freePage.includes(router.pathname)) {

                            // Force back to validation page.
                            router.push('/jenis')
                        }

                    } else {

                        // Force logout.
                        signOut()
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            // Detect if current page is not a free access page.
            if (!freePage.includes(router.pathname)) {

                // Redirect to login page.
                router.push('/masuk')
            }
        }
    }, [userKey])
    return (
        <UserContext.Provider
            value={{
                userData: userData,
                userKey: userKey,
                userType: userType,
                saveUserKey: saveUserKey,
                saveUserType: saveUserType,
                signOut: signOut
            }}>
            <Component {...pageProps} />
        </UserContext.Provider>)
}