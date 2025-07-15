import React from 'react'
import { useParams, Link } from 'react-router-dom';
import ArticlesRecent from '../components/ArticlesRecent'
import ArticleFull from '../components/ArticleFull'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Article = () => {
  const { id } = useParams(); // check if URL includes /articles/:id

  return (
    <div>
      <Navbar />
      <div className="min-h-screen overflow-hidden">
        <h1 className='text-7xl text-center indent-4 text-primary my-10'><Link to="/articles" className="hover:bg-accent hover:text-secondary px-4 py-1 rounded">Статии</Link></h1>

        {/* Conditionally render the full article */}
        {id && <ArticleFull />}

        <ArticlesRecent />
      </div>
      <Footer />
    </div>
  );
};

export default Article;
