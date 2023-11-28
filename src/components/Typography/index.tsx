import styled from "styled-components";

const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontsizes.xxl};
  font-weight: ${({ theme }) => theme.fontweights.regular};
  letter-spacing: -0.017px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const H2 = styled.h2`
  font-size: ${({ theme }) => theme.fontsizes.lg};
  font-weight: ${({ theme }) => theme.fontweights.regular};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const H3 = styled.h3`
  font-size: ${({ theme }) => theme.fontsizes.sm};
  font-weight: ${({ theme }) => theme.fontweights.regular};
  letter-spacing: -0.013px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const Body = styled.p`
  font-size: ${({ theme }) => theme.fontsizes.xs};
  font-weight: ${({ theme }) => theme.fontweights.regular};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const A = styled.a`
  color: ${({ theme }) => theme.colors.textSub};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontsizes.sm};
  font-weight: ${({ theme }) => theme.fontweights.bold};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const Typography = {
  H1,
  H2,
  H3,
  Body,
  Text,
  A,
  Label,
};

export default Typography;
