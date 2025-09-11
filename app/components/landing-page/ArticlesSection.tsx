'use client'
import { useEffect } from "react";
import { useArticles } from "../../hooks/useArticles";
import ArticleCard from "./ArticleCard";
import Button from "../ui/Button";


const ArticlesSection: React.FC = () => {
    const { articles, loading, hasMore, loadMore, fetchArticles } = useArticles();

    useEffect(() => {
        fetchArticles(1);
    }, [fetchArticles]);

    return (
        <section className="md:py-12 py-6 bg-neutral-00">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <p className="text-black text-base font-medium mb-1">You already know ?</p>
                        <h2 className="text-xl lg:text-2xl font-bold text-primary-dark-blue">
                            Useful pet knowledge
                        </h2>
                    </div>

                    {hasMore && (
                        <Button variant='outline' size='md' onClick={loadMore} iconPosition="right" className="text-sm sm:flex hidden">
                            {loading ? (
                                <span>Loading...</span>
                            ) : (
                                <span>View more</span>
                            )}
                        </Button>
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {articles.map((article, index) => (
                        <div
                            key={`${article.id}-${index}`}
                            className="animate-fadeIn"
                            style={{ animationDelay: `${(index % 8) * 100}ms` }}
                        >
                            <ArticleCard {...article} />
                        </div>
                    ))}
                </div>

                {hasMore && (
                    <div className="text-center sm:hidden block">
                        <Button
                            onClick={loadMore}
                            disabled={loading}
                            iconPosition="right"
                            className="w-full text-white disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <span>Loading more...</span>
                            ) : (
                                <span>Load More</span>
                            )}
                        </Button>
                    </div>
                )}

                {!hasMore && articles.length > 8 && (
                    <div className="text-center">
                        <p className="text-neutral-60">
                            You&apos;ve seen all our available articles!
                        </p>
                    </div>
                )}

                <div className="text-center mt-6">
                    <p className="text-sm text-neutral-60">
                        Showing {articles.length} articles {hasMore && "of many available"}
                    </p>
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
        </section>
    );
};

export default ArticlesSection;
