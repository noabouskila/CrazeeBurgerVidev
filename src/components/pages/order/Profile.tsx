import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { theme } from "../../../theme";

export default function Profile({username}: {username: string}) {
  return (
    <ProfileStyled >
      <div className="user-info">
            <h1>
            Hey, <span> {username}</span>
            </h1>
            <Link to="/">
            <button className="logout-link">Se deconnecter</button>
            </Link>
      </div>
      <FaRegUserCircle className="picture" />
    </ProfileStyled>
  );
}

import styled from 'styled-components';

export const ProfileStyled = styled.div`
  display: flex;
  align-items: center;

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-weight: 400;
      font-size: 16px;
      margin: 0;
      span {
        color: ${theme.colors.primary};
      }
    }
    .logout-link {
      color: ${theme.colors.greyBlue};
      font-size: ${theme.fonts.size.XXS};
      border: none;
      cursor: pointer;
      
    }
    .logout-link:hover {
      text-decoration: underline;
      color : ${theme.colors.greyDark};
    }
  }

  .picture {
    width: 36px;
    height: 36px;
    margin-left: 10px;
  }
`;


