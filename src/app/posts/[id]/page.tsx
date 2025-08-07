import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { fetchPostById, fetchPosts } from '@/lib/api';
import { Header } from '@/components/Header';
import { BlogCard } from '@/components/BlogCard';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await fetchPostById(id);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
    keywords: post.tags,
  };
}

export async function generateStaticParams() {
  const posts = await fetchPosts();
  
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function PostPage({ params }: Props) {
  const { id } = await params;
  const [post, allPosts] = await Promise.all([
    fetchPostById(id),
    fetchPosts()
  ]);

  if (!post) {
    notFound();
  }

  // Get related posts (same category or similar tags)
  const relatedPosts = allPosts
    .filter(p => p.id !== post.id && (
      p.category === post.category || 
      p.tags.some(tag => post.tags.includes(tag))
    ))
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-gray-700">Home</Link>
            </li>
            <li>•</li>
            <li>
              <Link href="/blog" className="hover:text-gray-700">Blog</Link>
            </li>
            <li>•</li>
            <li className="text-gray-900 font-medium">{post.title}</li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-gray-900">{post.author.name}</p>
                <p className="text-sm text-gray-500">{formatDate(post.publishedAt)}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>{post.readTime}</span>
              <div className="flex space-x-2">
                {post.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 rounded text-xs">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none mb-12">
          <div className="text-gray-700 leading-relaxed space-y-6">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
} 