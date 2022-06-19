import React from "react";
import { Link } from "gatsby";

import FeaturedImage from "../lib/featured-image";

const PostPreview = ({ post }) => {
    const category = post.categories.find(category => category.name !== "Featured");
    
    return (
        <div className="p-4 w-full md:w-1/2 xl:w-1/3">
            <div 
                className="flex flex-col h-96 bg-white rounded-lg shadow-xl bg-no-repeat"
            >
                {/* Image */}
                <FeaturedImage 
                    featuredImage={post.featured_media} 
                    className="object-contain w-full h-40 rounded-lg rounded-b-none shadow-inner"
                />

                <div className="p-4">
                    {/* Title */}
                    <h3 className="text-left text-lg font-bold normal-case mt-4 mb-2">
                        <Link 
                            className="font-bold"
                            to={post.link.replace("https://wordpress.saltbox.solutions", "")}
                            dangerouslySetInnerHTML={{ __html: post.title }}
                        />
                    </h3>
                    {/* Date */}
                    <p className="text-xs text-left mb-2">
                        <Link 
                            to={post.link.replace("https://wordpress.saltbox.solutions", "")}
                            className="no-underline text-xs"
                            dangerouslySetInnerHTML={{ __html: post.date }}
                        />
                    </p>
                    <Link className="font-bold text-blue-350 hover:text-teal-500 w-full text-left mt-auto text-sm" to={post.link.replace("https://wordpress.saltbox.solutions", "")}>
                        Read more &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PostPreview;