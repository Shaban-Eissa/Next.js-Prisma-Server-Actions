import { Suspense } from "react";
import Products, { ProductsPlaceholder } from "@/components/products";
import { ActionsForm } from "@/components/forms";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-5 p-5 md:p-24">
      <ActionsForm />
      <Suspense fallback={<ProductsPlaceholder />}>
        <Products />
      </Suspense>
    </main>
  );
}
