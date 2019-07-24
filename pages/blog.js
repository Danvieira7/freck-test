import MainHeader from '../components/MainHeader';
import BlogHero from '../components/BlogHero';
import Footer from '../components/Footer/Footer';
import PostList from '../components/PostList';

export default function Blog() {
  return (
    <div>
      <MainHeader />
      <BlogHero />
      <PostList />
      <Footer />
    </div>
  );
};