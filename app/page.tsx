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
import ConferenceFee from '@/components/ConferenceFee';
import ContactUs from '@/components/ContactUs';
import Sponsors from '@/components/Sponsors';
import SponsorStrip from '@/components/SponsorStrip';
import Footer from '@/components/Footer';
import ScrollControls from '@/components/ScrollControls';
import PageWrapper from '@/components/PageWrapper';
import SmoothEffects from '@/components/SmoothEffects';

export default function Home() {
  return (
    <PageWrapper>
      <main className="relative bg-[#f6f8fc] text-slate-900 overflow-x-hidden">
        <h1 className="sr-only">9th SAENIS TTTMS International Conference 2026 — Emerging Thermal Technologies, December 3–5, 2026, IIT Roorkee</h1>
        {/* Content wrapper */}
        <div className="relative z-10">
        <Header />
        <ScrollControls />
        <SmoothEffects />

        {/* Hero Section */}
        <section id="hero">
          <Hero3DDynamic />
        </section>

        {/* Sponsor logo strip */}
        <SponsorStrip />

        {/* About Section */}
        <About />

        {/* Theme Section */}
        <Theme />

        {/* Agenda */}
        <Schedule />

        {/* Who Should Attend */}
        <AdvisoryBoard />

        {/* Conference Fee */}
        <ConferenceFee />

        {/* Sponsorship Opportunities */}
        <Patrons />

        {/* Mentors — 9th SAENIS */}
        <SaeIndiaImageSection
          id="mentors"
          title="Mentors"
          subtitle="Distinguished industry leaders guiding the 9th SAENIS TTTMS International Conference 2026"
          imageSrc="/sareindia/mentors-9th-tttms26.webp?v=7"
          fullSrc="/sareindia/mentors-9th-tttms26-full.jpg?v=7"
          width={2400}
          height={1860}
        />

        {/* Organizing Committee — TTTMS’26 */}
        <SaeIndiaImageSection
          id="oc-members"
          title="Organizing Committee"
          subtitle="The team from industry and academia driving TTTMS’26"
          imageSrc="/sareindia/organizing-committee-tttms26.webp?v=5"
          fullSrc="/sareindia/organizing-committee-tttms26-full.jpg?v=5"
          width={2400}
          height={2400}
        />

        {/* Glimpses from Past Editions */}
        <Glimpses />

        {/* Venue at a Glance */}
        <Venue />

        {/* Register Section */}
        <Register />

        {/* Connect With Us */}
        <ContactUs />

        {/* Our Sponsors */}
        <Sponsors />

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </PageWrapper>
  );
}
