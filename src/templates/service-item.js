import { Link } from "gatsby";
import React from "react"

const ServiceItem = ({ itemImg, itemText }) => {
    return (
        <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between">
            <div className="flex flex-col items-start justify-center w-full md:w-1/2 px-6 md:pl-16 text-center md:text-left">
                <h2 className="font-bold text-2xl md:text-3xl mb-2 text-center md:text-left">
                    {itemText.title}
                </h2>
                {itemText.secondary && (
                    <small className="font-bold mb-4">{itemText.secondary}</small>
                )}
                <div className="max-w-sm text-xs mb-2">
                    <span>{itemText.body}</span>
                </div>
                {!itemText.noButton && (
                    <Link 
                        type="button"
                        href="/contact/"
                        className="mt-3 inline-flex items-center px-6 py-3 rounded-lg border border-transparent text-sm leading-4 font-bold shadow-sm text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mx-auto md:mx-0"
                    >
                        Get started
                    </Link>
                )}
            </div>

            <div className="flex items-center justify-center w-full md:w-1/2 px-36">
                <img className="w-32 md:w-96" src={itemImg}/>
            </div>
        </div>
    );
};

export default ServiceItem;
