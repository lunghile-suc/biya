import Image from "next/image";
import Link from 'next/link'

const home = () => {
    return (
        <div className="relative bg-gray-900 w-full h-screen overflow-hidden">
            <div className="grid items-center w-full h-screen">
                <div className="text-9xl text-gray-200 font-extrabold flex items-center mt-8 px-28 z-50 overflow-hidden">
                    <h1 className="overflow-hidden"><span className="w-24 h-24 p-4 opacity-0">t</span>WE'RE THE<br></br> FEARLESS
                        <br></br>
                        <Image src="/pexels-pixabay-159291.jpg" width={200} height={100}  className="pr-2"/>
                         BREWERS</h1>
                </div>
                <div className="z-0">
                    <video autoplay="true" loop="true" muted className="absolute h-screen object-cover top-4 right-0 z-0" width="500" height="100">
                        <source src="/production ID_5051063.mp4"></source>
                    </video>
                </div>
                <div className="text-white text-lg mx-28 border-gray-300 border-b-4 inline-block pb-2">
                    <Link href="/beers"><a>Discover our Beer Now</a></Link>
                </div>
            </div>
        </div>
    );
}

export default home;