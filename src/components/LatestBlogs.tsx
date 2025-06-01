import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const LatestBlogs = () => {
  const blogs = [
    {
      title: 'With DeepSeek Face Swap, Swapface accelerates innovation',
      date: '2025-03-03 16:33:47',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop'
    },
    {
      title: 'Multiple Face Swap Photo Online Free：A Comprehensive Guide For Newbie',
      date: '2025-01-07 20:22:54',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&h=300&fit=crop'
    },
    {
      title: 'Secret Video Face Swap: Top 4 privacy face swap tools',
      date: '2025-01-08 18:25:01',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop'
    }
  ];

  return (
    <section className="py-16 px-4 bg-purple-900/20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Latest Blogs
          </h2>
          <Button variant="link" className="text-purple-300 hover:text-white hidden md:block">
            More blogs &gt;
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {blogs.map((blog, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-purple-800/30 border-purple-600/50 backdrop-blur-sm hover:bg-purple-800/40 transition-colors cursor-pointer"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-purple-300 text-sm mb-3">
                  {blog.date}
                </div>
                <h3 className="text-white font-semibold leading-tight">
                  {blog.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center md:hidden">
          <Button variant="link" className="text-purple-300 hover:text-white">
            More blogs &gt;
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;