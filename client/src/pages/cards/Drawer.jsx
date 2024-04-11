import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function LeftDrawer({ open, setOpen }) {

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };



    return (
        <div>

            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                    <div className='w-full h-screen '>
                        <img className='w-full h-32 object-cover' src="https://imgs.search.brave.com/k0dLSCkgdBLLpAsasOi6twdh730eexldbPKhGyPk_WM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW5kaWFuZXhw/cmVzcy5jb20vMjAy/NC8wMy9OZXctUHJv/amVjdC04MS5qcGc_/dz0yMTA" alt="" />
                        <div className='w-full h-40 bg-green-500 mt-4'>

                        </div>
                    </div>
                </Box>
            </Drawer>
        </div>
    );
}