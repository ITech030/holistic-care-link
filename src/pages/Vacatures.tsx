
import { useState } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import VacancyCard from "@/components/VacancyCard";
import { Search, MapPin, Briefcase, Filter } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for vacancies
const mockVacancies = [
  {
    id: "v1",
    title: "Verpleegkundige Niveau 4",
    location: "Amsterdam",
    hoursPerWeek: "24-36 uur",
    category: "verpleging",
    shortDescription: "Voor een zorginstelling in Amsterdam zoeken wij een enthousiaste verpleegkundige niveau 4 die het team komt versterken.",
    featured: true
  },
  {
    id: "v2",
    title: "Verzorgende IG",
    location: "Rotterdam",
    hoursPerWeek: "24-32 uur",
    category: "verzorging",
    shortDescription: "Ben jij een gedreven Verzorgende IG die graag in de thuiszorg wil werken? Dan zijn wij op zoek naar jou!",
    featured: true
  },
  {
    id: "v3",
    title: "Fysiotherapeut",
    location: "Utrecht",
    hoursPerWeek: "32-40 uur",
    category: "paramedisch",
    shortDescription: "Voor een revalidatiecentrum in Utrecht zijn wij op zoek naar een ervaren fysiotherapeut met affiniteit voor neurologische aandoeningen.",
    featured: false
  },
  {
    id: "v4",
    title: "Psychiatrisch Verpleegkundige",
    location: "Den Haag",
    hoursPerWeek: "24-36 uur",
    category: "verpleging",
    shortDescription: "Voor een GGZ-instelling in Den Haag zoeken wij een psychiatrisch verpleegkundige die affiniteit heeft met jongvolwassenen.",
    featured: false
  },
  {
    id: "v5",
    title: "Doktersassistent",
    location: "Groningen",
    hoursPerWeek: "16-24 uur",
    category: "assistentie",
    shortDescription: "Een huisartsenpraktijk in Groningen is op zoek naar een ervaren doktersassistent voor 2-3 dagen per week.",
    featured: false
  },
  {
    id: "v6",
    title: "Wijkverpleegkundige",
    location: "Eindhoven",
    hoursPerWeek: "24-36 uur",
    category: "verpleging",
    shortDescription: "Voor de thuiszorg in de regio Eindhoven zijn wij op zoek naar een zelfstandige wijkverpleegkundige met ervaring.",
    featured: true
  },
  {
    id: "v7",
    title: "Ergotherapeut",
    location: "Maastricht",
    hoursPerWeek: "24-32 uur",
    category: "paramedisch",
    shortDescription: "Een verpleeghuis in Maastricht zoekt een enthousiaste ergotherapeut die oudere cliënten helpt bij dagelijkse activiteiten.",
    featured: false
  },
  {
    id: "v8",
    title: "Operatie Assistent",
    location: "Amsterdam",
    hoursPerWeek: "32-36 uur",
    category: "assistentie",
    shortDescription: "Voor een ziekenhuis in Amsterdam zoeken wij een gediplomeerd operatie assistent voor de OK-afdeling.",
    featured: false
  },
  {
    id: "v9",
    title: "GZ-Psycholoog",
    location: "Utrecht",
    hoursPerWeek: "24-36 uur",
    category: "psychologie",
    shortDescription: "Een GGZ-instelling in Utrecht is op zoek naar een GZ-psycholoog voor het behandelen van volwassenen met angst- en stemmingsstoornissen.",
    featured: true
  }
];

const locations = ["Alle locaties", "Amsterdam", "Rotterdam", "Utrecht", "Den Haag", "Groningen", "Eindhoven", "Maastricht"];
const categories = ["Alle categorieën", "verpleging", "verzorging", "paramedisch", "assistentie", "psychologie"];

