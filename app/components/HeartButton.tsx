"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import useFavorite from "@/app/hooks/useFavorite";

interface HeartButtonProps {
  listingId: string;
  currentUser?: any;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser,
}) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  });

  return (
    <div
      onClick={toggleFavorite}
      className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
      "
    >
      <AiOutlineHeart
        size={28}
        className="
          fill-white
          absolute 
          top-[10%] 
          right-[10%] 
          transform 
          translate-x-[50%] 
          translate-y-[50%]
        "
      />
      <AiFillHeart
        size={28}
        className={`          
        absolute 
        top-[50%] 
        right-[10%] 
        transform 
        translate-x-[50%] 
        translate-y-[50%]
        ${hasFavorited ? "fill-rose-500" : "fill-neutral-500/70"}`}
      />
    </div>
  );
};

export default HeartButton;
