import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import toast from "react-hot-toast";
import useLoginModal from "./useLoginModal";
import { User } from "@prisma/client";

interface IUseFavorite {
  listingId: string;
  currentUser?: User | null;
}

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  const [optimisticHasFavorited, setOptimisticHasFavorited] =
    useState(hasFavorited);
  const [isLoading, setIsLoading] = useState(false);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) return loginModal.onOpen();

      let request;

      try {
        setIsLoading(true);
        if (optimisticHasFavorited) {
          setOptimisticHasFavorited(false);
          // ${listingId}
          request = () =>
            axios
              .delete(`/api/favorites/${listingId}`)
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                setOptimisticHasFavorited(true);
              });
        } else {
          setOptimisticHasFavorited(true);
          request = () =>
            axios
              .post(`/api/favorites/${listingId}`)
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                setOptimisticHasFavorited(false);
              });
        }
        await request();
        router.refresh();
        toast.success("Success");
      } catch (error) {
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    },
    [
      currentUser,
      optimisticHasFavorited,
      listingId,
      loginModal,
      router,
      isLoading,
    ]
  );

  return {
    optimisticHasFavorited,
    toggleFavorite,
    isLoading,
  };
};

export default useFavorite;
