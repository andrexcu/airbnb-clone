"use client";
import { useOptimistic, useState, useRef } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { User } from "@prisma/client";
import useFavorite from "@/app/hooks/useFavorite";

interface HeartButtonProps {
  listingId: string;
  currentUser?: User | null;
}

const HeartButton = ({ listingId, currentUser }: HeartButtonProps) => {
  const { optimisticHasFavorited, toggleFavorite, isLoading } = useFavorite({
    listingId,
    currentUser,
  });

  console.log(optimisticHasFavorited);
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
          right-[50%] 
          transform 
          translate-x-[50%] 
          translate-y-[50%]
        "
      />
      <AiFillHeart
        size={28}
        className={`          
        absolute 
        top-[0%] 
        right-[0%] 
        transform 
        translate-x-[50%] 
        translate-y-[50%]
        ${isLoading ? "opacity-50" : ""}
        ${optimisticHasFavorited ? "fill-rose-500" : "fill-white"}`}
      />
    </div>
  );
};

export default HeartButton;
