export interface reportLayout{
    x: number,
    y: number,
    width: number,
    height: number
}

export interface BarChartData {
    label: string;
    strategy: number;
    benchmark: number;
}

export interface PerformanceBarChartProps {
    data: BarChartData[];
}

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