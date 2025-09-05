'use client'
import { useCallback, useState } from "react";
import { petsMocks } from "@/mocks/pets";
import { Pet } from "@/types/pet";

interface UsePetsResult {
  pets: Pet[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  fetchPets: (page?: number, query?: string) => Promise<Pet[]>;
  fetchPetsDetail: (id: string) => Promise<Pet | null>;
  loadMore: () => Promise<Pet[]>;
  reset: () => void;
}

const PAGE_SIZE = 8; 

export function usePets(): UsePetsResult {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [hasMore, setHasMore] = useState(true);

  const simulateDelay = (ms = 500) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  /** Récupère les animaux avec pagination + recherche */
  const fetchPets = useCallback(
    async (pageNumber = 1, searchQuery = ""): Promise<Pet[]> => {
      setLoading(true);
      setError(null);

      try {
        await simulateDelay();

        // Applique la recherche
        const filtered = petsMocks.filter(
          (p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.breed.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // Pagination
        const start = (pageNumber - 1) * PAGE_SIZE;
        const end = start + PAGE_SIZE;
        const paginated = filtered.slice(start, end);

        // Mise à jour de l'état
        if (pageNumber === 1) {
          setPets(paginated);
        } else {
          setPets((prev) => [...prev, ...paginated]);
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

  const fetchPetsDetail = useCallback(async (id: string): Promise<Pet | null> => {
    setLoading(true);
    setError(null);

    try {
      await simulateDelay(300); 
      
      const pet = petsMocks.find(pet => pet.id === id) || null;
      
      if (!pet) {
        setError('Animal non trouvé');
        return null;
      }
      
      return pet;
    } catch (err) {
      setError('Erreur lors du chargement des détails de l\'animal');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const loadMore = async (): Promise<Pet[]> => {
    return fetchPets(page + 1, query);
  };

  const reset = () => {
    setPets([]);
    setPage(1);
    setHasMore(true);
  };

  return {
    pets,
    loading,
    error,
    hasMore,
    fetchPets,
    fetchPetsDetail,
    loadMore,
    reset,
  };
}
