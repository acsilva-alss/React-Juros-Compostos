const formatter = new Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL'
  })

function formatNumber(value){
    return formatter.format(value);
}

export { formatNumber };