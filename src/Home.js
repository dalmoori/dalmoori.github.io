import ProductList from './components/Index/ProductList';
import DefaultLayout from './components/Layout/DefaultLayout';
import Contact from './components/Index/Contact';

const Home = () => {
  return (
    <DefaultLayout>
      <ProductList />
      <Contact />
    </DefaultLayout>
  );
};

export default Home;
