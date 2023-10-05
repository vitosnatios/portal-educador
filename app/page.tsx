import { Box } from '@mui/material';
import LoginForm from './components/form/LoginForm';
import SchoolIcon from '@mui/icons-material/School';

export default function Home() {
  return (
    <Box>
      <Box component='h1' sx={{ textAlign: 'center' }}>
        <SchoolIcon /> Portal Educador
      </Box>
      <LoginForm />
    </Box>
  );
}
