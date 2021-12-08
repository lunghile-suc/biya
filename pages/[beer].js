import Image from "next/image";

export async function getStaticPaths() {
    const response = await fetch('https://api.punkapi.com/v2/beers');
    const data = await response.json();

    const paths = data.map(beer => {
        return {
            params: {
                beer: beer.id.toString(),
            }
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    // get the id of the beer
    const id = context.params.beer
    const response = await fetch('https://api.punkapi.com/v2/beers/' + id)
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { beers: data }
    }
}


const beer = ({ beers }) => {
    return (
        <div className="bg-gray-900">
            <div className="mx-24">
                {/* map through the beers array and display each details of the beer */}
                {beers.map(beer => {
                    return (
                        <div className="grid grid-cols-2 p-4 mx-24 bg-gray-700 m-4 rounded" key={beer.id}>
                            <div className="flex justify-center">
                                <Image src={beer.image_url} alt="beer image" width={300} height={500} />
                            </div>
                            <div className="p-4 text-gray-200">
                                <h1 className="text-4xl overflow-hidden">{beer.name}</h1>
                                <p className="pt-3 pb-8">{beer.tagline}</p>
                                <p className="pb-8">First Brewed in: {beer.first_brewed}</p>
                                <p>{beer.description}</p>
                                <div className="pt-4">
                                    <h4 className="text-1xl pb-2">Food Pairings: </h4>
                                    {beer.food_pairing.map((food, i) => {
                                        return (
                                            <p key={i}>{food}</p>
                                        )
                                    })}
                                </div>
                                <div className="pt-4">
                                    <h4 className="text-1xl pb-2">Brewers Tips: </h4>
                                    <p>{beer.brewers_tips}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default beer;