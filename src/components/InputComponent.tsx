import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import DrawIcon from '@mui/icons-material/Draw';

interface inputDefVal {
  defaultValue: string
}

export default function InputComponent({defaultValue}: inputDefVal) {
  return (
    <Stack spacing={1} direction={'row'}>
      <InputBase
        value={defaultValue}
        sx={{
          width: '100%',
          border: 'none',
          '&:focus': {
            border: 'none',
            outline: 'none',
          },
        }}
      />
      <DrawIcon />
    </Stack>
    
  )
}  