import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
export default function ContactUs(){
    return (
          <div className="contacts">
            <p>We are Located at Machakos showground</p>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11821.253214075301!2d37.24108263175633!3d-1.5248951684632555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f86d4d0af62f9%3A0xf0889e679f8307b7!2sTalanta%20Ministries%20International(Citam%20Alliance)Machakos%2C%20Showground.!5e0!3m2!1sen!2ske!4v1699998466184!5m2!1sen!2ske"
                width="600"
                height="450"
              //   style="border: 0"
                allowfullscreen=""
                loading="lazy"
              //   referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <h3>Contacts</h3>
            <div>
            <LocalPhoneIcon />
            <pre>Call us: +254700000001
                          +254700000002
              </pre>
              <EmailIcon />: talantaministries@gmail.com                    
            </div>            
          </div>

    )
}