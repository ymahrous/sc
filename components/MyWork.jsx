import Image from "next/image";
import Img1 from '../public/recent/imgOne.jpg';
import Img2 from '../public/recent/imgTwo.jpg';
import Img3 from '../public/recent/imgThree.jpg';
import Img4 from '../public/recent/imgFour.jpg';
import Img5 from '../public/recent/imgFive.jpg';

export default function MyWork() {
    return (
        <div className="max-w-[1240px] mx-auto py-16 text-center">
            <h1 className="text-2xl font-bold p-4">Recent Photos</h1>
            <div className="grid grid-rows-none md:grid-cols-5 gap-4 p-4">
                <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
                    <Image src={Img1} layout="responsive" width='677' height='451' alt='main front' />
                </div>
                <div className="w-full h-full">
                    <Image src={Img2} layout="responsive" width='215' height='217' objectFit="cover" alt='first row' />
                </div>
                <div className="w-full h-full">
                    <Image src={Img3} layout="responsive" width='215' height='217' objectFit="cover" alt='first row' />
                </div>
                <div className="w-full h-full">
                    <Image src={Img4} layout="responsive" width='215' height='217' objectFit="cover" alt='second row' />
                </div>
                <div className="w-full h-full">
                    <Image src={Img5} layout="responsive" width='215' height='217' objectFit="cover" alt='second row' />
                </div>
            </div>
        </div>
    );
};