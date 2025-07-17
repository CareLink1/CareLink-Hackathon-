import { FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';
import styles from './CreateAccount.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../user context/UserContext';

const CreateAccount = () => {
    const {
        isSignUp,
        setIsSignUp,
        handleSubmit,
        setEmail,
        setAgree,
        setFirstName,
        setLanguage,
        setLastName,
        setPassword,
        setPhone,
        agree,
        setLogEmail,
        setLogPass
    } = useUserContext();
    const navigate = useNavigate(); // Add useNavigate here

    const onSubmit = async (e) => {
        const success = await handleSubmit(e); // Call handleSubmit
        if (success) {
            navigate('/dashboard'); // Navigate to dashboard on success
        }
    };

    return (
        <div className={styles.container}>
            <h1>{isSignUp ? 'Create Account' : 'Welcome back'}</h1>
            <p>
                {isSignUp
                    ? 'Fill in your personal information.'
                    : 'We are happy to see you.'}
            </p>
            <div className={styles.tabs}>
                <button
                    className={isSignUp ? styles.activeTab : ''}
                    onClick={() => setIsSignUp(true)}
                >
                    Sign Up
                </button>
                <button
                    className={!isSignUp ? styles.activeTab : ''}
                    onClick={() => setIsSignUp(false)}
                >
                    Sign In
                </button>
            </div>
            <form onSubmit={onSubmit} className={styles.form}>
                {isSignUp ? (
                    <>
                        <div className={styles.row}>
                            <input type="text" placeholder="First Name" required onChange={(e) => setFirstName(e.target.value)} />
                            <input type="text" placeholder="Last Name" required onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className={styles.phoneGroup}>
                            <div className={styles.flag}>
                                🇨🇲 <span>+237</span>
                            </div>
                            <input type="tel" placeholder="Enter phone number" required onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Enter password" required onChange={(e) => setPassword(e.target.value)} />
                        <select onChange={(e) => setLanguage(e.target.value)}>
                            <option value="">Choose Native Language</option>
                            <option value="english">English</option>
                            <option value="french">French</option>
                        </select>
                        <label className={styles.checkbox}>
                            <input type="checkbox" required onChange={() => setAgree(!agree)} />
                            By signing up, you agree to our <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
                        </label>
                        <Link to={'/home'}>Home</Link>
                    </>
                ) : (
                    <>
                        <input type="email" placeholder="Email" required onChange={(e) => setLogEmail(e.target.value)} />
                        <input type="password" placeholder="Enter password" required onChange={(e) => setLogPass(e.target.value)} />
                        <div className={styles.forgotPassword}>
                            <a href="#">Forgot Password? Reset Your Password</a>
                        </div>
                    </>
                )}
                <button type="submit" className={styles.submitBtn}>
                    {isSignUp ? 'Create Account' : 'Sign In'}
                </button>
                <div className={styles.altText}>or continue with</div>
                <div className={styles.socialIcons}>
                    <button type="button">
                        <FaGoogle size={24} />
                    </button>
                    <button type="button">
                        <FaFacebookF size={24} />
                    </button>
                    <button type="button">
                        <FaApple size={24} />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateAccount;
