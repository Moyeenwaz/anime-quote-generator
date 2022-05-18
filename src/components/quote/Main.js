import React, { useState, useEffect } from "react";
import {
  Title,
  QuoteCard,
  Header,
  TextContainer,
  QuoteText,
  Author,
  Button,
  ButtonContainer,
} from "./Quote.styled";

export const Main = () => {
  const [quote, setQuote] = useState("");

  const getQuote = () => {
    fetch("https://animechan.vercel.app/api/random")
      .then((response) => response.json())
      .then((quote) => setQuote(quote));
  };

  const copyText = () => {
    navigator.clipboard.writeText(quote.quote);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <QuoteCard>
      <Header>
        <img src="images/icons8-son-goku-64.png" />
        <Title>Random anime quotes</Title>
      </Header>
      <TextContainer>
        <QuoteText>{quote ? quote.quote : "Yare Yare Daze"}</QuoteText>
        <Author>
          {quote ? quote.character : "Jotaro Kujo"}
          <br />
          from {quote ? quote.anime : "Jojo no kimiyou na bouken"}
        </Author>
      </TextContainer>

      <ButtonContainer>
        <Button onClick={getQuote}>Another!</Button>
        <Button clipboard={true} onClick={copyText}>
          <img src="images/icons8-clipboard-approve-64.png" />
        </Button>
      </ButtonContainer>
    </QuoteCard>
  );
};
