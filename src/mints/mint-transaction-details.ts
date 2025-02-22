import {
  GetMintedTransactionParams,
  GetMintedTransactionResponse,
  MintingManager
} from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const mintingManager: MintingManager = new MintingManager(env);
  const transactionId: number = 39026;

  const params: GetMintedTransactionParams = {
    transactionId: transactionId,
  };

  let mintTransactionResponse: GetMintedTransactionResponse | undefined;
  try {
    console.log(
      `Retrieving details of the ${transactionId} mint transaction...`
    );
    mintTransactionResponse = await mintingManager.getMintTransactionList(
      params
    );
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Mint transaction response:");
  console.log(JSON.stringify(mintTransactionResponse, null, 2));
})();
