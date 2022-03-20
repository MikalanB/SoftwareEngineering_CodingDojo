import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import People from './views/People';
import Planets from './views/Planets';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';
import { FormControl, Input, InputLabel, TextField, Select, MenuItem, Button, Stack} from '@mui/material';
import PageNotFound from './views/PageNotFound';
import Starships from './views/Starships';


function App() {
  const [category, setCategory] = useState("people")
  const [id, setId] = useState("")

  const history = useHistory();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    history.push(`/${category}/${id}`)
  }

  return (
    <div className="App">
      <h1>Luke API Walker Assignment</h1>
      <div style={{ marginTop: "70px", marginLeft: "70px", marginRight: "70px" }}>
        <form onSubmit={onSubmitHandler}>
              <Stack spacing={5} direction="row" justifyContent="around">
                  <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Search For: </InputLabel>
                      <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          //value=
                          label="Category"
                          onChange={(event) => setCategory(event.target.value)}
                      >
                          <MenuItem value="People">People</MenuItem>
                          <MenuItem value="Planets">Planets</MenuItem>
                          <MenuItem value="Starships">Starships</MenuItem>
                      </Select>
                  </FormControl>
                  <FormControl fullWidth>
                      <TextField id="outlined-basic" label="ID" value={id} variant="outlined" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} onInput={(event) => setId(event.target.value)}/>
                  </FormControl>
                  <FormControl fullWidth>
                      <Button type="submit" variant="contained" color="primary" size="medium">Search</Button>
                  </FormControl>
              </Stack>
        </form>
      </div>
      <Switch>
        <Route exact path ="/people/:id">
          <People />
        </Route>

        <Route exact path ="/planets/:id">
          <Planets />
        </Route>

        <Route exact path ="/starships/:id">
          <Starships />
        </Route>

        <Route exact path ="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
