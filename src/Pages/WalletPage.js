import React, { useState, useEffect } from "react";
import OutlinedCard from "./../components/Card";
import Text from "./../components/Text";
import Button from "./../components/Button";
import FormDialog from "../components/FormDialog";
const walletDetails = [
  {
    id: 1,
    coinName: "title1",
    purchasedCoins: 1234,
    calculatedAmount: 2345,
  },
  {
    id: 2,
    coinName: "title1",
    purchasedCoins: 1234,
    calculatedAmount: 2345,
  },
  {
    id: 3,
    coinName: "title1",
    purchasedCoins: 1234,
    calculatedAmount: 2345,
  },

  {
    id: 4,
    coinName: "title1",
    purchasedCoins: 1234,
    calculatedAmount: 2345,
  },
];



const WalletPage = () => {
  const[data,setData]=  React.useState([]);
  function CallBack(childData) {
    console.log('wwwww',childData);
   setData( childData );
    // console.log('data is ',data);
  }

  // console.log(walletDetails);

  return (
    // <div>

    //   {walletDetails.map((data) => (
    //     <div >
    //       {/* <Card key={data.id} data={data}/> */}
    //       <Text key={data.id} data={data} />
    //     </div>
    //   ))}
    //   ;
    // </div>
    <div>
      <OutlinedCard cardData = {data} />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 20,
          marginRight: 20,
        }}
      >
        <FormDialog handleCallback={CallBack} />
      </div>
    </div>
  );
};

export default WalletPage;
