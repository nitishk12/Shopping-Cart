import React from 'react'
import { Row, Col } from 'react-bootstrap'

class TaxesFees extends React.Component {
    render() {
        return (
            <Row className="show-grid">
                <Col md={6}>Estimated GST</Col>
                <Col md={6}>{`₹${this.props.taxes}`}</Col>
            </Row>
        )
    }
}
export default TaxesFees