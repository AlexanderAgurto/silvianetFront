import { useEffect, useState } from "react";
import PlanCard from "./planCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";
function Plans() {
  const [startIndex, setStartIndex] = useState(0);
  const [plans, setPlans] = useState([]);
  const nextPlan = () => setStartIndex((prev) => (prev + 1) % plans.length);
  const prevPlan = () =>
    setStartIndex((prev) => (prev - 1 + plans.length) % plans.length);

  const fetchPlans = async () => {
    try {
      const response = await axios.get("https://api-silvianet.vercel.app/api/plans");
      setPlans(response.data || []);
    } catch (error) {
      console.error("Error al obtener los planes:", error);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const visiblePlans =
    plans.length > 0
      ? [
          plans[startIndex],
          plans[(startIndex + 1) % plans.length],
          plans[(startIndex + 2) % plans.length],
        ]
      : [];

  return (
    <section id="plans" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Nuestros Planes de Internet
        </h2>
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visiblePlans.map((plan, index) => (
              <div
                key={index}
                className={`transition-transform ${
                  index === 1 ? "scale-105 z-10" : "scale-100 opacity-70"
                }`}
              >
                <PlanCard plan={plan} />
              </div>
            ))}
          </div>
          <button
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-md sm:-left-6 lg:-left-10"
            onClick={prevPlan}
          >
            <ChevronLeft className="h-6 w-6 text-blue-600" />
          </button>
          <button
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-md sm:-right-6 lg:-right-10"
            onClick={nextPlan}
          >
            <ChevronRight className="h-6 w-6 text-blue-600" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Plans;