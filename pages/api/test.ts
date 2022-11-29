import type { NextApiRequest, NextApiResponse } from 'next';
import { ITestItem } from 'types';
import { testData } from './data/testData';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ITestItem[]>
) {
  if (req.method === 'GET') {
    res.status(200).json(testData);
  }
}
