'use client'
import { useCallback, useState } from "react";
import { articlesMocks } from "@/mocks/articles";
import { Article } from "@/types/article";

interface UseArticlesResult {
  articles: Article[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  fetchArticles: (page?: number, query?: string) => Promise<Article[]>;
  loadMore: () => Promise<Article[]>;
  reset: () => void;
}


const PAGE_SIZE = 3;

export function useArticles(): UseArticlesResult {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [hasMore, setHasMore] = useState(true);

  const simulateDelay = (ms = 500) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const fetchArticles = useCallback(
    async (pageNumber = 1, searchQuery = ""): Promise<Article[]> => {
      setLoading(true);
      setError(null);

      try {
        await simulateDelay();

        const filtered = articlesMocks.filter(
          (p) =>
            p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        );

        const start = (pageNumber - 1) * PAGE_SIZE;
        const end = start + PAGE_SIZE;
        const paginated = filtered.slice(start, end);
        if (pageNumber === 1) {
          setArticles(paginated);
        } else {
          setArticles((prev) => [...prev, ...paginated]);
        }

        setPage(pageNumber);
        setQuery(searchQuery);
        setHasMore(end < filtered.length);

        return paginated;
      } catch (err) {
        console.error("Erreur lors du chargement des articles :", err);
        setError("Erreur lors du chargement des articles (mock)");
        return [];
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const loadMore = async (): Promise<Article[]> => {
    return fetchArticles(page + 1, query);
  };
  const reset = () => {
    setArticles([]);
    setPage(1);
    setHasMore(true);
  };

  return {
    articles,
    loading,
    error,
    hasMore,
    fetchArticles,
    loadMore,
    reset,
  };
}
