import Head from 'next/head';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import InstaGallery from '../components/InstaGallery';
import { SliderData } from '../components/SliderData';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero heading='Sobre El Cel' message='Capturing moments in nature' />
      <Slider slides={SliderData} />
      <InstaGallery />
    </div>
  );
};