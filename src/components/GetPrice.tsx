import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconPlus from './IconPlus';
import IconMinus from './IconMinus';

interface PriceBlock {
    operation: string,
    alignTitle: 'left' | 'center' | 'right' | 'justify' | 'inherit',
    cash: string,
    price: string,
}

export default function GetPrice({operation, alignTitle, cash, price}: PriceBlock) {
    return (
        <Stack spacing={0.7} sx={{width: '100%'}}>
            <Typography align={alignTitle} color={'#c0c0c0'} sx={{fontSize: '12px', fontFamily: "'SanFranciscoProText', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"}}>{operation} (лот 1000)</Typography>
            <Stack spacing={0.5} sx={{background: '#fff', width: '100%', padding: '5px', borderRadius: '5px'}}>
                <Typography align='center' color={'#c0c0c0'} sx={{fontSize: '12px', fontFamily: "'SanFranciscoProText', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"}}>{cash}</Typography>
                <Stack spacing={1} direction={'row'} sx={{justifyContent: 'space-between', alignItems: 'center'}}>
                    <IconMinus />
                    <Typography sx={{fontSize: '10px', fontWeight: '600', fontFamily: "'SanFranciscoProText', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"}}>{price}</Typography>
                    <IconPlus />
                </Stack>
            </Stack>
        </Stack>
    )
}