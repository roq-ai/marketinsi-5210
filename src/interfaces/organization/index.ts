import { FinancialServiceInterface } from 'interfaces/financial-service';
import { WealthProductInterface } from 'interfaces/wealth-product';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  financial_service?: FinancialServiceInterface[];
  wealth_product?: WealthProductInterface[];
  user?: UserInterface;
  _count?: {
    financial_service?: number;
    wealth_product?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
