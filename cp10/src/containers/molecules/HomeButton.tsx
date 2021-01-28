import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeButton from 'components/molecules/HomeButton';

const EnhancedHomeButton: FC = () => {
  const history = useNavigate();

  return <HomeButton redirectToHome={() => history('/')} />;
};

export default EnhancedHomeButton;
