import styled from 'styled-components';

const accentColor = 'rgb(29,  161, 242)';



const Checkbox = styled.input`
  align-items: center;
  border-radius: 9999px;
  border-style: solid;
  border-width: 1px;
  border-color: ${accentColor};
  color: ${accentColor};
  cursor: pointer;
  display: inline-flex;
  font: inherit;
  font-weight: bold;
  min-height: 10px;
  justify-content: center;
  min-width: 50px;
  outline-style: none;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  padding: 0 30px;
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props =>
      props.variant === 'primary'
        ? 'rgb(26, 145, 218)'
        : 'rgba(29, 161, 242, 0.1)'};
  }
`;

export default Checkbox;
