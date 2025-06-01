import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MoreTools = () => {
  const tools = [
    {
      title: 'Video Face Swap',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=300&fit=crop'
    },
    {
      title: 'Facial Expression Changer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop'
    },
    {
      title: 'Unlimited Video Face Swap',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
    },
    {
      title: 'Face Swap Image Enhancer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            More about SwapFaces AI Tools
          </h2>
          <p className="text-purple-200 text-lg">
            Explore more of our products
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {tools.map((tool, index) => (
              <Card
                key={index}
                className="relative overflow-hidden bg-purple-800/30 border-purple-600/50 backdrop-blur-sm group cursor-pointer"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold mb-3 text-center">
                      {tool.title}
                    </h3>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                      Try Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Scroll Buttons */}
          <div className="flex justify-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="text-white border-white hover:bg-white hover:text-purple-900"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="text-white border-white hover:bg-white hover:text-purple-900"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreTools;