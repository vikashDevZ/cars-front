import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import NavContainer from "../components/navbar";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
`}
`;

export function HomePage() {
  return (
    <PageContainer>
      <NavContainer />
    </PageContainer>
  );
}
