import React from 'react';
import { Cpu, Shield, Zap, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Advantages = () => {
  const advantages = [
    {
      icon: Cpu,
      title: 'Advanced AI Models',
      description: 'SwapFace uses cutting-edge AI models to deliver realistic, seamless face swaps. Our algorithms, trained on extensive datasets, ensure precise facial recognition and flawless face integration in photos, videos, and GIFs.'
    },
    {
      icon: Shield,
      title: 'Data Privacy',
      description: 'We encrypt data at every stage of processing. There is no risk of data theft or leakage. We do not store any files uploaded by users on our servers, and delete them within 24 hours.'
    },
    {
      icon: Zap,
      title: 'Fast Processing Speed',
      description: 'No long queues or waiting times—why is our AI face swap tool so fast? We break down the tasks into 3 steps: upload, process, and AI face swap. We quickly recognize and process each step.'
    },
    {
      icon: Clock,
      title: '24/7 Customer Service',
      description: 'SwapFace customer support team is available 24/7, always ready to answer your questions. Whether it\'s uploading problems, page loading failures, or login errors, we\'ve got you covered.'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Core Advantages of SwapFace
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="p-6 bg-purple-800/30 border-purple-600/50 backdrop-blur-sm hover:bg-purple-800/40 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <advantage.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-purple-200 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;