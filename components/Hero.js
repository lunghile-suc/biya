import Link from 'next/link'

const Hero = () => {
    return (  
        <div className="w-full bg-black text-white grid grid-cols-2 overflow-y-hidden z-50">
            <div className="relative w-full p-14 ml-24 grid justify-center">
                {/* <h1 className="text-5xl overflow-hidden">Biya</h1> */}
                <p className="my-8 text-lg">Welcome to BiyaBros <br></br> brewer in Johannesburg</p>
                <h4 className="text-6xl w-8/12 font-extrabold overflow-hidden">ARE YOU OF LEGAL DRINKING AGE?</h4>
                <Link href="/home" passHref><a className="my-8 border-gray-300 border-b-4 inline-block pb-2">Yes I&apos;m old enough</a></Link>
            </div>
            <div className="">
                <video autoPlay="true" loop="true" muted className="fixed h-screen object-fill top-0 right-0 left-2/4" height="500">
                    <source src="/production ID_4718405.mp4"></source>
                </video>
            </div>
        </div>
    );
}
 
export default Hero;