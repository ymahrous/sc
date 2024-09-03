import Link from "next/link";
import { useEffect, useState } from "react";
import { FaPinterest } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Nav() {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');
    const handleNav = () => setNav(!nav);
    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 90) {
                setColor('white');
                setTextColor('#000000');
            } else {
                setColor('transparent');
                setTextColor('white');
            };
        };
        window.addEventListener('scroll', changeColor);
    }, []);
    
    return (
        <div style={{backgroundColor:color}} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
            <div className="max-w-[1240px] m-auto flex justify-between items-center p-4">
                <Link href='/'>
                    <h1 style={{color:textColor}} className="font-bold text-4xl">SC</h1>
                </Link>
                <ul style={{ color:textColor}} className="hidden sm:flex">
                    <li className="p-4"><Link href='/'>Home</Link></li>
                    <li className="p-4"><Link href='/gallery'>Gallery</Link></li>
                    <li className="p-4"><Link href='/contact'>Contact</Link></li>
                </ul>
                
                <div className="block sm:hidden z-10" onClick={handleNav}>
                    {nav ? <AiOutlineClose size={20} style={{color: 'white'}} /> : <AiOutlineMenu size={20} style={{color: textColor}} />}
                </div>
                <div className={nav ?'sm:hidden absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' :'sm:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
                    <ul style={{color: 'white'}}>
                        <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500"><Link href='/'>Home</Link></li>
                        <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500"><Link href='/gallery'>Gallery</Link></li>
                        <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500"><Link href='/contact'>Contact</Link></li>
                        
                        <footer className="w-full py-14">
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="max-w-3xl mx-auto">
                                    <div className="flex space-x-10 justify-center items-center mb-14">
                                        <a target="_blank" rel="noreferrer" href="https://instagram.com/sobrecel" className="block text-white transition-all duration-500 hover:text-gray-500 ">
                                            <svg className="w-[1.688rem] h-[1.688rem]" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.76556 14.8811C9.76556 12.3243 11.8389 10.2511 14.3972 10.2511C16.9555 10.2511 19.03 12.3243 19.03 14.8811C19.03 17.4379 16.9555 19.5111 14.3972 19.5111C11.8389 19.5111 9.76556 17.4379 9.76556 14.8811ZM7.26117 14.8811C7.26117 18.82 10.456 22.0129 14.3972 22.0129C18.3385 22.0129 21.5333 18.82 21.5333 14.8811C21.5333 10.9422 18.3385 7.7493 14.3972 7.7493C10.456 7.7493 7.26117 10.9422 7.26117 14.8811ZM20.1481 7.46652C20.148 7.79616 20.2457 8.11843 20.4288 8.39258C20.6119 8.66674 20.8723 8.88046 21.177 9.00673C21.4817 9.133 21.8169 9.16614 22.1405 9.10196C22.464 9.03778 22.7612 8.87916 22.9945 8.64617C23.2278 8.41318 23.3868 8.11627 23.4513 7.79299C23.5157 7.46972 23.4829 7.13459 23.3568 6.83C23.2307 6.5254 23.017 6.26502 22.7428 6.08178C22.4687 5.89853 22.1463 5.80065 21.8164 5.80052H21.8158C21.3737 5.80073 20.9497 5.9763 20.637 6.28867C20.3243 6.60104 20.1485 7.02467 20.1481 7.46652ZM8.78274 26.1863C7.42782 26.1246 6.69138 25.8991 6.20197 25.7085C5.55314 25.4561 5.0902 25.1554 4.60346 24.6696C4.11672 24.1839 3.81543 23.7216 3.56395 23.0732C3.37317 22.5843 3.14748 21.8481 3.08588 20.494C3.01851 19.03 3.00506 18.5902 3.00506 14.8812C3.00506 11.1722 3.01962 10.7336 3.08588 9.26841C3.14759 7.9143 3.37495 7.17952 3.56395 6.68919C3.81654 6.04074 4.11739 5.57808 4.60346 5.09163C5.08953 4.60519 5.55203 4.30408 6.20197 4.05274C6.69116 3.86208 7.42782 3.63652 8.78274 3.57497C10.2476 3.50763 10.6877 3.49419 14.3972 3.49419C18.1068 3.49419 18.5473 3.50874 20.0134 3.57497C21.3683 3.63663 22.1035 3.86385 22.5941 4.05274C23.243 4.30408 23.7059 4.60585 24.1926 5.09163C24.6794 5.57741 24.9796 6.04074 25.2322 6.68919C25.4229 7.17808 25.6486 7.9143 25.7102 9.26841C25.7776 10.7336 25.7911 11.1722 25.7911 14.8812C25.7911 18.5902 25.7776 19.0287 25.7102 20.494C25.6485 21.8481 25.4217 22.5841 25.2322 23.0732C24.9796 23.7216 24.6787 24.1843 24.1926 24.6696C23.7066 25.155 23.243 25.4561 22.5941 25.7085C22.105 25.8992 21.3683 26.1247 20.0134 26.1863C18.5485 26.2536 18.1084 26.2671 14.3972 26.2671C10.686 26.2671 10.2472 26.2536 8.78274 26.1863ZM8.66768 1.0763C7.18823 1.14363 6.17729 1.37808 5.29443 1.72141C4.3801 2.07597 3.60608 2.55163 2.83262 3.32341C2.05916 4.09519 1.58443 4.86997 1.22966 5.78374C0.88612 6.66663 0.651535 7.67641 0.584162 9.15497C0.515676 10.6359 0.5 11.1093 0.5 14.8811C0.5 18.6529 0.515676 19.1263 0.584162 20.6072C0.651535 22.0859 0.88612 23.0955 1.22966 23.9784C1.58443 24.8916 2.05927 25.6673 2.83262 26.4387C3.60597 27.2102 4.3801 27.6852 5.29443 28.0407C6.17896 28.3841 7.18823 28.6185 8.66768 28.6859C10.1502 28.7532 10.6232 28.77 14.3972 28.77C18.1713 28.77 18.645 28.7543 20.1268 28.6859C21.6063 28.6185 22.6166 28.3841 23.5 28.0407C24.4138 27.6852 25.1884 27.2105 25.9618 26.4387C26.7353 25.667 27.209 24.8916 27.5648 23.9784C27.9083 23.0955 28.144 22.0857 28.2103 20.6072C28.2777 19.1252 28.2933 18.6529 28.2933 14.8811C28.2933 11.1093 28.2777 10.6359 28.2103 9.15497C28.1429 7.6763 27.9083 6.66608 27.5648 5.78374C27.209 4.87052 26.7341 4.09641 25.9618 3.32341C25.1896 2.55041 24.4138 2.07597 23.5011 1.72141C22.6166 1.37808 21.6062 1.14252 20.1279 1.0763C18.6461 1.00897 18.1724 0.992188 14.3983 0.992188C10.6243 0.992188 10.1502 1.00785 8.66768 1.0763Z" fill="currentColor"/></svg> 
                                        </a>
                                        <a target="_blank" rel="noreferrer" href="https://twitter.com/sobrecel" className="block text-white transition-all duration-500 hover:text-gray-500 ">
                                            <svg className="w-[1.688rem] h-[1.688rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"><path d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z" fill="currentColor"/></svg>
                                        </a>
                                        <a target="_blank" rel="noreferrer" href="https://pinterest.com/sobrecel" className="block text-white transition-all duration-500 hover:text-gray-500 ">
                                            <FaPinterest className="w-[1.688rem] h-[1.688rem]" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </ul>
                </div>
            </div>
        </div>
    );
};