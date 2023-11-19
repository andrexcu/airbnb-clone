"use client";
import useCountries from "@/app/hooks/useCountries";
import { User } from "@prisma/client";
import React from "react";
import Heading from "../Heading";
import Image from "next/image";
import HeartButton from "../HeartButton";

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
  currentUser?: User | null;
}

const ListingHead = ({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser,
}: ListingHeadProps) => {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div
        className="
        w-full
        h-[60vh]
        overflow-hidden
        rounded-xl
        relative
      "
      >
        <Image
          fill
          alt="Listing"
          src={imageSrc}
          className="
                object-cover
                w-full
              "
          sizes="(max-width: 640px) 100vw, 50vw"
          priority
          placeholder="blur"
          blurDataURL={imageSrc}
        />
        <div className="absolute top-2 right-8">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};

export default ListingHead;
