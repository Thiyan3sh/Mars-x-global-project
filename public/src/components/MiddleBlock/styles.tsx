import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  background: linear-gradient(135deg, #000000, #424242) padding-box,
              linear-gradient(135deg, #000000, #424242) border-box;
  border: 2px solid transparent;
  border-radius: 15px;
  margin: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.7);
  }

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;
  margin: 0 auto;
  padding: 0 2rem;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0 1rem;
  }
`;
