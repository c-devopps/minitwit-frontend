import React, {useState} from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';



let initialMessages = [
"Hello",
"I",
"Am",
"Christoffer"
]

export default function Timeline() {
  const [messages] = useState(initialMessages);
  return (
        <List>
            {messages.map( (msg) => {
              return (
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Stack direction="row" spacing={2}>                  
                        <Typography variant="h5" component="div">
                          {msg} 
                        </Typography>
                        <Typography variant="h6" component="div">
                          | By Christoffer 
                        </Typography>
                        <Typography variant="h6" component="div">
                          | Today 
                        </Typography>
                    </Stack>
                  </CardContent>
                </Card>
                
              )
            })}
        </List>
  );
}