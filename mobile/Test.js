import { ID, account } from './libs/Appwrite';

const Test = () => {
    return (
        <div>
            <h1>Test</h1>
            <p>Is logged in: {userLoggedIn() ? 'Yes' : 'No'}</p>
        </div>
    )
}

const userLoggedIn = () => {
    if (account.get()) {
        return true
    } else {
        return false
    }
}

export default Test