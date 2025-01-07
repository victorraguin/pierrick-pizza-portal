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
        return "bg-gradient-to-br from-[#8B0000]/90 via-pizza-800/95 to-black/90 border-[#8B0000]/30";
      case "Pizzas Blanches":
        return "bg-gradient-to-br from-slate-900/90 via-slate-800/95 to-black/90 border-slate-800/30";
      case "Nos Paninis":
        return "bg-gradient-to-br from-[#006400]/90 via-zinc-800/95 to-black/90 border-zinc-800/30";
      case "Nos Formules":
        return "bg-gradient-to-br from-amber-900/90 via-stone-800/95 to-black/90 border-stone-800/30";
      case "Nos Desserts":
        return "bg-gradient-to-br from-purple-900/90 via-neutral-800/95 to-black/90 border-neutral-800/30";
      case "Nos Boissons":
        return "bg-gradient-to-br from-blue-900/90 via-gray-800/95 to-black/90 border-gray-800/30";
      default:
        return "bg-gradient-to-br from-pizza-900/90 via-pizza-800/95 to-black/90 border-pizza-800/30";
    }
  };

  return (
    <div className="mb-12 animate-fadeIn">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <Pizza className="w-8 h-8 text-orange-500" />
        <span className="border-b-2 border-orange-500/50 pb-2">{category}</span>
      </h2>
      <div className={`rounded-xl overflow-hidden border backdrop-blur-sm shadow-xl ${getBgColor(category)}`}>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-black/20 border-b border-white/10">
              <TableHead className="text-orange-300 font-semibold">Nom</TableHead>
              {!isMobile && <TableHead className="text-orange-300 font-semibold">Ingrédients</TableHead>}
              <TableHead className="text-orange-300 font-semibold text-right">Prix</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((pizza) => (
              <TableRow 
                key={pizza.name} 
                className="hover:bg-white/5 transition-colors duration-300 border-b border-white/5"
              >
                <TableCell className="font-medium text-white">
                  <div>
                    {pizza.name}
                    {pizza.isVegetarian && (
                      <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#006400]/50 text-green-300 border border-green-500/20">
                        Végétarien
                      </span>
                    )}
                    {pizza.isSeafood && (
                      <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#8B0000]/50 text-red-300 border border-red-500/20">
                        Fruits de mer
                      </span>
                    )}
                  </div>
                  {isMobile && (
                    <div className="text-sm text-gray-400 mt-1">
                      {pizza.ingredients.join(", ")}
                    </div>
                  )}
                </TableCell>
                {!isMobile && (
                  <TableCell className="text-gray-400">
                    {pizza.ingredients.join(", ")}
                  </TableCell>
                )}
                <TableCell className="text-right">
                  <div className="text-orange-400 font-semibold">{pizza.price1P}€</div>
                  {pizza.price2P && (
                    <div className="text-sm text-gray-400">2 pers: {pizza.price2P}€</div>
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