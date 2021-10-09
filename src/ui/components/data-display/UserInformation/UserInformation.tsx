import React, { FC } from "react";
import {
  AvatarStyled,
  RatingStyled,
  UserDescription,
  UserInformationContainer,
  UserName,
} from "./UserInformation.style";

interface Props {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}

export const UserInformation: FC<Props> = ({
  picture,
  name,
  rating,
  description,
}) => {
  return (
    <UserInformationContainer>
      <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
      <UserName>{name}</UserName>
      <RatingStyled readOnly value={rating} />
      <UserDescription>{description}</UserDescription>
    </UserInformationContainer>
  );
};
