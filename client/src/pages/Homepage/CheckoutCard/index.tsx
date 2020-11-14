/* eslint-disable react/no-array-index-key */
import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { CircularProgress } from '@material-ui/core';
import { useSnackbar } from 'notistack';

import PharmaciesList from './PharmaciesList';

import { PharmaciesInfo } from '../../../@types';

import { useLanguage } from '../../../hooks';
import { ButtonOutlined } from '../../../styles/MaterialUI';

import { MedicineCard, MainContent, MedicineIcon, FormFooter } from '../styles';
import { Container, FormHeader, LeftIcon, LinkIcon, PharmacyCard, PharmacyIcon } from './styles';

interface Props {
  items: {
    name: string;
    quantity: number;
  }[];
  pharmacies: PharmaciesInfo[];
  setFrame: React.Dispatch<React.SetStateAction<number>>;
  frame: number;
  origin: { lat: number; lng: number };
}

const CheckoutCard: React.FC<Props> = ({ items, pharmacies, setFrame, frame, origin }) => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const { enqueueSnackbar } = useSnackbar();

  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const link = `https://www.google.com.br/maps/dir/${origin?.lat},+${origin?.lng}/${pharmacies[0]?.lat},+${pharmacies[0]?.lng}/@${pharmacies[0]?.lat},${pharmacies[0]?.lng},17z/data=!3m1!4b1!4m9!4m8!1m3!2m2!1d${origin?.lng}!2d${origin?.lat}!1m3!2m2!1d${pharmacies[0]?.lng}!2d${pharmacies[0]?.lat}`;

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);

      setTimeout(() => {
        enqueueSnackbar(t('checkout-message'), { variant: 'success' });
        setLoading(false);
        setFrame(1);
      }, 1000);
    } catch (err) {
      enqueueSnackbar(err.message, { variant: 'error' });
    }
  }, []);

  const getItemPrice = useCallback(
    (medicine: { name: string; quantity: number }) => {
      if (pharmacies.length > 0) {
        const pharmacyItem = pharmacies[0]?.medicines.filter(m => m.name === medicine.name);
        return Intl.NumberFormat(language, { style: 'currency', currency: language === 'pt' ? 'BRL' : 'USD' }).format(Number(pharmacyItem[0]?.price * medicine.quantity));
      }
      return 0;
    },
    [language, pharmacies]
  );

  return (
    <Container onSubmit={e => handleSubmit(e)} className={frame === 2 ? '' : 'hidden-card'} data-testid="checkout-form">
      <FormHeader>
        <div className="header-button">
          <LeftIcon className="active" onClick={() => setFrame(1)} data-testid="return-button" />
        </div>
        <div className="header-info">
          <h1>{t('find-phamarcy')}</h1>
          <p>
            {t('sponsor')}
            <span onClick={() => setOpenModal(true)} data-testid="modal-button">{t('see-more')}</span>
          </p>
        </div>
      </FormHeader>
      <MainContent>
        <PharmacyCard>
          <div className="pharmacy-logo">
            <PharmacyIcon />
          </div>
          <div className="pharmacy-info">
            <div className="info">
              <h2>{pharmacies[0]?.name}</h2>
              <span>{`(${t('at')} ${pharmacies[0]?.distance} ${t('meters')})`}</span>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <LinkIcon />
              </a>
            </div>
            <span className="info-text">{t('distance-information')}</span>
            <p>{`${t('total')}: ${Intl.NumberFormat(language, { style: 'currency', currency: language === 'pt' ? 'BRL' : 'USD' }).format(Number(pharmacies[0]?.total))}`}</p>
          </div>
        </PharmacyCard>
        {items.map((medicine, index) => (
          <MedicineCard key={index}>
            <div className="medicine-logo">
              <MedicineIcon />
            </div>
            <div className="medicine-info">
              <p>{`${t('quantity')}: ${medicine.quantity}`}</p>
              <h2>{medicine.name}</h2>
              <h4>{getItemPrice(medicine)}</h4>
            </div>
          </MedicineCard>
        ))}
      </MainContent>

      <FormFooter>
        <p className="footer-text">{t('homepage-footer-text-1')}</p>
        <ButtonOutlined type={!loading ? 'submit' : 'button'} disabled={loading} data-testid="submit-checkout">
          {loading ? (
            <div className="loader">
              <CircularProgress size={16} style={{ color: '#ccc' }} />
            </div>
          ) : (
            <p>{t('checkout')}</p>
          )}
        </ButtonOutlined>
      </FormFooter>
      <PharmaciesList pharmacies={pharmacies} items={items} setOpenModal={setOpenModal} openModal={openModal} />
    </Container>
  );
};

export default CheckoutCard;
