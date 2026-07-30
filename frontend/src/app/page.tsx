import HeroSection from '@/components/HeroSection';
import BioOverview from '@/components/BioOverview';
import StatsRibbon from '@/components/StatsRibbon';
import ResearchPreview from '@/components/ResearchPreview';
import EducationTimeline from '@/components/EducationTimeline';

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />
      <BioOverview />
      <StatsRibbon />
      <ResearchPreview />
      <EducationTimeline />
    </main>
  );
}
