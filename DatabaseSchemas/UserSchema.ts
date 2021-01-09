interface User {
  id: number;
  name: string;
  about: string;
  numberOfReviews: number;
  identifyVerified: boolean;
  isSuperHost: boolean;
  avatar: string; // link provided by s3 bucket
  language: string;
  livesIn: string;
  joinedOn: Date;
}

interface Language {
  id: number;
  name: string;
}

interface UserLanguageRelationship {
  userId: number;
  languageId: number;
}
