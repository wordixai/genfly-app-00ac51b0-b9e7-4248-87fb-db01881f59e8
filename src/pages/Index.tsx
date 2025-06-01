import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import VideoTemplates from '../components/VideoTemplates';
import Features from '../components/Features';
import Advantages from '../components/Advantages';
import FAQ from '../components/FAQ';
import UserReviews from '../components/UserReviews';
import LatestBlogs from '../components/LatestBlogs';
import MoreTools from '../components/MoreTools';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <Header />
      <HeroSection />
      <VideoTemplates />
      <Features />
      <Advantages />
      <FAQ />
      <UserReviews />
      <LatestBlogs />
      <MoreTools />
    </div>
  );
};

export default Index;