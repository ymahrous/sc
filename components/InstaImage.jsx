import Image from "next/image";
import { FaInstagram } from 'react-icons/fa';

export default function InstaImage({ image, url }) {
    return (
        <div className="relative">
            <Image src={image} alt='' className="w-full h-full" layout="responsive" />
            <div className="flex justify-center items-center absolute top-0 left-0 bottom-0 right-0 hover:bg-black/50 group">
                <p className="text-gray-300 hidden group-hover:block">
                    <a href={url} target="_blank" rel="noreferrer">
                        <FaInstagram size={30} />
                    </a>
                </p>
            </div>
        </div>
    );
};