import React, { useEffect, useState } from 'react';
import LoginModal from '../components/LoginModal';
import { useUserStore } from '../stores/useUserStore';
import { useArticleStore } from '../stores/useArticleStore';
import { useTestimonialStore } from '../stores/useTestimonialStore';
import CreateArticleForm from '../components/CreateArticleForm';
import Articles from '../components/ArticlesList';
import CreateTestimonialForm from '../components/CreateTestimonialForm';
import Testimonials from '../components/TestimonialsList';
import { MdLogout, MdReviews, MdRateReview, MdArticle, MdOutlineArticle } from 'react-icons/md';
import { motion } from 'framer-motion';

const tabs = [
  { id: 'createA', label: 'Create Article', icon: MdOutlineArticle },
  { id: 'articles', label: 'Articles', icon: MdArticle },
  { id: 'createT', label: 'Create Testimonial', icon: MdRateReview },
  { id: 'testimonials', label: 'Testimonials', icon: MdReviews },
];

const DashboardPage = () => {
  const user = useUserStore((state) => state.user);
  const checkAuth = useUserStore((state) => state.checkAuth);
  const checkingAuth = useUserStore((state) => state.checkingAuth);
  const logout = useUserStore((state) => state.logout);

  const { fetchAllArticles } = useArticleStore();
  const { fetchAllTestimonials } = useTestimonialStore();

  const [activeTab, setActiveTab] = useState('createA');

  useEffect(() => {
    console.log('User state:', user);
  }, [user]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (user?.role === 'admin') {
      fetchAllArticles();
      fetchAllTestimonials();
    }
  }, [user, fetchAllArticles, fetchAllTestimonials]);

  if (checkingAuth) {
    return <div className="text-center py-12">Checking authentication...</div>;
  }

  if (!user) {
    return <LoginModal />;
  }

  if (user.role !== 'admin') {
    return <div className="text-center py-12 text-red-500">Access denied: You are not an admin.</div>;
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className='flex flex-row place-self-center'>

          <motion.h1
            className="text-4xl font-bold mb-8 text-primary text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Admin Dashboard
          </motion.h1>
          <div className="flex justify-end mb-8 ml-10">
            <button
              onClick={async () => {
                await logout();
                /* window.location.reload(); */
              }}
              className="flex items-center px-4 py-2 rounded-md bg-primary text-secondary hover:bg-accent hover:text-secondary transition"
            >
              Logout
            </button>
          </div>
        </div>
        <div className="flex justify-center mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 mx-2 rounded-md transition-colors duration-200 ${activeTab === tab.id
                ? 'bg-primary text-secondary'
                : 'bg-secondary text-primary hover:text-secondary hover:bg-primary'
                }`}
            >
              <tab.icon className="mr-2 h-5 w-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'createA' && <CreateArticleForm />}
        {activeTab === 'articles' && <Articles />}
        {activeTab === 'createT' && <CreateTestimonialForm />}
        {activeTab === 'testimonials' && <Testimonials />}
      </div>
    </div>
  );
};

export default DashboardPage;

