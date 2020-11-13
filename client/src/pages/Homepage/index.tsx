/* eslint-disable react/no-array-index-key */
import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { CircularProgress } from '@material-ui/core';
import { useSnackbar } from 'notistack';

import { useLanguage } from '../../hooks';

import { ButtonOutlined } from '../../styles/MaterialUI';
import { Container, Content, Form, MedicineCard, MedicineIcon } from './styles';

const Homepage: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  const date = new Date();

  const [loading, setLoading] = useState(false);
  const [medicines, setMedicnes] = useState([
    {
      name: 'Ácido zoledrônico 4mg',
      price: 10.86,
      quantity: 1,
    },
    {
      name: 'Água para injeção 1mL',
      price: 30.06,
      quantity: 1,
    },
    {
      name: 'Betaserc 16mg',
      price: 8.46,
      quantity: 1,
    },
    {
      name: 'Bromazepam 3mg',
      price: 0.46,
      quantity: 1,
    },
  ]);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.error ? err.response.data.error : err.message, { variant: 'error' });
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <Container>
      <Content>
        <Form onSubmit={e => handleSubmit(e)}>
          <header>
            <h1>{t('homepage-title-1')}</h1>

            <p>
              {`${t('homepage-title-2')} ${new Intl.DateTimeFormat(language === 'pt' ? 'pt-BR' : 'en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }).format(date)}.`}
            </p>
          </header>

          <main>
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
          </main>

          <footer>
            <p className="footer-text">{t('homepage-footer-text-1')}</p>
            <ButtonOutlined type={!loading ? 'submit' : 'button'} disabled={loading} data-testid="submit-button">
              {loading ? (
                <div>
                  <CircularProgress size={15} style={{ color: '#ccc' }} />
                </div>
              ) : (
                <p>{t('find-phamarcy')}</p>
              )}
              <span>{t('sponsor')}</span>
            </ButtonOutlined>
          </footer>
        </Form>
      </Content>
    </Container>
  );
};

export default Homepage;
