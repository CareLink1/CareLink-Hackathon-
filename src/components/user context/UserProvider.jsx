import { useState } from 'react';
import usersInfo from '../../usersInfo';
import { UserContext } from './UserContext';

const UserProvider = ({ children }) => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [language, setLanguage] = useState('');
    const [agree, setAgree] = useState(false);
    const [logEmail, setLogEmail] = useState('');
    const [logPass, setLogPass] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUserEmail, setCurrentUserEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            usersInfo.addUser({
                firstName,
                lastName,
                password,
                phone,
                language,
                agree,
                email
            });
            setIsLoggedIn(true);
            setCurrentUserEmail(email);
            return true;
        } else {
            return handleLogin();
        }
    };

    const handleLogin = () => {
        const user = usersInfo.getUsers().find(
            u => u.email?.toLowerCase() === logEmail.toLowerCase() && u.password === logPass
        );
        if (user) {
            setIsLoggedIn(true);
            setCurrentUserEmail(logEmail);
            return true; 
        } else {
            alert('Invalid credentials');
            return false;
        }
    };

    const handleSignOut = () => {
        setIsLoggedIn(false);
        setLogEmail('');
        setLogPass('');
        setCurrentUserEmail('')

    };

    return (
        <UserContext.Provider value={{
            isSignUp,
            setIsSignUp,
            firstName,
            setFirstName,
            lastName,
            setLastName,
            email,
            setEmail,
            password,
            setPassword,
            phone,
            setPhone,
            language,
            setLanguage,
            agree,
            setAgree,
            logEmail,
            setLogEmail,
            logPass,
            setLogPass,
            isLoggedIn,
            setIsLoggedIn,
            handleSubmit,
            handleLogin,
            handleSignOut,
            currentUserEmail
        }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;