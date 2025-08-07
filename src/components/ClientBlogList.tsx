'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { BlogPost } from '@/types/blog';
import { BlogCard } from './BlogCard';
import { SearchBar } from './SearchBar';
import { searchPosts } from '@/lib/api';

interface ClientBlogListProps {
  initialPosts: BlogPost[];
}

export function ClientBlogList({ initialPosts }: ClientBlogListProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const { data: posts, isLoading } = useQuery({
    queryKey: ['posts', searchQuery],
    queryFn: () => searchPosts(searchQuery),
    initialData: initialPosts,
    enabled: true,
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="mb-8 flex justify-center">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}

      {/* Posts Grid */}
      {!isLoading && (
        <>
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33a8.962 8.962 0 010-5.34C7.53 5.881 9.66 5 12 5c2.34 0 4.47.881 6.08 2.33a8.962 8.962 0 010 5.34z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
              <p className="text-gray-500">Try adjusting your search terms or browse all posts.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}

          {/* Results Count */}
          {searchQuery && posts.length > 0 && (
            <div className="mt-8 text-center text-sm text-gray-500">
              Found {posts.length} post{posts.length === 1 ? '' : 's'} for &ldquo;{searchQuery}&rdquo;
            </div>
          )}
        </>
      )}
    </div>
  );
} 