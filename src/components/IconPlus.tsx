import { Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function IconPlus() {
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
            <AddIcon
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