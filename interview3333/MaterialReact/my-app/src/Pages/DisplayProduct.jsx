import React from 'react'

import { Box, Typography } from '@mui/material';

function DisplayProduct({datas}) {
  return (
  
    <>
    <Box sx={{
        // bgcolor : 'pink',
        display : 'grid',
        // gridTemplateColumns : 'repeat(4, 1fr)'
        gridTemplateColumns : {
            sm : 'repeat(1, 1fr)',
            md : 'repeat(2, 1fr)',
            lg : 'repeat(2, 1fr)',
            xl : 'repeat(4, 1fr)'
        },
        justifyContent : 'space-around',
        
    }}>
    {
        datas.map((e) =>(
            <Box key={e.id} sx={{ 
                // bgcolor : 'red'
                display : 'flex',
                justifyContent : 'space-around',
                // bgcolor : 'red',
                m : 2,
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;',
                borderRadius : '20px'
                
            
                
            }}>
                
                <Box sx={{
                    width : '300px',
                    height : '300px',
                    p : 2
                }}
                component='img' src={e.image} ></Box>

            </Box>
        ))
    }
    </Box>

        
    </>
    
      
   
  )
}

export default DisplayProduct
