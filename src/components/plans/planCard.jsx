import { Wifi, Check } from "lucide-react";
function PlanCard({ plan }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-blue-200 h-full flex flex-col">
      <div className="p-6 flex-grow">
        <div className="text-blue-600 mb-2">
          <Wifi size={32} />
        </div>
        <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
        <p className="text-gray-600 mb-4">{plan.speed}</p>
        <p className="text-3xl font-bold mb-6">
        { plan.price}$ 
          <span className="text-sm font-semibold"> /mes</span>
        </p>
        <ul className="space-y-2">
          {plan.features
            .filter((feature) => feature !== "")
            .map((feature, idx) => (
              <li key={idx} className="flex items-center">
                <Check className="text-green-500 mr-2" size={16} />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default PlanCard;
