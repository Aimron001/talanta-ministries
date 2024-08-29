
import More from '../components/More';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube';
import WeeklyServices from '../components/WeeklyServices';
export default function Home(){
    return (
        <div className='home-more'>
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
            <WeeklyServices />
            </div>
        </div>
        <More />
        </div>
    )
}