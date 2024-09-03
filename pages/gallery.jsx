import Head from "next/head";
import Hero from '../components/Hero';
import MyWork from "../components/MyWork";
import Footer from "../components/Footer";

export default function Work() {
    return (
        <div>
            <Head>
                <title>Gallery</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Hero heading='My Gallery' message='Photographing the sky' />
            <MyWork />
            <Footer />
        </div>
    );
};