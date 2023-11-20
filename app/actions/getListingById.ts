import prisma from "@/lib/db/prisma";

interface IParams {
  id?: string;
}

export default async function getListingById(params: IParams) {
  try {
    const { id } = params;

    const listing = await prisma.listing.findUnique({
      where: {
        id: id,
      },
      include: {
        user: true,
      },
    });

    if (!listing) return null;
    return listing;
  } catch (error: any) {
    throw new Error(error);
  }
}
