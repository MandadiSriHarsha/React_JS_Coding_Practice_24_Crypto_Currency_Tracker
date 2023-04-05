import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoDataList: [], isLoaderLoading: true}

  componentDidMount() {
    this.getCryptoCurrencyStatus()
  }

  getCryptoCurrencyStatus = async () => {
    const url = 'https://apis.ccbp.in/crypto-currency-converter'
    const response = await fetch(url)
    const data = await response.json()
    const modifiedData = data.map(eachitem => ({
      id: eachitem.id,
      usdValue: eachitem.usd_value,
      euroValue: eachitem.euro_value,
      currencyName: eachitem.currency_name,
      currencyLogo: eachitem.currency_logo,
    }))
    this.setState({cryptoDataList: modifiedData, isLoaderLoading: false})
  }

  getList = () => {
    const {cryptoDataList} = this.state
    return (
      <div className="crypto-currencies-list-bg-container">
        <div className="crypto-currencies-list-heading-card">
          <h1 className="crypto-currencies-list-main-heading">
            Cryptocurrency Tracker
          </h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
            className="crypto-currencies-list-main-image"
          />
        </div>
        <div className="crypto-currencies-items-card">
          <div className="crypto-currencies-item-heading-card">
            <h1 className="crypto-currencies-item-heading-card-main-heading">
              Coin Type
            </h1>
            <div className="crypto-currencies-item-heading-card-sub-card">
              <h1 className="crypto-currencies-item-heading-card-main-heading">
                USD
              </h1>
              <h1 className="crypto-currencies-item-heading-card-main-heading">
                EURO
              </h1>
            </div>
          </div>
          <ul className="crypto-currency-each-currency-item-card">
            {cryptoDataList.map(eachitem => (
              <CryptocurrencyItem data={eachitem} key={eachitem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoaderLoading} = this.state
    return (
      <>
        {isLoaderLoading ? (
          <div className="loader-container">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.getList()
        )}
      </>
    )
  }
}

export default CryptocurrenciesList
