import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 800px;
  margin: 10px auto;
  padding: 16px 20px;
  background-color: #fff;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid #0d253f;
  border-top: 2px solid #0d253f;
  border-radius: 4px;
  color: #fff;
  background-color: #0d253f;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  
  color: #fff;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #01b4e4;
  }
`;