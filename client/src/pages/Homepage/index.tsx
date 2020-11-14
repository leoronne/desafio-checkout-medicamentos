/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { CircularProgress, Fade } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { getDistance } from 'geolib';

import CheckoutCard from './CheckoutCard';

import { mockPharmacies } from '../../__mocks__';
import { GetPharmaciesInfo, PharmaciesInfo } from '../../@types';

import { useLanguage } from '../../hooks';

import { ButtonOutlined } from '../../styles/MaterialUI';
import { Container, Content, Form, MedicineCard, MedicineIcon, MainContent, FormFooter } from './styles';
import api from '../../services/api';

const Homepage: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  const date = new Date();

  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      name: 'Bromazepam 3mg',
      price: 0.46,
      quantity: 1,
    },
  ]);
  const [closePharmacies, setClosePharmacies] = useState<PharmaciesInfo[]>([]);
  const [frameActive, setFrameActive] = useState(1);

  const coordiantes = {
    lat: -23.5648304,
    lng: -46.6436604,
  };

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response: { data: GetPharmaciesInfo } = process.env.NODE_ENV === 'test' ? { data: { pharmacies: mockPharmacies } } : await api.get('pharmacy');
      const { data } = response;

      const { pharmacies } = data;

      const formattedPharmacies = pharmacies.filter(pharmacy => {
        const medicinesInBag = medicines.map(medicine => medicine.name);

        const medicinesIntersection = pharmacy.medicines.filter(medicine => {
          return medicinesInBag.includes(medicine.name);
        });

        let total = 0;

        medicinesIntersection.forEach(medicine => {
          const item = medicines.filter(m => {
            return m.name === medicine.name;
          });
          total += medicine.price * item[0]?.quantity;
        });

        const distance = getDistance({ latitude: coordiantes.lat, longitude: coordiantes.lng }, { latitude: pharmacy.lat, longitude: pharmacy.lng });

        pharmacy.total = total;
        pharmacy.medicines = medicinesIntersection;
        pharmacy.distance = distance;

        return pharmacy.medicines.length === medicines.length;
      });

      const sortedPharmacies = formattedPharmacies.sort((a, b) => {
        return a.total - b.total || a.distance - b.distance;
      });

      setClosePharmacies(sortedPharmacies);

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
