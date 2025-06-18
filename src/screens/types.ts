export type UserData = {
  id: number;
  role: number;
  username: string;
  familyData: {
    lastHoldingDate: string;
    familyId: number;
    clients: {
      clientId: number;
      clientName: string;
      accounts: {
        accountId: number;
      }[];
    }[];
  };
};

export type AuthInfo = {
  user: UserData;
  token: string;
};

export type loginType = {
  email: string;
  password: string;
};