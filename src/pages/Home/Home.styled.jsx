import { styled } from "styled-components";
import theme from "components/themeJSX";
import bgImageCar from "../../assets/images/background-car.jpg";

export const Wrapper = styled.div`
  // position: fixed;
  // position: relative;
  display: flex;
  flex-direction: column;
  // justify-content: space-around;
  // justify-content: space-evenly;
  // justify-content: space-between;
  // justify-content: center;
  justify-content: end;
  align-items: center;
  text-align: center;

  gap: 55vh;
  // z-index: -1;
  // top: 96px;
  // left: 0;

  min-width: 100vw;
  min-height: 100vh;

  background-image: url(${bgImageCar});
  background-size: cover;
  // background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 42px;
  letter-spacing: 0.08em;
`;

export const SubTitle = styled.p`
  font-size: 22px;
`;

export const Button = styled.a`
  // position: absolute;
  // bottom: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: fit-content;
  padding: 12px 42px;
  margin-bottom: 4vh;

  font-weight: 500;
  letter-spacing: 0.04em;
  color: ${theme.colors.lightYellow};

  border-radius: 10px;
  background: ${theme.colors.translucentBlack_5};

  transition: background-color ${theme.animation.duration}
    ${theme.animation.cubicBezier},

  &:hover,
  &:focus {
    color: ${theme.colors.secondaryOrangeRed};
    background: ${theme.colors.translucentBlack_8};
  }
`;
