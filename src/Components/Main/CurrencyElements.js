import styled from 'styled-components';



export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  height: 80px ;
`;

export const Input = styled.input `
  border-radius: 50px 0 0 50px;
  background: var(--colors-ui-base);
  color: var(--colors-text);
  borderRadius: var(--radii);
  padding: 0.25rem;
  border: none;
  boxShadow: var(--shadow);
  height: 50px;
`
export const Select = styled.select `
  border-radius: 0 50px 50px 0;
  background: var(--colors-ui-base);
  color: var(--colors-text);
  borderRadius: var(--radii);
  padding: 0.25rem;
  border: none;
  boxShadow: var(--shadow);
  height: 50px;
`
