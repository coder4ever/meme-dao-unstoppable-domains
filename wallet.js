import { ethers } from 'ethers';
// list of deployed addresses
import addresses from './addresses.json';
import lensHubData from './artifacts/contracts/core/LensHub.sol/LensHub.json';
import reactionsModuleData from './artifacts/contracts/core/modules/reference/ReactionsModule.sol/ReactionsModule.json';
import profileHolderData from './artifacts/contracts/ProfileHolder.sol/ProfileHolder.json';

// const allowedNetworks = ["localhost"];
export const provider = new ethers.providers.Web3Provider(window.ethereum); // connection to connect to wallet allowedNetworks

export const accounts = provider.send('eth_requestAccounts', []);

export const lensHub = new ethers.Contract(addresses['lensHub proxy'], lensHubData.abi, provider);

export const reactionsModule = new ethers.Contract(
  addresses['ReactionsModule'],
  reactionsModuleData.abi,
  provider
);
export const profileHolder = new ethers.Contract(
  addresses['ProfileHolder'],
  profileHolderData.abi,
  provider
);
