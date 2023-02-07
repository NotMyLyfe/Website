import React from 'react';
import '../scss/footer.scss';
import SocialMediaLink from './SocialMediaLink';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer(): React.ReactElement {
    return (
        <footer>
            <div className="socials">
                <SocialMediaLink link="https://github.com/NotMyLyfe" icon={faGithub as IconProp} text="NotMyLyfe" />
                <SocialMediaLink
                    link="https://www.linkedin.com/in/gordon-lin/"
                    icon={faLinkedin as IconProp}
                    text="Gordon Lin"
                />
                <SocialMediaLink
                    link="mailto:contact@gordonlin.ca"
                    icon={faEnvelope as IconProp}
                    text="contact@gordonlin.ca"
                />
            </div>
            <div className="copyright">
                <p>&#9749; Powered by Coffee, Iced Tea, and Boba</p>
                <p>Copyright &copy; {new Date().getFullYear()} Gordon Lin</p>
            </div>
        </footer>
    );
}

export default Footer;
