

const FoodCard = ({ item }) => {
    const { name, image, recipe, price } = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <p className="absolute right-0 mr-4 mt-4 bg-slate-900 text-white px-3">${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                <button className="btn btn-outline border-0 border-orange-400 bg-slate-100 border-b-4 text-black">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;