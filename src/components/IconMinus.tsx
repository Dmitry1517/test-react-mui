import { Box } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';

export default function IconMinus() {
    return (
        <Box
            sx={{
                width: 25,
                height: 25,
                borderRadius: '50%',
                backgroundColor: '#f1f1f1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
            }}
            >
            <RemoveIcon
                sx={{
                color: '#000000',
                fontSize: 20,
                position: 'relative',
                zIndex: 1,
                }}
            />
        </Box>
    )
}