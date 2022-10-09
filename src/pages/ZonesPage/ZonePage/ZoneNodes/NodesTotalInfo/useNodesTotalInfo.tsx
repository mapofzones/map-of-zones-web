import { CountryData, IspData } from './Types';

export function useNodesTotalInfo(): {
  countries: Array<CountryData>;
  isp: Array<IspData>;
  indexedNodes: {
    percent: number;
    value: number;
  };
  loading: boolean;
  notIndexedNodes: {
    percent: number;
    value: number;
  };
} {
  return {
    isp: [
      {
        name: 'Amazon.com',
        value: 73,
        percent: 77.5,
      },
      {
        name: 'Shaw Communications',
        value: 15,
        percent: 13.4,
      },
      {
        name: 'OVH SAS',
        value: 4,
        percent: 5.7,
      },
    ],
    countries: [
      {
        country: {
          code: 'US',
          name: 'United States',
        },
        value: 84,
        percent: 73,
      },
      {
        country: {
          code: 'PL',
          name: 'Poland',
        },
        value: 15,
        percent: 12,
      },
      {
        country: {
          code: 'MD',
          name: 'Moldova',
        },
        value: 4,
        percent: 8,
      },
    ],
    indexedNodes: {
      percent: 86,
      value: 103,
    },
    notIndexedNodes: {
      percent: 14,
      value: 21,
    },
    loading: false,
  };
}
