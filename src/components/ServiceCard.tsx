
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link?: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 card-effect">
      <div className="text-nexus-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-nexus-700">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {link && (
        <Link 
          to={link} 
          className="inline-flex items-center text-nexus-500 hover:text-nexus-600 font-medium"
        >
          Lees meer <ArrowRight size={16} className="ml-1" />
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;
