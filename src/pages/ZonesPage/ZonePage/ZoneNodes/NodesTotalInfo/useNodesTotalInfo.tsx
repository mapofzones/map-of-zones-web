import { InfoData } from './Types';

export function useNodesTotalInfo(): {
  countries: Array<InfoData>;
  isp: Array<InfoData>;
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
        code: 'US',
        name: 'United States',
        value: 84,
        percent: 54.8,
      },
      {
        code: 'PL',
        name: 'Poland',
        value: 18,
        percent: 13.4,
      },
      {
        code: 'MD',
        name: 'Moldova',
        value: 13,
        percent: 5.7,
      },
      {
        code: 'NL',
        name: 'Netherlands',
        value: 11,
        percent: 4.8,
      },
      {
        code: 'FI',
        name: 'Finland',
        value: 10,
        percent: 3.9,
      },
      {
        code: 'AU',
        name: 'Australia',
        value: 8,
        percent: 3.8,
      },
      {
        code: 'BR',
        name: 'Brazil',
        value: 7,
        percent: 3.5,
      },
      {
        code: 'BY',
        name: 'Belarus',
        value: 5,
        percent: 2.5,
      },
      {
        code: 'UA',
        name: 'Ukraine',
        value: 4,
        percent: 2.2,
      },
      {
        code: 'RU',
        name: 'Russia',
        value: 1,
        percent: 1,
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
