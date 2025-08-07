import { Header } from '@/components/Header';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse">
          {/* Hero Section Skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <div className="h-96 md:h-[500px] bg-gray-300 rounded-2xl"></div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="h-6 bg-gray-300 rounded mb-6"></div>
                <div className="space-y-6">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex space-x-4">
                      <div className="w-16 h-16 bg-gray-300 rounded-lg"></div>
                      <div className="flex-1">
                        <div className="h-4 bg-gray-300 rounded mb-2"></div>
                        <div className="h-3 bg-gray-300 rounded w-20"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recent Posts Section Skeleton */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-8">
              <div className="h-8 w-40 bg-gray-300 rounded"></div>
              <div className="h-5 w-20 bg-gray-300 rounded"></div>
            </div>
            
            {/* Search Bar Skeleton */}
            <div className="mb-8 flex justify-center">
              <div className="h-10 w-80 bg-gray-300 rounded-lg"></div>
            </div>

            {/* Posts Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="h-48 bg-gray-300"></div>
                  <div className="p-6">
                    <div className="h-4 w-20 bg-gray-300 rounded-full mb-3"></div>
                    <div className="h-6 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded mb-4"></div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div>
                          <div className="h-4 w-20 bg-gray-300 rounded mb-1"></div>
                          <div className="h-3 w-16 bg-gray-300 rounded"></div>
                        </div>
                      </div>
                      <div className="h-3 w-16 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 