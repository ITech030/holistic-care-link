
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import { Heart, Lightbulb, Users, Target, RefreshCcw } from "lucide-react";

const OverOns = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Over Nexus Cura"
        subtitle="Kennismaking met ons holistische zorgbemiddelingsbureau"
      />

      {/* Missie & Visie Section */}
      <section className="section-padding">
        <div className="nexus-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Onze Missie & Visie"
                subtitle="Wij geloven in een zorgsector waarin mens en organisatie in harmonie samenwerken"
              />
              <p className="text-gray-600 mb-6">
                Bij Nexus Cura zien we de zorgsector als een complex ecosysteem waarin het
                welzijn van zorgprofessionals direct verband houdt met de kwaliteit van zorg.
                Onze missie is om deze sector te versterken door betekenisvolle verbindingen
                te maken tussen zorgprofessionals en zorgorganisaties.
              </p>
              <p className="text-gray-600">
                Wij streven naar een zorgsector waarin professionals met passie kunnen werken
                in een omgeving die hen ondersteunt en waardeert. Door onze holistische
                benadering kijken we verder dan alleen vaardigheden en cv's en zoeken
                we naar de perfecte match op alle niveaus.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d4d3cce33a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Zorgprofessionals in overleg"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Waarden Section */}
      <section className="section-padding bg-gray-50">
        <div className="nexus-container">
          <SectionHeader
            title="Onze Kernwaarden"
            subtitle="Deze waarden vormen de basis van alles wat we doen"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-md card-effect">
              <div className="text-nexus-500 mb-4">
                <Heart size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-nexus-700">Empathie</h3>
              <p className="text-gray-600">
                We luisteren oprecht naar de behoeften en wensen van zowel zorgprofessionals
                als zorgorganisaties en handelen met begrip en medeleven.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md card-effect">
              <div className="text-nexus-500 mb-4">
                <Lightbulb size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-nexus-700">Innovatie</h3>
              <p className="text-gray-600">
                We blijven voortdurend zoeken naar nieuwe en betere manieren om de uitdagingen
                in de zorgsector aan te pakken en oplossingen te bieden.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md card-effect">
              <div className="text-nexus-500 mb-4">
                <Users size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-nexus-700">Verbinding</h3>
              <p className="text-gray-600">
                We creëren betekenisvolle relaties tussen mensen en organisaties die verder
                gaan dan traditionele werk-werkgever relaties.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md card-effect">
              <div className="text-nexus-500 mb-4">
                <Target size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-nexus-700">Kwaliteit</h3>
              <p className="text-gray-600">
                We streven naar excellentie in alle aspecten van ons werk, van de selectie van
                kandidaten tot de service aan onze partners.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md card-effect">
              <div className="text-nexus-500 mb-4">
                <RefreshCcw size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-nexus-700">Duurzaamheid</h3>
              <p className="text-gray-600">
                We focussen op langdurige relaties en duurzame oplossingen die bijdragen
                aan een stabiele en gezonde zorgsector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="nexus-container">
          <SectionHeader
            title="Ons Team"
            subtitle="Maak kennis met de mensen achter Nexus Cura"
            centered={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div className="bg-white rounded-lg shadow-md overflow-hidden card-effect">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
                alt="Anna Visser"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-nexus-700">Anna Visser</h3>
                <p className="text-care-600 mb-3">Oprichter & Directeur</p>
                <p className="text-gray-600">
                  Met meer dan 15 jaar ervaring in de zorgsector brengt Anna een diep
                  begrip van de uitdagingen en kansen binnen de zorg.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden card-effect">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="Mark Jansen"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-nexus-700">Mark Jansen</h3>
                <p className="text-care-600 mb-3">Hoofd Werving & Selectie</p>
                <p className="text-gray-600">
                  Mark heeft een talent voor het vinden van de perfecte match tussen
                  zorgprofessionals en organisaties met zijn holistische aanpak.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden card-effect">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="Sophie de Boer"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-nexus-700">Sophie de Boer</h3>
                <p className="text-care-600 mb-3">Relatiemanager Zorgorganisaties</p>
                <p className="text-gray-600">
                  Sophie bouwt sterke relaties met zorgorganisaties en begrijpt 
                  hun unieke behoeften en organisatiecultuur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onze Aanpak */}
      <section className="section-padding bg-nexus-50">
        <div className="nexus-container">
          <SectionHeader
            title="Onze Holistische Aanpak"
            subtitle="Wat maakt onze benadering uniek in de zorgsector?"
            centered={true}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-10">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-nexus-500">
                  <h3 className="text-xl font-semibold mb-2 text-nexus-700">De Hele Mens Zien</h3>
                  <p className="text-gray-600">
                    We kijken verder dan alleen cv's en vaardigheden. We begrijpen dat
                    persoonlijke waarden, werkcultuur en levenssituatie allemaal bijdragen
                    aan een succesvolle plaatsing.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-nexus-500">
                  <h3 className="text-xl font-semibold mb-2 text-nexus-700">Langetermijnrelaties</h3>
                  <p className="text-gray-600">
                    We investeren in duurzame relaties met zowel zorgprofessionals als 
                    zorgorganisaties. Onze betrokkenheid stopt niet na de plaatsing.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-nexus-500">
                  <h3 className="text-xl font-semibold mb-2 text-nexus-700">Persoonlijke Ontwikkeling</h3>
                  <p className="text-gray-600">
                    We ondersteunen zorgprofessionals in hun carrièrepad met begeleiding,
                    coaching en ontwikkelingsmogelijkheden afgestemd op hun behoeften.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1581056771107-24ca5c4d3099?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Holistische zorgbenadering"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OverOns;
