'use client';

import StepWrapper from '@/components/StepWrapper';
import { Grid, TextField } from '@mui/material';
import React from 'react';

const CreateTrack = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const next = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const back = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const completed = () => {
    setActiveStep(0);
  };
  return (
    <div>
      <h3>Create | Add your track</h3>

      <section>
        <StepWrapper activeStep={activeStep} next={next} back={back} completed={completed}>
          {activeStep === 0 && (
            <Grid container direction={'column'}>
              <h4>Step 1</h4>
              <h5>Add track information</h5>
              <TextField style={{ marginTop: '10px' }} label="Enter the song name" />
              <TextField style={{ marginTop: '10px' }} label="Enter the autor's name" />
              <TextField style={{ marginTop: '10px' }} label="Enter the lyrics of the song" />
            </Grid>
          )}
          {activeStep === 1 && (
            <div>
              <h4>Step 2</h4>
              <h5>Select track cover art</h5>
            </div>
          )}
          {activeStep === 2 && (
            <div>
              <h4>Step 3</h4>
              <h5>Add track</h5>
            </div>
          )}
        </StepWrapper>
      </section>
    </div>
  );
};

export default CreateTrack;
