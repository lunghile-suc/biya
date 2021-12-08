import Image from "next/image";
import Link from "next/link";

// get beer data from the punk api
export async function getStaticProps() {
    const response = await fetch('https://api.punkapi.com/v2/beers');
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data }
    }
}

const beers = ({ data }) => {
    return (
        <div className="bg-gray-900">
            <div className="mx-24">
                {/* map through the beers api and display the beers*/}
                {data.map(beer => {
                    return (
                        <div className="grid grid-cols-2 p-4 mx-24 bg-gray-700 m-4 rounded" key={beer.id}>
                            <div className="flex justify-center">
                                <Image src={beer.image_url} width={300} height={500} />
                            </div>
                            <div className="p-4 text-gray-200">
                                <h1 className="text-4xl overflow-hidden">{beer.name}</h1>
                                <p className="pt-3 pb-8">{beer.tagline}</p>
                                <p className="pb-8">First Brewed in: {beer.first_brewed}</p>
                                <p>{beer.description}</p>
                                <Link href={`${beer.id}`}><a className="mt-8 inline-block border-2 border-white px-4 py-2 hover:bg-gray-900">View More</a></Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default beers;