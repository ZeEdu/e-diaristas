import React, { FC } from "react";
import {
  PageSubtitleStyled,
  PageTitleContainer,
  PageTitleStyled,
} from "./PageTitle.style";

interface PageTitleProps {
  title: string;
  subtitle: string;
}

const PageTitle: FC<PageTitleProps> = ({ title, subtitle }) => {
  return (
    <div>
      <PageTitleContainer>
        <PageTitleStyled>{title}</PageTitleStyled>
        <PageSubtitleStyled>{subtitle}</PageSubtitleStyled>
      </PageTitleContainer>
    </div>
  );
};

export default PageTitle;
