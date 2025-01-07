import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pizza } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface MenuItem {
  name: string;
  ingredients: string[];
  price1P: string;
  price2P?: string;
  isVegetarian?: boolean;
  isSeafood?: boolean;
}

interface MenuTableProps {
  items: MenuItem[];
  category: string;
}

export const MenuTable = ({ items, category }: MenuTableProps) => {
  const isMobile = useIsMobile();

  const getBgColor = (category: string) => {
    switch (category) {
      case "Pizzas Sauce Tomate":
        return "bg-gradient-to-br from-[#8B0000]/80 via-pizza-800/80 to-pizza-900/80 border-pizza-800/30";
      case "Pizzas Blanches":
        return "bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 border-slate-800/30";
      case "Nos Paninis":
        return "bg-gradient-to-br from-[#006400]/80 via-zinc-800/80 to-zinc-900/80 border-zinc-800/30";
      case "Nos Formules":
        return "bg-gradient-to-br from-stone-900/80 via-stone-800/80 to-stone-900/80 border-stone-800/30";
      case "Nos Desserts":
        return "bg-gradient-to-br from-neutral-900/80 via-neutral-800/80 to-neutral-900/80 border-neutral-800/30";
      case "Nos Boissons":
        return "bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 border-gray-800/30";
      default:
        return "bg-gradient-to-br from-pizza-900/80 via-pizza-800/80 to-pizza-900/80 border-pizza-800/30";
    }
  };

  return (
    <div className="mb-8 animate-fadeIn">
      <h2 className="text-2xl font-bold text-pizza-300 mb-6 flex items-center gap-2">
        <Pizza className="w-6 h-6" />
        {category}
      </h2>
      <div className={`rounded-lg overflow-hidden border backdrop-blur-sm ${getBgColor(category)}`}>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-black/20">
              <TableHead className="text-pizza-300">Nom</TableHead>
              {!isMobile && <TableHead className="text-pizza-300">Ingrédients</TableHead>}
              <TableHead className="text-pizza-300 text-right">Prix</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((pizza) => (
              <TableRow 
                key={pizza.name} 
                className="hover:bg-black/20 transition-colors"
              >
                <TableCell className="font-medium text-pizza-100">
                  <div>
                    {pizza.name}
                    {pizza.isVegetarian && (
                      <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#006400]/50 text-green-300">
                        Végétarien
                      </span>
                    )}
                    {pizza.isSeafood && (
                      <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#8B0000]/50 text-red-300">
                        Fruits de mer
                      </span>
                    )}
                  </div>
                  {isMobile && (
                    <div className="text-sm text-pizza-200 mt-1">
                      {pizza.ingredients.join(", ")}
                    </div>
                  )}
                </TableCell>
                {!isMobile && (
                  <TableCell className="text-pizza-200">
                    {pizza.ingredients.join(", ")}
                  </TableCell>
                )}
                <TableCell className="text-right text-pizza-100">
                  <div>{pizza.price1P}€</div>
                  {pizza.price2P && (
                    <div className="text-sm text-pizza-300">2 pers: {pizza.price2P}€</div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};