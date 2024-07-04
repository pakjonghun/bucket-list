import useInput from '../../hooks/useInput';
import BaseInput from '../ui/BaseInput/BaseInput';
import { IoSearch } from 'react-icons/io5';

const SearchBucket = () => {
  const [value, onChange] = useInput();
  return (
    <BaseInput
      endIcon={<IoSearch fontSize={20} />}
      inputAttributes={{
        placeholder: '이름이나 내용 입력',
      }}
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBucket;
