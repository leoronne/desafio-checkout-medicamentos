import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog, Divider, IconButton, DialogContent } from '@material-ui/core';

import { MdClose } from 'react-icons/md';

import { useLanguage } from '../../../../hooks';

import { PharmaciesInfo } from '../../../../@types';

import { Accordion, AccordionSummary, AccordionDetails, DialogTitle } from '../../../../styles/MaterialUI';
import { MedicineIcon } from '../../styles';
import { CancelPharmacyIcon, Container, SeeIcon, PharmacyCard, PharmacyIcon } from './styles';

interface Props {
  pharmacies: PharmaciesInfo[];
  items: {
    name: string;
    quantity: number;
  }[];
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const PharmaciesList: React.FC<Props> = ({ pharmacies, setOpenModal, openModal }) => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const [open, setOpen] = useState<number>(0);

  return (
    <Dialog open={openModal} maxWidth="sm" fullWidth>
      <DialogTitle disableTypography>
        {t('more-pharmacies')}
        <IconButton onClick={() => setOpenModal(false)} size="small" data-testid="modal-close-button">
          <MdClose size={15} />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Container data-testid="pharmacies-modal-container">
          {pharmacies.map(pharmacy => {
            return (
              <Accordion key={pharmacy?.id} expanded={open === pharmacy?.id} onChange={() => setOpen(open === pharmacy?.id ? 0 : pharmacy?.id)}>
                <AccordionSummary
                  expandIcon={open === pharmacy?.id ? <CancelPharmacyIcon /> : <SeeIcon />}
                  onClick={() => setOpen(open === pharmacy?.id ? 0 : pharmacy?.id)}
                  data-testid={`accordion-${pharmacy.id}`}
                >
                  <PharmacyCard>
                    <PharmacyIcon />
                    <div className="information">
                      <span className="pharmacy-name">
                        {pharmacy?.name}
                        <span className="distance">{`(${t('at')} ${pharmacy?.distance} ${t('meters')})`}</span>
                      </span>

                      <span className="total-value">
                        {Intl.NumberFormat(language, { style: 'currency', currency: language === 'pt' ? 'BRL' : 'USD' }).format(Number(pharmacy?.total))}
                      </span>
                    </div>
                  </PharmacyCard>
                </AccordionSummary>
                <AccordionDetails data-testid={`accordion-${pharmacy.id}-${open === pharmacy?.id}`}>
                  {pharmacy.medicines.map(medicine => (
                    <div key={medicine.name} className="pharmacy-card">
                      <div className="icon">
                        <MedicineIcon />
                      </div>
                      <div className="info">
                        <p>{medicine.name}</p>
                        <span>{Intl.NumberFormat(language, { style: 'currency', currency: language === 'pt' ? 'BRL' : 'USD' }).format(Number(medicine.price))}</span>
                      </div>
                    </div>
                  ))}
                </AccordionDetails>
                <Divider />
              </Accordion>
            );
          })}
        </Container>
      </DialogContent>
    </Dialog>
  );
};

export default PharmaciesList;
