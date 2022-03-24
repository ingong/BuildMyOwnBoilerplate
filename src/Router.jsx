import { Routes, Route } from 'react-router-dom';
import Test from '@/components/Test';

const Router = () => {
  return (
    <Routes>
      <Route path="test" element={<Test />} />
    </Routes>
  );
};

export default Router;
