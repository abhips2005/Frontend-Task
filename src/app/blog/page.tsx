import { Header } from '@/components/Header';
import { ClientBlogList } from '@/components/ClientBlogList';
import { fetchPosts } from '@/lib/api';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Beyond UI',
  description: 'Explore our collection of articles on UI/UX design, SaaS solutions, and modern technology trends.',
  openGraph: {
    title: 'Blog - Beyond UI',
    description: 'Explore our collection of articles on UI/UX design, SaaS solutions, and modern technology trends.',
    type: 'website',
  },
};

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover insights on UI/UX design, SaaS solutions, and the latest technology trends 
            that are shaping the digital landscape.
          </p>
        </div>

        {/* Blog Posts with Search */}
        <ClientBlogList initialPosts={posts} />
      </main>
    </div>
  );
} 