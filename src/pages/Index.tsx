import { RestaurantInfo } from '@/components/RestaurantInfo'
import { MenuSection } from '@/components/sections/MenuSection'
import { ReviewsSection } from '@/components/sections/ReviewsSection'

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pizza-50 via-white to-pizza-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <RestaurantInfo />
        <MenuSection />
        <ReviewsSection />
      </div>
    </div>
  );
};

export default Index;