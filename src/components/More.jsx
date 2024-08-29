import { Link } from 'react-router-dom'
import leadership from '../assets/leadership.jpg'

export default function More(){
    return (
        <div className="more">
            <div className="more-left">
                <Link to='about'>
                    <div className="more-item">
                        <img src={leadership} />
                        <h3>Leadership</h3>
                    </div>
                </Link>
                <Link to="services">
                    <div className="more-item">
                        <img src={leadership} />
                        <h3>Services and Weekly Activities</h3>
                    </div>                
                </Link>
            </div>
            <div className="more-center">
                <Link to="dvbs">
                    <div className="more-dvbs-container">
                        <div className="dvbs">DVBS</div>
                        <div className="circle"></div>
                    </div>
                </Link>
            </div>
            <div className="more-right">
                <Link to="ministries">
                    <div className="more-item">
                        <img src={leadership} />
                        <h3>Ministries</h3>
                    </div>          
                </Link>
                <Link to='news'>
                    <div className="more-item">
                        <img src={leadership} />
                        <h3>News</h3>
                    </div>       
                </Link>

            </div>
        </div>
    )
}