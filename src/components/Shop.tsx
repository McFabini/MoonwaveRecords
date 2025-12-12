import { useState } from 'react';
import { ShoppingCart, Filter } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

type Category = 'all' | 'clothing' | 'jewelry' | 'merch';

interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Hoodie MoonWave',
    price: 65,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1635650805015-2fa50682873a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHN0cmVldHdlYXIlMjBmYXNoaW9ufGVufDF8fHx8MTc2NTMxMDEzMnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Hoodie premium avec logo brodé',
  },
  {
    id: 2,
    name: 'Collier Wave',
    price: 45,
    category: 'jewelry',
    image: 'https://images.unsplash.com/photo-1706196612848-0cd22cb6231e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBqZXdlbHJ5JTIwbWluaW1hbHxlbnwxfHx8fDE3NjUzNzk3NDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Pendentif onde en argent sterling',
  },
  {
    id: 3,
    name: 'Vinyl Exclusif',
    price: 35,
    category: 'merch',
    image: 'https://images.unsplash.com/photo-1629426958038-a4cb6e3830a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZHMlMjBtdXNpY3xlbnwxfHx8fDE3NjUzNTY5MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Vinyle édition limitée',
  },
  {
    id: 4,
    name: 'T-Shirt Nuit',
    price: 35,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1635650805015-2fa50682873a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHN0cmVldHdlYXIlMjBmYXNoaW9ufGVufDF8fHx8MTc2NTMxMDEzMnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'T-shirt coton bio avec imprimé exclusif',
  },
  {
    id: 5,
    name: 'Bracelet Sound',
    price: 30,
    category: 'jewelry',
    image: 'https://images.unsplash.com/photo-1706196612848-0cd22cb6231e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBqZXdlbHJ5JTIwbWluaW1hbHxlbnwxfHx8fDE3NjUzNzk3NDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Bracelet en acier inoxydable',
  },
  {
    id: 6,
    name: 'Casquette Logo',
    price: 28,
    category: 'merch',
    image: 'https://images.unsplash.com/photo-1635650805015-2fa50682873a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHN0cmVldHdlYXIlMjBmYXNoaW9ufGVufDF8fHx8MTc2NTMxMDEzMnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Casquette snapback brodée',
  },
];

const categories = [
  { id: 'all', label: 'Tout' },
  { id: 'clothing', label: 'Vêtements' },
  { id: 'jewelry', label: 'Bijoux' },
  { id: 'merch', label: 'Merchandising' },
];

export function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="min-h-screen py-24 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Notre Boutique
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Découvrez notre collection exclusive de vêtements, bijoux et merchandising musical
          </p>
        </div>

        {/* Filtres */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          <Filter className="w-5 h-5 text-primary" />
          {categories.map((cat) => (
            <Button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as Category)}
              variant={selectedCategory === cat.id ? 'default' : 'outline'}
              className={
                selectedCategory === cat.id
                  ? 'bg-primary text-primary-foreground'
                  : 'border-border text-foreground/70 hover:text-foreground hover:bg-card'
              }
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Grille de produits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  {categories.find((c) => c.id === product.category)?.label}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="mb-2">{product.name}</h3>
                <p className="text-sm text-foreground/60 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl text-primary">{product.price} €</span>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Ajouter
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
