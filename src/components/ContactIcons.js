import styled from "styled-components";

const ContactIcons = () => {
  return (
    <StyledIcons>
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <i class="fab fa-facebook-square"></i>
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
        <i class="fab fa-pinterest"></i>
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
        <i class="fab fa-linkedin"></i>
      </a>
    </StyledIcons>
  );
};

const StyledIcons = styled.div`
  a {
    text-decoration: none;
    font-size: 4rem;
  }
  i {
    color: #23d997;
    margin: 0rem 3rem;
    &:hover {
      color: white;
    }
  }
`;

export default ContactIcons;
