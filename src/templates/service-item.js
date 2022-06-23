import React from "react"

const ServiceItem = ({ itemImg, itemText }) => {
    return (
        <div className="container mx-auto flex flex-col md:flex-row justify-center">
            <div className="flex flex-col items-start justify-center w-full md:w-1/3 px-6 md:px-0">
                <h2 className="font-bold text-2xl md:text-3xl text-left mb-2">
                    {itemText.title}
                </h2>

                <small className="font-bold mb-4">{itemText.secondary}</small>

                <div className="max-w-sm text-xs mb-2">
                    <span>{itemText.body}</span>
                </div>

                <button type="button" className="mt-3 inline-flex items-center px-4 py-2 rounded-sm border border-transparent text-sm leading-4 font-medium shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Get started
                </button>
            </div>

            <div className="flex items-center justify-center w-full md:w-auto px-36 ml-24">
                <img className="md:w-96 lg:w-96 sm:w-40 xs:w-40" src={itemImg}/>
            </div>
        </div>
    );
};

export default ServiceItem;
