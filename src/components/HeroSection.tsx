import React, { useState } from 'react';
import { Video, Camera, Shirt, Upload, Play, Clock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('video');
  const [currentStep, setCurrentStep] = useState(1);

  const tabs = [
    { id: 'video', label: 'Video Face Swap', icon: Video, active: true },
    { id: 'photo', label: 'Photo Face Swap', icon: Camera, tag: 'Free' },
    { id: 'clothes', label: 'Clothes Swap', icon: Shirt, tag: 'Free' }
  ];

  const steps = [
    { id: 1, title: 'Upload', status: 'uploading' },
    { id: 2, title: 'Detect Faces', status: 'recognizing' },
    { id: 3, title: 'Add Your Face', status: 'pending' },
    { id: 4, title: 'Running', status: 'running' },
    { id: 5, title: 'Download', status: 'done' }
  ];

  return (
    <section className="relative py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 bg-purple-800/30 rounded-lg p-2 backdrop-blur-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-purple-200 hover:text-white hover:bg-purple-700/50'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
              {tab.tag && (
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  {tab.tag}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Upload Section */}
          <div className="space-y-6">
            <Card className="bg-purple-800/30 border-purple-600/50 backdrop-blur-sm">
              <div className="p-8 text-center">
                <p className="text-purple-200 mb-4">Files supported: .mp4 .webm .avi</p>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg shadow-lg transform hover:scale-105 transition-all">
                  <Upload className="w-6 h-6 mr-2" />
                  Select Video
                </Button>
                <p className="text-purple-300 text-sm mt-4">ALL files are auto-deleted within 24 hours</p>
              </div>
            </Card>

            {/* Steps */}
            <div className="flex justify-between items-center bg-purple-800/20 rounded-lg p-4 backdrop-blur-sm">
              {steps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center space-y-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep >= step.id 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-purple-800/50 text-purple-300'
                  }`}>
                    {step.id}
                  </div>
                  <span className="text-xs text-purple-200 text-center">{step.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Preview Section */}
          <div className="space-y-6">
            <Card className="bg-purple-800/30 border-purple-600/50 backdrop-blur-sm">
              <div className="p-6">
                <div className="aspect-video bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-purple-300">
                    <Upload className="w-12 h-12 mx-auto mb-2" />
                    <p>Click here to select the file</p>
                  </div>
                </div>
                
                {/* Video Controls */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-purple-200 text-sm">
                    <span>00:00 - 00:01</span>
                  </div>
                  
                  {/* Range Slider */}
                  <div className="w-full h-2 bg-purple-800 rounded-full relative">
                    <div className="absolute left-0 top-0 h-full w-1/10 bg-purple-500 rounded-full"></div>
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"></div>
                    <div className="absolute left-1/10 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"></div>
                  </div>
                  
                  {/* Credits Info */}
                  <div className="flex items-center space-x-2 text-purple-200 bg-purple-800/50 rounded-lg p-3">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm">It will cost 3 credits.</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Mobile Upload Button */}
        <div className="lg:hidden mt-8 flex flex-col items-center space-y-4">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full shadow-lg">
            <Upload className="w-5 h-5 mr-2" />
            Select Video
          </Button>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-purple-900 rounded-full">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
            To Upload Action
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;