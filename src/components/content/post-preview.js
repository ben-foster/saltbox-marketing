import React from "react";
import { Link } from "gatsby";

const PostPreview = ({ post }) => (
    <div className="p-4">
        <div className="flex flex-col w-80 h-88 p-6 bg-white rounded-lg shadow">
            {/* Category */}
            <div className="flex flex-row items-center">
                <img className="w-8 h-8 mr-4" src="http://saltbox-wordpress.flywheelsites.com/wp-content/uploads/2020/01/ppc-icon-color.svg" alt=""/>
                <h4 className="uppercase text-blue-800 text-sm">Search Engine Optimization</h4>
            </div>
            {/* Title */}
            <h3 className="text-left text-xl font-bold normal-case mt-4 mb-2">
                <Link 
                    className="font-bold"
                    to={post.link.replace("http://saltbox-wordpress.flywheelsites.com", "")}
                    dangerouslySetInnerHTML={{ __html: post.title }}
                />
            </h3>
            {/* Date */}
            <p className="text-xs text-left mb-2">
                <Link 
                    to={post.link.replace("http://saltbox-wordpress.flywheelsites.com", "")}
                    className="no-underline text-xs"
                    
                >
                    <span dangerouslySetInnerHTML={{ __html: post.date }}></span>
                </Link>
            </p>
            {/* Excerpt */}
            <div 
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
                className="text-xs"
            />
        </div>
    </div>
);

export default PostPreview;