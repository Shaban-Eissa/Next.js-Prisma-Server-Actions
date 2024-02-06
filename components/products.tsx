import prisma from "@/lib/prisma";
import { DeleteButton } from "./forms";

export default async function Products() {
  const products = await prisma.product.findMany();

  return (
    <div className="grid gap-4 max-w-lg w-full">
      {products.map((product) => (
        <div key={product.id} className="flex flex-col items-start pl-6 pr-6">
          <div className="flex justify-between items-center mb-4 w-full">
            <h2 className="text-lg font-bold">{product.name}</h2>
            <DeleteButton id={product.id} />
          </div>
          <p className="text-gray-500">{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export function ProductsPlaceholder() {
  return (
    <div className="grid gap-4 w-full max-w-lg">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="bg-white shadow-md rounded-md p-4 w-full">
          <div className="animate-pulse h-5 bg-gray-300 rounded w-3/4 mb-2" />
          <div className="animate-pulse h-4 bg-gray-300 rounded w-1/2 mb-2" />
        </div>
      ))}
    </div>
  );
}
