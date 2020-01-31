import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import FeaturedImage from "../lib/featured-image";

const PostPreview = ({ post }) => (
    <div className="flex flex-col w-64 p-4">
        {/* Featured Image */}
        <div className="w-full h-32 mb-6 rounded overflow-hidden">
            <Link 
                to={post.link.replace("http://saltbox-wordpress.flywheelsites.com", "")}
                className="block w-full h-full"    
            > 
                <FeaturedImage 
                    featuredImage={post.featured_media}
                    className="object-cover"
                />
            </Link>
        </div>
        {/* Title */}
        <h3 className="text-sm text-center mb-2">
            <Link to={post.link.replace("http://saltbox-wordpress.flywheelsites.com", "")}>
                {post.title}
            </Link>
        </h3>
        {/* Date */}
        <p className="text-xs text-center mb-2">
            <Link 
                to={post.link.replace("http://saltbox-wordpress.flywheelsites.com", "")}
                className="no-underline text-xs"
                
            >
                <span>{post.date}</span>
            </Link>
        </p>
        {/* Excerpt */}
        <div 
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
            className="text-xs"
        />
    </div>
);

export default PostPreview;