import { Types } from 'mongoose';

export type TCourse = {
  title: string;
  instructor: string;
  categoryId: Types.ObjectId;
  price: number;
  tags: [
    {
      name: string;
      isDeleted: boolean;
    },
  ];
  startDate: string;
  endDate: string;
  language: string;
  provider: string;
  details: {
    level: string;
    description: string;
  };
};
