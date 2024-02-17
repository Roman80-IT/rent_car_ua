import { styled } from "styled-components";
import theme from "components/themeJSX";

export const StyledCard = styled.div`
  position: relative;
  width: 274px;
`;

export const ImgContainer = styled.div`
  width: 274px;
  height: 268px;
  margin-bottom: 14px;

  border-radius: 14px;
  overflow: hidden;
`;

export const Img = styled.img`
  display: block;
  object-fit: cover;

  height: 100%;
  width: 100%;
`;

export const MainText = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 8px;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const DescriptionBlock = styled.p`
  color: ${theme.colors.translucentBlack_5};

  font-size: 12px;
  line-height: 1.5;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const Description = styled.span`
  &:not(:last-child)::after {
    content: "";
    vertical-align: middle;
    display: inline-block;

    width: 1px;
    height: 16px;
    margin: 0 6px;

    background-color: ${theme.colors.translucentBlack_2};
  }
`;

export const LikeButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  right: 14px;
  top: 14px;
  padding: 0;
  
  border: none;
  background: none;
  cursor: pointer;

  transition: transform ${theme.animation.duration}
    ${theme.animation.cubicBezier},

  &:hover,
  &:focus {
    transform: scale(1.15);
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 12px 99px;
  margin-top: 28px;

  font-weight: 600;
  line-height: 1.43;
  color: ${theme.colors.primaryWhite};
  background: ${theme.colors.primaryBlue};

  border: none;
  border-radius: 12px;
    
  cursor: pointer;

  transition: background-color ${theme.animation.duration}
    ${theme.animation.cubicBezier},

  &:hover,
  &:focus {
    background: ${theme.colors.darkBlue};
  }
`;
