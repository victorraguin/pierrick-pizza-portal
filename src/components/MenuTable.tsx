import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pizza } from "lucide-react";

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
  return (
    <div className="mb-8 animate-fadeIn">
      <h2 className="text-2xl font-bold text-pizza-300 mb-6 flex items-center gap-2">
        <Pizza className="w-6 h-6" />
        {category}
      </h2>
      <div className="rounded-lg overflow-hidden border border-pizza-800/30 backdrop-blur-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-pizza-900/50 hover:bg-pizza-900/50">
              <TableHead className="text-pizza-300">Nom</TableHead>
              <TableHead className="text-pizza-300">Ingrédients</TableHead>
              <TableHead className="text-pizza-300 text-right">1 Pers</TableHead>
              <TableHead className="text-pizza-300 text-right">2 Pers</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((pizza, index) => (
              <TableRow 
                key={pizza.name} 
                className="bg-pizza-900/30 hover:bg-pizza-800/50 transition-colors"
              >
                <TableCell className="font-medium text-pizza-100">
                  {pizza.name}
                  {pizza.isVegetarian && (
                    <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-900/50 text-green-300">
                      Végétarien
                    </span>
                  )}
                  {pizza.isSeafood && (
                    <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-900/50 text-blue-300">
                      Fruits de mer
                    </span>
                  )}
                </TableCell>
                <TableCell className="text-pizza-200">
                  {pizza.ingredients.join(", ")}
                </TableCell>
                <TableCell className="text-right text-pizza-100">{pizza.price1P}€</TableCell>
                <TableCell className="text-right text-pizza-100">{pizza.price2P}€</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};