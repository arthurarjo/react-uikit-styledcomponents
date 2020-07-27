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

const Typography = {
  Display1,
  Display2,
  H1,
};

export default Typography;
