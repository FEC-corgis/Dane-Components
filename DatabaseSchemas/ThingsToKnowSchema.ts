interface HouseRules {
  id: number;
  checkIn: number;
  checkOut: number;
  childrenUnder2: boolean;
  children2To12: boolean;
  petsAllowed: boolean;
  smokingAllowed: boolean;
  eventsAllowed: boolean;
  foodOrDrinkInBedroom: boolean;
  unregisteredGuestsAllowed: boolean;
  checkInMethod: string;
}

interface AdditionalRule {
  id: number;
  rule: string;
  houseRulesId: number;
}

interface HealthSafety {
  mustClimbStairs: boolean;
  enhancedCleaningProcess: boolean;
  socialDistancing: boolean;
  carbonMonoxideAlarm: boolean;
  smokeAlarm: boolean;
  securityCamera: boolean;
  securityDepositeWarning: boolean;
  firstAidKit: boolean;
  fireExtinguisher: boolean;
  lockOnBedroomDoor: boolean;
  dangerousAnimal: boolean;
  stairs: boolean;
  petsOnProperty: boolean;
  potentialForNoise: boolean;
  noParkingOnProperty: boolean;
  weaponsOnProperty: boolean;
  amenityLimitations: boolean;
}

interface CancellationPolicy {
  freeCancelEndDate: Date;
  partialRefundCancelEndDate: Date;
  refundAmount: number;
  serviceFeeDeduction: boolean;
  firstNightDeduction: boolean;
}
