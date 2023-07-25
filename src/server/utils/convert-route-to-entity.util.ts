const mapping: Record<string, string> = {
  'financial-services': 'financial_service',
  organizations: 'organization',
  users: 'user',
  'wealth-products': 'wealth_product',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