const Vacatures = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Alle locaties");
  const [selectedCategory, setSelectedCategory] = useState("Alle categorieën");
  const [showFilters, setShowFilters] = useState(false);

  const filteredVacancies = mockVacancies.filter((vacancy) => {
    const matchesSearch = vacancy.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          vacancy.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = selectedLocation === "Alle locaties" || vacancy.location === selectedLocation;
    
    const matchesCategory = selectedCategory === "Alle categorieën" || vacancy.category === selectedCategory;
    
    return matchesSearch && matchesLocation && matchesCategory;
  });

  const featuredVacancies = filteredVacancies.filter(vacancy => vacancy.featured);
  const regularVacancies = filteredVacancies.filter(vacancy => !vacancy.featured);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Vacatures"
        subtitle="Ontdek de nieuwste mogelijkheden in de zorgsector"
      />

      {/* Search Section */}
      <section className="py-8 bg-gray-50">
        <div className="nexus-container">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={20} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Zoek op functie of trefwoord"
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-nexus-500 focus:border-nexus-500"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              
              <button
                className="md:hidden flex items-center justify-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md"
                onClick={toggleFilters}
              >
                <Filter size={20} className="mr-2" /> Filters
              </button>

              <div className={`${showFilters ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-4`}>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin size={20} className="text-gray-400" />
                  </div>
                  <select
                    className="pl-10 w-full md:w-48 px-4 py-2 border border-gray-300 rounded-md focus:ring-nexus-500 focus:border-nexus-500"
                    value={selectedLocation}
                    onChange={handleLocationChange}
                  >
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Briefcase size={20} className="text-gray-400" />
                  </div>
                  <select
                    className="pl-10 w-full md:w-48 px-4 py-2 border border-gray-300 rounded-md focus:ring-nexus-500 focus:border-nexus-500"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category === "Alle categorieën" 
                          ? category 
                          : category.charAt(0).toUpperCase() + category.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vacancies Section */}
      <section className="section-padding">
        <div className="nexus-container">
          {/* Display number of results */}
          <div className="mb-6">
            <p className="text-gray-600">
              {filteredVacancies.length} vacatures gevonden
              {selectedLocation !== "Alle locaties" && ` in ${selectedLocation}`}
              {selectedCategory !== "Alle categorieën" && ` voor ${selectedCategory}`}
              {searchTerm && ` voor "${searchTerm}"`}
            </p>
          </div>

          {/* Featured Vacancies */}
          {featuredVacancies.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-nexus-700 mb-6">Uitgelichte Vacatures</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredVacancies.map((vacancy) => (
                  <VacancyCard
                    key={vacancy.id}
                    id={vacancy.id}
                    title={vacancy.title}
                    location={vacancy.location}
                    hoursPerWeek={vacancy.hoursPerWeek}
                    shortDescription={vacancy.shortDescription}
                  />
                ))}
              </div>
            </div>
          )}

          {/* All Other Vacancies */}
          <div>
            <h2 className="text-2xl font-semibold text-nexus-700 mb-6">Alle Vacatures</h2>
            {regularVacancies.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularVacancies.map((vacancy) => (
                  <VacancyCard
                    key={vacancy.id}
                    id={vacancy.id}
                    title={vacancy.title}
                    location={vacancy.location}
                    hoursPerWeek={vacancy.hoursPerWeek}
                    shortDescription={vacancy.shortDescription}
                  />
                ))}
              </div>
            ) : (
              featuredVacancies.length === 0 && (
                <div className="text-center py-10">
                  <p className="text-gray-600 mb-4">Geen vacatures gevonden die voldoen aan je zoekcriteria.</p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedLocation("Alle locaties");
                      setSelectedCategory("Alle categorieën");
                    }}
                    className="text-nexus-500 hover:text-nexus-600 font-medium"
                  >
                    Wis alle filters
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="nexus-container">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-semibold text-nexus-700 mb-4">
                  Niet gevonden wat je zocht?
                </h2>
                <p className="text-gray-600 mb-6">
                  We hebben regelmatig nieuwe vacatures of kunnen specifiek voor jou op zoek gaan. 
                  Laat je gegevens achter en we nemen contact met je op om je wensen te bespreken.
                </p>
                <Link to="/contact" className="btn-primary">
                  Neem Contact Op
                </Link>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1576765608866-5b51f8d9fe27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="Zorgprofessional"
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="nexus-container">
          <h2 className="text-2xl font-semibold text-nexus-700 mb-8 text-center">
            Waarom Werken via Nexus Cura?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center card-effect">
              <div className="mx-auto w-16 h-16 bg-nexus-100 rounded-full flex items-center justify-center mb-4">
                <MapPin size={28} className="text-nexus-500" />
              </div>
              <h3 className="text-lg font-semibold text-nexus-700 mb-3">Lokale Focus</h3>
              <p className="text-gray-600">
                We kennen de lokale zorgmarkt en kunnen je helpen een baan te vinden dicht bij huis.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center card-effect">
              <div className="mx-auto w-16 h-16 bg-nexus-100 rounded-full flex items-center justify-center mb-4">
                <Users size={28} className="text-nexus-500" />
              </div>
              <h3 className="text-lg font-semibold text-nexus-700 mb-3">Persoonlijke Aanpak</h3>
              <p className="text-gray-600">
                We nemen de tijd om jou en je wensen te leren kennen om de perfecte match te vinden.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center card-effect">
              <div className="mx-auto w-16 h-16 bg-nexus-100 rounded-full flex items-center justify-center mb-4">
                <Award size={28} className="text-nexus-500" />
              </div>
              <h3 className="text-lg font-semibold text-nexus-700 mb-3">Kwaliteitsgarantie</h3>
              <p className="text-gray-600">
                We werken alleen met gerenommeerde zorgorganisaties die goed voor hun personeel zorgen.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center card-effect">
              <div className="mx-auto w-16 h-16 bg-nexus-100 rounded-full flex items-center justify-center mb-4">
                <BarChart size={28} className="text-nexus-500" />
              </div>
              <h3 className="text-lg font-semibold text-nexus-700 mb-3">Groeimogelijkheden</h3>
              <p className="text-gray-600">
                We ondersteunen je in je professionele ontwikkeling met coaching en trainingsmogelijkheden.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Vacatures;
