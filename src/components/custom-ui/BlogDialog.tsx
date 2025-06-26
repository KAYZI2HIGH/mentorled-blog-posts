import { BlogPost } from '@/app/types/BlogPost';
import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import Image from 'next/image';
import { Calendar, Clock, User } from 'lucide-react';

const BlogDialog = ({post, dialogTrigger}: {post: BlogPost, dialogTrigger: React.ReactNode}) => {
  return (
    <Dialog>
     
      <DialogTrigger asChild>
        {dialogTrigger}
      </DialogTrigger>
      <DialogContent className="md:min-w-3xl mx-auto h-[500px] overflow-y-auto">
        <div>
          <div className="w-full  aspect-[16/8] overflow-hidden rounded-t-2xl relative">
            <Image
              src={post.image}
              alt={post.title}
              className="object-cover"
              fill
            />
          </div>
        </div>

        <div className="py-5">
          <DialogHeader>
            <div className="w-fit px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-medium rounded-full mb-6">
              {post.category}
            </div>

            <DialogTitle className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6 leading-tight">
              {post.title}
            </DialogTitle>

            <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8 pb-6 border-b border-slate-200">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </DialogHeader>

          <div className="prose prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-slate-700 leading-relaxed mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default BlogDialog