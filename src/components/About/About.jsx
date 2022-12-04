import { AboutStyled, Title } from './About.styled';
import gif from '../../media/gif-goit.gif';

export const About = () => {
  return (
    <AboutStyled>
      <img src={gif} alt="gif" />
      <Title>Vasyl`s pet project</Title>
    </AboutStyled>
  );
};
