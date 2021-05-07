import Taro from '@tarojs/taro';
import { useForm } from './useForm';

export const connectForm = Component => {
  return props => {
    const form = useForm();
    return <Component {...props} form={form} />;
  };
};
