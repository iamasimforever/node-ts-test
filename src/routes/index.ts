import * as express from 'express';
import { response } from '../interfaces/response';
const router = express.Router();

router.post('/v1/parse', (req, res) => {
  const data = req.body.data;
  res.json({
    statusCode: 200,
    result: parseV1(data),
  });
});

router.post('/v2/parse', (req, res) => {
  const data = req.body.data;
  res.json({
    statusCode: 200,
    result: parseV2(data),
  });
});

const parseV1 = (data: string): response => {
  return {
    firstName: 'TEST0000',
    lastName: 'USER000',
    clientId: '9994567',
  };
};

const parseV2 = (data: string): response => {
  return {
    firstName: 'TEST',
    lastName: 'USER',
    clientId: '999-4567',
  };
};

export { router };
