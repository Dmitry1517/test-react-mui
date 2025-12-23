import { FormControl, Select, MenuItem, Box, Typography, Stack } from '@mui/material';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SelectComponent() {
    return (
        <FormControl fullWidth>
            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    background: '#fff',
                    borderRadius: '8px',
                    padding: '8px 16px',
                }}
            >
                
                
                {/* Select без видимого оформления */}
                <Select
                    defaultValue="moscow"
                    variant="standard"
                    disableUnderline
                    sx={{
                            flex: 1,
                            border: 'none',
                            '&:before, &:after': { display: 'none' },
                            '& .MuiSelect-select': {
                            padding: 0,
                            backgroundColor: 'transparent',
                        }
                    }}
                >
                    <MenuItem value="moscow">
                        <Box display="flex" alignItems="center">
                            <Box sx={{width: '26px', height: '26px', borderRadius: '50%', color: '#fff', background: 'lightblue', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px'}}>₽</Box>
                            <Stack>
                                <Typography sx={{fontSize: '12px', fontWeight: '600', fontFamily: "'SanFranciscoProText', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"}}>Альфа-банк cash-in</Typography>
                                <Typography sx={{fontSize: '10px', color: 'gray', fontFamily: "'SanFranciscoProText', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"}}>1USDT = 61.55 RUR</Typography>
                            </Stack>
                            
                        </Box>
                    </MenuItem>
                    
                </Select>
            </Box>
        </FormControl>
    )
} 

