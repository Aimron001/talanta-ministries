
import More from '../components/More';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube';
import WeeklyServices from '../components/WeeklyServices';
import { useEffect } from 'react';
export default function Home(){

    useEffect(() => {
        const elementsToAnimate = document.querySelectorAll('.fade-in, .scroll-up');
    
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('fade-in-visible', 'scroll-up-visible');
              observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
          });
        }, {
          threshold: 0.1 // Trigger the animation when 10% of the element is visible
        });
    
        elementsToAnimate.forEach(element => {
          observer.observe(element);
        });
    
        return () => observer.disconnect(); // Clean up the observer on component unmount
      }, []);
    return (
        <div className='home-more'>
        <div className="home-container">
            <div className="home fade-in">
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
            <div>
                <WeeklyServices />
            </div>
            </div>
        </div>
        <div className="scroll-up">
            <More />
        </div>
        </div>
    )
}