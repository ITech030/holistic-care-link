
import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  MapPin, 
  Clock, 
  Calendar, 
  Briefcase, 
  GraduationCap, 
  ArrowLeft, 
  CheckCircle, 
  ChevronRight 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock vacancy data - in a real app this would come from an API
const mockVacancyDetails = {
  v1: {
    id: "v1",
    title: "Verpleegkundige Niveau 4",
    location: "Amsterdam",
    department: "Interne Geneeskunde",
    hoursPerWeek: "24-36 uur",
    employmentType: "Vast dienstverband",
    education: "MBO-4 Verpleegkunde",
    startDate: "Per direct",
    salary: "€2.800 - €3.600 per maand (fulltime)",
    description: `
      <p>Voor een zorginstelling in Amsterdam zoeken wij een enthousiaste verpleegkundige niveau 4 die het team komt versterken.</p>
      
      <p>Als verpleegkundige ben je verantwoordelijk voor de verzorging en verpleging van cliënten met diverse zorgvragen. Je coördineert de zorg rondom je cliënten en bent het aanspreekpunt voor cliënten, familie en collega's. Je werkt in een multidisciplinair team en draagt bij aan een prettige sfeer op de afdeling.</p>
      
      <h3>Werkzaamheden:</h3>
      <ul>
        <li>Verlenen van verpleegkundige zorg volgens het zorgplan</li>
        <li>Signaleren van veranderingen in de gezondheidstoestand van cliënten</li>
        <li>Coördineren van de zorg rondom cliënten</li>
        <li>Bijdragen aan het opstellen en evalueren van zorgplannen</li>
        <li>Samenwerken met andere disciplines zoals artsen, fysiotherapeuten en ergotherapeuten</li>
        <li>Begeleiden van leerlingen en stagiaires</li>
      </ul>
    `,
    requirements: [
      "MBO-4 diploma Verpleegkunde",
      "BIG-registratie",
      "Minimaal 2 jaar ervaring als verpleegkundige",
      "Goede communicatieve vaardigheden",
      "Flexibele en proactieve werkhouding",
      "Affiniteit met de doelgroep"
    ],
    benefits: [
      "Marktconform salaris conform CAO Ziekenhuizen",
      "8,33% eindejaarsuitkering",
      "8% vakantietoeslag",
      "Pensioenregeling bij PFZW",
      "Mogelijkheden voor persoonlijke en professionele ontwikkeling",
      "Reiskostenvergoeding",
      "Collectieve zorgverzekering",
      "Prettige werksfeer in een professioneel team"
    ],
    organization: "Medisch Centrum Amsterdam",
    relatedVacancies: ["v4", "v6", "v2"]
  },
  v2: {
    id: "v2",
    title: "Verzorgende IG",
    location: "Rotterdam",
    department: "Thuiszorg",
    hoursPerWeek: "24-32 uur",
    employmentType: "Vast dienstverband",
    education: "MBO-3 Verzorgende IG",
    startDate: "Per direct",
    salary: "€2.400 - €3.200 per maand (fulltime)",
    description: `
      <p>Ben jij een gedreven Verzorgende IG die graag in de thuiszorg wil werken? Dan zijn wij op zoek naar jou!</p>
      
      <p>Als Verzorgende IG in de thuiszorg bied je zorg en ondersteuning aan cliënten in hun eigen woonomgeving. Je werkt zelfstandig en bent verantwoordelijk voor de dagelijkse zorg van je cliënten. Je hebt oog voor de persoonlijke situatie van de cliënt en stemt de zorg hierop af.</p>
      
      <h3>Werkzaamheden:</h3>
      <ul>
        <li>Verlenen van persoonlijke verzorging en verpleging</li>
        <li>Toedienen van medicatie</li>
        <li>Signaleren van veranderingen in de gezondheid van cliënten</li>
        <li>Rapporteren in het elektronisch cliëntendossier</li>
        <li>Samenwerken met collega's en andere disciplines</li>
        <li>Contact onderhouden met familie en mantelzorgers</li>
      </ul>
    `,
    requirements: [
      "MBO-3 diploma Verzorgende IG",
      "Affiniteit met thuiszorg",
      "Zelfstandige werkhouding",
      "Goede communicatieve vaardigheden",
      "In bezit van rijbewijs B en eigen vervoer",
      "Flexibel inzetbaar in wisselende diensten"
    ],
    benefits: [
      "Salaris conform CAO VVT",
      "8,33% eindejaarsuitkering",
      "8% vakantietoeslag",
      "Pensioenregeling",
      "Reiskostenvergoeding",
      "Scholingsmogelijkheden",
      "Fietsplan",
      "Collectieve zorgverzekering"
    ],
    organization: "Thuiszorg Rotterdam",
    relatedVacancies: ["v1", "v6", "v4"]
  },
  v4: {
    id: "v4",
    title: "Psychiatrisch Verpleegkundige",
    location: "Den Haag",
    department: "GGZ - Jongvolwassenen",
    hoursPerWeek: "24-36 uur",
    employmentType: "Bepaalde tijd met uitzicht op vast",
    education: "HBO-V met specialisatie GGZ",
    startDate: "Per direct",
    salary: "€3.000 - €4.000 per maand (fulltime)",
    description: `
      <p>Voor een GGZ-instelling in Den Haag zoeken wij een psychiatrisch verpleegkundige die affiniteit heeft met jongvolwassenen.</p>
      
      <p>Als psychiatrisch verpleegkundige ben je werkzaam op een afdeling voor jongvolwassenen (18-25 jaar) met diverse psychiatrische problematiek. Je biedt verpleegkundige zorg, begeleiding en behandeling aan cliënten en werkt samen in een multidisciplinair team.</p>
      
      <h3>Werkzaamheden:</h3>
      <ul>
        <li>Bieden van verpleegkundige zorg en begeleiding aan cliënten</li>
        <li>Opstellen, uitvoeren en evalueren van verpleegplannen</li>
        <li>Deelnemen aan multidisciplinair overleg</li>
        <li>Begeleiden van individuele en groepstherapieën</li>
        <li>Bijdragen aan een veilig en therapeutisch klimaat op de afdeling</li>
        <li>Werken volgens de herstelgerichte visie</li>
      </ul>
    `,
    requirements: [
      "HBO-V diploma met specialisatie GGZ of bereidheid tot volgen van specialisatie",
      "BIG-registratie",
      "Affiniteit met jongvolwassenen met psychiatrische problematiek",
      "Ervaring in de GGZ is een pre",
      "Goede communicatieve en sociale vaardigheden",
      "Stressbestendig en flexibel"
    ],
    benefits: [
      "Salaris conform CAO GGZ",
      "8,33% eindejaarsuitkering",
      "8% vakantietoeslag",
      "Mogelijkheden voor bij- en nascholing",
      "Pensioenregeling",
      "Persoonlijk budget levensfase bewust personeelsbeleid",
      "Collectieve zorgverzekering",
      "Reiskostenvergoeding"
    ],
    organization: "GGZ Den Haag",
    relatedVacancies: ["v1", "v9", "v6"]
  },
  v6: {
    id: "v6",
    title: "Wijkverpleegkundige",
    location: "Eindhoven",
    department: "Wijkteam Eindhoven-Noord",
    hoursPerWeek: "24-36 uur",
    employmentType: "Vast dienstverband",
    education: "HBO-V",
    startDate: "Per direct",
    salary: "€2.900 - €3.800 per maand (fulltime)",
    description: `
      <p>Voor de thuiszorg in de regio Eindhoven zijn wij op zoek naar een zelfstandige wijkverpleegkundige met ervaring.</p>
      
      <p>Als wijkverpleegkundige ben je verantwoordelijk voor de coördinatie en uitvoering van de verpleegkundige zorg bij cliënten thuis. Je bent het eerste aanspreekpunt voor cliënten, mantelzorgers en andere zorgverleners. Je werkt zelfstandig en bent in staat om de zorg rondom cliënten te organiseren.</p>
      
      <h3>Werkzaamheden:</h3>
      <ul>
        <li>Uitvoeren van verpleegkundige handelingen bij cliënten thuis</li>
        <li>Indiceren van zorg volgens het normenkader</li>
        <li>Opstellen, uitvoeren en evalueren van zorgplannen</li>
        <li>Coördineren van de zorg rondom cliënten</li>
        <li>Samenwerken met andere zorgverleners en instanties</li>
        <li>Coachen en begeleiden van collega's</li>
      </ul>
    `,
    requirements: [
      "HBO-V diploma",
      "BIG-registratie",
      "Ervaring als wijkverpleegkundige is een pre",
      "Kennis van het indiceren volgens het normenkader",
      "In bezit van rijbewijs B en eigen vervoer",
      "Zelfstandige en proactieve werkhouding",
      "Goede communicatieve vaardigheden",
      "Flexibel inzetbaar in wisselende diensten"
    ],
    benefits: [
      "Salaris conform CAO VVT",
      "8,33% eindejaarsuitkering",
      "8% vakantietoeslag",
      "Pensioenregeling",
      "Reiskostenvergoeding",
      "Scholingsmogelijkheden",
      "Laptop en telefoon van de zaak",
      "Collectieve zorgverzekering"
    ],
    organization: "Thuiszorg Eindhoven",
    relatedVacancies: ["v1", "v2", "v4"]
  },
  v9: {
    id: "v9",
    title: "GZ-Psycholoog",
    location: "Utrecht",
    department: "GGZ - Volwassenenzorg",
    hoursPerWeek: "24-36 uur",
    employmentType: "Vast dienstverband",
    education: "WO Psychologie + GZ-opleiding",
    startDate: "In overleg",
    salary: "€4.000 - €5.200 per maand (fulltime)",
    description: `
      <p>Een GGZ-instelling in Utrecht is op zoek naar een GZ-psycholoog voor het behandelen van volwassenen met angst- en stemmingsstoornissen.</p>
      
      <p>Als GZ-psycholoog ben je werkzaam binnen een multidisciplinair team en bied je diagnostiek en behandeling aan volwassenen met voornamelijk angst- en stemmingsstoornissen. Je werkt volgens evidence-based behandelmethoden en bent in staat om zelfstandig te werken.</p>
      
      <h3>Werkzaamheden:</h3>
      <ul>
        <li>Uitvoeren van intakes en diagnostisch onderzoek</li>
        <li>Opstellen van behandelplannen</li>
        <li>Uitvoeren van individuele en groepsbehandelingen</li>
        <li>Deelnemen aan multidisciplinair overleg</li>
        <li>Begeleiden van basispsychologen en psychologen in opleiding</li>
        <li>Bijdragen aan de ontwikkeling van het behandelaanbod</li>
      </ul>
    `,
    requirements: [
      "Afgeronde opleiding tot GZ-psycholoog",
      "BIG-registratie",
      "Ervaring met de behandeling van angst- en stemmingsstoornissen",
      "Kennis van CGT, EMDR en/of schematherapie",
      "Goede communicatieve vaardigheden",
      "Zelfstandige en professionele werkhouding",
      "Affiniteit met wetenschappelijk onderzoek is een pre"
    ],
    benefits: [
      "Salaris conform CAO GGZ",
      "8,33% eindejaarsuitkering",
      "8% vakantietoeslag",
      "Mogelijkheden voor bij- en nascholing",
      "Pensioenregeling",
      "Persoonlijk budget levensfase bewust personeelsbeleid",
      "Collectieve zorgverzekering",
      "Reiskostenvergoeding",
      "Mogelijkheid tot deelname aan wetenschappelijk onderzoek"
    ],
    organization: "GGZ Utrecht",
    relatedVacancies: ["v4", "v1", "v6"]
  }
};

const VacatureDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Find the vacancy data by id from our mock data
  const vacancy = id ? mockVacancyDetails[id as keyof typeof mockVacancyDetails] : null;
  
  // Get the related vacancies data
  const relatedVacancies = vacancy?.relatedVacancies.map(relId => 
    mockVacancyDetails[relId as keyof typeof mockVacancyDetails]
  ) || [];

  useEffect(() => {
    // If the vacancy doesn't exist, redirect to the vacancies page
    if (!vacancy && id) {
      toast({
        title: "Vacature niet gevonden",
        description: "De gezochte vacature bestaat niet of is verlopen.",
        variant: "destructive"
      });
      navigate("/vacatures");
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id, vacancy, navigate, toast]);

  const handleApply = () => {
    toast({
      title: "Sollicitatie ontvangen",
      description: "Bedankt voor je interesse! We nemen zo spoedig mogelijk contact met je op.",
    });
  };

  if (!vacancy) {
    return null; // Will redirect in useEffect
  }

  return (
    <Layout>
      {/* Back to vacancies link */}
      <div className="bg-gray-50 py-4">
        <div className="nexus-container">
          <Link 
            to="/vacatures" 
            className="flex items-center text-nexus-600 hover:text-nexus-700"
          >
            <ArrowLeft size={18} className="mr-2" />
            Terug naar alle vacatures
          </Link>
        </div>
      </div>
      
      {/* Vacancy header */}
      <section className="bg-white border-b">
        <div className="nexus-container py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-nexus-700 mb-4">
            {vacancy.title}
          </h1>
          
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-gray-600 mb-6">
            <div className="flex items-center">
              <MapPin size={18} className="mr-2 text-nexus-500" />
              {vacancy.location}
            </div>
            <div className="flex items-center">
              <Briefcase size={18} className="mr-2 text-nexus-500" />
              {vacancy.department}
            </div>
            <div className="flex items-center">
              <Clock size={18} className="mr-2 text-nexus-500" />
              {vacancy.hoursPerWeek}
            </div>
            <div className="flex items-center">
              <Calendar size={18} className="mr-2 text-nexus-500" />
              {vacancy.startDate}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={handleApply}
              className="btn-primary"
            >
              Solliciteer Direct
            </button>
            <Link 
              to="/contact" 
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-md transition duration-300"
            >
              Meer Informatie
            </Link>
          </div>
        </div>
      </section>
      
      {/* Vacancy details */}
      <section className="section-padding">
        <div className="nexus-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold text-nexus-700 mb-4">Functieomschrijving</h2>
                <div 
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: vacancy.description }}
                />
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold text-nexus-700 mb-4">Functie-eisen</h2>
                <ul className="space-y-2">
                  {vacancy.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={18} className="text-nexus-500 mr-3 mt-1 flex-shrink-0" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-nexus-700 mb-4">Wij Bieden</h2>
                <ul className="space-y-2">
                  {vacancy.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={18} className="text-nexus-500 mr-3 mt-1 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-nexus-700 mb-4">Functiedetails</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm text-gray-500 mb-1">Functietitel</h3>
                    <p className="font-medium">{vacancy.title}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm text-gray-500 mb-1">Locatie</h3>
                    <p className="font-medium">{vacancy.location}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm text-gray-500 mb-1">Afdeling</h3>
                    <p className="font-medium">{vacancy.department}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm text-gray-500 mb-1">Uren per week</h3>
                    <p className="font-medium">{vacancy.hoursPerWeek}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm text-gray-500 mb-1">Dienstverband</h3>
                    <p className="font-medium">{vacancy.employmentType}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm text-gray-500 mb-1">Opleidingsniveau</h3>
                    <div className="flex items-center">
                      <GraduationCap size={18} className="text-nexus-500 mr-2" />
                      <p className="font-medium">{vacancy.education}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm text-gray-500 mb-1">Startdatum</h3>
                    <p className="font-medium">{vacancy.startDate}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm text-gray-500 mb-1">Salarisindicatie</h3>
                    <p className="font-medium">{vacancy.salary}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm text-gray-500 mb-1">Organisatie</h3>
                    <p className="font-medium">{vacancy.organization}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-nexus-700 mb-4">Solliciteren</h2>
                <p className="text-gray-600 mb-4">
                  Geïnteresseerd in deze functie? Solliciteer direct of neem contact met ons op voor meer informatie.
                </p>
                <div className="space-y-3">
                  <button 
                    onClick={handleApply}
                    className="w-full btn-primary"
                  >
                    Direct Solliciteren
                  </button>
                  <Link 
                    to="/contact"
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-md transition duration-300 inline-block text-center"
                  >
                    Contact Opnemen
                  </Link>
                </div>
              </div>
              
              <div className="bg-nexus-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-nexus-700 mb-4">Over Nexus Cura</h2>
                <p className="text-gray-600 mb-4">
                  Nexus Cura is een holistische zorgbemiddelaar die zorgprofessionals verbindt met 
                  zorgorganisaties. Wij geloven in een persoonlijke aanpak en duurzame matches.
                </p>
                <Link 
                  to="/over-ons"
                  className="flex items-center text-nexus-600 hover:text-nexus-700 font-medium"
                >
                  Meer over ons <ChevronRight size={18} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related vacancies */}
      {relatedVacancies.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="nexus-container">
            <h2 className="text-2xl font-semibold text-nexus-700 mb-6">
              Vergelijkbare Vacatures
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedVacancies.map((relVacancy) => (
                <Link 
                  key={relVacancy.id}
                  to={`/vacatures/${relVacancy.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden card-effect"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-nexus-700">{relVacancy.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1 text-nexus-500" />
                        {relVacancy.location}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1 text-nexus-500" />
                        {relVacancy.hoursPerWeek}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="bg-nexus-500 text-white py-12">
        <div className="nexus-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Niet gevonden wat je zocht?
            </h2>
            <p className="text-lg opacity-90 mb-6">
              We hebben regelmatig nieuwe vacatures of kunnen specifiek voor jou op zoek 
              gaan naar de perfecte match. Laat je gegevens achter en we nemen contact met je op.
            </p>
            <Link 
              to="/contact"
              className="bg-white text-nexus-700 hover:bg-gray-100 font-medium py-2 px-6 rounded-md transition duration-300 inline-block"
            >
              Neem Contact Op
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VacatureDetail;
