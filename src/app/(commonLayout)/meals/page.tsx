import MealsList from "@/components/modules/meals/mealList";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getMeals } from "./_action";

const ConsultationPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["meal"],
    queryFn: getMeals,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MealsList />
    </HydrationBoundary>
  );
};

export default ConsultationPage;
