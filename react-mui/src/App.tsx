import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useState } from 'react';
import {
  Stack,
  Button,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Autocomplete,
  FormGroup,
  Checkbox,
} from "@mui/material";

type Inputs = {
  firstname: string;
  lastname: string;
  address: string;
  gender : string
  exampleRequired: string;
};

export default function PersistentDrawerLeft() {
  const departments = [{ label: "HR" }, { label: "IT" }, { label: "FINANCE" }];
  const theme = useTheme();
  const [gender, setGender] = useState("other");
  const [isSelected, setSelected] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
    console.log(event.target.value);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        spacing={3}
        marginLeft={"50px"}
        marginRight={"50px"}
        marginTop={"30px"}
      >
        
        <Stack spacing={2} direction="row" marginTop={"50px"}>
          <TextField
            {...register("firstname")}
            variant="outlined"
            label={"First Name"}
            fullWidth
          ></TextField>
          <TextField
            variant="outlined"
            label={"Last Name"}
            fullWidth
            {...register("lastname")}
          ></TextField>
        </Stack>
        <TextField
          variant="outlined"
          label={"Address"}
          {...register("address")}
        ></TextField>

        <FormControl >
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            {...register("gender", {
              setValueAs: (g:any) => gender,
            })}
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            row
            value={gender}
            onSelect={() => setSelected(true)}
            onChange={handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Male"
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Other" 
            />
          </RadioGroup>
        </FormControl>

        <Autocomplete
          disablePortal
          fullWidth
          id="combo-box-demo"
          options={departments}
          renderInput={(params) => (
            <TextField {...params} label="Departments" />
          )}
        />
        <Typography variant={"h6"}>Favourite subject</Typography>
        <FormGroup row>
          <FormControlLabel control={<Checkbox />} label="ReactJs" />
          <FormControlLabel control={<Checkbox />} label="Java" />
        </FormGroup>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
}
