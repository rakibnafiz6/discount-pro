const BrandSell = ({couponCard}) => {
    console.log(couponCard);
    return (
        <div className="mt-24">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                couponCard.filter(card => card.isSaleOn)
                .map(card => <div key={card._id} className="card bg-base-100 shadow-xl">
                    <figure className="rounded-md p-0">
                    <img
                    className="w-52 h-28 pt-3 rounded-md"
                        src={card.brand_logo}
                        alt="coupon-logo" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{card.brand_name}</h2>
                    <p>Category: {card.category}</p>
                    <p>Total Coupons: {card.coupons.length}</p>
                </div>
            </div> )
            }
            </div>    
           
        </div>
    );
};

export default BrandSell;

 