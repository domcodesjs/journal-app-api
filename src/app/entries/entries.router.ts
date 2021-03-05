import { Router } from 'express';
import { ENTRIES_ENDPOINT } from '../../constants/endpoints';

export const router: Router = Router();

router.get(ENTRIES_ENDPOINT, (req, res) => {
  res.json({
    hello: 'world!'
  });
});
