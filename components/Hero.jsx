import { useRouter } from 'next/router';
export default function Hero({ heading, message }) {
    const router = useRouter();
    const handleBook = () => router.push('/contact#form');

    return (
        <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
            <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/60 z-[2]" />
            <div className="p-5 text-white z-[2] mt-[-10rem]">
                <h2 className="text-5xl font-bold">{heading}</h2>
                <p className="py-5 text-xl">{message}</p>
                <button onClick={handleBook} className="px-8 py-2 border">Get in touch</button>
            </div>
        </div>
    );
};