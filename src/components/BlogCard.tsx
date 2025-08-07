import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (featured) {
    return (
      <Link href={`/posts/${post.id}`} className="block">
        <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden group cursor-pointer">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
              {post.title}
            </h2>
            <p className="text-gray-200 text-lg mb-4 line-clamp-2">
              {post.excerpt}
            </p>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/posts/${post.id}`} className="block group">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-3">
            {post.category}
          </span>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                <p className="text-xs text-gray-500">{formatDate(post.publishedAt)}</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">{post.readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
} 