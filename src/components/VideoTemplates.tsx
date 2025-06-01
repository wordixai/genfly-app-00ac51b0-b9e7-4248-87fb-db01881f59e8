import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const VideoTemplates = () => {
  const [hoveredTemplate, setHoveredTemplate] = useState<number | null>(null);

  const templates = [
    {
      id: 1,
      title: 'Classy Girl',
      poster: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop',
      video: '/placeholder-video.mp4'
    },
    {
      id: 2,
      title: 'Boy with Headphones',
      poster: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
      video: '/placeholder-video.mp4'
    },
    {
      id: 3,
      title: 'Young Girl',
      poster: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop',
      video: '/placeholder-video.mp4'
    },
    {
      id: 4,
      title: 'Sisters',
      poster: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop',
      video: '/placeholder-video.mp4'
    },
    {
      id: 5,
      title: 'The Truman Show',
      poster: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop',
      video: '/placeholder-video.mp4'
    },
    {
      id: 6,
      title: 'Vietnamese Celebrity',
      poster: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop',
      video: '/placeholder-video.mp4'
    },
    {
      id: 7,
      title: 'Dopamine Girls',
      poster: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop',
      video: '/placeholder-video.mp4'
    },
    {
      id: 8,
      title: 'Vietnamese Beauty',
      poster: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=600&fit=crop',
      video: '/placeholder-video.mp4'
    },
    {
      id: 9,
      title: 'Cute Girl',
      poster: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop',
      video: '/placeholder-video.mp4'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Video Face Swap Templates
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {templates.map((template) => (
            <Card
              key={template.id}
              className="relative overflow-hidden bg-purple-800/30 border-purple-600/50 backdrop-blur-sm group cursor-pointer"
              onMouseEnter={() => setHoveredTemplate(template.id)}
              onMouseLeave={() => setHoveredTemplate(null)}
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={template.poster}
                  alt={template.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transform scale-90 group-hover:scale-100 transition-transform">
                    Swap
                  </Button>
                </div>

                {/* Video Preview (would be implemented with actual video) */}
                {hoveredTemplate === template.id && (
                  <div className="absolute inset-0">
                    {/* Placeholder for video - in real implementation, this would be a video element */}
                    <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 opacity-20"></div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full shadow-lg">
            More templates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoTemplates;