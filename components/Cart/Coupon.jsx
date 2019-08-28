export default function Coupon() {
  return (
    <div id="coupon-container">
      <input type="text" placeholder="PROMO CODE" />
      <button>APPLY</button>
      <style jsx>{`
        #coupon-container {
          display: flex;
          justify-content: center;
          width: 100%;
          border: 15px solid #e5d9c9;
        }
        input {
          width: 60%;
          border-right: 15px;
          border-style: solid;
          border-color: #e5d9c9;
        }
        ::placeholder {
          text-align: center;
        }
        button {
          background-color: #BAB9B3;
          width: 40%;
        }
      `}</style>
    </div>
  );
}