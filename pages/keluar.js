import {useEffect, useContext} from "react";
import UserContext from "../components/context/user";

export default function PageLogout() {
    const {signOut, userKey} = useContext(UserContext)
    useEffect(() => {

        // Make sure everything is ready.
        if (userKey) {
            signOut();
        }
    }, [userKey])
    return (<></>)
}