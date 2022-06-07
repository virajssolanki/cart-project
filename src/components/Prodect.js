import React from "react";

const Prodect = (props) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <img src={ props.image } className="object-cover" alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title">
                    { props.title }
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
};

export default Prodect;