// import React, {useState} from 'react'
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import ButtonComponent from './components/ButtonComponent';
import InputComponent from './components/InputComponent';
import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import ProgressBarComponent from './components/ProgressBarComponent';
import SelectComponent from './components/SelectComponent';
import GetPrice from './components/GetPrice';

export default function App() {

  return (
    
      <Box component="section" sx={{padding: '20px 0px', background: '#f1f1f1'}}>
        <Container>
          <Stack spacing={3}>
            <Stack spacing={2}>
              <Typography sx={{fontSize: '16px', fontWeight: '600', fontFamily: "'SanFranciscoProText', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"}}>Способ вывода</Typography>
              <Stack spacing={1} direction={'row'}>
                <ButtonComponent text="Банки" bg="#000" color="#fff" />
                <ButtonComponent text="Наличные" bg="#fff" color="#000" />
                <ButtonComponent text="Курьер" bg="#fff" color="#000" />
              </Stack>

              <SelectComponent />

            </Stack>

            <Stack spacing={2}>
              <Typography sx={{fontSize: '16px', fontWeight: '600', fontFamily: "'SanFranciscoProText', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"}}>Объемы</Typography>
              <Stack spacing={1} direction={'row'} sx={{width: '100%'}}>
                <GetPrice operation="Отдаете" alignTitle="left" cash="Ethereum, ETH" price='1 300.00000' />
                <GetPrice operation="Получаете" alignTitle="right" cash="Рубль, RUR" price='1 200.00' />
              </Stack>
              

              <Stack spacing={1} direction={'row'}>
                <ProgressBarComponent bg="#000" value="min" />
                <ProgressBarComponent bg="#000" value="50%" />
                <ProgressBarComponent bg='#fff' value="75%" />
                <ProgressBarComponent bg='#fff' value="max" />
              </Stack>
            </Stack>


            <Stack spacing={2}>
              <Stack direction='row' sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Typography sx={{fontSize: '16px', fontWeight: '600', fontFamily: "'SanFranciscoProText', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"}}>Реквизиты</Typography>
                <Typography sx={{fontSize: '11px', color: 'gray', marginLeft: 'auto'}} >Сохранить реквизиты</Typography>
                <Checkbox defaultChecked size="small" color="default" />
              </Stack>
              
              <Stack spacing={1}>

                <Box sx={{alignItems: 'center', background: '#fff', border: '1px solid #dedede', borderRadius: '7px', padding: '3px 12px 10px 12px'}}>
                  <Stack spacing={1}>
                    <FormControl>
                      <RadioGroup 
                        row
                        aria-labelledby='demo-row-radio-buttons-group-label' 
                        defaultValue="номер карты" 
                        name='row-radio-buttons-group'
                        sx={{fontFamily: "'SanFranciscoProText', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"}}
                      >
                        <FormControlLabel value="номер карты" control={<Radio size="small" sx={{
                          '&.Mui-checked': {
                            color: '#FFD700',
                            '& .MuiSvgIcon-root': {
                              '&:first-of-type': {
                                color: '#FFD700', 
                                fill: '#FFD700',  
                                stroke: '#FFD700', 
                                strokeWidth: 5,
                              },
                              '&:last-of-type': {
                                color: '#000000',
                                fill: '#000000',
                                scale: 1.2
                              }
                            }
                          },
                          padding: '8px',
                          '& .MuiSvgIcon-root': {
                            width: 18,
                            height: 18,
                          }
                        }} />} label="Номер карты" 
                          sx={{
                            '& .MuiFormControlLabel-label': {
                              fontSize: '11px',
                            }
                          }} 
                        />
                        <FormControlLabel value="номер договора" control={<Radio size="small" sx={{
                          '&.Mui-checked': {
                            color: '#FFD700',
                            '& .MuiSvgIcon-root': {
                              '&:first-of-type': {
                                color: '#FFD700', 
                                fill: '#FFD700',  
                                stroke: '#FFD700', 
                                strokeWidth: 5,
                              },
                              '&:last-of-type': {
                                color: '#000000',
                                fill: '#000000',
                                scale: 1.2
                              }
                            }
                          },
                          padding: '8px',
                          '& .MuiSvgIcon-root': {
                            width: 18,
                            height: 18,
                          }
                        }} />} label="Номер договора" 
                          sx={{
                            '& .MuiFormControlLabel-label': {
                              fontSize: '11px',
                            }
                          }} 
                        />
                      </RadioGroup>
                    </FormControl>
                    <InputComponent defaultValue="Номер карты" />
                  </Stack>
                </Box>
                <Box sx={{background: '#fff', border: '1px solid #dedede', borderRadius: '7px', padding: '12px 15px'}}>
                  <InputComponent defaultValue="ФИО владельца" />
                </Box>
                <Box sx={{
                    background: '#fff', 
                    border: '1px solid #dedede', 
                    borderRadius: '7px', 
                    padding: '12px 15px',
                  }}>
                  <InputComponent defaultValue="Адрес" />
                </Box>
              </Stack>
            </Stack>
          </Stack> 

        </Container>
      </Box>
    
  )
}


