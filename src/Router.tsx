import { Routes, Route, Outlet } from 'react-router-dom';
import { Sample, Form } from '@/components';
import ABC from '@/components/ABC/ABC';

const Team = () => {
  return (
    <div>
      <div>Team 입니다</div>
      <Outlet />
    </div>
  );
};

const Profile = () => {
  return <div>Profile 입니다</div>;
};

const Basic = () => {
  return <div>Basic 입니다</div>;
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="sample" element={<Sample />} />
      <Route path="team" element={<Team />}>
        <Route index element={<Basic />} />
        <Route path=":id" element={<Profile />} />
        <Route path="*" element={<Profile />} />
      </Route>
      <Route path="abc" element={<ABC />} />
      <Route path="*" element={<Form />} />
    </Routes>
  );
};

export default Router;
