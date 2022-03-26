import { Routes, Route } from 'react-router-dom';
import { Sample, Form } from '@/components';
import ABC from '@/components/ABC/ABC';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Sample />} />
      <Route path="/form" element={<Form />} />
      <Route path="/abc" element={<ABC />} />
    </Routes>
  );
};

export default Router;
