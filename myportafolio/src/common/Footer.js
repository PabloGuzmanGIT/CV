import './Footer.sass';
import Music from './Music';
function Footer() {
    return (
        <div className="Footer">
            <footer>
                <div>
                    &copy; 2022 - Pablo Guzman Pariona

                </div>
                <div>
                    <a> GitHub Repo </a>
                </div>
                <div>
                    <a> Linkdin Profile </a>
                </div>
            <Music />
            </footer>
        </div>
    )
}

export default Footer;
