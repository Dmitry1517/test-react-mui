import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import ButtonComponent from './components/ButtonComponent';
import InputComponent from './components/InputComponent';
import { Radio } from '@mui/material';


export default function App() {
  return (
    
      <Box component="section" sx={{padding: '20px 0px', background: '#f1f1f1'}}>
        <Container>
          <Stack spacing={3}>
            <Stack spacing={2}>
              <div>Способ вывода</div>
              <Stack spacing={1} direction={'row'}>
                <ButtonComponent text="Банки" bg="#000" color="#fff" />
                <ButtonComponent text="Наличные" bg="#fff" color="#000" />
                <ButtonComponent text="Курьер" bg="#fff" color="#000" />
              </Stack>
            </Stack>

            <Stack spacing={2}>
              <div>Объемы</div>
              <Stack spacing={1} direction={'row'}>
                <ButtonComponent text="Банки" bg="#000" color="#fff" />
                <ButtonComponent text="Наличные" bg="#fff" color="#000" />
                <ButtonComponent text="Курьер" bg="#fff" color="#000" />
              </Stack>
            </Stack>


            <Stack spacing={2}>
              <div>Реквизиты</div>
              <Stack spacing={1}>

                <Box sx={{background: '#fff', border: '1px solid #dedede', borderRadius: '7px', padding: '0px 10px'}}>
                  <Stack spacing={1}>
                    <FormControl>
                      <RadioGroup aria-labelledby='demo-radio-buttons-group-label' defaultValue="номер карты" name='radio-buttons-group' row>
                        <FormControlLabel value="номер карты" control={<Radio />} label="Номер карты" sx={{fontFamily: "'SanFranciscoProText', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"}} />
                        <FormControlLabel value="номер договора" control={<Radio />} label="Номер договора" />
                      </RadioGroup>
                    </FormControl>
                    <InputComponent />
                  </Stack>
                </Box>
                
                <InputComponent />
                <InputComponent />
              </Stack>
            </Stack>
          </Stack> 
          

        </Container>
      </Box>
    
  )
}


