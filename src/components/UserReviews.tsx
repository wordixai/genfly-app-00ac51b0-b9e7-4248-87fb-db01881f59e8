import React from 'react';
import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

const UserReviews = () => {
  const reviews = [
    {
      name: 'Noah Graphic Designer',
      review: 'I have been engaged in graphic design for many years, and it is very painful every time I use other tools to cut out pictures. Using your tool, I can remove the background with one click, which makes my work efficiency much higher.'
    },
    {
      name: 'Poppy',
      review: 'My hair salon store has become popular in the neighborhood shopping district since integrate Hair Swapper into it. This free online hair swapper can show my user how they look after changing their hairstyles.'
    },
    {
      name: 'Ursula',
      review: 'Use SwapFaces AI to save scrap photos! I had a picture with perfect angle and composition but neglected expression management. And then, I uploaded the photo to this photo face swap tool and got a beautiful photo.'
    },
    {
      name: 'Ingrid',
      review: 'Using this swap clothes tool saves me a lot of time and money! I swap my selling clothes to the models\' bodies, which naturally and visually presents the design and style of the clothes.'
    },
    {
      name: 'George E-commerce',
      review: 'Using your tools has made my work easier and faster, especially your functions of cutting out images and removing backgrounds and watermarks, which are simply amazing!'
    }
  ];

  return (
    <section className="py-16 px-4 bg-purple-900/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            User reviews
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-6">
            {[...reviews, ...reviews].map((review, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-80 p-6 bg-purple-800/30 border-purple-600/50 backdrop-blur-sm"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-purple-200 mb-4 leading-relaxed">
                  {review.review}
                </p>
                <div className="text-white font-semibold">
                  {review.name}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default UserReviews;