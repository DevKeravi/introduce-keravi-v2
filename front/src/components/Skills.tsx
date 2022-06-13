import CardTitle from './CardTitle';
import { Container, Row, Col } from 'react-bootstrap';
import { SkillCardProps } from './SkillCard';
import SkillCard from './SkillCard';

const cardProps: SkillCardProps[] = [
  {
    title: 'FrontEnd',
    src: '/frontend.jpg',
    alt: 'frontend',
  },
  {
    title: 'BackEnd',
    src: '/back.jpg',
    alt: 'backend',
  },
  {
    title: 'Develop',
    src: '/development.jpg',
    alt: 'delvelopment',
  },
  {
    title: 'Game',
    src: '/game.jpg',
    alt: 'game',
  },
  {
    title: 'Version Tools',
    src: '/svn.jpg',
    alt: 'version tools',
  },
];

const Skills = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <CardTitle title="SKILLS" color="#525266" />
        </Col>
      </Row>
      <Row className="g-5">
        <Col lg={4} xs={12}>
          <SkillCard {...cardProps[0]} />
        </Col>
        <Col lg={4} xs={12}>
          <SkillCard {...cardProps[1]} />
        </Col>
        <Col lg={4} xs={12}>
          <SkillCard {...cardProps[3]} />
        </Col>
        <Col lg={4} xs={12}>
          <SkillCard {...cardProps[2]} />
        </Col>
        <Col lg={4} xs={12} style={{ marginBottom: '8rem' }}>
          <SkillCard {...cardProps[4]} />
        </Col>
      </Row>
    </Container>
  );
};
export default Skills;
