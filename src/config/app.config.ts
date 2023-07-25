interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['End Customer'],
  tenantRoles: ['Business Owner', 'Wealth Manager', 'Financial Advisor'],
  tenantName: 'Organization',
  applicationName: 'MarketInsi',
  addOns: ['chat', 'notifications', 'file'],
};
