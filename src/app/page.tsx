import { Header } from '@/components/Header';
import { BlogCard } from '@/components/BlogCard';
import { fetchPosts } from '@/lib/api';
import { ClientBlogList } from '@/components/ClientBlogList';
import Image from 'next/image';

export default async function Home() {
  // Server-side data fetching
  const initialPosts = await fetchPosts();
  const featuredPost = initialPosts[0];
  const otherPosts = initialPosts.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section with Featured Post */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Post */}
            <div className="lg:col-span-2">
              <BlogCard post={featuredPost} featured={true} />
            </div>
            
            {/* Sidebar with Other Featured Posts */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Other featured posts</h2>
                <div className="space-y-6">
                  {otherPosts.slice(0, 5).map((post) => (
                    <div key={post.id} className="flex space-x-4">
                      <div className="flex-shrink-0">
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          width={64}
                          height={64}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-blue-600">
                          <a href={`/posts/${post.id}`}>{post.title}</a>
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">{post.category}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Posts Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Recent Posts</h2>
            <a 
              href="/blog" 
              className="bg-white text-gray-700 hover:text-gray-900 font-medium text-sm px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
            >
              All Posts
            </a>
          </div>
          
          {/* Client-side Blog List with Search */}
          <ClientBlogList initialPosts={initialPosts} />
        </section>
      </main>
    </div>
  );
}
