import React from 'react'
import {
    Button,
    Collapse,
    Form,
    Row,
    Col,
    FormGroup,
    FormLabel,
    FormControl
} from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleChange } from '../../actions/promoCodeAction'

class PromoCode extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    handleChange = (e) => {
        this.props.handleChange(e)
    }
    render() {
        return (
            <div>
                <Button
                    className="promo-code-button"
                    href="#"
                    variant="outline-primary"
                    onClick={() => { this.setState({ open: !this.state.open }) }}
                >
                    {this.state.open === false ? 'Apply' : 'Hide'}
                    PromoCode
                    {this.state.open === false ? '+' : '-'}
                </Button>
                <br /><br />
                <Collapse in={this.state.open}>
                    <Row className="show-grid">
                        <Col md={12}>
                            <Form>
                                <FormGroup controlId="formInlineName">
                                    <FormLabel>Promo Code</FormLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="Enter Promo Code"
                                        value={this.props.promoCode}
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                                <Button
                                    block
                                    className="btn-round btn btn-success"
                                    disabled={this.props.isDisabled}
                                    onClick={this.props.giveDiscount}
                                >
                                    Apply
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Collapse>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    promocode: state.promocode.value
})

export default connect(mapStateToProps, { handleChange })(PromoCode)