import Nzavi from '../assets/nzavi.jpg'
import Levis from '../assets/levis.jpg'
import Andrew from '../assets/andrew.jpg'
import Ruth from '../assets/ruth.jpg'
import Josephine from '../assets/josephine.jpg'
import Nicholas from '../assets/nicholas.jpg'
import Ngui from '../assets/ngui.jpg'
import Meggy from '../assets/meggy.jpg'
import Felistah from '../assets/felistah.jpg'
import Hero from '../components/Hero'
import AboutBG from '../assets/about-bg.jpg'

export default function About(){
    return (
      <>
      <Hero title="About" bg={AboutBG} />
        <div className="ministry-container about-container">
  
  <p>
    Talanta ministries was founded in 2015 by Rev Joseph Nzavi, Meggy Nzavi and
    other families. They two had served with CITAM for close to two decades as
    pastors in various capacities. They were blessed, released and given cover
    under as CITAM alliance in Machakos where they started the ministry up to
    date.
  </p>
  <p>
    With the support of Citam leadership we started Talanta Ministry at Machakos
    Show Ground in March 2015 . In the course of growth we received an official
    MOU from Citam to be the first ever alliance of Citam in August 2015. We
    value this partnership and with the current leadership we have the support
    to have Talanta ministries registered. We have thus far experienced growth
    having mature members who are part of the ministry not as just members but
    real vision owners.
  </p>
  <h1>Leadership</h1>
  <div className="lead-pastor">
    <div className="leader-profile">
      <img src={Nzavi} />
      <div className="leader-title">
        <h4>Pastor Joseph Nzavi</h4>
        <p>Chairman of the board and Lead pastor</p>
      </div>
    </div>
    <div className="about-lead-pastor">
      <p>
        He is a former CITAM pastor and having ministered for nearly a decade in
        various pastoral positions, the last one being as the founding senior
        Pastor of Citam Nakuru - he has always felt the need and call to set up a
        ministry like Citam to reach further to the lost.
      </p>
      <p>
        He is also an active member
        in the men&apos;s ministry and is remarkably enthusiastic about outreach and
        missions. The love also that he has for kids goes without saying as
        indescribable.
      </p>
    </div>
  </div>
  <div className='leaders'>
  <div className="leader">
    <div className="leader-profile">
        <img src={Levis} />
      <div className="leader-title">
        <h4>Doctor Levis Nguku</h4>
        <p>Secretary to the board.</p>
      </div>
    </div>
    <hr />
    <p>
      Serves in the Men&apos;s ministry.
    </p>
  </div>
  <div className="leader">
    <div className="leader-profile">
    <img src={Andrew} />
      <div className="leader-title">
        <h4>Andrew Sibairo</h4>
        <p>Board&apos;s treasurer</p>
      </div>
    </div>
    <hr />
    <p>
      Serves in the Men&apos;s ministry.
    </p>
  </div>
  <div className="leader">
    <div className="leader-profile">
    <img src={Ruth} />
      <div className="leader-title">
        <h4>Pastor Ruth Kitonyi</h4>
        <p>Board member and pastor</p>
      </div>
    </div>
    <hr />
    <p>
      Serves as the church admin, is an active member of the women&apos;s ministry
      and is affiliated with the ushering and hospitality ministry as well.
    </p>
  </div>
  <div className="leader">
    <div className="leader-profile">
    <img src={Josephine} />
      <div className="leader-title">
        <h4>Josephine Muasa</h4>
        <p>Board member</p>
      </div>
    </div>
    <hr />
    <p>
      Serves also in ushering and hospitality and is an active women&apos;s ministry
      member.
    </p>
  </div>
  <div className="leader">
    <div className="leader-profile">
    <img src={Nicholas} />
      <div className="leader-title">
        <h4>Nicholas Kioko</h4>
        <p>Board member</p>
      </div>
    </div>
    <hr />
    <p>
      Serves also in the ushering ministry and is an active member of the men&apos;s
      ministry.
    </p>
  </div>
  <div className="leader">
    <div className="leader-profile">
    <img src={Ngui} />
      <div className="leader-title">
        <h4>Joseph Ngui</h4>
        <p>Board member</p>
      </div>
    </div>
    <hr />
    <p>
      Chairman of the men&apos;s ministry and is responsible for the infrastructural
      development and projects in the church.
    </p>
  </div>
  <div className="leader">
    <div className="leader-profile">
    <img src={Meggy} />
      <div className="leader-title">
        <h4>Pastor Meggy Hawata</h4>
        <p>Board member</p>
      </div>
    </div>
    <hr />
    <p>
      Serves actively in Children&apos;s ministry and is an active member of the
      Women&apos;s ministry as well.
    </p>
  </div>
  <div className="leader">
    <div className="leader-profile">
    <img src={Felistah} />
      <div className="leader-title">
        <h4>Felistah Rukunya</h4>
        <p>Board member</p>
      </div>
    </div>
    <hr />
    <br />
    <p>
      Serves also as a teacher in the Children&apos;s ministry and is an active
      participant in the women&apos;s ministry.
    </p>
  </div>
</div>
</div>
</>
    )
}