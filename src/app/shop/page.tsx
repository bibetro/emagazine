import { HeadingLink } from "@/components/HeadingLink";
import { ProjectCard } from "@/components/ProjectCard";

export default function Shop() {
  const products = [
    {
      id: 1,
      title: "Premium Coffee",
      description: "Rich and aromatic coffee beans",
      price: 12.99,
      category: "Beverages"
    },
    {
      id: 2,
      title: "Organic Tea",
      description: "Hand-picked tea leaves",
      price: 8.99,
      category: "Beverages"
    },
    {
      id: 3,
      title: "Artisan Chocolate",
      description: "Handcrafted dark chocolate",
      price: 6.99,
      category: "Snacks"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <HeadingLink level={1}>Our Shop</HeadingLink>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {products.map((product) => (
          <ProjectCard 
            key={product.id}
            title={product.title}
            description={product.description}
            meta={`$${product.price} • ${product.category}`}
          />
        ))}
      </div>
    </div>
  );
}