'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPageProps {
  title: string;
  image: string;
  content: React.ReactNode;
  relatedBlogs: {
    image: string;
    title: string;
    path: string;
  }[];
}

const BlogPage: React.FC<BlogPageProps> = ({ title, image, content, relatedBlogs }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 mx-auto ">

      {/* Hero Section */}
      <div className='mt-16'>
      <div className="relative w-full h-[400px] mb-12 rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Title */}
      <h1 className="text-xl md:text-3xl font-bold text-white mb-12">{title}</h1>

      {/* Content */}
      <div className="prose prose-invert max-w-none mb-16 space-y-6">
        {content}
      </div>

      </div>
      

      {/* Related Blogs */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
        <div className="space-y-4">
          {relatedBlogs.map((blog, index) => (
            <Link
              key={index}
              href={blog.path}
              className="group block bg-[#0a2d36] rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {blog.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage; 