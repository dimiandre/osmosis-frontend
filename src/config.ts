import { Bech32Address } from '@keplr-wallet/cosmos';
import { ChainInfoWithExplorer } from './stores/chain';
import { DenomHelper } from '@keplr-wallet/common';
import { Int } from '@keplr-wallet/unit';

export const HideCreateNewPool: boolean = false;
export const HideLBPPoolFromPage: boolean = false;
export const HidePoolFromPage: {
	[poolId: string]: boolean | undefined;
} = {
	/*
	'16': window.location.hostname.startsWith('app.'),
	 */
};

export const LockupAbledPoolIds: {
	[poolId: string]: boolean | undefined;
} = {
	'1': true,
	'2': true,
	'3': true,
	'4': true,
	'5': true,
	'6': true,
	'7': true,
	'8': true,
	'9': true,
	'10': true,
	'13': true,
	'15': true,
	'461': true,
	'482': true,
};

export const PromotedLBPPoolIds: {
	poolId: string;
	name: string;
	baseDenom: string;
	destDenom: string;
}[] = [
	/*
	{
		poolId: '21',
		name: 'Regen Network',
		baseDenom: DenomHelper.ibcDenom([{ portId: 'transfer', channelId: 'channel-8' }], 'uregen'),
		destDenom: DenomHelper.ibcDenom([{ portId: 'transfer', channelId: 'channel-0' }], 'uatom'),
	},
	 */
];
export const HideAddLiquidityPoolIds: {
	[poolId: string]: boolean;
} = {
	/*
	'21': window.location.hostname.startsWith('app.'),
	 */
};
export const PreferHeaderShowTokenPricePoolIds: {
	[poolId: string]:
		| {
				baseDenom: string;
		  }
		| undefined;
} = {
	/*
	'21': {
		baseDenom: DenomHelper.ibcDenom([{ portId: 'transfer', channelId: 'channel-8' }], 'uregen'),
	},
	 */
};
export const ExtraGaugeInPool: {
	[poolId: string]:
		| {
				gaugeId: string;
				denom: string;
				extraRewardAmount?: Int;
		  }
		| {
				gaugeId: string;
				denom: string;
				extraRewardAmount?: Int;
		  }[];
} = {
	'482': [
		{
			gaugeId: '1468',
			denom: 'ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59',
		},
		{
			gaugeId: '1469',
			denom: 'ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59',
		},
		{
			gaugeId: '1470',
			denom: 'ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59',
		},
	],
	'461': [
		{
			gaugeId: '1471',
			denom: 'ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59',
		},
		{
			gaugeId: '1472',
			denom: 'ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59',
		},
		{
			gaugeId: '1473',
			denom: 'ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59',
		},
	],
};

export const PoolsPerPage = 10;
export const RewardEpochIdentifier = 'day';

/**
 * Determine the channel info per the chain.
 * Guide users to use the same channel for convenience.
 */
