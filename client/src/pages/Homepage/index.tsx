/* eslint-disable react/no-array-index-key */
import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { CircularProgress, Fade } from '@material-ui/core';
import { useSnackbar } from 'notistack';

import CheckoutCard from './CheckoutCard';

import { useLanguage, useData } from '../../hooks';

import { ButtonOutlined } from '../../styles/MaterialUI';
import { Container, Content, Form, MedicineCard, MedicineIcon, MainContent, FormFooter } from './styles';

const Homepage: React.FC = () => {
  const { language } = useLanguage();
  const { medicines, coordiantes, closePharmacies, getClosePharmacies } = useData();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  const date = new Date();

  const [loading, setLoading] = useState(false);
  const [frameActive, setFrameActive] = useState(1);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);

      await getClosePharmacies();

      setFrameActive(2);
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.error ? err.response.data.error : err.message, { variant: 'error' });
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <Container>
      <Content>
        <Fade in={frameActive === 1}>
          <Form onSubmit={e => handleSubmit(e)} className={frameActive === 1 ? '' : 'hidden-card'} data-testid="initial-form">
            <header>
              <h1>{t('homepage-title-1')}</h1>

              <p>
                {`${t('homepage-title-2')} ${new Intl.DateTimeFormat(language, {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }).format(date)}.`}
              </p>
            </header>

            <MainContent>
              {medicines.map((medicine, index) => (
                <MedicineCard key={index}>
                  <div className="medicine-logo">
                    <MedicineIcon />
                  </div>
                  <div className="medicine-info">
                    <p>{`${t('quantity')}: ${medicine.quantity}`}</p>
                    <h2>{medicine.name}</h2>
                  </div>
                </MedicineCard>
              ))}
            </MainContent>

            <FormFooter>
              <p className="footer-text">{t('homepage-footer-text-1')}</p>
              <ButtonOutlined type={!loading ? 'submit' : 'button'} disabled={loading} data-testid="submit-button">
                {loading ? (
                  <div className="loader">
                    <CircularProgress size={16} style={{ color: '#ccc' }} />
                  </div>
                ) : (
                  <p>{t('find-phamarcy')}</p>
                )}
                <span>{t('sponsor')}</span>
              </ButtonOutlined>
            </FormFooter>
          </Form>
        </Fade>
        <Fade in={frameActive === 2}>
          <CheckoutCard items={medicines} pharmacies={closePharmacies} setFrame={setFrameActive} frame={frameActive} origin={coordiantes} />
        </Fade>
      </Content>
    </Container>
  );
};

export default Homepage;
