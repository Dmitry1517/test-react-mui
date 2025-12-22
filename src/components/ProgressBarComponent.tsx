import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface Progress {
    bg: string,
    value: string
}

export default function ProgressBarComponent({bg, value}: Progress) {
    return (
        <Stack spacing={0.5}  sx={{width: '100%'}}>
            <Typography className="progress__visible" sx={{background: bg}}></Typography>
            <Typography align='center' color={'#c0c0c0'} sx={{fontSize: '12px', fontFamily: "'SanFranciscoProText', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"}} className="progress__value">{value}</Typography>
        </Stack>
        
    )
}