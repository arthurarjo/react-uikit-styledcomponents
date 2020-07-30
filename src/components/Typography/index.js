import styled from "styled-components";

export const Display1 = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 77px;

  color: ${(props) => props.theme.colors[props.color]};
`;

Display1.defaultProps = {
  color: "dark500",
};

export const Display2 = styled.h4`
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  line-height: 68px;

  color: ${(props) => props.theme.colors[props.color]};
`;

Display2.defaultProps = {
  color: "dark500",
};

export const H1 = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 54px;

  color: ${(props) => props.theme.colors[props.color]};
`;

H1.defaultProps = {
  color: "dark500",
};

export const H2 = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;

  color: ${(props) => props.theme.colors[props.color]};
`;

H2.defaultProps = {
  color: "dark500",
};

export const H3 = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 38px;

  color: ${(props) => props.theme.colors[props.color]};
`;

H3.defaultProps = {
  color: "dark500",
};

export const H4 = styled.h4`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;

  color: ${(props) => props.theme.colors[props.color]};
`;

H4.defaultProps = {
  color: "dark500",
};

export const H5 = styled.h5`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;

  color: ${(props) => props.theme.colors[props.color]};
`;

H5.defaultProps = {
  color: "dark500",
};

export const H6 = styled.h6`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;

  color: ${(props) => props.theme.colors[props.color]};
`;

H6.defaultProps = {
  color: "dark500",
};

export const Lead = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;

  color: ${(props) => props.theme.colors[props.color]};
`;

Lead.defaultProps = {
  color: "dark500",
};

export const Body = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;

  color: ${(props) => props.theme.colors[props.color]};
`;

Body.defaultProps = {
  color: "dark500",
};

export const SmallBody = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;

  color: ${(props) => props.theme.colors[props.color]};
`;

SmallBody.defaultProps = {
  color: "dark500",
};

export const Blockquote = styled.blockquote`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;

  color: ${(props) => props.theme.colors[props.color]};
`;

Blockquote.defaultProps = {
  color: "dark500",
};

export const Capitalized = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 2px;
  text-transform: uppercase;

  color: ${(props) => props.theme.colors[props.color]};
`;

Capitalized.defaultProps = {
  color: "dark500",
};

export const SmallText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;

  color: ${(props) => props.theme.colors[props.color]};
`;

SmallText.defaultProps = {
  color: "dark500",
};

export const TinyText = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;

  color: ${(props) => props.theme.colors[props.color]};
`;

TinyText.defaultProps = {
  color: "dark500",
};

export const SmallLabel = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.2px;

  color: ${(props) => props.theme.colors[props.color]};
`;

SmallLabel.defaultProps = {
  color: "dark500",
};

export const MediumLabel = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.2px;

  color: ${(props) => props.theme.colors[props.color]};
`;

MediumLabel.defaultProps = {
  color: "dark500",
};

export const TextLabel = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.75px;
  text-transform: uppercase;

  color: ${(props) => props.theme.colors[props.color]};
`;

TextLabel.defaultProps = {
  color: "dark500",
};

export const LargeLabel = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  color: ${(props) => props.theme.colors[props.color]};
`;

LargeLabel.defaultProps = {
  color: "dark500",
};

const Typography = {
  Display1,
  Display2,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Lead,
  Body,
  SmallBody,
  Blockquote,
  Capitalized,
  SmallText,
  TinyText,
  SmallLabel,
  MediumLabel,
  TextLabel,
  LargeLabel,
};

export default Typography;
