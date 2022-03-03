// @ts-check
// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
const go = {
  "app": {
    "Account": {
      /**
       * GetAccountInfo
       * @returns {Promise<Account|Error>}  - Go Type: account.Account
       */
      "GetAccountInfo": () => {
        return window.go.app.Account.GetAccountInfo();
      },
      /**
       * IsAccount
       * @returns {Promise<boolean>}  - Go Type: bool
       */
      "IsAccount": () => {
        return window.go.app.Account.IsAccount();
      },
      /**
       * IsAccountSetting
       * @returns {Promise<boolean>}  - Go Type: bool
       */
      "IsAccountSetting": () => {
        return window.go.app.Account.IsAccountSetting();
      },
      /**
       * WailsInit
       * @param {Context} arg1 - Go Type: context.Context
       * @returns {Promise<Error>}  - Go Type: error
       */
      "WailsInit": (arg1) => {
        return window.go.app.Account.WailsInit(arg1);
      },
    },
    "P2p": {
      /**
       * CloseLink
       * @param {string} arg1 - Go Type: string
       * @returns {Promise<number|Error>}  - Go Type: int
       */
      "CloseLink": (arg1) => {
        return window.go.app.P2p.CloseLink(arg1);
      },
      /**
       * GetLinkStatus
       * @returns {Promise<LinkInfo>}  - Go Type: *[]p2p.LinkInfo
       */
      "GetLinkStatus": () => {
        return window.go.app.P2p.GetLinkStatus();
      },
      /**
       * IsP2PSetting
       * @returns {Promise<boolean>}  - Go Type: bool
       */
      "IsP2PSetting": () => {
        return window.go.app.P2p.IsP2PSetting();
      },
      /**
       * Link
       * @param {number} arg1 - Go Type: int
       * @param {string} arg2 - Go Type: string
       * @returns {Promise<boolean|Error>}  - Go Type: bool
       */
      "Link": (arg1, arg2) => {
        return window.go.app.P2p.Link(arg1, arg2);
      },
      /**
       * WailsInit
       * @param {Context} arg1 - Go Type: context.Context
       * @returns {Promise<Error>}  - Go Type: error
       */
      "WailsInit": (arg1) => {
        return window.go.app.P2p.WailsInit(arg1);
      },
      /**
       * WailsShutdown
       * @returns {Promise<void>} 
       */
      "WailsShutdown": () => {
        return window.go.app.P2p.WailsShutdown();
      },
    },
    "Resource": {
      /**
       * GetResources
       * @returns {Promise<Array<Resource>|Error>}  - Go Type: []resource.Resource
       */
      "GetResources": () => {
        return window.go.app.Resource.GetResources();
      },
      /**
       * WailsInit
       * @param {Context} arg1 - Go Type: context.Context
       * @returns {Promise<Error>}  - Go Type: error
       */
      "WailsInit": (arg1) => {
        return window.go.app.Resource.WailsInit(arg1);
      },
    },
    "Setting": {
      /**
       * GetSetting
       * @returns {Promise<Config|Error>}  - Go Type: *app.Config
       */
      "GetSetting": () => {
        return window.go.app.Setting.GetSetting();
      },
      /**
       * InitP2pSetting
       * @returns {Promise<boolean|Error>}  - Go Type: bool
       */
      "InitP2pSetting": () => {
        return window.go.app.Setting.InitP2pSetting();
      },
      /**
       * Setting
       * @param {string} arg1 - Go Type: string
       * @param {string} arg2 - Go Type: string
       * @returns {Promise<boolean|Error>}  - Go Type: bool
       */
      "Setting": (arg1, arg2) => {
        return window.go.app.Setting.Setting(arg1, arg2);
      },
      /**
       * WailsInit
       * @param {Context} arg1 - Go Type: context.Context
       * @returns {Promise<Error>}  - Go Type: error
       */
      "WailsInit": (arg1) => {
        return window.go.app.Setting.WailsInit(arg1);
      },
    },
    "Wallet": {
      /**
       * DeleteWallet
       * @returns {Promise<void>} 
       */
      "DeleteWallet": () => {
        return window.go.app.Wallet.DeleteWallet();
      },
      /**
       * GetWalletInfo
       * @returns {Promise<Wallet|Error>}  - Go Type: wallet.Wallet
       */
      "GetWalletInfo": () => {
        return window.go.app.Wallet.GetWalletInfo();
      },
      /**
       * SaveWallet
       * @param {string} arg1 - Go Type: string
       * @param {string} arg2 - Go Type: string
       * @returns {Promise<Wallet|Error>}  - Go Type: *wallet.Wallet
       */
      "SaveWallet": (arg1, arg2) => {
        return window.go.app.Wallet.SaveWallet(arg1, arg2);
      },
      /**
       * WailsInit
       * @param {Context} arg1 - Go Type: context.Context
       * @returns {Promise<Error>}  - Go Type: error
       */
      "WailsInit": (arg1) => {
        return window.go.app.Wallet.WailsInit(arg1);
      },
    },
  },

};
export default go;