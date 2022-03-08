import React from 'react'
import Container from '@mui/material/Container';
import Timeline from './Timeline'

export default function App() {
    return (
        <Container style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
      }}>
            <Timeline />
        </Container>
    );
}
