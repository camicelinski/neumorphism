import styled from 'styled-components'

const StyledSummary = styled.div`
  color: var(--text-user);
  font-size: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  transition: color var(--transition-style);

  > div {
    align-items: center;
    border-radius: var(--radius-primary);
    box-shadow: 0.3rem 0.3rem 0.6rem var(--color-shadow-primary), -0.2rem -0.2rem 0.5rem var(--color-shadow-secondary);
    padding: 1.2rem;
    transition: box-shadow var(--transition-style);
    margin-bottom: 2rem;
  }

  h3 {
    background: var(--bg-switcher);
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    color: transparent;    
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
    font-size: 2rem;
    font-family: 'Rubik', Arial, sans-serif;
    margin-bottom: 0.5rem;
  }

  div > p {
    margin-bottom: 0px;
  }
  
  div > p > span {
    margin-left: 0.8rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
  }

  p {
    margin-bottom: 1rem;
  }
  
  > p > span {
    color: var(--text-highlight);
    font-weight: 700;
    transition: color var(--transition-style);
  }
`

export default StyledSummary