export const IBCAssetInfos: {
	counterpartyChainId: string;
	// Souce channel id based on the Osmosis chain
	sourceChannelId: string;
	// Destination channel id from Osmosis chain
	destChannelId: string;
	coinMinimalDenom: string;
}[] = [
	{
		counterpartyChainId: 'cosmoshub-4',
		sourceChannelId: 'channel-0',
		destChannelId: 'channel-141',
		coinMinimalDenom: 'uatom',
	},
	{
		counterpartyChainId: 'akashnet-2',
		sourceChannelId: 'channel-1',
		destChannelId: 'channel-9',
		coinMinimalDenom: 'uakt',
	},
	{
		counterpartyChainId: 'regen-1',
		sourceChannelId: 'channel-8',
		destChannelId: 'channel-1',
		coinMinimalDenom: 'uregen',
	},
	{
		counterpartyChainId: 'sentinelhub-2',
		sourceChannelId: 'channel-2',
		destChannelId: 'channel-0',
		coinMinimalDenom: 'udvpn',
	},
	{
		counterpartyChainId: 'core-1',
		sourceChannelId: 'channel-4',
		destChannelId: 'channel-6',
		coinMinimalDenom: 'uxprt',
	},
	{
		counterpartyChainId: 'irishub-1',
		sourceChannelId: 'channel-6',
		destChannelId: 'channel-3',
		coinMinimalDenom: 'uiris',
	},
	{
		counterpartyChainId: 'crypto-org-chain-mainnet-1',
		sourceChannelId: 'channel-5',
		destChannelId: 'channel-10',
		coinMinimalDenom: 'basecro',
	},
	{
		counterpartyChainId: 'iov-mainnet-ibc',
		sourceChannelId: 'channel-15',
		destChannelId: 'channel-2',
		coinMinimalDenom: 'uiov',
	},
	{
		counterpartyChainId: 'emoney-3',
		sourceChannelId: 'channel-37',
		destChannelId: 'channel-0',
		coinMinimalDenom: 'ungm',
	},
	{
		counterpartyChainId: 'emoney-3',
		sourceChannelId: 'channel-37',
		destChannelId: 'channel-0',
		coinMinimalDenom: 'eeur',
	},{
		counterpartyChainId: 'juno-1',
		sourceChannelId: 'channel-42',
		destChannelId: 'channel-0',
		coinMinimalDenom: 'ujuno',
	}
];

