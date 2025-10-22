import styled from "styled-components";

export const ContactContainer = styled("div")`
  padding: 5rem 0;
  background: linear-gradient(135deg, #000000, #424242) padding-box,
              linear-gradient(135deg, #000000, #424242) border-box;
  border: 2px solid transparent;
  border-radius: 15px;
  margin: 2rem;
  box-shadow: 0 4px 15px rgba(123, 31, 162, 0.3);

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const FormGroup = styled("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;
