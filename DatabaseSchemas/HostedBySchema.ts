interface HostedBy {
  id: number;
  duringYourStay: string;
  responseRate: number;
  responseTime: number;
  showLanguage: boolean;
  userId: number;
  propertyId: number;
}

interface CohostedBy {
  id: number;
  userId: number;
  hostedById: number;
}
