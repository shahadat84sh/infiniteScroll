
const Product = ({ title, price, thumbnail }) => {
    return (

        <div className="card w-96 bg-base-100 shadow-xl h-96 m-4">
            <figure className="px-10 pt-10">
                <img src={thumbnail} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>Price : ${price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default Product;