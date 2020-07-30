import styled from "styled-components";

export const Button = styled("button")((props) => ({
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: props.icon ? "0" : "24px",
  padding: props.icon ? "6px" : "8px 16px",
  textAlign: "center",
  cursor: "pointer",
  color: props.transparent
    ? props.theme.colors.primary
    : props.theme.colors.white,

  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: props.transparent ? props.theme.colors.primary : "transparent",

  borderRadius: props.rounded ? "50px" : "4px",

  backgroundColor: props.transparent
    ? "transparent"
    : props.theme.colors.primary,

  "&:hover": {
    backgroundColor: props.transparent
      ? "transparent"
      : props.theme.colors.primaryLighter,

    borderColor: props.transparent
      ? props.theme.colors.primaryLighter
      : "transparent",
  },
  "&:active": {
    backgroundColor: props.transparent
      ? "transparent"
      : props.theme.colors.primaryDarker,

    borderColor: props.transparent
      ? props.theme.colors.primaryLighter
      : "transparent",
  },
  "&:focus": {
    backgroundColor: props.transparent
      ? "transparent"
      : props.theme.colors.primaryDarker,
    borderColor: props.theme.colors.primaryLighter,
  },
  "&:disabled": {
    backgroundColor: props.transparent
      ? "transparent"
      : props.theme.colors.light500,

    borderColor: props.transparent
      ? props.theme.colors.light500
      : "transparent",
    cursor: "not-allowed",
    color: props.theme.colors.light500,
  },
}));
