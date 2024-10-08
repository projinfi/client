import React, { useState, useEffect} from 'react';
import '../components/Navbar.css';
import coupon from '../assets/coupon.png';
import arrow from '../assets/arrow.png';
import Logo from '../assets/logo.png';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuthStatus,setUserInfo } from '../slices/authSlice';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Navbar = () => {
  // Remove <BadgeProps>

  const userToken = localStorage.getItem('userToken');
  
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);
  const dispatch = useDispatch()
  const open = Boolean(anchorEl);
  const openE2 = Boolean(anchorE2);
  const navigate = useNavigate()

  const Logged = useSelector((state) => state.auth)
  const username = useSelector((state)=>state.auth.userName)
  const cartQuantity = useSelector((state)=>state.cart.length)

  console.log(Logged)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleE2Click = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setAnchorE2(null);
  };
  const handleLogOut = () => {
    localStorage.removeItem('userToken')
    setAnchorE2(null);
    dispatch(setAuthStatus(false))
    dispatch(setUserInfo({ userName: '', userEmail: '' }));
    localStorage.removeItem("userId")
    window.location.reload();
  }
  const handleLogin = () => {
    setAnchorE2(null);
    navigate("/signin")
  }
  const handleRegister = () => {
    setAnchorE2(null);
    navigate("/signup")
  }
  const handleCartClick = () => {
    navigate('/cart')
  }
  const redirectHome = () => {
    navigate('/')
  }
  
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));


  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.post(
          'https://server-orcin-delta.vercel.app/users/verifyUserToken',
          { 'usertoken': userToken },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
        if (response.data) {
          console.log(response.data)
          dispatch(setAuthStatus("true"));
          dispatch(setUserInfo({ userName: response.data.name , userEmail: response.data.email}));

        } else {
          dispatch(setAuthStatus("false"));
          localStorage.removeItem('userToken')
          dispatch(setUserInfo({ userName: '', userEmail: '' }));
        }
      } catch (err) {

        console.log("Invalid user token");
        dispatch(setAuthStatus("false"));
        localStorage.removeItem('userToken')
        dispatch(setUserInfo({ userName: '', userEmail: '' }));
      }
    };
    verifyToken();
  }, [])


  return (
    <div className='navbar-container'>
      {/* total navbar height is 100px and 60px goes to the navbar offer height */}
      <div className='navbar-offer-content'>
        <div className='copoun-icon'><img className='coupon-logo' src={coupon} /></div>
        <div className='navbar-offer-text'>30% off storewide -- Limited time!</div>
        <div className='navbar-shopnow-txt'>Shop Now</div>
        <div className='navbar-shopnow-arrow'><img src={arrow} /></div>
      </div>

      <div className='navbar-content'>
        <div onClick={redirectHome} className='navbar-content-right'>
          <img className='navbar-cont-logo' src={Logo} />
        </div>
        <div className='navbar-content-left'>

          {userToken ? ( <><div>



<Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', }}>

  <Tooltip title="Account settings">
    <IconButton
      onClick={handleE2Click}
      size="small"
      sx={{ ml: 2 ,}}
      aria-controls={openE2 ? 'account-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={openE2 ? 'true' : undefined}
    >
      <Avatar sx={{ width: 32, height: 32 }}>{username.charAt(0).toUpperCase()}</Avatar>
    </IconButton>
  </Tooltip>
</Box>
<Menu
  anchorEl={anchorE2}
  id="account-menu"
  open={openE2}
  onClose={handleClose}
  onClick={handleClose}
  slotProps={{
    paper: {
      elevation: 0,
      sx: {
        overflow: 'visible',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        mt: 1.5,
        '& .MuiAvatar-root': {
          width: 32,
          height: 32,
          ml: -0.5,
          mr: 1,
        },
        '&::before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          top: 0,
          right: 14,
          width: 10,
          height: 10,
          bgcolor: 'background.paper',
          transform: 'translateY(-50%) rotate(45deg)',
          zIndex: 0,
        },
      },
    },
  }}
  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
>
  <MenuItem onClick={handleClose}>
    <Avatar /> {username}
  </MenuItem>

  <Divider />
  <MenuItem onClick={handleClose}>
    <ListItemIcon>
      <Settings fontSize="small" />
    </ListItemIcon>
    Settings
  </MenuItem>
  <MenuItem onClick={handleLogOut}>
    <ListItemIcon>
      <Logout fontSize="small" />
    </ListItemIcon>
    Logout
  </MenuItem>
</Menu>
       </div>
           <div>
           <IconButton onClick={handleCartClick}  sx={{ color: '#3c3c3c' }} aria-label="cart">
             <StyledBadge badgeContent={cartQuantity} color="primary">
               <ShoppingCartIcon  />
             </StyledBadge>
           </IconButton>
         </div>
         </>
):( <div>
  <Button
    id="fade-button"
    aria-controls={open ? 'fade-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
    onClick={handleClick}
    variant="contained"
  >
    LOGIN
  </Button>
  <Menu
    id="fade-menu"
    MenuListProps={{
      'aria-labelledby': 'fade-button',
    }}
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    TransitionComponent={Fade}
  >
    <MenuItem onClick={handleLogin}>Login</MenuItem>
    <MenuItem onClick={handleRegister}>Register</MenuItem>
  </Menu>
</div>
)}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
