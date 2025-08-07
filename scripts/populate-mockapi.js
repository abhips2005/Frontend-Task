const axios = require('axios');

const API_BASE_URL = 'https://6777f1364b08bb67e4e1b31f.mockapi.io/api/v1';

const samplePosts = [
  {
    title: 'Unlocking Business Efficiency with SaaS Solutions',
    excerpt: 'Discover how SaaS solutions can transform your business operations and drive efficiency across all departments.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Business',
    authorName: 'Jennifer Taylor',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    readTime: '5 min read',
    tags: ['SaaS', 'Business', 'Efficiency']
  },
  {
    title: 'Mastering UI Elements: A Practical Guide for Designers',
    excerpt: 'Dive into the world of user interfaces with our expert guides, latest trends, and practical tips.',
    content: 'Explore the principles and techniques that drive user-centric UI design, ensuring a seamless and intuitive user experience. Learn about color theory, typography, spacing, and visual hierarchy.',
    imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Design',
    authorName: 'Jennifer Taylor',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    readTime: '3 min read',
    tags: ['UI', 'Design', 'UX']
  },
  {
    title: 'Crafting Seamless Experiences: The Art of Intuitive UI Design',
    excerpt: 'Explore the principles and techniques that drive user-centric UI design, ensuring a seamless and intuitive user experience.',
    content: 'Learn how to create interfaces that users love and understand intuitively. Discover the secrets of successful user interface design.',
    imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Design',
    authorName: 'Jennifer Taylor',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    readTime: '5 min read',
    tags: ['UI', 'UX', 'Design']
  },
  {
    title: 'Beyond Aesthetics: The Power of Functional UX Design',
    excerpt: 'Delve into the realm of emotional design and discover how incorporating empathy and psychology...',
    content: 'Understanding the psychology behind user interactions and how to design for emotions. Create meaningful connections through design.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'UX',
    authorName: 'Ryan A.',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    readTime: '2 min read',
    tags: ['UX', 'Psychology', 'Design']
  },
  {
    title: 'Revolutionizing Industries through SaaS Implementation',
    excerpt: 'Discover how SaaS solutions are transforming various industries and creating new opportunities.',
    content: 'A comprehensive look at how different industries are adopting SaaS solutions and the transformative impact on business operations.',
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Technology',
    authorName: 'Alex Johnson',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    readTime: '4 min read',
    tags: ['SaaS', 'Technology', 'Innovation']
  },
  {
    title: 'Synergizing SaaS and UX Design for Elevating Digital Experiences',
    excerpt: 'Learn how combining SaaS capabilities with excellent UX design creates superior digital products.',
    content: 'The intersection of SaaS technology and user experience design principles. Building products that users love and businesses need.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Technology',
    authorName: 'Sarah Chen',
    authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    readTime: '6 min read',
    tags: ['SaaS', 'UX', 'Technology']
  }
];

async function populateMockAPI() {
  console.log('Starting to populate MockAPI...');
  
  try {
    // First, let's check if there are existing posts
    const existingResponse = await axios.get(`${API_BASE_URL}/posts`);
    console.log(`Found ${existingResponse.data.length} existing posts`);
    
    // If there are no posts or very few, populate with our data
    if (existingResponse.data.length < 3) {
      console.log('Populating MockAPI with sample posts...');
      
      for (const post of samplePosts) {
        try {
          const response = await axios.post(`${API_BASE_URL}/posts`, post);
          console.log(`✅ Created post: ${post.title} (ID: ${response.data.id})`);
        } catch (error) {
          console.error(`❌ Failed to create post: ${post.title}`, error.message);
        }
        
        // Add delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      
      console.log('🎉 MockAPI population completed!');
    } else {
      console.log('📝 MockAPI already has sufficient data');
    }
    
    // Show final count
    const finalResponse = await axios.get(`${API_BASE_URL}/posts`);
    console.log(`📊 Total posts in MockAPI: ${finalResponse.data.length}`);
    
  } catch (error) {
    console.error('❌ Error populating MockAPI:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
  }
}

// Run the script
populateMockAPI(); 