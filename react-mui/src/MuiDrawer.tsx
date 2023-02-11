import React from "react";
import { Drawer } from "@material-ui/core";
import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import {IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MuiDrawer = () => {
    const [isOpenDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <IconButton
                size={"large"}
                edge="start"
                color="inherit"
                onClick={() => {
                    setOpenDrawer(true);
                }}
            >
                <MenuIcon />
            </IconButton>

            <Drawer
                anchor="left"
                open={isOpenDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <Stack spacing={3} m={2.5}>
                    <Typography variant="h5" >
                        Navigation Drawer
                    </Typography>

                </Stack>
            </Drawer>
        </>
    );
};

export default MuiDrawer;
