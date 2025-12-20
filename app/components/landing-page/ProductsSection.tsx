'use client'
import { useEffect } from "react";
import { useProducts } from "../../hooks/useProducts";
import Button from "../ui/Button";
import ProductCard from "./ProductCard";


const ProductsSection: React.FC = () => {
    const { products, loading, hasMore, loadMore, fetchProducts } = useProducts();

    // Charger la première page au montage
    useEffect(() => {
        fetchProducts(1);
    }, [fetchProducts]);

    return (
        <section>
            <div className=" md:py-12 py-6 bg-neutral-00 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <p className="text-black text-base font-medium mb-1">Hard to choose right products for your pets?</p>
                        <h2 className="text-xl lg:text-2xl font-bold text-primary-dark-blue">
                            Our Products
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

                {/* Grille des animaux */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {products.map((product, index) => (
                        <div
                            key={`${product.id}-${index}`} // 👈 sécurise la clé car certains IDs se répètent dans ton mock
                            className="animate-fadeIn"
                            style={{ animationDelay: `${(index % 8) * 100}ms` }}
                        >
                            <ProductCard {...product} />
                        </div>
                    ))}
                </div>

                {/* Bouton Load More centré */}
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

                {/* Message de fin */}
                {!hasMore && products.length > 8 && (
                    <div className="text-center">
                        <p className="text-neutral-60">
                            You&apos;ve seen all our available products!
                        </p>
                    </div>
                )}

                {/* Indicateur du nombre total */}
                <div className="text-center mt-6">
                    <p className="text-sm text-neutral-60">
                        Showing {products.length} products {hasMore && "of many available"}
                    </p>
                </div>
            </div>

            {/* CSS pour l'animation fadeIn */}
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

export default ProductsSection;
