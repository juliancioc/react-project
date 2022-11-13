import * as S from './styles';

export const Form = ({ children, ...props }) => {
  return <S.Container {...props}>{children}</S.Container>;
};
