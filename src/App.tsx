import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureStrip } from './components/FeatureStrip';
import { AgentShowcase } from './components/AgentShowcase';
import { HowItWorks } from './components/HowItWorks';
import { CrmShowcase } from './components/CrmShowcase';
import { ErpShowcase } from './components/ErpShowcase';
import { IntegrationShowcase } from './components/IntegrationShowcase';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Stats } from './components/Stats';
import { Footer } from './components/Footer';
import { ContactUs } from './components/ContactUs';

function App() {
  return (
    <div className="min-h-screen bg-surface-warm text-text-primary selection:bg-brand/20 overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <FeatureStrip />
        <AgentShowcase />
        <HowItWorks />
        <CrmShowcase />
        <ErpShowcase />
        <IntegrationShowcase />
        <Features />
        <Testimonials />
        <Stats />
        <ContactUs />
      </main>

      <Footer />
    </div>
  );
}

export default App;
