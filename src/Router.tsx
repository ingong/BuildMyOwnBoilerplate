import { Routes, Route } from 'react-router-dom';
import { Sample, Form } from '@/components';
import ABC from '@/components/ABC/ABC';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/sample" element={<Sample />} />
      <Route path="/abc" element={<ABC />} />
      <Route path="/*" element={<Form />} />
    </Routes>
  );
};

export default Router;
