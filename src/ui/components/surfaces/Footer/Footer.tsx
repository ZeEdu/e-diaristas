/* eslint-disable @next/next/no-img-element */
import { Typography, Box } from "@mui/material";
import React from "react";
import {
  AppList,
  FooterContainer,
  FooterTitle,
  StyledFooter,
} from "./Footer.style";

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem Somos</FooterTitle>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ab,
            nihil explicabo quo fuga nulla placeat magni dicta obcaecati ex
            necessitatibus, tenetur illo eum voluptate expedita corrupti
            voluptatem et velit?
          </Typography>
        </Box>
        <div>
          <FooterTitle>Baixe os nossos aplicativos</FooterTitle>
          <AppList>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/app-store.png"} alt={"App Store"} />
              </a>
            </li>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/app-store.png"} alt={"App Store"} />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </StyledFooter>
  );
};
