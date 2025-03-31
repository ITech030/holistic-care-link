
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Contact"
        subtitle="Neem contact met ons op voor vragen of informatie"
      />

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="nexus-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Neem Contact Op</h2>
              <p className="text-gray-600 mb-8">
                Heeft u vragen over onze diensten, bent u op zoek naar een nieuwe baan in de zorg 
                of wilt u weten hoe wij uw zorgorganisatie kunnen helpen? Vul het formulier in 
                en we nemen zo snel mogelijk contact met u op.
              </p>
              <ContactForm />
            </div>

            <div className="lg:pl-10">
              <div className="bg-white rounded-lg shadow-md p-8 h-full">
                <h2 className="text-2xl font-semibold text-nexus-700 mb-6">
                  Contactgegevens
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-nexus-100 rounded-full p-3 mr-4">
                      <Phone className="text-nexus-500 h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Telefonisch Contact</h3>
                      <p className="text-gray-600 mt-1">
                        +31 (0)20 123 4567
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        Op werkdagen bereikbaar van 09:00 tot 17:00
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-nexus-100 rounded-full p-3 mr-4">
                      <Mail className="text-nexus-500 h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">E-mail</h3>
                      <p className="text-gray-600 mt-1">
                        info@nexuscura.nl
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        We reageren binnen 1 werkdag op uw e-mail
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-nexus-100 rounded-full p-3 mr-4">
                      <MapPin className="text-nexus-500 h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Bezoekadres</h3>
                      <p className="text-gray-600 mt-1">
                        Hoofdstraat 123<br />
                        1234 AB Amsterdam
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        Bezoek op afspraak
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-nexus-100 rounded-full p-3 mr-4">
                      <Clock className="text-nexus-500 h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Openingstijden</h3>
                      <div className="text-gray-600 mt-1">
                        <div className="grid grid-cols-2 gap-x-4">
                          <span>Maandag - Vrijdag:</span>
                          <span>09:00 - 17:00</span>
                          <span>Zaterdag:</span>
                          <span>Gesloten</span>
                          <span>Zondag:</span>
                          <span>Gesloten</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Map placeholder */}
                <div className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78508.13678845732!2d4.832828644464067!3d52.370215675255694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam!5e0!3m2!1sen!2snl!4v1685123456789!5m2!1sen!2snl" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="nexus-container">
          <h2 className="section-title text-center">Veelgestelde Vragen</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-nexus-700">Hoe werkt het aanmeldingsproces voor zorgprofessionals?</h3>
              <p className="text-gray-600">
                U kunt zich aanmelden via ons contactformulier of door direct te solliciteren op een van onze vacatures. 
                Na uw aanmelding nemen we contact met u op voor een kennismakingsgesprek om uw wensen en mogelijkheden te bespreken.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-nexus-700">Wat voor soort zorgorganisaties werken jullie mee samen?</h3>
              <p className="text-gray-600">
                Wij werken samen met diverse zorgorganisaties, van ziekenhuizen en verpleeghuizen tot thuiszorgorganisaties en GGZ-instellingen. 
                We hebben een breed netwerk in de hele zorgsector.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-nexus-700">Wat kost het om gebruik te maken van jullie diensten?</h3>
              <p className="text-gray-600">
                Voor zorgprofessionals zijn onze diensten volledig kosteloos. Voor zorgorganisaties werken we met transparante tarieven 
                die afhankelijk zijn van de specifieke dienstverlening. Neem contact op voor een vrijblijvende offerte.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-nexus-700">Hoe lang duurt het voordat ik een passende baan vind?</h3>
              <p className="text-gray-600">
                Dit verschilt per persoon en is afhankelijk van factoren zoals uw ervaring, specialisatie en beschikbaarheid. 
                Gemiddeld vinden we binnen 2-4 weken een passende match, maar soms kan het sneller gaan of juist wat langer duren.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-nexus-700">In welke regio's zijn jullie actief?</h3>
              <p className="text-gray-600">
                Wij zijn voornamelijk actief in de Randstad, maar hebben ook vacatures en samenwerkingen in andere delen van Nederland. 
                Onze focus ligt op kwaliteit en een goede match, ongeacht de locatie.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-nexus-700">Wat is jullie holistische benadering precies?</h3>
              <p className="text-gray-600">
                Onze holistische benadering betekent dat we verder kijken dan alleen cv's en functie-eisen. We kijken naar de hele persoon 
                en de hele organisatie, inclusief werksfeer, persoonlijke waarden en ontwikkelingsmogelijkheden om de beste match te vinden.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
