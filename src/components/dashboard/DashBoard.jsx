import { useState } from 'react';
import styles from './Dashboard.module.css';
import {  FaBars, FaTimes } from 'react-icons/fa';
import { useUserContext } from '../user context/UserContext';
import { Navigate, useNavigate } from 'react-router-dom';
import usersInfo from '../../usersInfo';
import photo from '../../assets/panda.jpg'



const Dashboard = () => {
  const { isLoggedIn, handleSignOut, currentUserEmail } = useUserContext();
    const navigate = useNavigate();
    const [isNavExpanded, setIsNavExpanded] = useState(false);


    const currentUser = usersInfo.getUsers().find(
        user => user.email?.toLowerCase() === currentUserEmail.toLowerCase()
    );

    if (!isLoggedIn) {
        return <Navigate to="/createaccount" replace />;
    }

    const toggleNav = () => {
        setIsNavExpanded(!isNavExpanded);
    };

    const onSignOut = () => {
        handleSignOut();
        navigate('/createaccount');
    };

  return (
    <div className={styles.container}>
      <aside className={`${styles.sidebar} ${isNavExpanded ? styles.expanded : ''}`}>
        <div className={styles.profile}>
          <img src={photo} alt="Naomie Ekon" className={styles.avatar} />
          <h3 className={styles.profileName}>{currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : 'Guest User'}</h3>
          <p className={styles.profileEmail}>{currentUser.email}</p>
        </div>
        <nav className={styles.nav}>
          <button className={styles.navButton}><span className={styles.navIcon}>🏠</span>AI ChatBot</button>
          <button className={styles.navButton}><span className={styles.navIcon}>🏠</span>Blood Monitoring</button>
          <button className={styles.navButton}><span className={styles.navIcon}>🏠</span>Patience Feedback</button>
          <button className={styles.signOut} onClick={onSignOut}><span className={styles.navIcon}>↪</span> Sign-out</button>
        </nav>
        <button className={styles.closeBtn} onClick={toggleNav}>
          <FaTimes />
        </button>
      </aside>

      <main className={styles.chatArea}>
        <header className={styles.header}>
          Chatbot
          <button className={styles.hamburger} onClick={toggleNav}>
            <FaBars />
          </button>
        </header>
        <div className={styles.messages}>
          <div className={styles.message}><span>Computer computing quality</span></div>
          <div className={styles.messageUser}><span>Some are very enlightening authors cut an during this.</span></div>
          <div className={styles.message}><span>Supernatural dielectric wire, if our losses...</span></div>
        </div>
        <div className={styles.inputArea}>
          <button className={styles.generate}>Regenerate Response</button>
          <div className={styles.inputBox}>
            <input type="text" placeholder="Type here..." className={styles.input} />
            <button className={styles.sendBtn}>Send</button>
          </div>
        </div>
      </main>

      <aside className={styles.rightPanel}>
        <div className={styles.topRight}>
          <img src="/profile.jpg" alt="Naomie Ekon" className={styles.rightAvatar} />
          <p className={styles.userName}>{`${currentUser.firstName} ${currentUser.lastName}`}</p>
        </div>
        <div className={styles.historyChat}>
          <h4 className={styles.historyTitle}>History Chat</h4>
          <div className={styles.chatCard}>HEALTHCARE - Detailed healthcare history</div>
          <div className={styles.chatCard}>HEALTHCARE - Detailed healthcare history</div>
          <div className={styles.chatCard}>HEALTHCARE - Detailed healthcare history</div>
        </div>
        <div className={styles.premiumBox}>
          <p className={styles.premiumPrice}><strong>10,000FCFA</strong></p>
          <p className={styles.premiumText}>Get other interesting Features</p>
          <button className={styles.premiumBtn}>Get Premium Plan</button>
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;
