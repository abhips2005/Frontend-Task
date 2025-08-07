const axios = require('axios');

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

async function testAPI() {
  console.log('🧪 Testing API connection...');
  console.log(`📡 API Base URL: ${API_BASE_URL}`);
  
  try {
    // Test fetching posts
    console.log('\n🔄 Testing POST fetch...');
    const postsResponse = await axios.get(`${API_BASE_URL}/posts?_limit=3`);
    console.log('✅ Posts fetch successful!');
    console.log(`📊 Retrieved ${postsResponse.data.length} posts`);
    console.log('📄 Sample post:', {
      id: postsResponse.data[0].id,
      title: postsResponse.data[0].title.substring(0, 50) + '...',
      body: postsResponse.data[0].body.substring(0, 100) + '...'
    });
    
    // Test fetching single post
    console.log('\n🔄 Testing single post fetch...');
    const singlePostResponse = await axios.get(`${API_BASE_URL}/posts/1`);
    console.log('✅ Single post fetch successful!');
    console.log('📄 Post details:', {
      id: singlePostResponse.data.id,
      title: singlePostResponse.data.title,
      userId: singlePostResponse.data.userId
    });
    
    console.log('\n🎉 All API tests passed!');
    console.log('🚀 Your blog app is ready to fetch data from the API');
    
  } catch (error) {
    console.error('❌ API test failed:', error.message);
    if (error.response) {
      console.error('📋 Response status:', error.response.status);
      console.error('📋 Response data:', error.response.data);
    }
  }
}

// Run the test
testAPI(); 