import '../styles/app.scss';
import {useRouter} from 'next/router'
import {destroyCookie, parseCookies, setCookie} from "nookies";
import UserContext from '../components/context/user'
import User from "../src/user";
import {useEffect} from "react";

export default function MyApp({Component, pageProps}) {
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
    const saveUserKey = (userKey) => {

        // Save into cookie.
        saveLocal('uk', userKey)
    }
    const signOut = () => {

        // Remove key from cookie.
        removeLocal('uk')

        // Force redirect.
        location.href = '/masuk'
    };

    // Get key from cookie.
    const userKey = getLocal('uk');

    useEffect(() => {

        // Define freeAccess Page.
        const freePage = ['/', '/masuk', '/daftar', '/vldseml'];

        // Make sure that user key is exist.
        if (userKey) {

            // Fetch user details.
            User.detail(userKey)
                .then(result => {

                    // Validate result.
                    if (result.data.success) {

                        // Save login data.
                        saveUserKey(userKey)
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
                userKey: userKey,
                saveUserKey: saveUserKey,
                signOut: signOut
            }}>
            <Component {...pageProps} />
        </UserContext.Provider>)
}