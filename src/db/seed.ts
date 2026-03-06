import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { products } from "./schema";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const nikeProducts = [
  {
    name: "Nike Air Max 90",
    description:
      "The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details.",
    price: "130.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/350e7f3a-979a-4420-a7f1-23b253e41007/AIR+MAX+90.png",
    category: "Shoes",
    stock: 50,
  },
  {
    name: "Nike Air Force 1 '07",
    description:
      "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best.",
    price: "115.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/350e7f3a-979a-4420-a7f1-23b253e41007/AIR+MAX+90.png",
    category: "Shoes",
    stock: 75,
  },
  {
    name: "Nike Dunk Low Retro",
    description:
      "Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colors.",
    price: "115.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/350e7f3a-979a-4420-a7f1-23b253e41007/AIR+MAX+90.png",
    category: "Shoes",
    stock: 60,
  },
  {
    name: "Nike Sportswear Tech Fleece Hoodie",
    description:
      "Engineered for lightweight warmth, the Tech Fleece Hoodie combines a streamlined design with innovative fabric.",
    price: "120.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/350e7f3a-979a-4420-a7f1-23b253e41007/AIR+MAX+90.png",
    category: "Apparel",
    stock: 40,
  },
  {
    name: "Nike Pegasus 41",
    description:
      "Responsive cushioning in the Pegasus provides an energized ride for everyday road running.",
    price: "140.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/350e7f3a-979a-4420-a7f1-23b253e41007/AIR+MAX+90.png",
    category: "Shoes",
    stock: 35,
  },
  {
    name: "Nike Club Fleece Joggers",
    description:
      "The Nike Club Fleece Joggers combine classic style with the soft comfort of fleece for an elevated everyday look.",
    price: "70.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/350e7f3a-979a-4420-a7f1-23b253e41007/AIR+MAX+90.png",
    category: "Apparel",
    stock: 90,
  },
];

async function seed() {
  console.log("🌱 Seeding products...");
  await db.insert(products).values(nikeProducts);
  console.log("✅ Seeded", nikeProducts.length, "Nike products successfully!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
