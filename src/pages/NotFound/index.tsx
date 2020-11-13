import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Container, Content, HomeIcon, Left, Main, Right } from './styles';

const NotFound: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container data-testid="not-found-page">
      <Content>
        <Main>
          <Left>
            <h2>{t('error-page-1')}</h2>

            <p>{t('error-page-2')}</p>

            <div className="home-link">
              <Link to="/">
                <HomeIcon />
                <span>{t('return')}</span>
              </Link>
            </div>
          </Left>
          <Right />
        </Main>
      </Content>
    </Container>
  );
};

export default NotFound;
