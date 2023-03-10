import styled from 'styled-components'

const StyledInput = styled.div`
  font-size: 1rem;
  position: relative;

  :not(:first-child) {
    margin-top: 0.5rem;
  }

  input {
    background: transparent;
    border-radius: var(--radius-primary);
    border: none;
    box-shadow: inset 0.2rem 0.2rem 0.5rem var(--color-shadow-primary), inset -0.2rem -0.2rem 0.5rem var(--color-shadow-secondary);
    color: var(--text-user);
    height: 40px;
    letter-spacing: 0.1rem;
    outline: 1px solid transparent;
    padding: 10px;
    width: 100%;
    transition: box-shadow var(--transition-style);
    
    :focus,
    :valid {
      box-shadow: 0.3rem 0.3rem 0.6rem var(--color-shadow-primary), -0.2rem -0.2rem 0.5rem var(--color-shadow-secondary);
    }
    
    :focus ~ label,    
    :valid ~ label {
      font-size: 0.9rem;
      transform: translateY(-32px);
    }
  }
  
  label {
    font-size: 0.95rem;
    left: 1px;
    letter-spacing: 1px;
    padding: 10px;
    position: absolute;
    top: 1px;
    transition: transform var(--transition-style), font-size var(--transition-style);
  }
  
  p {
    align-items: center;
    border-radius: var(--radius-primary);
    box-shadow: inset 0.2rem 0.2rem 0.5rem var(--color-shadow-primary), inset -0.2rem -0.2rem 0.5rem var(--color-shadow-secondary);
    display: flex;
    font-size: 0.95rem;
    height: 40px;
    justify-content: flex-start;
    letter-spacing: 1px;
    padding: 10px;
    transition: box-shadow var(--transition-style);
  }
`

export default StyledInput
