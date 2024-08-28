import DvbsActivities from "../components/DvbsActivities";
import DvbsGallery from "../components/DvbsGallery";
import DvbsParents from "../components/DvbsParents";
import DvbsTeams from "../components/DvbsTeams";


export default function DVBS(){
    return (
      <>
    <div className="dvbs-hero">
      <h1 id="dvbs-name">DVBS</h1>
    </div>
        <div className="dvbs-container">
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
    <ul>
      <li id="act"><a className="activities" href="#tab-activities">Activities</a></li>
      <li><a className="parents" href="#tab-parents">Parents</a></li>
      <li><a className="teams" href="#tab-teams">Teams</a></li>
      <li><a className="gallery" href="#">Gallery</a></li>
    </ul>
  </div>
  <div className="tabs">
    <DvbsActivities />
    <DvbsParents />
    <DvbsTeams />
    <DvbsGallery />
  </div>
  
  </div>
  </>

)
}