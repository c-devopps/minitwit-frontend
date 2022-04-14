import React, {useState} from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { Container } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { getUserData, setUserData } from '../utils/userData'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import TextField from '@mui/material/TextField';
import { register } from '../api/register.js'


let initialMessages = populateMsgs()

function populateMsgs() {
  let returnList = [20]
  for (let i = 0; i < 20; i++) {
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
  const [followed, setFollowed] = useState(false);
  const [userData, setUser] = useState(getUserData())
  let screenHeight = window.innerHeight;
  let screenWidth = window.screenWidth;
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
      
      {(() => {
          if (userData.username == '') {
            return (
              <Stack direction="column" spacing={2} style={{
              display: 'flex',
              alignItems: 'center',
              }}>
                <Typography variant="h5" component="div">
                  Log in: 
                </Typography>
                <TextField id="outlined-basic" placeholder="Username" variant="outlined" />
                <TextField id="outlined-basic" placeholder="Password" variant="outlined" />
              </Stack>
              )
          } else {
            return (
              <Stack direction="column" spacing={2} style={{
              display: 'flex',
              alignItems: 'center',
              }}>
                <Avatar
                  alt="Anton"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F550%2F731%2Foriginal%2Fuser-icon-vector.jpg&f=1&nofb=1"
                  sx={{ width: 100, height: 100 }}
                />   
                <h5>
                  {userData.username}
                </h5>
                {(() => {
            if (followed) {
              return (
                <Button variant="outlined" sx={{ minWidth: 400, borderColor: '#a3c9fe' }} 
                onClick={() => {
                setFollowed(false)}}>
                Unfollow user
                </Button>
              )
            } else {
              return (
                <Button variant="outlined" sx={{ minWidth: 400, borderColor: '#a3c9fe' }} 
                onClick={() => {
                  setFollowed(true)
                }}>
                Follow user
                </Button>
              )
            }
            })()}    
              </Stack> 
            )
          }

        })()}

      </Container>
      <Container style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 96,
        maxHeight: screenHeight - 56,
        minWidth: 630,
        overflowY: 'auto',
        overflowX: 'hidden', 
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
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, borderColor : 'black'}} elevation={10}>
        {(() => {
          if (userData.username == '') {
            return (
              <BottomNavigation
                showLabels style={{ 
                  backgroundColor : '#a3c9fe',
                  borderColor : 'black'
                }}>
                <BottomNavigationAction onClick={() => {
                  console.log("clicked")
                  register('oskar', 'osbr@itu.dk', 'asd')
                  setUserData({
                    username: 'oskar',
                    email: 'osbr@itu.dk',
                    avatar: 'url',
                    follows: []
                  })
                  setUser(getUserData())
                  }} label='Login' icon={<ExitToAppIcon />} />
              </BottomNavigation>
              )
          } else {
            return (
              <BottomNavigation
                showLabels style={{ 
                  backgroundColor : '#a3c9fe',
                  borderColor : 'black'
                }}
              >
                <BottomNavigationAction  label='My Timeline' icon={<AccountCircleIcon />} />
                <BottomNavigationAction label='Public Timeline' icon={<FormatListBulletedIcon />} />
                <BottomNavigationAction onClick={() => {
                  setUser({
                    username: '',
                    email: '',
                    avatar: '',
                    follows: []
                  })}} label='Logout' icon={<ExitToAppIcon />} />
              </BottomNavigation>
            )
          }

        })()}
      </Paper>
  </Container>      
  );
}