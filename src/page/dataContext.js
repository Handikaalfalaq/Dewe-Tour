import React, { createContext, useState} from 'react';

export const DataContext = createContext();

export const DataProvider = (children) => {
    const [total, setTotal] = useState('');
    const [amount, setAmount] = useState('1');
    const [dateBooking, setDateBooking] = useState('Belum ada tanggal');
    const [InputLogin, setInputLogin] = useState(false);
    const [InputLoginAdmin, setInputLoginAdmin] = useState(false);
    const [navbarProfile, setNavbarProfile] = useState(false);
    const [Number, setNumber] = useState('');
    const [dataBooking, setDataBooking] = useState('');
    const [paySukses, setPaySukses] = useState(false)
    

    return (
        <DataContext.Provider value={{total, setTotal, amount, setAmount, dateBooking, setDateBooking, InputLogin, setInputLogin, dataBooking, setDataBooking, paySukses, setPaySukses, InputLoginAdmin, setInputLoginAdmin, navbarProfile, setNavbarProfile, Number, setNumber}}>
            {children.children}
        </DataContext.Provider>
    );
};