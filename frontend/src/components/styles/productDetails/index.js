import { Box, Paper, Typography, styled } from "@mui/material";

export const ProductDetailContainer  = styled(Box)(()=>({
    justifyContent:'center',
    alignItems:'center',
    marginTop:'10px'
}))

export const ImageContainer = styled('img')(({src,theme})=>({
   src:`url(${src})`,
   [theme.breakpoints.down('sm')]:{
    width: '20em'
   }
}))

export const Item = styled(Paper)(({theme})=>({
    width:'inherit',
    height:'46px',
    justifyContent:'center',
    alignItems:'center',
    display:'flex',
    fontSize:'24px',
    [theme.breakpoints.down('sm')]:{
        width:'12em',
        height:'46px',
        justifyContent:'center',
        alignItems:'center',
        display:'flex',
        fontSize:'24px',
    }
}))

export const ProductDes = styled(Typography)(()=>({
    fontSize:"35px",
    paddingLeft:"10px",
    color:"#8c9bab",
    justifyContent:"center",
    textAlign:"left",
    }));
