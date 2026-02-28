/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getMeals } from "@/app/(commonLayout)/meals/_action";
import { useQuery } from "@tanstack/react-query";

const MealsList = () => {
  const { data } = useQuery({
    queryKey: ["meal"],
    queryFn: () => getMeals(),
  });

  console.log(data);

  return (
    <div>
      {data.data.map((meal: any) => (
        <div key={meal.id}>{meal.name}</div>
      ))}
    </div>
  );
};

export default MealsList;
