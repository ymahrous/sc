import Head from "next/head";
import Hero from '../components/Hero';
import ContactForm from "../components/ContactForm";

export default function Contact() {
    return (
        <div>
            <Head>
                <title>Contact</title>
                <link rel="icon" href="/contact.ico" />
            </Head>

            <Hero heading='Contact' message='Your feedback is important to us' />
            <ContactForm />
        </div>
    );
};