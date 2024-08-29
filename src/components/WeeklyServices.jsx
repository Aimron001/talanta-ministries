
import service from "../assets/service.jpg"

export default function WeeklyServices(){
    return (
        <div className="weekly-services-container">
            <div className="weekly-services">    
                <p className="event">Holy Communion Sunday<span id="wk3"></span></p>
                <img src={service} id="communion" className="service" />
                <p className="event">Children&apos;s Service Sunday</p>
                <img src={service} id="children" className="service" />
                <p className="event">Youth Rise Up Sunday</p>
                <img src={service} id="riseup"className="service" />
                <p className="event">Family Sunday</p>
                <img src={service} id="family" className="service" />
                
                <p className="event">Coming Soon</p>
                <img src={service} id="coming-soon" className="service" />
            </div>
        </div>
  )
}