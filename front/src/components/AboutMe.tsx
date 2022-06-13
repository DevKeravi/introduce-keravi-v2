import { Container, Row, Col } from 'react-bootstrap';
import CardTitle from './CardTitle';
import {
  UserOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  HighlightOutlined,
} from '@ant-design/icons';
import AboutCard, { AboutCardProps } from './AboutCard';

const cardProps: AboutCardProps[] = [
  { icon: <UserOutlined />, title: '이름', desc: '채성렬' },
  { icon: <CalendarOutlined />, title: '생년월일', desc: '93.01.21' },
  { icon: <EnvironmentOutlined />, title: '주소지', desc: '강남구 삼성동' },
  { icon: <PhoneOutlined />, title: '연락처', desc: '010-5585-2179' },
  { icon: <MailOutlined />, title: '이메일', desc: 'cmkrosp@gmail.com' },
  { icon: <HighlightOutlined />, title: '학력', desc: '백제예술대학' },
];

const AboutMe = () => {
  return (
    <>
      <CardTitle title="ABOUT ME" />
      <Row>
        {cardProps.map((v: AboutCardProps) => (
          <Col xxl={4} md={6} xs={12} key={v.title}>
            <AboutCard {...v} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default AboutMe;
