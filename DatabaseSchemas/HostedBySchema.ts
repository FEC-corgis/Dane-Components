interface HostedBy {
  id: number;
  duringYourStay: string;
  responseRate: number;
  responseTime: number;
  showLanguage: boolean;
  userId: number;
  propertyId: number;
}

interface CoHost {
  id: number;
  hostId: number;
  hostedById: number;
}
