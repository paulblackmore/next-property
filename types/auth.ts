export type Session = {
  id: string;
  name: string;
  signinUrl: string;
  callbackUrl: string;
  user: Profile;
  expires: string;
};

export type Profile = {
  id: string;
  name: string;
  email: string;
  picture: string;
};
