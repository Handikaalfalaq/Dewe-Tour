import React, { createContext, useState} from 'react';

export const TotalContext = createContext();

export const TotalProvider = (children) => {
    const [total, setTotal] = useState('');
    const [amount, setAmount] = useState('1');
    const [dateBooking, setDateBooking] = useState('Belum ada tanggal');
    

    return (
        <TotalContext.Provider value={{total, setTotal, amount, setAmount, dateBooking, setDateBooking}}>
            {children.children}
        </TotalContext.Provider>
    );
};