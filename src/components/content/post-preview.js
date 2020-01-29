import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const PostPreview = ({ post }) => (
    <div className="flex flex-col w-64 p-4">
        {/* Featured Image */}
        { post.featured_media ? (
            <div className="w-full h-32 mb-6 rounded overflow-hidden">
                <Link to={post.link.replace("http://saltbox-wordpress.flywheelsites.com", "")}>
                    <Img 
                        className="object-cover"
                        fluid={post.featured_media.localFile.childImageSharp.fluid}
                        alt={post.featured_media.alt_text}
                    />
                </Link>
            </div>
        ) : (
            <div className="w-full h-32 mb-6 rounded overflow-hidden">
                <Link 
                    to={post.link.replace("http://saltbox-wordpress.flywheelsites.com", "")}
                    className="block w-full h-full"    
                >
                    <div className="w-full h-full object-cover bg-blue-200" />
                </Link>
            </div>
        )}
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