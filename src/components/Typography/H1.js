import styled from "styled-components";

const H1 = styled.h1`
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 54px;

  color: ${(props) => props.theme.colors[props.color]};
`;

H1.defaultProps = {
  color: "dark500",
};

export default H1;
