import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from './AboutUsPage.module.scss';
import logo from './logo.png';

const AboutUsPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>O nas</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat placerat nisl quis vestibulum. Duis efficitur orci quis odio venenatis, vitae faucibus ipsum feugiat. Nullam vel ultricies sapien. Vestibulum euismod aliquam est ac blandit. Nam auctor libero vitae porta posuere. Sed vel sodales quam. Nunc tristique bibendum turpis, vel egestas lectus.</p>
          <p>Proin finibus risus eu nunc scelerisque, vitae congue velit tempor. Nam pretium tellus quis dolor suscipit, vel bibendum purus sollicitudin. Integer aliquam pretium neque sit amet auctor. Fusce maximus, quam nec bibendum laoreet, arcu elit venenatis eros, ut cursus lectus libero in velit. Maecenas ac nisl imperdiet, convallis quam vel, efficitur nulla. Donec molestie, augue in interdum aliquam, magna nulla iaculis mi, sed bibendum mauris mauris id quam. Integer consectetur posuere turpis, vitae ultrices lorem accumsan eu. Nam faucibus, velit eu euismod maximus, orci dolor tristique elit, sed varius elit elit at tellus. Proin commodo, felis non consequat consequat, felis sapien pharetra purus, eget maximus ipsum nisl vel purus. In auctor hendrerit dolor, non tempor elit imperdiet non.</p>
        </Col>
        <Col className="d-flex justify-content-center">
            <Image className={styles.logo} src={logo} alt="logo" height={40} />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsPage;



