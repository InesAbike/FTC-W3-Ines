'use client'
import { useCallback, useState } from "react";
import { customerMocks } from "@/mocks/customers";
import { Customer } from "@/types/customer";

interface UseCustomersResult {
  customers: Customer[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  fetchCustomers: (page?: number, query?: string) => Promise<Customer[]>;
  loadMore: () => Promise<Customer[]>;
  reset: () => void;
}

const PAGE_SIZE = 4;

export function useCustomers(): UseCustomersResult {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [hasMore, setHasMore] = useState(true);

  const simulateDelay = (ms = 500) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  /** Récupère les animaux avec pagination + recherche */
  const fetchCustomers = useCallback(
    async (pageNumber = 1, searchQuery = ""): Promise<Customer[]> => {
      setLoading(true);
      setError(null);

      try {
        await simulateDelay();

        // Pagination
        const start = (pageNumber - 1) * PAGE_SIZE;
        const end = start + PAGE_SIZE;
        const paginated = customerMocks.slice(start, end);

        // Mise à jour de l'état
        if (pageNumber === 1) {
          setCustomers(paginated);
        } else {
          setCustomers((prev) => [...prev, ...paginated]);
        }

        setPage(pageNumber);
        setQuery(searchQuery);
        setHasMore(end < customerMocks.length);

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

  const loadMore = async (): Promise<Customer[]> => {
    return fetchCustomers(page + 1, query);
  };

  const reset = () => {
    setCustomers([]);
    setPage(1);
    setHasMore(true);
  };

  return {
    customers,
    loading,
    error,
    hasMore,
    fetchCustomers,
    loadMore,
    reset,
  };
}
