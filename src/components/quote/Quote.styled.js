import styled from "styled-components";

export const Title = styled.h3`
  color: white;
  text-transform: uppercase;
  letter-spacing: 3px;
`;
export const QuoteCard = styled.div`
  width: 500px;
  position: relative;
  max-height: 500vh;
  border-radius: 10px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.4);
  background-color: #777;
  opacity: 0.4;

  @media (max-width: 768px) {
    width: 70vw;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const TextContainer = styled.div`
  width: 100%;
  margin: 10px auto;
  padding: 60px;
`;

export const QuoteText = styled.h1`
  width: 80%;
  font-family: "Unica One", cursive;
  color: white;
  letter-spacing: 2px;
  text-align: center;
  margin: 0 auto;
`;
export const Author = styled.h4`
  text-align: right;
  margin-top: 20px;
`;

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  border: ${({ clipboard }) => (clipboard ? "none" : "1px solid white")};
  font-weight: 700;
  text-align: center;
  padding: 5px 10px;
  font-size: 1rem;
  color: white;
  text-transform: uppercase;
  margin: 20px;

  background: transparent;
  transition: all 0.5s;

  &:hover {
    transform: scale(0.9);
    background-color: #fff;
    color: #000;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
