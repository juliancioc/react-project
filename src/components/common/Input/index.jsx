import * as S from './styles'

export const Input = ({ ...props }) => {
  return (
    <S.Container>
      <input {...props} />
    </S.Container>
  );
};
