import React, { useEffect } from 'react';
import { useArticleStore } from '../stores/useArticleStore';
import { Link } from "react-router-dom";

const ArticleFeatured = () => {
    const featuredArticle = useArticleStore((state) => state.featuredArticle);
    const fetchFeaturedArticles = useArticleStore((state) => state.fetchFeaturedArticles);

    useEffect(() => {
        fetchFeaturedArticles(); // properly call the fetch
    }, [fetchFeaturedArticles]);

    if (!featuredArticle) return null; // or a loading indicator

    return (
        <div>
            <div className="flex flex-row flex-wrap max-w-[100vw] md:max-w-[90vw] lg:max-w-[75vw] mx-auto text-primary">
                <div id={featuredArticle._id} className="px-2 justify-items-center">
                    <img className='px-10' src={featuredArticle.image} alt={featuredArticle.title} />
                    <div className='p-2 my-4 rounded-box bg-[linear-gradient(theme(colors.secondary),theme(colors.white))]'>
                        <h1 className='px-10 my-5 text-4xl text-semibold'><Link to={`/articles/${featuredArticle._id}`} className="hover:bg-accent hover:text-secondary px-4 py-1 rounded">{featuredArticle.title}</Link></h1>
                        <h2 className='px-10 my-5 indent-6 italic text-2xl'>{featuredArticle.subtitle}</h2>
                        <p className='px-10 text-xl'>
                            {featuredArticle.description.length > 200 ? (
                                <>
                                    {(() => {
                                        const truncated = featuredArticle.description.slice(0, 200);
                                        const lastSpaceIndex = truncated.lastIndexOf(' ');
                                        const safeDescription = truncated.slice(0, lastSpaceIndex);
                                        return (
                                            <>{safeDescription}<Link to={`/articles/${featuredArticle._id}`} className="text-secondary hover:underline">...</Link></>
                                        );
                                    })()}
                                </>
                            ) : (
                                featuredArticle.description
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleFeatured;
