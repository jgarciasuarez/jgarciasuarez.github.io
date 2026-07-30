import HeroSection from '@/components/HeroSection';
import StatsRibbon from '@/components/StatsRibbon';
import ResearchPreview from '@/components/ResearchPreview';
import EducationTimeline from '@/components/EducationTimeline';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsRibbon />
      <ResearchPreview />
      <EducationTimeline />
    </>
  );
}
