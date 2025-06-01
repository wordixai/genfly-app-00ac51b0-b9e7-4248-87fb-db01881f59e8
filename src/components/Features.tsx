import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      title: 'Video Face Swap',
      description: 'Advanced AI algorithms quickly analyze and swap face in a video, delivering clear, natural result. HD versions are available for free download! With SwapFace Video, skip the hassle of video editing.',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&h=400&fit=crop',
      buttonText: 'Video Face Swap',
      reverse: false
    },
    {
      title: 'Free Unlimited Video Face Swap',
      description: 'Free Unlimited Video Face Swap - The Fastest Face Swap Online! No time or content limits! New users get free credits to enjoy full video face swaps for free!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      buttonText: 'Unlimited Video Face Swap',
      reverse: true
    },
    {
      title: 'Gif Face Swap',
      description: 'With Gif Face Swap, prank your friends or family by creating custom gifs just for them. Seamlessly swap faces in popular trending gifs. Incredibly fast processing, with face-swapped GIFs ready in just seconds.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=400&fit=crop',
      buttonText: 'Gif Face Swap',
      reverse: false
    },
    {
      title: 'Photo Face Swap',
      description: 'Want to instantly change your face? No worries if you don\'t know how to edit photos! Photo Face Swap easily transforms your funny selfie or group shot. Simply upload a photo and swap face with one click.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=400&fit=crop',
      buttonText: 'Photo Face Swap',
      reverse: true
    },
    {
      title: 'Multiple Face Swap',
      description: 'Multiple Face Swap lets you instantly swap faces in group photos, giving you a new way to create funny, unique memories. Just upload your photo, click swap, and let the AI do the rest!',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop',
      buttonText: 'Multiple Face Swap',
      reverse: false
    },
    {
      title: 'Clothes Swap',
      description: 'One-click clothes swap. Create your own virtual fitting room! Shopping online and not sure which clothes suit your body? Say goodbye to those worries—just upload a photo of the clothes, click the "swap" button.',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop',
      buttonText: 'Clothes Swap',
      reverse: true
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Key Features of SwapFace AI
          </h2>
          <p className="text-purple-200 text-lg max-w-4xl mx-auto">
            At SwapFace, AI face swap is core. Change a person's face, clothes, hairstyle, expression, and age in both videos and images. Our platform integrates a wide range of AI tools. Let's explore the six key features.
          </p>
        </div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                feature.reverse ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={feature.reverse ? 'lg:col-start-2' : ''}>
                <Card className="overflow-hidden bg-purple-800/30 border-purple-600/50 backdrop-blur-sm">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-64 object-cover"
                  />
                </Card>
              </div>
              
              <div className={`space-y-6 ${feature.reverse ? 'lg:col-start-1' : ''}`}>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-purple-200 text-lg leading-relaxed">
                  {feature.description}
                </p>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full shadow-lg">
                  {feature.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;