"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface HeartButtonProps {
  listingId: string;
  currentUser?: any;
}

const HeartButton = ({ listingId, currentUser }: HeartButtonProps) => {
  const hasFavorited = false;
  const toggleFavorite = () => {};

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
      top-[50%] 
      right-[10%] 
      transform 
      translate-x-[50%] 
      translate-y-[50%]
    "
      />
      <AiFillHeart
        size={28}
        className={`${hasFavorited ? "fill-rose-500" : "fill-neutral-500/70"}
        absolute 
        top-[50%] 
        right-[10%] 
        transform 
        translate-x-[50%] 
        translate-y-[50%]`}
      />
    </div>
  );
};

export default HeartButton;
