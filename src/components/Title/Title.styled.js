import styled from 'styled-components'

const StyledTitle = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;

  h1 {
    font-family: 'Rubik', Arial, sans-serif;
    color: var(--text-highlight);
    font-size: 2.4rem;
    letter-spacing: 0.1rem;
    margin: 0 0 1.5rem;
    transition: text-shadow var(--transition-style), color var(--transition-style);
  }

  h2 {    
    font-size: 1.2rem;
    padding-bottom: 1rem;
    transition: color var(--transition-style);
  }
`

export default StyledTitle
