import React, {useState} from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

import { Container } from '@mui/material';


let initialMessages = populateMsgs()

function populateMsgs() {
  let returnList = [100]
  for (let i = 0; i < 100; i++) {
    let id = (((i + 10) % 30) + 1) + '.' + (((i + 2) % 12) + 1) + '.2022'
    returnList[i] = 
    {
      authorName: 'Anton',
      text: 'Hello my name is Anton',
      pubDate: id,
      flagged: false
    }
  }
  return returnList;
}

export default function Timeline() {
  const [messages] = useState(initialMessages);
  let screenHeight = window.innerHeight;
  return (
    <Container 
    sx={{
      display: 'flex',
    }}>
      <Container  style={{
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'left',
        paddingTop: 50,
        }}>
      
        <Stack direction="column" spacing={2} style={{
          display: 'flex',
          alignItems: 'center',
        }}>
          <Avatar
            alt="Anton"
            src="./userIcon.jpg"
            sx={{ width: 100, height: 100 }}
          />   
          <p>
            Anton Folkmann
          </p>    
          <Button variant="outlined" sx={{ minWidth: 400 }}>
            Follow User
          </Button>
        </Stack>
      </Container>
      <Container style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 42,
        maxHeight: screenHeight,
        minWidth: 630,
        overflowY: 'auto',
        overflowX: 'hidden' 
      }}>
        <List style={{
          maxHeight: screenHeight
        }}>
            {messages.map( (msg) => {
              return (
                <Box>
                  <Card variant="outlined" sx={{ minWidth: 600, borderColor: '#a3c9fe'}}>
                    <CardContent>
                      <Stack direction="column">                  
                          <Typography variant="h5" component="div">
                            {msg.text} 
                          </Typography>
                          <Stack direction="row">
                          <p>
                          {msg.authorName + ' /'}
                          </p>
                          <p>
                          {'/ ' + msg.pubDate}
                          </p>
                          </Stack>
                      </Stack>
                    </CardContent>
                  </Card>
                  <p>
                    {'\n'}
                  </p>
                </Box>
              )
            })}
        </List>
    </Container>
  </Container>      
  );
}