import React, {Component} from 'react';
import Link from 'next/link';
import MobileSubmenu from './MobileSubmenu';

export default class MobileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transform: false
    };
  }

  toggleClass = () => {
    this.setState(function(prevState) {
      return {transform: !prevState.transform}
    });
  }

  render() {
    const toggle = {
      display: this.state.transform ? 'block' : 'none'
    }
    return(
      <>
        {this.state.transform ? <MobileSubmenu style={toggle} /> : null}
        <div className="mobile-nav">
          <div className="nav-div">
            <a onClick={this.toggleClass}>
              <img className="mobile-icon-1 twenty-three" src="https://freckbeauty.com/wp-content/uploads/2019/07/Freck-dots_dots.png" alt="open-submenu-icon" />
            </a>
            <a>
              <img className="mobile-icon-2 twenty-three" src="https://freckbeauty.com/wp-content/uploads/2019/07/freck-mobile_Search.png" height="23" width="23" alt="search-icon" />
            </a>
            <a href="https://freckbeauty.com">
              <img className="mobile-header-logo" src="https://freckbeauty.com/wp-content/uploads/2019/05/Freck-logo.png" width="150" sizes="(max-width: 479px) 41vw, 150px" alt="freck-logo" />
            </a>
            <a href="https://freckbeauty.com/my-account">
              <img className="mobile-icon-3 twenty-five" src="https://freckbeauty.com/wp-content/uploads/2019/07/freck-mobile_Account.png" width="25" height="25" alt="my-account-icon" />
            </a>
            <a href="https://freckbeauty.com/cart">
              <img className="mobile-icon-4 twenty-five" src="https://freckbeauty.com/wp-content/uploads/2019/07/freck-mobile_Bag.png" width="25" height="25" alt="cart-icon" />
            </a>
          </div>
          <div className="mobile-second-nav">
              <a href="/">SHOP</a>
              <a href="https://freckbeauty.com/about/">ABOUT</a>
              <a href="https://freckbeauty.com/blog">BLOG</a>
              <a href="https://freckbeauty.com/contact">CONTACT</a>
              <a href="https://freckbeauty.com/my-account">ACCOUNT</a>
          </div>
          <style jsx>{`
            .mobile-nav {
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              background-color: #fff;
            }
            .mobile-icon-1 {
              margin-right: 15px
            }
            .mobile-icon-2 {
              margin: 0 0 0 10px;
            }
            .twenty-three {
              height: 23px;
              width: 23px;
            }
            .mobile-header-logo {
              margin: 0 -5px -14px -5px;
            }
            .mobile-icon-3 {
              margin: 0 10px 0 0;
            }
            .mobile-icon-4 {
              margin-left: 15px;
            }
            .twenty-five {
              height: 25px;
              width: 25px;
            }
            .mobile-second-nav {
              padding: 10px 0 0 0;
              margin-bottom: 10px;
              overflow: auto;
            }
            .mobile-second-nav > a {
              padding: 0 10px;
              text-decoration: none;
              color: #000;
            }
            @media only screen and (min-width: 421px) {
              .mobile-nav {
                display: none;
              }
            }
          `}</style>
        </div>
      </>
    );
  }
}