import { RestaurantInfo } from '@/components/RestaurantInfo'
import { MenuSection } from '@/components/sections/MenuSection'
import { ReviewsSection } from '@/components/sections/ReviewsSection'

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pizza-900 via-pizza-800 to-pizza-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <RestaurantInfo />
        <MenuSection />
        <ReviewsSection />
      </div>
    </div>
  );
};

export default Index;