import { Button, Typography } from '@mui/material';
import Widget from './components/widget';
import PrimerButton from './components/PrimerButton';

function App() {
  return (
    <div className="App">
      <Typography variant="h2">React Materail UI Primer</Typography>
      <Button variant="contained" size="small" color="primary">
        Show User Details
      </Button>
      <Button variant="contained" color="secondary">
        Print Data
      </Button>
      <hr />
      <Typography variant="captorText">Custom Typography Variant</Typography>

      <Widget />

      <PrimerButton variant="contained">Custom Primer Button</PrimerButton>
    </div>
  );
}

export default App;
