import './index.css'

const CryptocurrencyItem = props => {
  const {data} = props
  const {id, currencyName, usdValue, euroValue, currencyLogo} = data
  return (
    <li className="currency-item-card" id={id}>
      <div className="crypto-currency-item-image-heading-card">
        <img src={currencyLogo} alt={currencyName} className="currency-image" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="crypto-currency-values-card">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
