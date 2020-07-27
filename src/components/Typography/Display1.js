import styled from "styled-components";

const Display1 = styled.h3`
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 77px;

  color: ${(props) => props.theme.colors[props.color]};
`;

Display1.defaultProps = {
  color: "dark500",
};

export default Display1;
