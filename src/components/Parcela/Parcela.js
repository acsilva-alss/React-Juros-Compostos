import React from 'react'

export default function Parcela({children}) {
    const { ParcelaContainerStyle } = styles;
    return (
        <div style={ParcelaContainerStyle}>
            {children}
        </div>
    )
}
const styles = {
    ParcelaContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '5px',
        flexWrap: 'wrap',
    },
  };
  