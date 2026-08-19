import Header from '@/components/Header';
import Hero3DDynamic from '@/components/Hero3DDynamic';
import About from '@/components/About';
import Theme from '@/components/Theme';
import Schedule from '@/components/Schedule';
import AdvisoryBoard from '@/components/AdvisoryBoard';
import Patrons from '@/components/Patrons';
import SaeIndiaImageSection from '@/components/SaeIndiaImageSection';
import Glimpses from '@/components/Glimpses';
import Venue from '@/components/Venue';
import Register from '@/components/Register';
import Footer from '@/components/Footer';
import ScrollControls from '@/components/ScrollControls';
import PageWrapper from '@/components/PageWrapper';
import SmoothEffects from '@/components/SmoothEffects';

export default function Home() {
  return (
    <PageWrapper>
      <main className="relative bg-black text-white overflow-x-hidden">
        {/* Background animated elements throughout page */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="animate-orb absolute top-20 left-1/4 h-96 w-96 rounded-full bg-cyan-500/8 blur-3xl" />
          <div className="animate-orb-delayed absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-purple-500/8 blur-3xl" />
          <div className="animate-orb absolute bottom-1/4 left-1/3 h-96 w-96 rounded-full bg-blue-500/8 blur-3xl" style={{ animationDelay: '4s' }} />
          <div className="animate-orb-delayed absolute bottom-1/3 right-1/3 h-72 w-72 rounded-full bg-cyan-600/6 blur-3xl" />
        </div>
        
        {/* Content wrapper */}
        <div className="relative z-10">
        <Header />
        <ScrollControls />
        <SmoothEffects />

        {/* Hero Section */}
        <section id="hero">
          <Hero3DDynamic />
        </section>

        {/* About Section */}
        <About />

        {/* Theme Section */}
        <Theme />

        {/* Schedule Section */}
        <Schedule />

        {/* Who Should Attend */}
        <AdvisoryBoard />

        {/* Sponsorship Opportunities */}
        <Patrons />

        {/* Mentors — 9th SAENIS */}
        <SaeIndiaImageSection
          id="mentors"
          title="Mentors"
          imageSrc="/sareindia/Mentors9th.png?v=5"
        />

        {/* OC Members — 9th TTTMS’26 */}
        <SaeIndiaImageSection
          id="oc-members"
          title="OC Members"
          imageSrc="/sareindia/organzing-commitee.png?v=3"
        />

        {/* Glimpses from Past Editions */}
        <Glimpses />

        {/* Venue at a Glance */}
        <Venue />

        {/* Register Section */}
        <Register />

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </PageWrapper>
  );
}
