import { Request } from 'express';
import { ModelCtor } from 'sequelize';

interface DefaultAttribs {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

type ExcludedAttribs = 'id' | 'createdAt' | 'updatedAt' | 'deletedAt';

interface User extends DefaultAttribs {
  name: string;
  email: string;
  phone: string;
  password: string;
}

interface Car extends DefaultAttribs {
  brand: string;
  model: string;
  color: string;
  year: number;
}

type Models = {
  [key: string]: ModelCtor<any>;
};

type CreateErr = (
  message: string,
  code?: number,
  validations?: object
) => Error;

type AuthenticatedRequest = Request & {
  user: User;
  destination?: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    url: string;
  };
};

type AppError = Error & {
  code: number;
  name?: string;
  message: string;
  validations?: object | null;
};

type Fix = any;
