/* eslint-disable no-param-reassign */
import React, { createContext, useState, useContext, useCallback } from 'react';
import { getDistance } from 'geolib';

import api from '../services/api';

import { mockPharmacies } from '../__mocks__';
import { GetPharmaciesInfo, PharmaciesInfo } from '../@types';

interface DataContextProps {
  medicines: Array<{
    name: string;
    price: number;
    quantity: number;
  }>;
  coordiantes: {
    lat: number;
    lng: number;
  };
  setCoordiantes: React.Dispatch<
    React.SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
  closePharmacies: PharmaciesInfo[];
  getClosePharmacies: () => Promise<void>;
  setMedicnes: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        price: number;
        quantity: number;
      }[]
    >
  >;
}

const DataContext = createContext<DataContextProps>({} as DataContextProps);

const DataProvider: React.FC = ({ children }) => {
  const [closePharmacies, setClosePharmacies] = useState<PharmaciesInfo[]>([]);
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
  const [coordiantes, setCoordiantes] = useState({
    lat: -23.5648304,
    lng: -46.6436604,
  });

  const getClosePharmacies = useCallback(async () => {
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
  }, [medicines, coordiantes]);

  return <DataContext.Provider value={{ medicines, setMedicnes, coordiantes, setCoordiantes, closePharmacies, getClosePharmacies }}>{children}</DataContext.Provider>;
};

const useData = (): DataContextProps => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('useData must be used within an DataProvider');
  }

  return context;
};

export { DataProvider, useData };
