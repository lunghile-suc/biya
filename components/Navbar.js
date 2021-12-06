import Link from 'next/link'

const Navbar = () => {
    return (  
        <div>
            <nav className="flex justify-between items-center w-full px-16 py-4 sticky bg-gray-900">
                <h1 className="text-4xl overflow-hidden text-gray-200">BiyaBros</h1>
                <ul className="flex justify-between w-2/5">
                    <Link href="/home"><a className="text-gray-200 text-lg">Home</a></Link>
                    <Link href="/beers"><a className="text-gray-200 text-lg">Beers</a></Link>
                    <Link href=""><a className="text-gray-200 text-lg">Contact</a></Link>
                    <Link href=""><a className="text-gray-200 text-lg">Make a Reservation</a></Link>
                </ul>
            </nav>
        </div>
    );
}
 
export default Navbar;