import axios from 'axios';
import { BlogPost } from '@/types/blog';

// Using a free MockAPI endpoint - you can create your own at mockapi.io
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Fallback data in case API is unavailable
const fallbackPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Unlocking Business Efficiency with SaaS Solutions',
    excerpt: 'Discover how SaaS solutions can transform your business operations and drive efficiency across all departments.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Business',
    author: {
      id: '1',
      name: 'Jennifer Taylor',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    publishedAt: '2024-01-15',
    readTime: '5 min read',
    tags: ['SaaS', 'Business', 'Efficiency']
  },
  {
    id: '2',
    title: 'Mastering UI Elements: A Practical Guide for Designers',
    excerpt: 'Dive into the world of user interfaces with our expert guides, latest trends, and practical tips.',
    content: 'Explore the principles and techniques that drive user-centric UI design, ensuring a seamless and intuitive user experience.',
    imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Design',
    author: {
      id: '2',
      name: 'Jennifer Taylor',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    publishedAt: '2024-01-12',
    readTime: '3 min read',
    tags: ['UI', 'Design', 'UX']
  },
  {
    id: '3',
    title: 'Crafting Seamless Experiences: The Art of Intuitive UI Design',
    excerpt: 'Explore the principles and techniques that drive user-centric UI design, ensuring a seamless and intuitive user experience.',
    content: 'Learn how to create interfaces that users love and understand intuitively.',
    imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Design',
    author: {
      id: '3',
      name: 'Jennifer Taylor',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    publishedAt: '2024-01-10',
    readTime: '5 min read',
    tags: ['UI', 'UX', 'Design']
  },
  {
    id: '4',
    title: 'Beyond Aesthetics: The Power of Functional UX Design',
    excerpt: 'Delve into the realm of emotional design and discover how incorporating empathy and psychology...',
    content: 'Understanding the psychology behind user interactions and how to design for emotions.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'UX',
    author: {
      id: '4',
      name: 'Ryan A.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    publishedAt: '2024-01-08',
    readTime: '2 min read',
    tags: ['UX', 'Psychology', 'Design']
  },
  {
    id: '5',
    title: 'Revolutionizing Industries through SaaS Implementation',
    excerpt: 'Discover how SaaS solutions are transforming various industries and creating new opportunities.',
    content: 'A comprehensive look at how different industries are adopting SaaS solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Technology',
    author: {
      id: '5',
      name: 'Alex Johnson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    publishedAt: '2024-01-05',
    readTime: '4 min read',
    tags: ['SaaS', 'Technology', 'Innovation']
  },
  {
    id: '6',
    title: 'Synergizing SaaS and UX Design for Elevating Digital Experiences',
    excerpt: 'Learn how combining SaaS capabilities with excellent UX design creates superior digital products.',
    content: 'The intersection of SaaS technology and user experience design principles.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Technology',
    author: {
      id: '6',
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    publishedAt: '2024-01-03',
    readTime: '6 min read',
    tags: ['SaaS', 'UX', 'Technology']
  }
];

// Transform JSONPlaceholder posts to our format
const transformApiPost = (post: any, index: number): BlogPost => {
  const categories = ['Business', 'Design', 'Technology', 'UX'];
  const authors = [
    { name: 'Jennifer Taylor', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Ryan A.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Alex Johnson', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Sarah Chen', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' }
  ];
  
  const images = [
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  ];

  const category = categories[index % categories.length];
  const author = authors[index % authors.length];
  
  return {
    id: post.id.toString(),
    title: post.title,
    excerpt: post.body.substring(0, 150) + '...',
    content: post.body,
    imageUrl: images[index % images.length],
    category,
    author: {
      id: post.userId.toString(),
      name: author.name,
      avatar: author.avatar
    },
    publishedAt: new Date(Date.now() - (index * 24 * 60 * 60 * 1000)).toISOString(),
    readTime: `${Math.floor(Math.random() * 5) + 2} min read`,
    tags: [category, 'Article']
  };
};

export const fetchPosts = async (): Promise<BlogPost[]> => {
  try {
    console.log('🔄 Fetching posts from JSONPlaceholder API...');
    const response = await api.get('/posts?_limit=6');
    
    if (response.data && Array.isArray(response.data) && response.data.length > 0) {
      console.log('✅ Successfully fetched posts from API');
      return response.data.map((post: any, index: number) => transformApiPost(post, index));
    }
    
    console.log('⚠️ API returned empty data, using fallback');
    return fallbackPosts;
  } catch (error) {
    console.warn('❌ API fetch failed, using fallback data:', error);
    return fallbackPosts;
  }
};

export const fetchPostById = async (id: string): Promise<BlogPost | null> => {
  try {
    console.log(`🔄 Fetching post ${id} from API...`);
    const response = await api.get(`/posts/${id}`);
    
    if (response.data) {
      console.log('✅ Successfully fetched post from API');
      return transformApiPost(response.data, parseInt(id) - 1);
    }
    
    return null;
  } catch (error) {
    console.warn(`❌ API fetch for post ${id} failed, checking fallback data:`, error);
    return fallbackPosts.find(post => post.id === id) || null;
  }
};

export const searchPosts = async (query: string): Promise<BlogPost[]> => {
  try {
    // Try to fetch from API first
    const posts = await fetchPosts();
    
    if (!query.trim()) return posts;
    
    const lowercaseQuery = query.toLowerCase();
    return posts.filter(post => 
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.category.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  } catch (error) {
    console.warn('❌ Search API failed, using fallback:', error);
    
    if (!query.trim()) return fallbackPosts;
    
    const lowercaseQuery = query.toLowerCase();
    return fallbackPosts.filter(post => 
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.category.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  }
}; 