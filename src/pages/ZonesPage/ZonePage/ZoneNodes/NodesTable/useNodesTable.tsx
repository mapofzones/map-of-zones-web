import { NodeData } from './TableRow/TableRow.props';

export function useNodesTable(): { data: NodeData[]; loading: boolean } {
  return {
    data: [
      {
        id: '5ec625f6d45ga313jh13jk1h2j3hk1hjh1',
        moniker: 'ZenChainLabs-RPC',
        ip: '135.181.5.176',
        country: 'Netherlands',
        isp: 'Choopa, LLC',
        dataCenter: 'Google Cloud Platform',
        lastSync: '30/09/2022 21:43',
        apiType: 'REST',
        apiUrl: 'http://178.76.189.106',
        txIndexing: true,
      },
      {
        id: '78afg9fm2n780123kj12lk3j1kl2j3l1k2',
        moniker: 'one.cosmos-mainnet.polypore.xyz0',
        ip: '42.163.1.977',
        country: 'Moldova',
        isp: 'Alibaba',
        dataCenter: 'Google Cloud Platform long name 54j',
        lastSync: '28/09/2022 9:41',
        apiType: 'gRPC',
        apiUrl: 'http://115.216.10.147',
        txIndexing: false,
      },
    ],
    loading: false,
  };
}
