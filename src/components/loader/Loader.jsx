import RingLoader from 'react-spinners/RingLoader';
import { Spinner } from './loader.styled';

export const Loader = () => {
  return (
    <Spinner>
      <RingLoader width="200" color="#3f51b5" />
    </Spinner>
  );
};
