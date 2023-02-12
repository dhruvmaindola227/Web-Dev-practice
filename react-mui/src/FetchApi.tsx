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
        <div>
            {
                data.map((value , index) => { 
                    return (
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <ImageIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={value["date"]} secondary={ value['summary']} />
                            </ListItem>
                            
                        </List>
                    )
                })
            }    
        </div>
    );
}

export default FetchApi;