import {
  CollectionManager,
  CreateCollectionParams,
  CreateCollectionResponse
} from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const collectionManager: CollectionManager = new CollectionManager(env);

  const contractAddress: string = config.collection_contract_address;
  const metadataApiUrl: string = config.metadata_api_url;
  const publicKey: string = config.public_key;
  const projectId: number = config.project_id;
  const starkKey: string = config.stark_key;

  const params: CreateCollectionParams = {
    name: "COLLECTION_NAME",
    description: "COLLECTION_DESCRIPTION",
    contractAddress: contractAddress,
    metadataApiUrl: metadataApiUrl,
    ownerPublicKey: publicKey,
    projectId: projectId,
    starkKey: starkKey,
  };

  let collectionResponse: CreateCollectionResponse | undefined;
  try {
    console.log("Creating the collection...");
    collectionResponse = await collectionManager.createCollection(params);
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Created collection response:");
  console.log(JSON.stringify(collectionResponse, null, 2));
})();
