"use server";

import prisma from "@/lib/prisma";

export async function createProduct(data: FormData) {
  const name = data.get("name") as string;
  const description = data.get("description") as string;

  await prisma.product.create({
    data: {
      name,
      description,
    },
  });

  return { success: true };
}

export async function deleteProduct(id: string) {
  await prisma.product.delete({
    where: {
      id,
    },
  });

  return { success: true };
}
