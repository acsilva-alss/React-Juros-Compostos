import React from 'react'

export default function DataParcela({children}) {
    //const { DataParcelaContainerStyle } = styles;
    const styles = {
        DataParcelaContainerStyle: {
            width: '200px',
            border: '1px solid lightgray',
            borderRadius: '4px',
            marginRight: '5px',
            marginBottom: '5px',
            padding: '5px',
        },
      };

    return (
        
        <div style={styles.DataParcelaContainerStyle} >
            {children}
        </div>
    )
}


  