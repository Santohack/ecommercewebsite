import { Box, InputBase, List, alpha, styled } from "@mui/material";

export const NavContainer = styled(Box)(() => ({
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow:1,
    padding: '9px 0px 5px 0px',
   
    width:"100%",
    height:"100%"
    
}))

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
      
    },
    [theme.breakpoints.down('sm')]:{
      width:'168px',
      margin: '0px 0px 0px 56px'
      
    }
  }));
  
  export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  export const  MyList = styled(List)(({type})=>({
    display: type === 'row' ? 'flex' : 'block',
    justifyContent: 'center',
    alignItems: 'center',
    

  }))
  export const DesktopContainer = styled(Box)(()=>({
    flexGrow:0
  }))
  export const MobileContainer = styled(Box)(()=>({
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    position:'fixed',
    left:0,
    bottom:0,
    zIndex:99,
    width:'100%',
    background:'#39404d'

  }))