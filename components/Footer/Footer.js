import React, {Component} from "react";
import axios from "axios";
import Link from 'next/link';
import FooterOptIn from './FooterOptIn';
import FooterNav from './FooterNav';
import RecentNews from './RecentNews';

export default function Footer() {
  return (
    <div id="container">
      <div>
        <FooterOptIn />
      </div>
      <div>
        <FooterNav />
      </div>
      <div>
        <RecentNews />
      </div>
    <style jsx>{`
      #container {
        display: grid;
        grid-template-rows: 25% 50% 25%;
        grid-template-columns: 25% 50% 25%;
        background-color: #1c150f;
        color: #fff;
      }
    `}</style>
  </div>
  );
};