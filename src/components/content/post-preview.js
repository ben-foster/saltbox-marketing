import React from "react";
import { Link } from "gatsby";

import FeaturedImage from "../lib/featured-image";

const PostPreview = ({ post }) => {
    const category = post.categories.find(category => category.name !== "Featured");
    
    return (
        <div className="py-4 md:p-4 w-full md:w-1/2 xl:w-1/3">
            <div 
                className="flex flex-col h-84 md:h-96 bg-white rounded-xl shadow-xl bg-no-repeat w-full"
            >
                <div className="relative">
                    <FeaturedImage 
                        featuredImage={post.featured_media} 
                        className="object-contain w-full h-40 rounded-xl rounded-b-none shadow-inner"
                    />
                    <div className="absolute bottom-0 left-0 px-4">
                        {/* Date */}
                        <span className="text-xs text-left mb-2">
                            <Link 
                                to={post.link.replace("https://wordpress.saltbox.solutions", "")}
                                className="font-bold no-underline text-xs text-white drop-shadow-sm"
                                dangerouslySetInnerHTML={{ __html: post.date }}
                            />
                        </span>
                        <h3 className="text-left text-lg font-bold normal-case mt-0 mb-4 text-white drop-shadow">
                            <Link 
                                className="font-bold"
                                to={post.link.replace("https://wordpress.saltbox.solutions", "")}
                                dangerouslySetInnerHTML={{ __html: post.title }}
                            />
                        </h3>
                    </div>
                </div>
                <div className="p-4">
                    <p className="text-xs leading-tight overflow-hidden h-24 font-light" dangerouslySetInnerHTML={{ __html: post.excerpt }}></p>
                    
                    <Link className="font-bold text-blue-350 hover:text-teal-500 w-full text-left mt-auto text-sm" to={post.link.replace("https://wordpress.saltbox.solutions", "")}>
                        Read more &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PostPreview;