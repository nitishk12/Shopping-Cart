import React from 'react'
import './App.css'
import { Container } from 'react-bootstrap'
import SubTotal from './components/subtotal/Subtotal'
import PickupSavings from './components/pickupSavings/PickupSavings'
import TaxesFees from './components/taxesfees/TaxesFees'
import EstimatedTotal from './components/estimatedTotal/EstimatedTotal'
import ItemsDetails from './components/itemsDetails.js/ItemsDetails'
import PromoCode from './components/promocode/PromoCode'
import { connect } from 'react-redux'
import { handleChange } from './actions/promoCodeAction'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      total: 28999,
      pickupSavings: -7812.57,
      taxesFees: 0,
      estimatedTotal: 0,
      disablePromoButton: false,

    }
  }
  componentDidMount() {
    this.setState({
      taxesFees: (this.state.total + this.state.pickupSavings) * 0.18
    },
      function () {
        this.setState({
          estimatedTotal: this.state.total + this.state.pickupSavings + this.state.taxesFees
        })
      }
    )
  }

  handleDiscount = () => {
    if (this.props.promocode === 'DISCOUNT') {
      this.setState({
        estimatedTotal: this.state.estimatedTotal * 0.9
      },
        function () {
          this.setState({
            disablePromoButton: true
          })
        }
      )
    } else if (this.props.promocode === 'SUPER30') {
      this.setState({
        estimatedTotal: this.state.estimatedTotal * 0.7
      },
        function () {
          this.setState({
            disablePromoButton: true
          })
        }
      )
    }
  }

  render() {
    return (
      <div className="container mx-auto ">
        <Container className="purchase-card ">
          <SubTotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.pickupSavings} />
          <TaxesFees taxes={this.state.taxesFees.toFixed(2)} />
          <br />
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
          <ItemsDetails price={this.state.estimatedTotal.toFixed(2)} />
          <hr />
          <PromoCode
            giveDiscount={() => this.handleDiscount()}
            isDisabled={this.state.disablePromoButton}
          />
        </Container>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  promocode: state.promocode.value
})

export default connect(mapStateToProps, { handleChange })(App)



