import { Link } from "gatsby";
import React from "react"

const ServiceItem = ({ img, title, subtitle, content, link}) => {
    return (
        <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between">
            <div className="flex flex-col items-start justify-center w-full md:w-1/2 px-6 md:pl-16 text-center md:text-left">
                <h2 className="font-bold text-2xl md:text-3xl mb-2 text-center md:text-left">
                    {title}
                </h2>
                {subtitle && (
                    <small className="font-bold mb-4">{subtitle}</small>
                )}
                <div className="max-w-sm text-xs mb-2">
                    <span>{content.replace("<p>","").replace("</p>", "")}</span>
                </div>
                {link && (
                    <Link 
                        type="button"
                        href={link.url.replace("https://wordpress.saltbox.solutions", "")}
                        className="mt-3 inline-flex items-center px-6 py-3 rounded-lg border border-transparent text-sm leading-4 font-bold shadow-sm text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mx-auto md:mx-0"
                    >
                        {link.title}
                    </Link>
                )}
            </div>

            <div className="flex items-center justify-center w-full md:w-1/2 px-36">
                <img className="w-32 md:w-96" width="430" height="450" src={img}/>
            </div>
        </div>
    );
};

export default ServiceItem;
