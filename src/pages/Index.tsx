
import { Link } from "react-router-dom";
import { 
  Users, 
  Building2, 
  ClipboardList, 
  HeartHandshake, 
  UserCheck, 
  BarChart, 
  Calendar, 
  Award
} from "lucide-react";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import SectionHeader from "@/components/SectionHeader";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-nexus-600 to-care-600 text-white pt-16 pb-20 md:pt-20 md:pb-24">
        <div className="nexus-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Holistische Zorgbemiddeling voor een Betere Toekomst
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Nexus Cura verbindt zorgprofessionals en zorgorganisaties met een 
                persoonlijke en holistische aanpak.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/diensten" className="btn-secondary">
                  Voor Zorgprofessionals
                </Link>
                <Link to="/diensten" className="bg-white text-nexus-700 hover:bg-gray-100 font-medium py-2 px-6 rounded-md transition duration-300">
                  Voor Zorgorganisaties
                </Link>
              </div>
            </div>
            <div className="flex justify-center animate-slide-up">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Zorgprofessionals"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Voor Wie Section */}
      <section className="section-padding bg-gray-50">
        <div className="nexus-container">
          <SectionHeader 
            title="Voor Wie Zijn Wij Er" 
            subtitle="Wij staan klaar voor zowel zorgprofessionals als zorgorganisaties met onze holistische aanpak."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Voor Zorgprofessionals */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden card-effect">
              <div className="bg-nexus-500 text-white p-6">
                <div className="flex items-center mb-3">
                  <Users size={32} />
                  <h3 className="text-2xl font-semibold ml-3">Voor Zorgprofessionals</h3>
                </div>
                <p>Vind de perfecte match voor jouw carrière in de zorg</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="text-nexus-500 mr-3 mt-1">
                      <UserCheck size={20} />
                    </div>
                    <p>Persoonlijke begeleiding bij het vinden van jouw droombaan</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-nexus-500 mr-3 mt-1">
                      <BarChart size={20} />
                    </div>
                    <p>Mogelijkheden voor persoonlijke en professionele ontwikkeling</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-nexus-500 mr-3 mt-1">
                      <ClipboardList size={20} />
                    </div>
                    <p>Toegang tot exclusieve vacatures bij toporganisaties</p>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/vacatures" className="btn-primary">
                    Bekijk Vacatures
                  </Link>
                </div>
              </div>
            </div>

            {/* Voor Zorgorganisaties */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden card-effect">
              <div className="bg-care-500 text-white p-6">
                <div className="flex items-center mb-3">
                  <Building2 size={32} />
                  <h3 className="text-2xl font-semibold ml-3">Voor Zorgorganisaties</h3>
                </div>
                <p>Vind de juiste zorgprofessionals voor uw organisatie</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="text-care-500 mr-3 mt-1">
                      <HeartHandshake size={20} />
                    </div>
                    <p>Toegang tot een netwerk van gekwalificeerde zorgprofessionals</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-care-500 mr-3 mt-1">
                      <Calendar size={20} />
                    </div>
                    <p>Flexibele oplossingen voor tijdelijke en vaste posities</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-care-500 mr-3 mt-1">
                      <Award size={20} />
                    </div>
                    <p>Kwaliteitsgarantie door onze holistische selectieprocedure</p>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/diensten" className="bg-care-500 hover:bg-care-600 text-white font-medium py-2 px-6 rounded-md transition duration-300">
                    Onze Diensten
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diensten Section */}
      <section className="section-padding">
        <div className="nexus-container">
          <SectionHeader 
            title="Onze Diensten" 
            subtitle="Wij bieden een breed scala aan diensten om de perfecte match te vinden tussen zorgprofessionals en zorgorganisaties."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Uitzenden"
              description="Flexibele inzet van zorgprofessionals voor kortere of langere periode, afgestemd op de behoefte van uw organisatie."
              icon={<Users size={36} />}
              link="/diensten"
            />
            <ServiceCard
              title="Detacheren"
              description="Professionele zorgmedewerkers die voor langere tijd bij uw organisatie aan de slag gaan met behoud van begeleiding."
              icon={<Building2 size={36} />}
              link="/diensten"
            />
            <ServiceCard
              title="Werving & Selectie"
              description="Het vinden en selecteren van de juiste zorgprofessionals voor een vaste aanstelling binnen uw organisatie."
              icon={<UserCheck size={36} />}
              link="/diensten"
            />
            <ServiceCard
              title="Loopbaanbegeleiding"
              description="Persoonlijke begeleiding voor zorgprofessionals bij het vinden van de juiste carrièrestap in de zorgsector."
              icon={<BarChart size={36} />}
              link="/diensten"
            />
            <ServiceCard
              title="Capaciteitsplanning"
              description="Strategisch plannen van uw personeelsbehoefte, rekening houdend met toekomstige ontwikkelingen in de zorg."
              icon={<Calendar size={36} />}
              link="/diensten"
            />
            <ServiceCard
              title="Kwaliteitsborging"
              description="Garantie van kwaliteit door een holistische selectieprocedure en continue begeleiding van zorgprofessionals."
              icon={<Award size={36} />}
              link="/diensten"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-nexus-50">
        <div className="nexus-container">
          <SectionHeader 
            title="Wat Zeggen Anderen" 
            subtitle="Ontdek de ervaringen van zorgprofessionals en zorgorganisaties die met ons samenwerken."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              quote="Dankzij Nexus Cura heb ik een baan gevonden die perfect aansluit bij mijn werkwijze en persoonlijke voorkeuren. Ze kijken echt naar de mens achter de zorgprofessional."
              author="Emma Jansen"
              role="Verpleegkundige"
            />
            <TestimonialCard
              quote="De holistische aanpak van Nexus Cura heeft ons geholpen om zorgmedewerkers te vinden die niet alleen vakbekwaam zijn maar ook echt passen bij de cultuur van onze organisatie."
              author="Thomas de Vries"
              role="HR Manager, Zorginstelling De Linde"
            />
            <TestimonialCard
              quote="De persoonlijke begeleiding en oprechte interesse in mijn carrièredoelen maken Nexus Cura anders dan andere bureaus. Ze staan echt naast je in je loopbaanontwikkeling."
              author="Sophie Bakker"
              role="Fysiotherapeut"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-nexus-600 to-care-600 text-white py-16">
        <div className="nexus-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar om de volgende stap te zetten?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Of je nu een zorgprofessional bent op zoek naar een nieuwe uitdaging of een 
              zorgorganisatie die de juiste mensen zoekt, wij helpen je graag verder.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/vacatures" className="btn-secondary">
                Vacatures Bekijken
              </Link>
              <Link to="/contact" className="bg-white text-nexus-700 hover:bg-gray-100 font-medium py-2 px-6 rounded-md transition duration-300">
                Neem Contact Op
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
