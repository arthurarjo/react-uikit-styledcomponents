import styled from "styled-components";

const Display2 = styled.h4`
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  line-height: 68px;

  color: ${(props) => props.theme.colors[props.color]};
`;

Display2.defaultProps = {
  color: "dark500",
};

export default Display2;
