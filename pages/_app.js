import '../styles/app.scss';
import {useRouter} from 'next/router'
import {destroyCookie, parseCookies, setCookie} from "nookies";
import UserContext from '../components/context/user'
import User from "../src/user";
import App from "next";

export default class MyApp extends App {
    state = {
        userKey: ''
    };

    componentDidMount = async () => {

        // Define freeAccess Page.
        const freePage = ['/', '/masuk', '/daftar', '/vldseml'];

        // Get key from cookie.
        const userKey = this.getLocal('uk');

        // Make sure that user key is exist.
        if (userKey) {

            // Fetch user details.
            User.detail(userKey)
                .then(result => {

                    // Validate result.
                    if (result.data.success) {

                        // Save user key.
                        this.saveUserKey(userKey)
                    } else {

                        // Force sign out.
                        this.signOut();
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        } else {

            // Detect if current page is not a free access page.
            if (!freePage.includes(useRouter().pathname)) {

                // Redirect to login page.
                await useRouter().push('/masuk')
            }
        }
    };

    saveUserKey = async (userKey) => {

        // Save key into cookie.
        this.saveLocal('uk', userKey)

        // Update user state.
        await this.setState({userKey: userKey});
    };

    signOut = async () => {

        // Remove key from cookie.
        this.removeLocal('uk')

        // Update user state.
        this.setState({userKey: ''});
    };

    render() {
        const {Component, pageProps} = this.props;

        return (
            <UserContext.Provider
                value={{
                    userKey: this.state.userKey,
                    saveUserKey: this.saveUserKey,
                    signOut: this.signOut
                }}>
                <Component {...pageProps} />
            </UserContext.Provider>
        );
    }

    saveLocal(key, value) {
        // localStorage.setItem(this.prefix + key, value);
        setCookie(null, key, value, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
        })
    }

    getLocal(key) {
        let cookies = this.getLocals()
        return cookies[key];
    }

    getLocals() {
        return parseCookies();
    }

    removeLocal(key) {
        destroyCookie(null, key);
    }
}