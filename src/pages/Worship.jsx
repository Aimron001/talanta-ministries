import WorshipLeaderPhoto from "../assets/worship-leader.jpg"
import Hero from '../components/Hero'
export default function Worship(){
    return (
        <>
        <Hero title="Worship Ministry" />
        <div className="ministry ministry-container">
    <div className="container">
        <div className="ministry-leader">
            <img src={WorshipLeaderPhoto}/>
            <div className="leader-name">
                <h3>Geoffrey Oeri</h3>
                <h4>Ministry Head</h4>
            </div>    
        </div>
        <p>Worship ministry is basically a calling. Our vision is to  serve through music to the glory of God. Our most active goal currently is frequently holding worship experiences.
            Further enabling people to deepen their relationship with the Lord through our music.
           </p>
        <p>Our activities are mostly driven to edify us.</p>
        <h5>Our teams and activities;</h5>
        <ul>
            <li>Media team</li>
            <li>Prayer walks</li>
            <li>Weekly online prayer meetings</li>
            <li>Worship experiences</li>
            <li>Bonding day outs and luncheons</li>
            <li>Get together sleepovers</li>
        </ul>
    </div>
    </div>
</>
    )
}