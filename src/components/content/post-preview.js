import React from "react";
import { Link } from "gatsby";

const PostPreview = ({ post }) => {
    const category = post.categories.find(category => category.name !== "Featured");
    
    return (
        <div className="p-4 w-full md:w-1/2 xl:w-1/3">
            <div className="flex flex-col h-96 p-6 bg-white rounded-lg shadow">
                {/* Category */}
                <div className="flex flex-row items-center">
                    <img className="w-8 md:w-6 lg:w-8 h-8 md:h-6 lg:h-8 mr-4" src={ category.acf.icon.localFile.publicURL } alt={category.name} />
                    <h4 className="uppercase text-blue-800 text-sm md:text-xs lg:text-sm" dangerouslySetInnerHTML={{ __html: category.name }}></h4>
                </div>
                {/* Title */}
                <h3 className="text-left text-xl font-bold normal-case mt-4 mb-2">
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
                    >
                        <span dangerouslySetInnerHTML={{ __html: post.date }}></span>
                    </Link>
                </p>
                {/* Excerpt */}
                <div 
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                    className="text-sm"
                />
                <Link className="font-bold text-blue-800 hover:text-teal-500 w-full text-left mt-auto text-sm" to={post.link.replace("https://wordpress.saltbox.solutions", "")}>
                    Learn more &rarr;
                </Link>
            </div>
        </div>
    );
}

export default PostPreview;