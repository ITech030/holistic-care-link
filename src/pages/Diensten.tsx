
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import TestimonialCard from "@/components/TestimonialCard";
import { Link } from "react-router-dom";
import { 
  Users, 
  Building2, 
  UserCheck, 
  BarChart, 
  Calendar, 
  Award, 
  CheckCircle 
} from "lucide-react";

const Diensten = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Onze Diensten"
        subtitle="Holistische zorgbemiddeling voor professionals en organisaties"
      />

      {/* Voor Zorgprofessionals */}
      <section className="section-padding">
        <div className="nexus-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Voor Zorgprofessionals"
                subtitle="Wij helpen je de volgende stap in je zorgcarrière te zetten"
              />
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-nexus-500 mr-3 mt-1">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-nexus-700">Persoonlijke Loopbaanbegeleiding</h3>
                    <p className="text-gray-600">
                      Individuele coaching om je carrièredoelen te bepalen en de juiste stappen te zetten om deze te bereiken.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-nexus-500 mr-3 mt-1">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-nexus-700">Toegang tot Exclusieve Vacatures</h3>
                    <p className="text-gray-600">
                      Veel van onze vacatures worden niet openbaar geadverteerd en zijn alleen beschikbaar via ons netwerk.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-nexus-500 mr-3 mt-1">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-nexus-700">Ondersteuning bij Sollicitatie</h3>
                    <p className="text-gray-600">
                      Hulp bij het verbeteren van je CV, voorbereiding op interviews en onderhandeling over arbeidsvoorwaarden.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-nexus-500 mr-3 mt-1">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-nexus-700">Professionele Ontwikkeling</h3>
                    <p className="text-gray-600">
                      Toegang tot trainingen en ontwikkelingsmogelijkheden om je vaardigheden te verbeteren.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/vacatures" className="btn-primary">
                  Bekijk Onze Vacatures
                </Link>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Zorgprofessional"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Voor Zorgorganisaties */}
      <section className="section-padding bg-gray-50">
        <div className="nexus-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Zorgorganisatie"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <SectionHeader
                title="Voor Zorgorganisaties"
                subtitle="Vind de juiste zorgprofessionals voor uw organisatie"
              />
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-care-500 mr-3 mt-1">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-nexus-700">Werving & Selectie</h3>
                    <p className="text-gray-600">
                      Zorgvuldige selectie van gekwalificeerde kandidaten die niet alleen over de juiste vaardigheden beschikken, maar ook passen bij uw organisatiecultuur.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-care-500 mr-3 mt-1">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-nexus-700">Uitzenden & Detacheren</h3>
                    <p className="text-gray-600">
                      Flexibele oplossingen voor tijdelijke capaciteitsproblemen of langdurige projecten met gekwalificeerde zorgprofessionals.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-care-500 mr-3 mt-1">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-nexus-700">Strategisch Personeelsadvies</h3>
                    <p className="text-gray-600">
                      Advies over capaciteitsplanning, personeelsbeleid en strategieën om de beste zorgprofessionals aan te trekken en te behouden.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-care-500 mr-3 mt-1">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-nexus-700">Kwaliteitsgarantie</h3>
                    <p className="text-gray-600">
                      Zorgvuldige screening van alle kandidaten en een proefperiode met nazorg om een succesvolle plaatsing te garanderen.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/contact" className="bg-care-500 hover:bg-care-600 text-white font-medium py-2 px-6 rounded-md transition duration-300">
                  Vraag een Gesprek Aan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onze Diensten Detail */}
      <section className="section-padding">
        <div className="nexus-container">
          <SectionHeader 
            title="Ons Dienstenaanbod" 
            subtitle="Ontdek wat Nexus Cura voor u kan betekenen"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md card-effect">
              <div className="text-nexus-500 mb-4">
                <Users size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-nexus-700">Uitzenden</h3>
              <p className="text-gray-600 mb-4">
                Flexibele inzet van zorgprofessionals voor kortere of langere periode, 
                afgestemd op de behoefte van uw organisatie. Ideaal voor het opvangen van 
                pieken in de zorgvraag of tijdelijke vervanging.
              </p>
              <ul className="space-y-2 mb-4 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-nexus-500 mr-2" />
                  <span>Snelle beschikbaarheid</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-nexus-500 mr-2" />
                  <span>Flexibele contracten</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-nexus-500 mr-2" />
                  <span>Administratieve ontzorging</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md card-effect">
              <div className="text-nexus-500 mb-4">
                <Building2 size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-nexus-700">Detacheren</h3>
              <p className="text-gray-600 mb-4">
                Professionele zorgmedewerkers die voor langere tijd bij uw organisatie 
                aan de slag gaan met behoud van begeleiding. Perfect voor projecten 
                of wanneer u expertise nodig heeft voor langere tijd.
              </p>
              <ul className="space-y-2 mb-4 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-nexus-500 mr-2" />
                  <span>Continuïteit in zorgverlening</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-nexus-500 mr-2" />
                  <span>Professionele begeleiding</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-nexus-500 mr-2" />
                  <span>Integratie in uw team</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md card-effect">
              <div className="text-nexus-500 mb-4">
                <UserCheck size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-nexus-700">Werving & Selectie</h3>
              <p className="text-gray-600 mb-4">
                Het vinden en selecteren van de juiste zorgprofessionals voor een vaste 
                aanstelling binnen uw organisatie. We zorgen voor een grondige screening 
                en selectie om de perfecte match te vinden.
              </p>
              <ul className="space-y-2 mb-4 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-nexus-500 mr-2" />
                  <span>Holistische selectieprocedure</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-nexus-500 mr-2" />
                  <span>Culturele match garantie</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-nexus-500 mr-2" />
                  <span>Uitgebreide nazorg</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md card-effect">
              <div className="text-nexus-500 mb-4">
                <BarChart size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-nexus-700">Loopbaanbegeleiding</h3>
              <p className="text-gray-600 mb-4">
                Persoonlijke begeleiding voor zorgprofessionals bij het vinden van de juiste 
                carrièrestap in de zorgsector. We helpen bij het identificeren van sterke 
                punten, interesses en ontwikkelingsmogelijkheden.
              </p>
              <ul className="space-y-2 mb-4 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-nexus-500 mr-2" />
                  <span>Persoonlijke coaching</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-nexus-500 mr-2" />
                  <span>Carrièreplanning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-nexus-500 mr-2" />
                  <span>Ontwikkelingsadvies</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md card-effect">
              <div className="text-nexus-500 mb-4">
                <Calendar size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-nexus-700">Capaciteitsplanning</h3>
              <p className="text-gray-600 mb-4">
                Strategisch plannen van uw personeelsbehoefte, rekening houdend met 
                toekomstige ontwikkelingen in de zorg. We helpen u vooruit te kijken en 
                proactief te handelen op personeelsgebied.
              </p>
              <ul className="space-y-2 mb-4 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-nexus-500 mr-2" />
                  <span>Strategische personeelsplanning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-nexus-500 mr-2" />
                  <span>Trendanalyse en prognoses</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-nexus-500 mr-2" />
                  <span>Flexibele capaciteitsoplossingen</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md card-effect">
              <div className="text-nexus-500 mb-4">
                <Award size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-nexus-700">Kwaliteitsborging</h3>
              <p className="text-gray-600 mb-4">
                Garantie van kwaliteit door een holistische selectieprocedure en continue 
                begeleiding van zorgprofessionals. We zorgen ervoor dat de zorgverlening 
                voldoet aan de hoogste standaarden.
              </p>
              <ul className="space-y-2 mb-4 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-nexus-500 mr-2" />
                  <span>Grondige screening</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-nexus-500 mr-2" />
                  <span>Continue begeleiding</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-nexus-500 mr-2" />
                  <span>Tevredenheidsgarantie</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-nexus-50">
        <div className="nexus-container">
          <SectionHeader 
            title="Wat Onze Klanten Zeggen" 
            subtitle="Ervaringen van zorgprofessionals en zorgorganisaties die met ons samenwerken"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <TestimonialCard
              quote="Nexus Cura heeft ons geholpen met het vinden van gespecialiseerde verpleegkundigen toen we een nieuwe afdeling openden. Hun holistische aanpak zorgde ervoor dat we niet alleen vakbekwame professionals vonden, maar ook mensen die echt pasten bij onze organisatiecultuur."
              author="Dr. Jan Bakker"
              role="Medisch Directeur, Ziekenhuis Rijnstate"
            />
            
            <TestimonialCard
              quote="Na jaren in dezelfde functie te hebben gewerkt, was ik toe aan een nieuwe uitdaging. Nexus Cura nam de tijd om echt te begrijpen wat ik zocht in mijn carrière en vond een perfecte match bij een innovatieve zorginstelling. Ze begeleidden me door het hele proces met persoonlijke aandacht."
              author="Linda Vermeer"
              role="Gespecialiseerd Verpleegkundige"
            />
            
            <TestimonialCard
              quote="Als thuiszorgorganisatie hebben we vaak te maken met fluctuerende personeelsbehoeften. Nexus Cura biedt ons flexibele oplossingen met uitzendkrachten die goed zijn ingewerkt en passen bij onze manier van werken. Dit geeft ons de ruimte om kwalitatief hoogwaardige zorg te blijven leveren."
              author="Petra de Jong"
              role="HR Manager, Thuiszorg Amsterdam"
            />
            
            <TestimonialCard
              quote="Ik waardeer de persoonlijke aanpak van Nexus Cura enorm. Ze kijken verder dan alleen je cv en begrijpen dat je als zorgprofessional meer bent dan je kwalificaties. Dankzij hun bemiddeling heb ik een werkplek gevonden waar ik me echt thuis voel."
              author="Mohammed El Amrani"
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
              Klaar om samen te werken?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Neem vandaag nog contact met ons op om te bespreken hoe Nexus Cura u kan 
              helpen, of u nu een zorgprofessional bent of een zorgorganisatie.
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

export default Diensten;
