import React, { Component } from 'react';
import {Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { history } from './_helpers';
import {PrivateRoute} from './_components/PrivateRoute';

import {Homepage} from './views/Homepage/Homepage';

import {ProductDetails} from './views/Product/ProductDetails';
import Products from './views/Product/Products';
import ProductSummary from './views/Product/ProductSummary';
import SpecialOffer from './views/Product/SpecialOffer';

// import {Account} from './views/Account/Account';
// import {Login} from './views/Login/Login';
import {ForgetPass} from './views/Login/ForgetPass';
import {Register} from './views/Login/Register';

import {Contact} from './views/Contact/Contact';
import {FAQ} from './views/FAQ/FAQ';
import {About} from './views/About/About';
import {LegalNotice} from './views/Terms/LegalNotice';
import {Tac} from './views/Terms/Tac';

class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
        // clear alert on location change
        dispatch(alertActions.clear());
    });
  }
  render() {
    const { alert } = this.props;
    return (
      <div className="App">
        {alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
        <Router history={history}>
          <div>
            <Route path="/" exact component={Homepage} />
            <Route path="/products/" component={Products} />
            <Route path="/product_details/" component={ProductDetails} />
            <Route path="/product_summary/" component={ProductSummary} />
            <Route path="/special_offer" component={SpecialOffer} />

            {/* <PrivateRoute exact path="/account" component={Account} /> */}
            {/* <Route path="/login/" component={Login} /> */}
            <Route path="/register/" component={Register} />
            <Route path="/forget_pass/" component={ForgetPass} />

            <Route path="/contact/" component={Contact} />
            <Route path="/about/" component={About} />
            <Route path="/legal_notice/" component={LegalNotice} />
            <Route path="/tac/" component={Tac} />
            <Route path="/faq/" component={FAQ} />
          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
