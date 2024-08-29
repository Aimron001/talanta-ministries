
import LizzPhoto from "../assets/lizz.jpg"
import Hero from "../components/Hero"
import childrenBg from "../assets/children-bg.jpg"
export default function Children(){
    return (
        <>
            <Hero title="Children's Ministry" bg={childrenBg}/>
        <div className="ministry ministry-container">
        <div className="ministry-leader">
            <img src={LizzPhoto} />
            <div className="leader-name">
                <h3>Tr. Lizz</h3>
                <h4>Ministry Leader</h4>
            </div>    
        </div>
        <p>Let your light shine indeed. AS THE LIVING CHURCH, we are exuberant and lost for words. 
            Welcome to our web page. Glad to have you.
        </p>   
        <h5>The children ministry consists of the following parts and activities;</h5>
        <ul>
            <li>Creche</li>
            <li>Sunday school</li>
            <li>Instruments and vocals training</li>
            <li>Games</li>
            <li>Talent development and mentors</li>
            <li>PPI</li>
            <li>Crusades and evangelism</li>
            <li>Children-led service</li>
            <li>Bible express</li>
            <li>Birthday and other celebrations</li>
        </ul>
        <p>All of the above entirely for the kids.</p>
        <div className="creche">
            <h2>THE CRECHE</h2>
            <p>To begin with, the creche/playgroup, our youngest of the lot. Every Sunday after breaking from the main service they head over to their ornate room and learn from there. From new songs, to dance and colouring, they are always occupied and getting only the best foundational content from their teacher.</p>
            <p>Photos</p>
            <p>Meet teacher Rachel a woman who seeks to instil in the kids the basic foundationals to the kids. She is very affable and the kids simply love her. Committed and dedicated she’s always there for them.</p>
            <p>Photos</p>
        </div>
        <div className="sunday-school">
            <h2>SUNDAY SCHOOL</h2>
            <p>Next we have our Sunday school group. Ages 4-14. Here there are quite a number of teachers all who are exceptionally knowledgeable and rooted in the Word. That is why we have them passing down that wisdom to the younger ones. Here at TAMI Intl Sunday school, we are extremely conscious about what we teach our kids for we know that they are our future. Any investment put into them now will be most definitely worthwhile down the line.</p>
            <p>Photos</p>
            <p>Our kids love the lessons and are always enthusiastic and looking forward to them each and every other Sunday. 
                We take this opportunity as a team to welcome  all children to this group.
                </p>
            <p>Photos</p>
        </div>
        <div className="bible-express">
            <h2>BIBLE EXPRESS(BX)</h2>
            <p>This is where all the fun is. From bible trivias, a vast majority of other bible games, soccer, vocal and instrument training to birthdays and mentorship, <span><b>YOU SIMPLY CANNOT MISS OUT.</b></span></p>
            <p>Every Saturday of the month with exception to the last, our kids congregate and come together from 2:00PM - 6:00PM for a fun-packed and engaging time.</p>
            <p>They are met here by their teachers and other children ministry enthusiasts and the activities commence.</p>
            <p>Photos</p>
            <p>In general the practice is fundamentally for the preparation of the 2nd Sunday of the month
                which is a children-led service. They are taught the songs and taken through the carefully crafted list for that day. 
                </p>
                <p>Photos</p>
            
            <p>Afterwards, they have some concise piano, drum, guitar or vocal lessons by the church&apos;s very own instrumentalists and individuals on the worship team. This is completely up to the child. Whether they wanna learn or not.
                </p>
            <p>Photos</p>
            <p>We are keen on raising the next breed of highly skilled musicians and worshippers for the church of tomorrow and that is why we invest heavily in their tuition.</p>
            <p>Photos</p>
            <p>When all is done, the kids all get a cup of tea and a packet of biscuits and have their games up until it&apos;s time to head home. This is another part with which we are keen to develop. Their talents in the field.
            </p>
            <p>It&apos;s also at this time that birthdays and celebrations, if any, are done.
            </p>
            <p>Occasionally we also have Saturdays and Sundays for <b>crusades and evangelism</b>. From around 4:30 in the evening we prep our kids for outreach. Utilising our <b>“MOBILE CHURCH”</b>,
                We set out with one goal in mind; winning souls for Christ. We are teaching and mentoring our children to answer the call to bring others to the Lord. Especially in this generation and time, you can never go wrong with this.
            </p>            
        </div>
        <div className="ppi">
            <h2>PPI(Pastoral Program Instruction)</h2>
            <p>PPI is an outreach program to schools,which is a government requirement.</p>
            <p>It takes place throughout the school calendar.</p>
            <p>This is done by trained volunteers every week,Tuesdays,Wednesdays and Fridays in various schools.</p>
            <p>So far we hold PPI in four schools,Muthiini Primary, Machakos Academy, Machakos School ofor the Deaf and Machakos Christian School.
                We have seen God transforming lives and we give him all the glory.
                </p>
        </div>
        <div className="childrens-service">
            <h2>Children&apos;s Service Sunday</h2>
            <p>After all those hours of practice, it all comes down to this. Every second Sunday of the month, the kids are tasked with taking the congregation through a time of praise and worship and are also key drivers of the service in other dockets as well. Dockets such as ushering and mciing the service.</p>
            <p>photos</p>
    </div>
    </div>
    </>

    )
}