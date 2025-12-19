import Button from '@mui/material/Button';

interface ButtonComp {
    text: string,
    bg: string,
    color: string
}

export default function ButtonComponent({text, bg, color}: ButtonComp) {
    return (
        <Button variant="contained" size='small' sx={{background: bg, color: color, boxShadow: 'none', borderRadius: '12px', fontSize: '12px', padding: '8px', textTransform: 'none', fontFamily: "'SanFranciscoProText', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"}}>{text}</Button>
    )
}