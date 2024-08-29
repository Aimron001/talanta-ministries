import DvbsActivities from "../components/DvbsActivities";
import DvbsGallery from "../components/DvbsGallery";
import DvbsParents from "../components/DvbsParents";
import DvbsTeams from "../components/DvbsTeams";
import Hero from "../components/Hero";
import dvbsBg from '../assets/dvbs-h.jpg'
import { useState } from "react";


export default function DVBS(){

  const [activeTab, setActiveTab] = useState('activities');

    return (
      <>
        <Hero title="Daily Vacational Bible School (DVBS)"bg={dvbsBg} />
        <div className="ministry-container">
  <div className="about-dvbs">
    <p>
      Daily Vacational Bible School is, simply put, a <b>BANGER!!</b> A
      programme that your child wouldn&apos;t wanna miss for the world. From the
      intensive Bible explication to the dance, hype and games. Not to mention
      the world -famous art and craft and the multifarious yet so generic and
      potent music that deepens the kids fervor to praise and worship Him,
      <b>THIS IS THE PLACE TO BE!</b>
    </p>
    <p>THINGS TO CARRY: Bible, Pen, Notebook, Bottle of water</p>
    <h2>Goals and Aims</h2>
    <ul className="goals">
      <li>
        Equip the children to be agents of perpetual change in this lost and
        perverse generation.
      </li>
      <li>
        Emphasize the importance of reading the Bible and praying in their life.
      </li>
      <li>
        To impact souls and have a lasting impression in the children’s lives.
      </li>
    </ul>
  </div>
  <div className="tabs-nav">
     <button className={activeTab === 'activities' && 'active-tab'} onClick={() => setActiveTab('activities')}>Activities</button>
     <button className={activeTab === 'parents' && 'active-tab'} onClick={() => setActiveTab('parents')}>Parents</button>
    <button className={activeTab === 'teams' && 'active-tab'} onClick={() => setActiveTab('teams')}>Teams</button>
     {/* <button className={activeTab === 'gallery' && 'active-tab'} onClick={() => setActiveTab('gallery')}>Gallery</button> */}
  </div>
  <div className="tabs">
  {activeTab === 'activities' && <DvbsActivities />}
                {activeTab === 'parents' && <DvbsParents />}
                {activeTab === 'teams' && <DvbsTeams />}
                {activeTab === 'gallery' && <DvbsGallery />}
  </div>
  
  </div>
  </>

)
}