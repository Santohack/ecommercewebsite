import { Box, CardMedia, Grid,  styled } from "@mui/material";

export const ProductListContainer = styled(Box)(()=>({
    justifyContent:'center',
    alignItems: 'center',
    marginTop:'30px',
    marginBottom:'78px',
    display:'flex',
    flexGrow:1
}))


export const ProductListGrid = styled(Grid)(()=>({
   

}))

export const ProductListGridItem = styled(Grid)(()=>({
    sm:2,
    
    md:3,
}))
export const ProductListImg = styled(CardMedia)(()=>({
   height:'auto',
}))

