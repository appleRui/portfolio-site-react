import { FaTwitter, FaGithub } from 'react-icons/fa';
import ProfileImage from '../images/profile.png';
import BackgroundImage from '../images/background.jpeg';
import './Header.scss'

export const Header = () => {
  return (
    <header className="main-cover" style={{backgroundImage: `url(${BackgroundImage})`}}>
      <div className="overlay"></div>
      <div className="container">
        <div className="display-table">
          <div className="display-table-contents">
            <div className="profile-thumb" style={{backgroundImage: `url(${ProfileImage})`}}></div>
            <h1 className="title-text">あなたの名前</h1>
            <h3 className="title-text">あなたの肩書(ex.Engineer)</h3>
            <ul className="social-icons">
              <li className="icon-link">
                <a href="https://twitter.com/">
                  <FaTwitter color="white" size="2rem" />
                </a>
              </li>
              <li className="icon-link">
                <a href="https://github.com/">
                  <FaGithub color="white" size="2rem" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};