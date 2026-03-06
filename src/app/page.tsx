import { db } from "@/db";
import { products } from "@/db/schema";
import ProductList from "@/components/ProductList";

export const dynamic = "force-dynamic";

export default async function Home() {
  const allProducts = await db.select().from(products);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Nike Store</h1>
          <p className="text-gray-500 mt-2">
            Browse our latest collection of Nike products
          </p>
        </div>
        <ProductList initialProducts={allProducts} />
      </div>
    </main>
  );
}
