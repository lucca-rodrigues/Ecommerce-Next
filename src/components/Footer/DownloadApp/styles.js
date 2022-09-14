import styled from "styled-components";

export const Container = styled.div`
  display: table-cell;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;

  li {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-right: 5px;
      font-size: 17px;
    }
  }
`;
