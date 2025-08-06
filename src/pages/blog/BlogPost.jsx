import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';
import { blogPosts } from '../../constants/blogData';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.id === parseInt(id));
    setPost(foundPost);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">Post not found</h2>
          <Link to="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Back Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.categories.map((category) => (
              <span
                key={category}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
              >
                {category}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-slate-600 dark:text-slate-400 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>{post.categories.length} categories</span>
            </div>
          </div>

          {/* Share Button */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </motion.header>

        {/* Featured Image Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="h-64 md:h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h2 className="text-2xl font-bold">{post.title}</h2>
            </div>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="prose prose-lg prose-slate dark:prose-invert max-w-none"
        >
          <div className="text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed font-medium">
            {post.excerpt}
          </div>
          
          <div className="whitespace-pre-line text-slate-900 dark:text-slate-100 leading-relaxed">
            {post.content}
          </div>
        </motion.article>

        {/* Author Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              TB
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{post.author}</h3>
              <p className="text-slate-600 dark:text-slate-400">Tech enthusiast and AI researcher</p>
            </div>
          </div>
        </motion.div>

        {/* Related Posts */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id && p.categories.some(cat => post.categories.includes(cat)))
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="block bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all group"
                >
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {relatedPost.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mt-4 text-xs text-slate-500 dark:text-slate-400">
                    <span>{relatedPost.date}</span>
                    <span>{relatedPost.readTime}</span>
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>

        {/* Back to Blog */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to All Articles
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;