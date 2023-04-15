import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const walletDetails = [
  {

    coinName: "Bitcoin",
    purchasedCoins: 1234,

  },
  {

    coinName: "Galxe",
    purchasedCoins: 5555,

  },
  {

    coinName: "Ethereum",
    purchasedCoins: 333,

  },

  {

    coinName: "Cardano",
    purchasedCoins: 1234,

  },
];

 function calculateAmount(purchasedCoin){
    return purchasedCoin*0.10;
}
// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

const card = (props) => {
  // console.log("props =====",props);
  return (
    <React.Fragment>
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        ></Typography>
        <Typography variant="h5" component="div">
          {props.coinName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Your Purchasd Coin : {props.purchasedCoins}
        </Typography>
        {/* <Typography variant="body2">23234234</Typography> */}

        <Typography variant="h5" component="div">
          Calculated Amount : calculateAmount({props.purchasedCoins})
        </Typography>
      </CardContent>
    </React.Fragment>
  );
};

export default function OutlinedCard(props) {
    console.log('lenth',walletDetails.length)

if(props.cardData.length != 0){
    var x = walletDetails.push({coinName: props.cardData[0],purchasedCoins:props.cardData[1]})
    console.log(x);
}
  return walletDetails.map((data) => (
    <Box sx={{ minWidth: 275, marginLeft: 22, marginTop: 8 }}>
      <Card sx={{ width: 400, backgroundColor: "grey" }} variant="outlined">
        {card(data)}
      </Card>
    </Box>
  ));
};

// export default OutlinedCard;
