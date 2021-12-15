// import * as _ from 'lodash';
import * as nearAPI from 'near-api-js';
// import { CodeResult, QueryResponseKind } from 'near-api-js/lib/providers/provider';
import getConfig, { IConfig } from './config';
import { WalletConnection } from 'near-api-js';

export interface InitContract {
    dtokenContract: any, // TODO: figure out how to initialize as a Contract
    controllerContract: any, // TODO: figure out how to initialize as a Contract
    currentUser: {accountId: string, balance: string} | undefined,
    nearConfig: IConfig,
    walletConnection: WalletConnection
}

export async function initContract() {
  const nearConfig = getConfig(process.env.NODE_ENV || 'testnet');
  const nearConfigDtoken = getConfig(process.env.NODE_ENV || 'testnet', 'dev-1639068270320-45550015151191');
  const nearConfigController = getConfig(process.env.NODE_ENV || 'testnet', 'dev-1639146095042-48833853079859');
  const keyStore = new nearAPI.keyStores.BrowserLocalStorageKeyStore();

  // Initializing connection to the NEAR testnet
  const near = await nearAPI.connect({
    keyStore,
    headers: {},
    ...nearConfig
  });

  // Initialize wallet connection
  const { WalletConnection } = nearAPI;
  const walletConnection = new WalletConnection(near, null);

  // Load in user's account data
  let currentUser;
  try {
      if (walletConnection.getAccountId()) {
          currentUser = {
              // Gets the accountId as a string
              accountId: walletConnection.getAccountId(),
              // Gets the user's token balance
              balance: (await walletConnection.account().state()).amount,
          };
      }
  } catch (err) {
      console.error(err);
  }

  // Initializing our contract APIs by contract name and configuration
  const dtokenContract = new nearAPI.Contract(
      // User's accountId as a string
      walletConnection.account(),
      nearConfigDtoken.contractName,
      {
        // View methods are read-only – they don't modify the state, but usually return some value
        'viewMethods': [
          'get_exchange_rate',
          'get_total_reserve',
          'get_total_borrows',
          'get_underlying_balance'
        ],
        'changeMethods': ['add_reserve']
      }
  );

  const controllerContract = new nearAPI.Contract(
      // User's accountId as a string
      walletConnection.account(),
      nearConfigController.contractName,
      {
        // View methods are read-only – they don't modify the state, but usually return some value
        'viewMethods': [
            'has_collaterall',
            'get_interest_rate',
            'borrow_allowed',
            'supply_allowed',
        ],
        'changeMethods': [
            'set_borrow_cap',
            'set_interest_rate_model',
            'add_market',
            'add_market_',
        ]
      }
  );

  return {
    dtokenContract,
    controllerContract,
    currentUser,
    nearConfig,
    walletConnection
  };
}
