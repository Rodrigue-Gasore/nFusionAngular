export interface Data {
  symbol: string;
  baseCurrency: string;
  last: number;
  bid: number;
  ask: number;
  high: number;
  low: number;
  open: number;
  oneDayValue: number;
  oneDayChange: number;
  oneDayPercentChange: number;
  timeStamp: string;
}
export interface Metal {
  requestedSymbol: string;
  requestedCurrency: string;
  requestedUnitOfMeasure: string;
  success: boolean;
  error: string;
  data: Data;
}

// export const metals = [
//   {
//     "requestedSymbol": "Gold",
//     "requestedCurrency": "USD",
//     "requestedUnitOfMeasure": "toz",
//     "success": true,
//     "data": {
//       "symbol": "Gold",
//       "baseCurrency": "USD",
//       "last": 1863.985,
//       "bid": 1862.985,
//       "ask": 1864.985,
//       "high": 1877.115,
//       "low": 1859.25,
//       "open": 1862.35,
//       "oneDayValue": 1862.845,
//       "oneDayChange": 1.14,
//       "oneDayPercentChange": 0.0612,
//       "timeStamp": "2021-11-16T14:45:23+00:00"
//     }
//   },
//   {
//     "requestedSymbol": "Silver",
//     "requestedCurrency": "USD",
//     "requestedUnitOfMeasure": "toz",
//     "success": true,
//     "data": {
//       "symbol": "Silver",
//       "baseCurrency": "USD",
//       "last": 25.064,
//       "bid": 24.989,
//       "ask": 25.139,
//       "high": 25.403,
//       "low": 24.928,
//       "open": 25.0615,
//       "oneDayValue": 25.065,
//       "oneDayChange": -0.001,
//       "oneDayPercentChange": -0.00399,
//       "timeStamp": "2021-11-16T14:45:23+00:00"
//     }
//   }
// ];