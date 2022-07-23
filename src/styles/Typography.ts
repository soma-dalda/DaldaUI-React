import { css } from '@emotion/react'

const fontWeight = {
  Regular: 400,
  Medium: 500,
  SemiBold: 600,
  Bold: 700,
}

export const TypoGraphy = {
  Title: css`
    font-size: 1.5rem;
    font-weight: ${fontWeight.Bold};
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    line-height: 2rem;
  `,

  Banner: css`
    font-size: 1.8em;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    font-weight: ${fontWeight.Bold};
    line-height: 2rem;
  `,

  Normal: css`
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    font-weight: ${fontWeight.Medium};
    font-size: 1em;
  `,
  Small: css`
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    font-size: 0.8em;
    font-weight: ${fontWeight.Regular};
  `,

  h2: css`
    font-size: 1.3rem;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    font-weight: ${fontWeight.Bold};
  `,
}
