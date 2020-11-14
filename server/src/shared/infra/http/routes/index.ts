import express from 'express';

import pharmacyRouter from '@modules/pharmacy/infra/http/routes/pharmacy.routes';

const routes = express.Router();

const Development = [
  'Seeker',
  {
    'Made by': 'Leonardo Ronne',
    GitHub: 'https://github.com/leoronne',
  },
];

routes
  // Copyright
  .get('/', (req, res) => {
    res.status(200).send({
      Development,
    });
  })
  .use('/pharmacy', pharmacyRouter);

export default routes;
