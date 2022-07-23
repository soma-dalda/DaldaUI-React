import styled from '@emotion/styled'

export const ImageContainer = styled.div`
  --gap: 10px;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: var(--gap);
  grid-auto-rows: var(--gap);

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 400px) {
    display: block;
    width: 100%;
  }
`

export const AnchorContainer = styled.a`
  cursor: pointer;
  color: inherit;
  text-decoration: none;
`

export const Figure = styled.figure`
  --gap: 10px;
  --boredr: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.2);
  border-radius: var(--boredr);
  color: black;

  .img {
    width: 100%;
    height: auto;
    border-radius: var(--boredr) var(--boredr) 0 0;
  }

  .no-caption-img {
    border-radius: var(--boredr);
  }

  .caption {
    width: calc(100% - 20px);
    padding: 15px 10px;
  }

  @media screen and (max-width: 400px) {
    margin-bottom: var(--gap);
    width: 100%;
    height: auto;
  }
`
