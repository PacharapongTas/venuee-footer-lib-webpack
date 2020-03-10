import React from "react";
import { spaces } from "../styles/mixins";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const Container = styled.div`
  cursor: pointer;
  padding: ${spaces.normal};

  .icon {
    cursor: pointer;
  }
`;

type Props = { onClick: () => void; size?: number; className?: string };

export default function({ onClick, size = 24, className }: Props) {
  return (
    <Container onClick={onClick} className={className}>
      <MdClose className={"icon"} size={size} />
    </Container>
  );
}
