export interface CurrentUserInterface {
  id: number;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  token: string;
  image: string | null;
  bio: string | null;
};