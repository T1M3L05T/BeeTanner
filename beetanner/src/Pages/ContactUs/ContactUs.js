import './ContactUs.css'
import ContactForm from './ContactForm/ContactForm';



function ContactUs() {
    return (
        <div id='ContactUs_card'>
            <div id='ContactUs_form'>
                <h1>Contact Us</h1>
                <h4>*In Devlopment*</h4>
                <ContactForm />
            </div>
            <div id='ContactUs_notice'>
                <h3>Keep In Mind...</h3>
                <p>I am a hobbyist beekeeper and do not do this full time.  Email or text is the best way to reach me.  I am not always available for phone calls.  We can schedule a time to talk if needed.</p>
            </div>

            <div id='Contact_Info'>
                <div id='Email'>
                    <h3>Email:</h3>
                    <p>bryan@beetanner.com</p>
                </div>
                <div id='Phone'>
                    <h3>Phone Number:</h3>
                    <p>1 (225) 755-9255</p>
                </div>
                <div id='Address'>
                    <h3>Address:</h3>
                    <p>14172 Forest Heights SubD <br /> Gonzales, LA 70769</p>
                </div>
            </div>
            
        </div>
    );
}

export default ContactUs;