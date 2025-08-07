export interface Author {
  id: string;
  name: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
  author: Author;
  publishedAt: string;
  readTime: string;
  tags: string[];
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
} 