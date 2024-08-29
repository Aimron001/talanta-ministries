import { useState, useEffect } from 'react';
import service from "../assets/service.jpg";

export default function WeeklyServices() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const events = [
        { name: "Holy Communion Sunday", id: "wk3" },
        { name: "Children's Service Sunday", id: "children" },
        { name: "Youth Rise Up Sunday", id: "riseup" },
        { name: "Family Sunday", id: "family" },
        { name: "Coming Soon", id: "coming-soon" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % events.length);
        }, 2000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [events.length]);

    return (
        <div className="weekly-services-container">
            <div className="weekly-services">
                {events.map((event, index) => (
                    <div key={event.id} className="service-item">
                        <p className="event">{event.name}</p>
                        {index === currentImageIndex && (
                            <img 
                                src={service} 
                                id={event.id} 
                                className="service animated-service" 
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
