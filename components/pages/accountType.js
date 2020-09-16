import {FullLoading, Section} from "../global";
import styles from './styles/accountType.module.scss'
import FormAccountType from "../forms/accountType";
import UserContext from "../context/user";
import {useContext, useEffect, useState} from 'react'

const AccountType = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const {userKey} = useContext(UserContext)
    useEffect(() => {

        // Check whether key is available or not.
        if (userKey) {
            setIsLoaded(true)
        }
    }, [userKey])

    return (isLoaded ? <Section id={'validation'} extraClass={styles.accountType}>
        <div className={'frow'}>
            <div className={'col-sm-4-5 col-md-2-3 col-lg-1-2'}>
                <h1 className={styles.title}>Pilih Jenis Akun</h1>
                <FormAccountType userKey={userKey}/>
            </div>
        </div>
    </Section> : <FullLoading/>)
}

export default AccountType