import { useState } from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import Payment from "../component/Payment";
import CartList from "../component/CartList";

function Cart() {

    const [key, setKey] = useState('cart');


    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Cart</h2>
            <Tabs
                activeKey={key}
                id="justify-tab-example"
                className="mb-3"
                justify
            >
                <Tab eventKey="cart" title="Cart" disabled>
                    <CartList />
                    <Button variant="success" onClick={() => setKey("payment")}>Checkout</Button>
                </Tab>
                <Tab eventKey="payment" title="Payment" disabled>
                    <Payment />
                </Tab>
            </Tabs>

        </main>
    );
}

export default Cart;