
import More from '../components/More';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube';
import service from "../assets/service.jpg"
export default function Home(){
    return (
        <>
        <div className="home-container">
            <div className="home">
            <div className="socials">
                <FacebookIcon />
                <XIcon />
                <InstagramIcon />
                <YouTubeIcon />
            </div>
            <div className="church">
                <h1>Talanta Ministries International</h1>
                <p>&ldquo;Go Ye&rdquo;</p>
            </div>
            <div className="services">
                <div className="service">
                    <img src={service} alt='service banner' />
                    <p>Holy Communion Sunday</p>
                </div>
                <div className="service">
                    <img src={service} alt='service banner' />
                    <p>Children&rsquo;s Sunday</p>
                </div>
                <div className="service">
                    <img src={service} alt='service banner' />
                    <p>Youth Rise Up Sunday</p>
                </div>
                <div className="service">
                    <img src={service} alt='service banner' />
                    <p>Family Sunday</p>
                </div>
                <div className="service">
                    <img src={service} alt='service banner' />
                    <p>Coming Soon</p>
                </div>
            </div>
            </div>
        </div>
        <More />
        </>
    )
}