import React from 'react'
import { Link } from 'react-router-dom';

export const wallets = [
    {
        name: "Rainbow",
        logo : require("../assets/images/rainbow.png")
    },
    {
        name: "Trust",
        logo: require("../assets/images/trust.png")
    },
    {
        name: "Wallet Connect",
        logo: require("../assets/images/walletconnect.png")
    },
    {
        name: "Meta Mask",
        logo: require("../assets/images/metamask.png")
    },
    {
        name: "Gnosis Safe Mutltisig",
        logo: require("../assets/images/genosis.jpg")
    },
    {
        name: "THETA",
        logo: require("../assets/images/theta.jpg")
    },
    {
        name: "Cryto.com | DeFI Wallet",
        logo: require("../assets/images/crypto.png")
    },
    {
        name: "Ledger",
        logo: require("../assets/images/ledger.jpg")
    },
    {
        name : "Coinbase",
        logo: require("../assets/images/coinbase.jpg")
    },
    {
        name : "VeChain",
        logo : require("../assets/images/vechain-vet-logo.png")
    },
    {
        name : "Pillar",
        logo: require("../assets/images/pillar.png")
    },
    {
        name : "imToken",
        logo: require("../assets/images/imtoken.png")
    },
    {
        name : "TokenPocket",
        logo: require("../assets/images/tokenpocket.png")
    },
    {
        name : "Walleth",
        logo : require("../assets/images/walleth.png")
    },
    {
        name: "Atomic",
        logo: require("../assets/images/atomic.png")
    },
    {
        name: "Authereum",
        logo: require("../assets/images/authereum.png")
    },
    {
        name: "Huobi Wallet",
        logo: require("../assets/images/houbi.jpg")
    },
    {
        name: "Eidoo",
        logo: require("../assets/images/eiido.png")
    },
    {
        name: "ZelCore",
        logo: require("../assets/images/zelcore.png")
    },
    {
        name: "Nash",
        logo : require("../assets/images/nash.jpg")
    },
    {
        name: "Coinomi",
        logo: require("../assets/images/coinomi.jpg")
    },
    {
        name: "GridPlus",
        logo: require("../assets/images/gridplus.png")
    },
    {
        name: "Cool Wallet",
        logo: require("../assets/images/coolwallet.png")
    },
    {
        name: "Alice",
        logo: require("../assets/images/alice.png")
    },
    {
        name: "AlphaWallet",
        logo: require("../assets/images/alphawa.jpg")
    },
    {
        name: "Tokenary",
        logo: require("../assets/images/tokenary.png")
    },
    {
        name: "SafePal",
        logo: require("../assets/images/safepal.png")
    },
    {
        name: "Equal",
        logo: require("../assets/images/eeee.jpg")
    },
    {
        name: "Infinito",
        logo: require("../assets/images/infinito.png")
    },
    {
        name: "MathWallet",
        logo: require("../assets/images/math-wallet.png")
    },
    {
        name: "MYKEY",
        logo: require("../assets/images/mykey.png")
    },
    {
        name : "Spatium",
        logo: require("../assets/images/spatium.jpg")
    },
    {
        name: "Wallet.io",
        logo: require("../assets/images/wallet-io.png")
    },
    {
        name : "Infinity Wallet",
        logo: require("../assets/images/infinity-wallet.png")
    },
    {
        name: "Ownbit",
        logo : require("../assets/images/ownbit.png")
    },
    {
        name: "EasyPocket",
        logo: require("../assets/images/easypocket.jpg")
    },
    {
        name: "Onto",
        logo: require("../assets/images/onto.png")
    },
    {
        name: "Bridge Wallet",
        logo: require("../assets/images/bridge.png")
    },
    {
        name: "SparkPoint",
        logo: require("../assets/images/sparkpoint.png")
    },
    {
        name: "ViaWallet",
        logo: require("../assets/images/viawallet.png")
    },
    {
        name: "Coin98",
        logo: require("../assets/images/coin98.png")
    },
    {
        name: "BitKeep",
        logo: require("../assets/images/bitkeep.png")
    },
    {
        name: "Vision",
        logo: require("../assets/images/vision.png")
    },
    {
        name: "SWFT Wallet",
        logo: require("../assets/images/swft.png")
    },
    {
        name: "PeakDeFi Wallet",
        logo: require("../assets/images/peakdefi.png")
    },
    {
        name: "XDC Wallet",
        logo: require("../assets/images/xdc.png")
    },
    {
        name: "Unstoppable Wallet",
        logo: require("../assets/images/unstoppable.png")
    },
    {
        name: "MEET.ONE",
        logo: require("../assets/images/meetone.jpg")
    },
    {
        name: "Dok Wallet",
        logo: require("../assets/images/dok.png")
    },
    {
        name: "AT.Wallet",
        logo: require("../assets/images/atwallet.png")
    },
    {
        name: "Myetherwallet",
        logo: require("../assets/images/myetherwallet.png")
    },
    {
        name: "Aave",
        logo: require("../assets/images/aave.jpg")
    },
    {
        name: "Maiar",
        logo: require("../assets/images/maira.jpg")
    },
    {
        name: "MoriX Wallet",
        logo: require("../assets/images/morix.png")
    },
    {
        name: "Mdas Wallet",
        logo: require("../assets/images/midas.png")
    }
]

export const WalletList = () => {
    const [searchQuery, setSearchQuery] = React.useState("");
    return (
        <div>
            <div className='flex py-4 items-center sticky top-0 left-0 w-full bg-white justify-center px-4 lg:px-32'>
            <input className='px-4 py-4 outline-none rounded-lg bg-sky-300 bg-opacity-10 w-full' stype="search" placeholder='Search Wallets' onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
        <div className='grid grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-10 px-4 lg:px-36 py-6 lg:py-10 mt-6'>
           {
               wallets.filter(wallet => wallet.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1).map((wallet,i) => {
                   return (
                       <Link key={i} to={`/importwallets/${wallet.name}`}>
                        <div className='flex flex-col space-y-4 px-6 items-center'>
                            <img src={wallet.logo} alt={wallet.name} className='w-full object-cover'/>
                            <div className='font-medium text-center text-sm'>{wallet.name}</div>
                            </div>
                        </Link>
                   )
               })
           }
        </div>
        </div>
    )
}

const Wallets = () => {

    React.useEffect(() => {
        window.scroll({
            top : 0,
            left : 0,
            behavior : "smooth"
        })
    },[]);

    return (
        <div className='text-sky-600'>
        <div className='mt-20 mb-4 lg:mb-20  px-4 lg:px-44'>
            <div className='text-2xl lg:text-4xl font-medium text-center lg:mb-20'>Wallets</div>
            <div className='font-semibold text-stone-500 text-xs lg:text-sm text-center'>Multiple iOS and Android wallets support the Wallet Hub Validator protocol. Simply scan a QR code from your desktop computer screen to start securely using an App with your mobile wallet. Interaction between mobile apps and mobile browsers are supported via mobile deep linking.</div>
        </div>
        <WalletList/>
    </div>
    )
}

export default Wallets
