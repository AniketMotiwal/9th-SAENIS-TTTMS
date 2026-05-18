import Header from '@/components/Header';
import Hero3D from '@/components/Hero3D';
import About from '@/components/About';
import Theme from '@/components/Theme';
import Schedule from '@/components/Schedule';
import OrganizingCommittee from '@/components/OrganizingCommittee';
import AdvisoryBoard from '@/components/AdvisoryBoard';
import Patrons from '@/components/Patrons';
import SaeIndiaImageSection from '@/components/SaeIndiaImageSection';
import Register from '@/components/Register';
import Footer from '@/components/Footer';
import ScrollControls from '@/components/ScrollControls';
import PageWrapper from '@/components/PageWrapper';

export default function Home() {
  return (
    <PageWrapper>
      <main className="relative bg-black text-white overflow-x-hidden">
        {/* Background animated elements throughout page */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-cyan-600/6 rounded-full blur-3xl"></div>
        </div>
        
        {/* Content wrapper */}
        <div className="relative z-10">
        <Header />
        <ScrollControls />

        {/* Hero Section */}
        <section id="hero">
          <Hero3D />
        </section>

        {/* About Section */}
        <About />

        {/* Theme Section */}
        <Theme />

        {/* Schedule Section */}
        <Schedule />

        {/* Organizing Committee Section */}
        <OrganizingCommittee />

        {/* Advisory Board Section */}
        <AdvisoryBoard />

        {/* Patrons Section */}
        <Patrons />

        {/* SAEINDIA — Mentors */}
        <SaeIndiaImageSection
          id="mentors"
          title="Mentors"
          imageSrc="/sareindia/Mentros-TTTMS25.png"
        />

        {/* SAEINDIA — OC Members */}
        <SaeIndiaImageSection
          id="oc-members"
          title="OC Members"
          imageSrc="/sareindia/OC Members-TTTMS25.png"
        />

        {/* Register Section */}
        <Register />

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </PageWrapper>
  );
}
