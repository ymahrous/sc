import InstaImage from './InstaImage';
import Img1 from '../public/ig/img-1.jpg';
import Img2 from '../public/ig/img-2.jpg';
import Img3 from '../public/ig/img-3.jpg';
import Img4 from '../public/ig/img-4.jpg';
import Img5 from '../public/ig/img-5.jpg';
import Img6 from '../public/ig/img-6.jpg';

export default function InstaGallery() {
    return (
        <div className="relative max-w-[1240px] mx-auto text-center py-24">
            <p className='text-2xl font-bold'>follow me on instagram</p>
            <p className='pb-4'>@sobrecel</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
                <InstaImage image={Img1} url='https://instagram.com/p/CpezHJqN6Fe' />
                <InstaImage image={Img2} url='https://instagram.com/p/CypiX1eoJMD' />
                <InstaImage image={Img3} url='https://instagram.com/p/CldjfIaKmx0' />
                <InstaImage image={Img4} url='https://instagram.com/p/Cr0aN9otwKW' />
                <InstaImage image={Img5} url='https://instagram.com/p/Cq36bGeN3jH' />
                <InstaImage image={Img6} url='https://instagram.com/p/Co0bdgetaZR' />
            </div>
        </div>
    );
};