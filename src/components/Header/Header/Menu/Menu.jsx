import { NavLink } from "react-router-dom";
import { StyledMenu } from "./Menu.styled";

export const Menu = () => {
  return (
    <StyledMenu>
      <NavLink to={"/home"}>Home</NavLink>
      <NavLink to={"/catalog"}>Catalog</NavLink>
      <NavLink to={"/favorites"}>Favorite</NavLink>
    </StyledMenu>
  );
};
