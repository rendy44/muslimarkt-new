import '../styles/app.scss';
import {useState} from "react";
import {destroyCookie, parseCookies, setCookie} from "nookies";
import UserContext from '../components/context/user'

export default function App({Component, pageProps}) {
    const [userKey, setUserKey] = useState(false);

    const saveUserKey = (key) => {
        saveLocal('uk', key)
    }
    const saveLocal = (key, value) => {
        // localStorage.setItem(this.prefix + key, value);
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

    return (
        <UserContext.Provider
            value={{
                userKey: userKey,
                saveUserKey: saveUserKey
            }}>
            <Component {...pageProps} />
        </UserContext.Provider>
    )
}