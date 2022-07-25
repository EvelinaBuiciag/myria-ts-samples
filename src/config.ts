export default {
  user_stark_key: '0x' + process.env.STARK_KEY || "",
  user_public_key: process.env.PUBLIC_KEY || "",
  user_private_key: process.env.PRIVATE_KEY || "",
  collection_contract_address: process.env.CONTRACT_ADDRESS || "",
  metadata_api_url: process.env.METADATA_API_URL || "",
  project_public_id: parseInt(process.env.PROJECT_PUBLIC_ID || "3a81b6f4-821e-48ae-bcd5-0d99533c9136"),
}