export const EmbedChainInfos: ChainInfoWithExplorer[] = [
	{
		rpc: 'https://rpc-osmosis.keplr.app',
		rest: 'https://lcd-osmosis.keplr.app',
		chainId: 'osmosis-1',
		chainName: 'Osmosis',
		stakeCurrency: {
			coinDenom: 'OSMO',
			coinMinimalDenom: 'uosmo',
			coinDecimals: 6,
			coinGeckoId: 'osmosis',
			coinImageUrl: window.location.origin + '/public/assets/tokens/osmosis.svg',
		},
		bip44: {
			coinType: 118,
		},
		bech32Config: Bech32Address.defaultBech32Config('osmo'),
		currencies: [
			{
				coinDenom: 'OSMO',
				coinMinimalDenom: 'uosmo',
				coinDecimals: 6,
				coinGeckoId: 'osmosis',
				coinImageUrl: window.location.origin + '/public/assets/tokens/osmosis.svg',
			},
			{
				coinDenom: 'ION',
				coinMinimalDenom: 'uion',
				coinDecimals: 6,
				coinGeckoId: 'ion',
				coinImageUrl: window.location.origin + '/public/assets/tokens/ion.png',
			},
		],
		feeCurrencies: [
			{
				coinDenom: 'OSMO',
				coinMinimalDenom: 'uosmo',
				coinDecimals: 6,
				coinGeckoId: 'osmosis',
				coinImageUrl: window.location.origin + '/public/assets/tokens/osmosis.svg',
			},
		],
		features: ['stargate', 'ibc-transfer'],
		explorerUrlToTx: 'https://www.mintscan.io/osmosis/txs/{txHash}',
	},
	{
		rpc: 'https://rpc-cosmoshub.keplr.app',
		rest: 'https://lcd-cosmoshub.keplr.app',
		chainId: 'cosmoshub-4',
		chainName: 'Cosmos Hub',
		stakeCurrency: {
			coinDenom: 'ATOM',
			coinMinimalDenom: 'uatom',
			coinDecimals: 6,
			coinGeckoId: 'cosmos',
			coinImageUrl: window.location.origin + '/public/assets/tokens/cosmos.svg',
		},
		bip44: {
			coinType: 118,
		},
		bech32Config: Bech32Address.defaultBech32Config('cosmos'),
		currencies: [
			{
				coinDenom: 'ATOM',
				coinMinimalDenom: 'uatom',
				coinDecimals: 6,
				coinGeckoId: 'cosmos',
				coinImageUrl: window.location.origin + '/public/assets/tokens/cosmos.svg',
			},
		],
		feeCurrencies: [
			{
				coinDenom: 'ATOM',
				coinMinimalDenom: 'uatom',
				coinDecimals: 6,
				coinGeckoId: 'cosmos',
				coinImageUrl: window.location.origin + '/public/assets/tokens/cosmos.svg',
			},
		],
		coinType: 118,
		features: ['stargate', 'ibc-transfer'],
		explorerUrlToTx: 'https://www.mintscan.io/cosmos/txs/{txHash}',
	},
	{
		rpc: 'https://rpc-akash.keplr.app',
		rest: 'https://lcd-akash.keplr.app',
		chainId: 'akashnet-2',
		chainName: 'Akash',
		stakeCurrency: {
			coinDenom: 'AKT',
			coinMinimalDenom: 'uakt',
			coinDecimals: 6,
			coinGeckoId: 'akash-network',
			coinImageUrl: window.location.origin + '/public/assets/tokens/akt.svg',
		},
		bip44: {
			coinType: 118,
		},
		bech32Config: Bech32Address.defaultBech32Config('akash'),
		currencies: [
			{
				coinDenom: 'AKT',
				coinMinimalDenom: 'uakt',
				coinDecimals: 6,
				coinGeckoId: 'akash-network',
				coinImageUrl: window.location.origin + '/public/assets/tokens/akt.svg',
			},
		],
		feeCurrencies: [
			{
				coinDenom: 'AKT',
				coinMinimalDenom: 'uakt',
				coinDecimals: 6,
				coinGeckoId: 'akash-network',
				coinImageUrl: window.location.origin + '/public/assets/tokens/akt.svg',
			},
		],
		coinType: 118,
		features: ['stargate', 'ibc-transfer'],
		explorerUrlToTx: 'https://www.mintscan.io/akash/txs/{txHash}',
	},
	{
		rpc: 'https://rpc-regen.keplr.app',
		rest: 'https://lcd-regen.keplr.app',
		chainId: 'regen-1',
		chainName: 'Regen Network',
		stakeCurrency: {
			coinDenom: 'REGEN',
			coinMinimalDenom: 'uregen',
			coinDecimals: 6,
			coinImageUrl: window.location.origin + '/public/assets/tokens/regen.png',
			coinGeckoId: 'regen',
		},
		bip44: { coinType: 118 },
		bech32Config: Bech32Address.defaultBech32Config('regen'),
		currencies: [
			{
				coinDenom: 'REGEN',
				coinMinimalDenom: 'uregen',
				coinDecimals: 6,
				coinImageUrl: window.location.origin + '/public/assets/tokens/regen.png',
				coinGeckoId: 'regen',
			},
		],
		feeCurrencies: [
			{
				coinDenom: 'REGEN',
				coinMinimalDenom: 'uregen',
				coinDecimals: 6,
				coinImageUrl: window.location.origin + '/public/assets/tokens/regen.png',
				coinGeckoId: 'regen',
			},
		],
		features: ['stargate', 'ibc-transfer'],
		explorerUrlToTx: 'https://regen.aneka.io/txs/{txHash}',
	},
	{
		rpc: 'https://rpc-sentinel.keplr.app',
		rest: 'https://lcd-sentinel.keplr.app',
		chainId: 'sentinelhub-2',
		chainName: 'Sentinel',
		stakeCurrency: {
			coinDenom: 'DVPN',
			coinMinimalDenom: 'udvpn',
			coinDecimals: 6,
			coinGeckoId: 'sentinel',
			coinImageUrl: window.location.origin + '/public/assets/tokens/dvpn.png',
		},
		bip44: { coinType: 118 },
		bech32Config: Bech32Address.defaultBech32Config('sent'),
		currencies: [
			{
				coinDenom: 'DVPN',
				coinMinimalDenom: 'udvpn',
				coinDecimals: 6,
				coinGeckoId: 'sentinel',
				coinImageUrl: window.location.origin + '/public/assets/tokens/dvpn.png',
			},
		],
		feeCurrencies: [
			{
				coinDenom: 'DVPN',
				coinMinimalDenom: 'udvpn',
				coinDecimals: 6,
				coinGeckoId: 'sentinel',
				coinImageUrl: window.location.origin + '/public/assets/tokens/dvpn.png',
			},
		],
		explorerUrlToTx: 'https://www.mintscan.io/sentinel/txs/{txHash}',
		features: ['stargate', 'ibc-transfer'],
	},
	{
		rpc: 'https://rpc-persistence.keplr.app',
		rest: 'https://lcd-persistence.keplr.app',
		chainId: 'core-1',
		chainName: 'Persistence',
		stakeCurrency: {
			coinDenom: 'XPRT',
			coinMinimalDenom: 'uxprt',
			coinDecimals: 6,
			coinGeckoId: 'persistence',
			coinImageUrl: window.location.origin + '/public/assets/tokens/xprt.png',
		},
		bip44: {
			coinType: 750,
		},
		bech32Config: Bech32Address.defaultBech32Config('persistence'),
		currencies: [
			{
				coinDenom: 'XPRT',
				coinMinimalDenom: 'uxprt',
				coinDecimals: 6,
				coinGeckoId: 'persistence',
				coinImageUrl: window.location.origin + '/public/assets/tokens/xprt.png',
			},
		],
		feeCurrencies: [
			{
				coinDenom: 'XPRT',
				coinMinimalDenom: 'uxprt',
				coinDecimals: 6,
				coinGeckoId: 'persistence',
				coinImageUrl: window.location.origin + '/public/assets/tokens/xprt.png',
			},
		],
		features: ['stargate', 'ibc-transfer'],
		explorerUrlToTx: 'https://www.mintscan.io/persistence/txs/{txHash}',
	},
	{
		rpc: 'https://rpc-iris.keplr.app',
		rest: 'https://lcd-iris.keplr.app',
		chainId: 'irishub-1',
		chainName: 'IRISnet',
		stakeCurrency: {
			coinDenom: 'IRIS',
			coinMinimalDenom: 'uiris',
			coinDecimals: 6,
			coinGeckoId: 'iris-network',
			coinImageUrl: window.location.origin + '/public/assets/tokens/iris.svg',
		},
		bip44: {
			coinType: 118,
		},
		bech32Config: Bech32Address.defaultBech32Config('iaa'),
		currencies: [
			{
				coinDenom: 'IRIS',
				coinMinimalDenom: 'uiris',
				coinDecimals: 6,
				coinGeckoId: 'iris-network',
				coinImageUrl: window.location.origin + '/public/assets/tokens/iris.svg',
			},
		],
		feeCurrencies: [
			{
				coinDenom: 'IRIS',
				coinMinimalDenom: 'uiris',
				coinDecimals: 6,
				coinGeckoId: 'iris-network',
				coinImageUrl: window.location.origin + '/public/assets/tokens/iris.svg',
			},
		],
		features: ['stargate', 'ibc-transfer'],
		explorerUrlToTx: 'https://www.mintscan.io/iris/txs/{txHash}',
	},
	{
		rpc: 'https://rpc-crypto-org.keplr.app/',
		rest: 'https://lcd-crypto-org.keplr.app/',
		chainId: 'crypto-org-chain-mainnet-1',
		chainName: 'Crypto.org',
		stakeCurrency: {
			coinDenom: 'CRO',
			coinMinimalDenom: 'basecro',
			coinDecimals: 8,
			coinGeckoId: 'crypto-com-chain',
			coinImageUrl: window.location.origin + '/public/assets/tokens/cro.png',
		},
		bip44: {
			coinType: 394,
		},
		bech32Config: Bech32Address.defaultBech32Config('cro'),
		currencies: [
			{
				coinDenom: 'CRO',
				coinMinimalDenom: 'basecro',
				coinDecimals: 8,
				coinGeckoId: 'crypto-com-chain',
				coinImageUrl: window.location.origin + '/public/assets/tokens/cro.png',
			},
		],
		feeCurrencies: [
			{
				coinDenom: 'CRO',
				coinMinimalDenom: 'basecro',
				coinDecimals: 8,
				coinGeckoId: 'crypto-com-chain',
				coinImageUrl: window.location.origin + '/public/assets/tokens/cro.png',
			},
		],
		features: ['stargate', 'ibc-transfer'],
		explorerUrlToTx: 'https://www.mintscan.io/crypto-org/txs/{txHash}',
	},
	{
		rpc: 'https://rpc-iov.keplr.app',
		rest: 'https://lcd-iov.keplr.app',
		chainId: 'iov-mainnet-ibc',
		chainName: 'Starname',
		stakeCurrency: {
			coinDenom: 'IOV',
			coinMinimalDenom: 'uiov',
			coinDecimals: 6,
			coinGeckoId: 'starname',
			coinImageUrl: window.location.origin + '/public/assets/tokens/iov.png',
		},
		bip44: {
			coinType: 234,
		},
		bech32Config: Bech32Address.defaultBech32Config('star'),
		currencies: [
			{
				coinDenom: 'IOV',
				coinMinimalDenom: 'uiov',
				coinDecimals: 6,
				coinGeckoId: 'starname',
				coinImageUrl: window.location.origin + '/public/assets/tokens/iov.png',
			},
		],
		feeCurrencies: [
			{
				coinDenom: 'IOV',
				coinMinimalDenom: 'uiov',
				coinDecimals: 6,
				coinGeckoId: 'starname',
				coinImageUrl: window.location.origin + '/public/assets/tokens/iov.png',
			},
		],
		features: ['stargate', 'ibc-transfer'],
		explorerUrlToTx: 'https://www.mintscan.io/starname/txs/{txHash}',
	},
	{
		rpc: 'https://rpc-emoney.keplr.app',
		rest: 'https://lcd-emoney.keplr.app',
		chainId: 'emoney-3',
		chainName: 'e-Money',
		stakeCurrency: {
			coinDenom: 'NGM',
			coinMinimalDenom: 'ungm',
			coinDecimals: 6,
			coinGeckoId: 'e-money',
			coinImageUrl: window.location.origin + '/public/assets/tokens/ngm.png',
		},
		bip44: {
			coinType: 118,
		},
		bech32Config: Bech32Address.defaultBech32Config('emoney'),
		currencies: [
			{
				coinDenom: 'NGM',
				coinMinimalDenom: 'ungm',
				coinDecimals: 6,
				coinGeckoId: 'e-money',
				coinImageUrl: window.location.origin + '/public/assets/tokens/ngm.png',
			},
			{
				coinDenom: 'EEUR',
				coinMinimalDenom: 'eeur',
				coinDecimals: 6,
				coinImageUrl: window.location.origin + '/public/assets/tokens/ngm.png',
			},
		],
		feeCurrencies: [
			{
				coinDenom: 'NGM',
				coinMinimalDenom: 'ungm',
				coinDecimals: 6,
				coinGeckoId: 'e-money',
				coinImageUrl: window.location.origin + '/public/assets/tokens/ngm.png',
			},
		],
		gasPriceStep: {
			low: 1,
			average: 1,
			high: 1,
		},
		features: ['stargate', 'ibc-transfer'],
		explorerUrlToTx: 'https://emoney.bigdipper.live/transactions/${txHash}',
	},{
		rpc: 'https://rpc-juno.itastakers.com',
		rest: 'https://lcd-juno.itastakers.com',
		chainId: 'juno-1',
		chainName: 'Juno',
		stakeCurrency: {
			coinDenom: 'JUNO',
			coinMinimalDenom: 'ujuno',
			coinDecimals: 6,
			coinGeckoId: '',
			coinImageUrl: '',
		},
		bip44: {
			coinType: 118,
		},
		bech32Config: Bech32Address.defaultBech32Config('juno'),
		currencies: [
			{
				coinDenom: 'JUNO',
				coinMinimalDenom: 'ujuno',
				coinDecimals: 6,
				coinGeckoId: '',
				coinImageUrl: '',
			},
		],
		feeCurrencies: [
			{
				coinDenom: 'JUNO',
				coinMinimalDenom: 'ujuno',
				coinDecimals: 6,
				coinGeckoId: '',
				coinImageUrl: '',
			},
		],
		features: ['stargate', 'ibc-transfer'],
		explorerUrlToTx: 'http://junoscan.com/tx/${txHash}',
	
	}
];
