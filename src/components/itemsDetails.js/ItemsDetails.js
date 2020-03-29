import React from 'react'
import { Button, Collapse, Container, Media, Row, Col } from 'react-bootstrap'

class ItemsDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }
    render() {
        return (
            <div>
                <Button
                    className="item-details-button"
                    href="#"
                    variant="outline-primary"
                    onClick={() => this.setState({ open: !this.state.open })} >
                    {this.state.open === false ? 'See' : 'Hide'} item details
                {this.state.open === false ? '+' : '-'}
                </Button><br /><br />
                <Collapse in={this.state.open}>
                    <div>
                        <Media>
                            <img
                                width={150}
                                height={100}
                                alt="thumbnail"
                                className="align-self-start mr-3"
                                src="https://rukminim1.flixcart.com/image/416/416/k0sgl8w0/television/r/q/g/mi-l43m4-4ain-original-imafkdzpsafcrzue.jpeg?q=70"
                            />
                        </Media>
                        <Media.Body>
                            <p>Mi LED Smart TV 4X 108 cm (43)</p>
                        </Media.Body>
                        <Row className="show-grid">
                            <Col md={6}>
                                <strong>{`₹${this.props.price}`}</strong>
                                <br />
                                <strong className="price-strike">{`₹${this.props.price}`}</strong>
                            </Col>
                            <Col md={6}>Qty : 1</Col>
                        </Row>
                    </div>
                </Collapse>
            </div>
        )
    }
}
export default ItemsDetails