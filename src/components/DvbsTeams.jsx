import dvbsSphoto from '../assets/dvbs-s.jpg'
import dvbsHelpersPhoto from '../assets/dvbs-helpers.jpg'
import dvbsUshersPhoto from '../assets/dvbs-usher.jpg'

export default function DvbsTeams(){
    return (
        <div id="teams" className="dvbs-teams-tab tab-content">
    <p>
      The massive success and result obtained could never be possible without
      the participation of ALL the church&apos;s ministries and partners as well.
    </p>
    <p>However, big big shoutout to these ministries especially:</p>
    <section className="ushering-hospitality">
      <h3>Ushering and hospitality</h3>
      <p>These are simply put, the most devout amongst the whole lot.</p>
      <img src={dvbsUshersPhoto} />
      <p>
        From their early arrivals, clocking in as early as 6:00AM to their
        outlandishly surreal coordination in preparation of the meals, drinks
        and assortment of the goodies, these guys work cannot go unnoticed
      </p>

      <p>
        Their dedication and levels of impeccability are unparralled.
        <b>BIG UPS!</b>
      </p>
    </section>
    <section className="transport-security">
      <h3>Transport and Security</h3>
      <p>
        Is my child safe? How will my child get back home? How will they get
        there?
      </p>
      <p>
        <strong>DO NOT FRET!</strong>These are the only questions lingering in
        the minds of these men. Responsible for the transportation of your child
        to and fro the venue, safety is their number one priority. (Pics)
      </p>
      <img src={dvbsSphoto} />
      <p>
        Also, while here at the venue, heh! No one with any malevolent or ill
        intentions is getting past these guys. After all your child&apos;s safety is
        the only reason they&apos;re here to begin with. (Pics)
      </p>
      <p>
        “Rest assured. Your child is in safe hands” ~ ….(Head of security)(Pics)
      </p>
    </section>
    <section className="health-sanitation">
      <h3>Health and sanitation</h3>
      <p>
        From tiny headaches to any sort of bruises, they are here for your
        child.
      </p>
      <p>
        Clean sanctuary, even cleaner restrooms and water for handwashing, they
        got it all covered. We take the well-being of all the children upon our
        shoulders and this is why our team of qualified doctors, first raiders
        and clean up crew are so fixated on the same. “...” … (Head of team and
        certified Dr.)
      </p>
      <img src={dvbsHelpersPhoto} />
    </section>
  </div>
    )
}