import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';
import NotFound from './NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" exact={true} element={<Home />} />
      <Route path="/product/:id" element={<Detail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
