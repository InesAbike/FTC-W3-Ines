'use client'
import { useCallback, useState } from "react";
import { productsMocks } from "@/mocks/products";
import { Product } from "@/types/product";

interface UseProductsResult {
  products: Product[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  fetchProducts: (page?: number, query?: string) => Promise<Product[]>;
  loadMore: () => Promise<Product[]>;
  reset: () => void;
}


const PAGE_SIZE = 4; 

export function useProducts(): UseProductsResult {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [hasMore, setHasMore] = useState(true);

  const simulateDelay = (ms = 500) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  /** Récupère les animaux avec pagination + recherche */
  const fetchProducts = useCallback(
    async (pageNumber = 1, searchQuery = ""): Promise<Product[]> => {
      setLoading(true);
      setError(null);

      try {
        await simulateDelay();

        // Applique la recherche
        const filtered = productsMocks.filter(
          (p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // Pagination
        const start = (pageNumber - 1) * PAGE_SIZE;
        const end = start + PAGE_SIZE;
        const paginated = filtered.slice(start, end);

        // Mise à jour de l'état
        if (pageNumber === 1) {
          setProducts(paginated);
        } else {
          setProducts((prev) => [...prev, ...paginated]);
        }

        setPage(pageNumber);
        setQuery(searchQuery);
        setHasMore(end < filtered.length);

        return paginated;
      } catch (err) {
        setError("Erreur lors du chargement des animaux (mock)");
        return [];
      } finally {
        setLoading(false);
      }
    },
    []
  );

  /** Charger plus (page suivante) */
  const loadMore = async (): Promise<Product[]> => {
    return fetchProducts(page + 1, query);
  };

  /** Réinitialiser (utile après une nouvelle recherche) */
  const reset = () => {
    setProducts([]);
    setPage(1);
    setHasMore(true);
  };

  return {
    products,
    loading,
    error,
    hasMore,
    fetchProducts,
    loadMore,
    reset,
  };
}
