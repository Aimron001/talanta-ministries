import leadership from '../assets/leadership.jpg'

export default function More(){
    return (
        <div className="more">
            <div className="more-left">
                <div className="leadership">
                    <img src={leadership} />
                    <h3>Leadership</h3>
                </div>
                <div className="programme">
                    <img src={leadership} />
                    <h3>Services and Weekly Activities</h3>
                </div>                
            </div>
            <div className="more-centre">
                <div className="dvbs">
                    <img src={leadership} />
                    <h3>DVBS</h3>
                </div>          
            </div>
            <div className="more-right">
                <div className="ministries">
                    <img src={leadership} />
                    <h3>Ministries</h3>
                </div>          
                <div className="news">
                    <img src={leadership} />
                    <h3>News</h3>
                </div>       

            </div>
        </div>
    )
}