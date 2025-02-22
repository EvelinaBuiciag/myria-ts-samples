import { IMyriaClient, ModuleFactory, MyriaClient } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const publicKey = config.public_key;
  const env = config.environment;

  const iClient: IMyriaClient = {
    provider: null,
    networkId: null,
    web3: null,
    env: env
  };
  const mClient = new MyriaClient(iClient);
  const moduleFactory = new ModuleFactory(mClient);
  const assetManager = moduleFactory.getAssetOnchainManager();

  let assetsResponse;
  try {
    console.log(`Retrieving assets...`);
    assetsResponse = await assetManager.getAssetsByOwnerPublicKey(
      publicKey
    );
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Requested assets response:");
  console.log(JSON.stringify(assetsResponse, null, 2));
})();
