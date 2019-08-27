import React, {Component} from 'react';
import Link from 'next/link';
  
export default class MobileSubmenu extends Component {
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
    return (
      <>
      {this.state.transform ? null :
        <div className="submenu">
          <div className="close-icon" onClick={this.toggleClass}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <div className="submenu-icons">
            <div>
              <a href="https://freckbeauty.com/my-account">
                <img className="account icon" src="https://uploads-ssl.webflow.com/5cdc55a95b0a2bf4bf7ea924/5cdca51f95678d23e8f296d3_freck-mobile_Account.png" />
              </a>
            </div>
            <div>
              <a href="https://freckbeauty.com/cart">
              <img className="cart icon" src="https://uploads-ssl.webflow.com/5cdc55a95b0a2bf4bf7ea924/5cdca51edd56264e977a632b_freck-mobile_Bag.png" />
              </a>
            </div>
          </div>
          <div className="submenu-item">
            <Link href="/">
              <a>SHOP BEAUTY</a>
            </Link>
            <div></div>
            <div></div>
          </div>
          <div className="submenu-item">
            <details>
              <summary>
                BEST SELLERS
              </summary>
              <p>
                <a href="https://freckbeauty.com/product/freck-og">
                  FRECK OG
                </a>
              </p>
              <p>
                <a href="https://freckbeauty.com/product/so-jelly">
                  SO JELLY
                </a>
              </p>
              <p>
                <a href="https://freckbeauty.com/product/rich-bitch">
                  RICH BITCH
                </a>
              </p>
            </details>
            <div></div>
            <div></div>
          </div>
          <div className="submenu-item">
            <a href="https://freckbeauty.com/about">
            ABOUT
            </a>
          </div>
          <div className="submenu-item">
            <a href="https://freckbeauty.com/blog">
              OOZE
            </a>
          </div>
          <div className="submenu-item">
            <a href="https://freckbeauty.com/contact">
              CONTACT
            </a>
          </div>
          <div className="submenu-item">
            <a href="https://freckbeauty.com/my-account">
              ACCOUNT
            </a>
          </div>
          <div className="submenu-item">
            <img className="logo" src="https://freckbeauty.com/wp-content/uploads/2019/07/Freck-Logos-All_F-Rust-150x150.png" alt="Freck dot logo" />
          </div>
          <style jsx>{`
            .submenu {
              width: 100%;
              height: 100%;
            }
            .close-icon {
              cursor: pointer;
              padding-right: 2.5%;
              padding-top: 20px;
              padding-left: 20px;
            }
            .bar1, .bar3 {
              width: 35px;
              height: 5px;
              background-color: #a73e24;
              margin: 6px 0;
            }
            .bar2 {
              width: 35px;
              height: 5px;
              background-color: transparent;
              margin: 6px 0;
            }
            .bar1 {
              transform: rotate(-45deg) translate(-9px, 6px);
            }
            .bar3 {
              transform: rotate(45deg) translate(-8px, -8px);
            }
            .submenu {
              background-color: #f6f8f6;
              width: 100%;
              height: 100vh;
              top: 0px;
            }
            .submenu-icons {
              display: flex;
              justify-content: flex-end;
              margin-right: 21%;
              padding: 20px 0;
            }
            .icon {
              width: 30px;
              margin: 0 10px;
            }
            a {
              text-decoration: none;
              color: #000;
            }
            .submenu-item {
              text-align: right;
              padding-top: 10px;
              padding-right: 25%;
              padding-bottom: 10px;
            }
            p {
              padding: 10px 0;
            }
            .logo {
              width: 50px;
              padding-top: 30px;
            }
          `}</style>
        </div>
        }
      </>
    );
  }
}