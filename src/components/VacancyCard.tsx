
import { Link } from "react-router-dom";
import { MapPin, Clock, ChevronRight } from "lucide-react";

interface VacancyCardProps {
  id: string;
  title: string;
  location: string;
  hoursPerWeek: string;
  shortDescription: string;
}

const VacancyCard = ({ 
  id, 
  title, 
  location, 
  hoursPerWeek, 
  shortDescription 
}: VacancyCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden card-effect">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-nexus-700">{title}</h3>
        <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-500">
          <div className="flex items-center">
            <MapPin size={16} className="mr-1 text-nexus-500" />
            {location}
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-1 text-nexus-500" />
            {hoursPerWeek}
          </div>
        </div>
        <p className="text-gray-600 mb-4">{shortDescription}</p>
        <Link 
          to={`/vacatures/${id}`}
          className="flex items-center font-medium text-nexus-500 hover:text-nexus-600 transition-colors"
        >
          Bekijk vacature <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default VacancyCard;
