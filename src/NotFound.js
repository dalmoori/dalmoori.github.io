import BlackButton from './components/Button/BlackButton';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const backHome = async () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-deepPurple text-mainTextColor-dark gap-y-10">
      <h1 className="text-2xl md:text-4xl">404 Not Found</h1>
      <div>요청하신 페이지를 찾을 수 없습니다.</div>
      <BlackButton text="홈으로 돌아가기" fn={backHome} />
    </div>
  );
};

export default NotFound;
