import { RestaurantInfo } from '@/components/RestaurantInfo'
import { MenuSection } from '@/components/sections/MenuSection'
import { ReviewsSection } from '@/components/sections/ReviewsSection'

const Index = () => {
  return (
    <div className="min-h-screen bg-pizza-900">
      <div className="relative">
        <div className="absolute inset-0 bg-pizza-pattern opacity-5 bg-fixed" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
          <RestaurantInfo />
          <MenuSection />
          <ReviewsSection />
        </div>
      </div>
    </div>
  );
};

export default Index;