import React, { Component } from 'react';
import Input from './components/Input/Input';
import Parcela from './components/Parcela/Parcela';
import DataParcela from './components/DataParcela/DataParcela';
import { formatNumber } from './helpers/formatHelpers';

export default function App (){
  const [initialCapital, setInitialCapital] = React.useState(0);
  const [txJurosMensal, setTxJurosMensal] = React.useState(0);
  const [period, setPeriod] = React.useState(0);
  const [parcelas, setParcelas] = React.useState([]);

  React.useEffect(() => {
    const auxArray = [];
    let actualCaptital = initialCapital;
    let actualInterest = txJurosMensal;
    let totalAmount = 0;
    let monthTxInterest = 0;
    let monthAmount = 0;

    for(let i=1; i<=period; i++){
      totalAmount = actualCaptital * Math.pow((1 + actualInterest/100),i);
      monthAmount = totalAmount - actualCaptital;
      monthTxInterest = (monthAmount / actualCaptital) * 100;
      const auxObject ={
        totalAmount: totalAmount.toFixed(2),
        monthAmount: monthAmount.toFixed(2),
        monthTxInterest: monthTxInterest.toFixed(2) 
      }
      auxArray.push(auxObject);
    }

    setParcelas([...auxArray]);
    
  }, [initialCapital, txJurosMensal, period]);


  const handleInputChangeCapital = (value) =>{
    if(value !== ' ')
      setInitialCapital(Number(value));
    else  
      setInitialCapital(0);
  }
  const handleInputChangeTxJuros = (value) =>{
    if(value !== ' ')
      setTxJurosMensal(Number(value));
    else  
      setTxJurosMensal(0);
  }

  const handleInputChangePeriod = (value) =>{
    if(value !== ' ')
    setPeriod(Number(value));
    else  
    setPeriod(0);
  }
  return( 
    <div className="container">
      <div className='header'>
        <h1>Juros Compostos</h1>
      </div>
      <div className="row">
        <Input valueInput= {initialCapital} inputName = "Capital Inicial" minValue = {0} maxValue = {100000} stepsInput = {100}  inputChange = {handleInputChangeCapital}/>
        <Input valueInput= {txJurosMensal} inputName = "Juros Mensais" minValue = {-12} maxValue = {12} stepsInput = {0.1} inputChange = {handleInputChangeTxJuros}/>
        <Input valueInput= {period} inputName = "Período (meses)" minValue = {1} maxValue = {36} stepsInput = {1} inputChange = {handleInputChangePeriod}/>
      </div>
      <div className="padding default-flex-row">
        <Parcela>
          {parcelas.length > 0 && parcelas.map((name, index) =>{
            return(
              <>
                <DataParcela key= {`${name}_${index}`}>
                  {
                    <>
                      {index+1}   
                      <p style={{color: name.monthAmount < 0 ? 'red':'green'}}>{formatNumber(name.totalAmount)}</p>
                      <p style={{color: name.monthAmount < 0 ? 'red':'green'}}>{formatNumber(name.monthAmount)}</p>
                      <p style={{color: name.monthTxInterest < 0 ? 'red':'green'}}>{`${name.monthTxInterest}%`}</p>
                    </>
                  }
                </DataParcela>

              </>
            )
          })} 
        </Parcela>
      </div>
    </div>
  )

}
