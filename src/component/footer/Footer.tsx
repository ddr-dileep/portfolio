import { Button } from '..'
import { ASSETS } from '../../assets/assets'
import { socialIcons } from '../../constants';
import './style.scss'

export const Footer = () => {
  
  return (
    <footer className="footer">
      <div className="container">
        <Button
          onClick={() => {}}
          title="let's connect"
          className="lets_connect"
        />
        <h3>
          Made with {ASSETS.loveDouble} by {ASSETS.developerName} <br />
         <span> All © Right Reserved {new Date().getFullYear()}</span>
        </h3>
        <div className="footer-social_icons">
          {socialIcons?.map((icon)=>{
            return (
              <div key={icon.icon} className="footer-icon">
                <img src={icon.icon} alt={`icon-${icon.icon}`} />
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
