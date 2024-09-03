import Head from "next/head";
import Hero from '../components/Hero';
import ContactForm from "../components/ContactForm";

export default function Contact() {
    return (
        <div>
            <Head>
                <title>Contact</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Hero heading='Contact' message='' />
            <ContactForm />
        </div>
    );
};