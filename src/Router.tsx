import { Routes, Route } from 'react-router-dom';
import Test from '@/components/Test';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Test />} />
    </Routes>
  );
};

export default Router;
