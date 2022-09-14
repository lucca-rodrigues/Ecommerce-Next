import Head from "next/head";
import styled from "styled-components";
import { Colors } from "../../styles/colors.js";
export const Container = styled.div`
  width: 70%;
  text-align: center;
  border: 1px solid ${Colors.grey};
  padding-bottom: 50px;
  border-radius: 20px;
`;

export const InstallmentPricing = styled.span`
  color: ${Colors.grey};
  font-size: 15px !important;
`;
