import { Avatar, Box, Button, Grid, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack, Typography } from "@mui/material"
import { useState , useEffect } from "react";
import axios from 'axios';
import React from 'react';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

function  FetchApi() {
    const [data, setData] = useState([]);
    const result = async () => { 
        await axios.get("http://localhost:5006/returnJson"
        ).then((response) => {
            setData(response.data);
            console.log(response.data);
        })
    }
    
    useEffect(() => {
        result();    
    }, [])
    
    // console.log(data);
    
    return (
        <Stack alignItems={'center'} direction={'row'} spacing={3} mt={"20px"}>
            {
                data.map((value , index) => { 
                    return (
                        
                        <Box
                            alignContent={"center"}
                            justifySelf={"center"}
                            justifyContent={'center'}
                            color={"blue"}
                            sx={{
                                width: 300,
                                height: 300,
                                backgroundColor: "lightblue",}}
                            //     '&:hover': {
                            //         backgroundColor: "white",
                            //         opacity: [0.9, 0.8, 0.7],
                            //     },
                            // }}
                        >
                            <Typography>
                                {value["date"]}
                            </Typography>
                        </Box>
                       
                    )
                })
            }    
        </Stack>
    );
}

export default FetchApi;