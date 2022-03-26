import { useRef, useEffect } from 'react';
import styled from '@emotion/styled';

const IntersectionArea = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) console.log('닿았다!!!');
    });
    observer.observe(targetRef.current as HTMLDivElement);
    return () => {
      observer.unobserve(targetRef.current as HTMLDivElement);
    };
  }, []);
  return <DivWrapper ref={targetRef}></DivWrapper>;
};

const DivWrapper = styled.div`
  height: 20px;
`;

export default IntersectionArea;
