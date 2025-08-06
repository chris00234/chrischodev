import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Tag, BookOpen, TrendingUp } from 'lucide-react';
import { blogPosts } from '../../constants/blogData';

const BlogArchive = () => {
  const [selectedYear, setSelectedYear] = useState('All');

  const years = useMemo(() => {
    const postYears = blogPosts.reduce((acc, post) => {
      const year = new Date(post.date).getFullYear();
      if (!acc.includes(year)) acc.push(year);
      return acc;
    }, []);
    return ['All', ...postYears.sort((a, b) => b - a)];
  }, []);

  const categories = useMemo(() => {
    const cats = blogPosts.reduce((acc, post) => {
      post.categories.forEach(cat => {
        if (!acc.find(c => c.name === cat)) {
          acc.push({
            name: cat,
            count: blogPosts.filter(p => p.categories.includes(cat)).length
          });
        }
      });
      return acc;
    }, []);
    return cats.sort((a, b) => b.count - a.count);
  }, []);

  const filteredPosts = useMemo(() => {
    if (selectedYear === 'All') return blogPosts;
    return blogPosts.filter(post => new Date(post.date).getFullYear() === selectedYear);
  }, [selectedYear]);

  const groupedPosts = useMemo(() => {
    const grouped = filteredPosts.reduce((acc, post) => {
      const monthYear = new Date(post.date).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long' 
      });
      if (!acc[monthYear]) acc[monthYear] = [];
      acc[monthYear].push(post);
      return acc;
    }, {});

    // Sort by date (newest first)
    Object.keys(grouped).forEach(key => {
      grouped[key].sort((a, b) => new Date(b.date) - new Date(a.date));
    });

    return grouped;
  }, [filteredPosts]);

  const stats = {
    totalPosts: blogPosts.length,
    totalCategories: categories.length,
    averageReadTime: Math.round(
      blogPosts.reduce((acc, post) => acc + parseInt(post.readTime), 0) / blogPosts.length
    )
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Blog Archive
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Explore all articles by category, year, and topic
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            {/* Stats */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg mb-8">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Total Posts</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-100">{stats.totalPosts}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Categories</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-100">{stats.totalCategories}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Avg. Read Time</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-100">{stats.averageReadTime} min</span>
                </div>
              </div>
            </div>

            {/* Year Filter */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg mb-8">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Filter by Year
              </h3>
              <div className="space-y-2">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedYear === year
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                  >
                    <span className="text-slate-700 dark:text-slate-300">{category.name}</span>
                    <span className="bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-400 text-xs px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>

          {/* Main Content */}
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            {/* Back to Blog */}
            <div className="mb-8">
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                Back to Blog
              </Link>
            </div>

            {/* Posts by Month */}
            <div className="space-y-8">
              {Object.entries(groupedPosts).map(([monthYear, posts], index) => (
                <motion.section
                  key={monthYear}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg"
                >
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 border-b border-slate-200 dark:border-slate-700 pb-3">
                    {monthYear}
                  </h2>
                  
                  <div className="space-y-4">
                    {posts.map((post) => (
                      <Link
                        key={post.id}
                        to={`/blog/${post.id}`}
                        className="block group"
                      >
                        <article className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                              {post.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-3 line-clamp-2">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                              <span>{post.date}</span>
                              <span>{post.readTime}</span>
                              <div className="flex gap-2">
                                {post.categories.slice(0, 2).map((category) => (
                                  <span
                                    key={category}
                                    className="bg-slate-200 dark:bg-slate-600 px-2 py-1 rounded"
                                  >
                                    {category}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                </motion.section>
              ))}
            </div>

            {/* No posts for selected year */}
            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  No posts found for {selectedYear}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Try selecting a different year or view all posts
                </p>
              </motion.div>
            )}
          </motion.main>
        </div>
      </div>
    </div>
  );
};

export default BlogArchive;