import React from 'react';
import Footer from "../components/footer";
import SlideSection from "./section/slide"
import AboutSection from './section/about';
import FeatureSection from './section/feature';
import HowToSection from './section/howto';
import ScreenshotSection from './section/screenshot';
import WorkPlaceSection from './section/workplace';
import PricingSection from './section/pricing';
import ReviewSection from './section/review';
import QuestionSection from './section/question';
import BlogSection from './section/blog';
import ContactSection from './section/contact';
import NewsletterSection from './section/newsletter';
import DownloadSection from './section/download';

function MainScreen() {
  return (
    <div>
      <SlideSection />
      <AboutSection />
      <FeatureSection />
      <HowToSection />
      <ScreenshotSection />
      <WorkPlaceSection />
      <PricingSection />
      <ReviewSection />
      <QuestionSection />
      <BlogSection />
      <DownloadSection />
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}

export default MainScreen;
