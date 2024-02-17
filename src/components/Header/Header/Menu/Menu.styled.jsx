import styled from "styled-components";
import theme from "components/themeJSX";

export const StyledMenu = styled.nav`
  display: flex;
  column-gap: 130px;
  margin: 0 auto;

  font-size: 26px;
  font-weight: 600;

  color: ${theme.colors.lightYellow};
  a {
    padding: 12px 0;
    transition: 0.35s;

    &:hover {
      color: ${theme.colors.secondaryOrange};
    }
  }

  .active {
    color: ${theme.colors.secondaryOrange};
  }
`;
