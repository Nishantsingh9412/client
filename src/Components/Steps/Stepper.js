import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Home from '../Landing/Home'
import Window from '../Cleaning_Comp/Window_clean/Window';
import Garden from '../Cleaning_Comp/Garden/Garden';
import Resid from '../Cleaning_Comp/Residential/Resid';
import Commercial from '../Cleaning_Comp/Commercial/Commercial';
import Others from '../Cleaning_Comp/startingFrom/Others';
import Booking from '../Booking/Booking';
import { resetSaveState } from '../../Redux/action/saved';
import './Stepper.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

// const steps = ['Window Cleaning', 'Garden Cleaning', 'Residential Cleaning','Hour Basis ','Address'];
const steps = ['Window Cleaning', 'Residential Cleaning','Address'];
// const ValidData = [];
// const FinalData = [];

export default function HorizontalLinearStepper() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const isSaved = useSelector((state) => state.saveReducer.isSaved);


  const isStepOptional = (step) => {
    return (step === 0 || step === 1 || step === 2 || step === 3 || step === 4 );
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

 const handleNext = () => {

    if (!isSaved) {
      // toast.error("Please Save the data first",{
      //   position: "top-center",
      //   draggable: true,
      // });
      // alert('Please Save the data first')
      alert('Please Save the data first')
      return;
    }
    
    dispatch(resetSaveState());

  // Reset isSaved to false when navigating to the next step


    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    
    

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    window.location.reload();
    setActiveStep(0);
  };

  

  return (
    <Box className='aageMtBadhoOk' sx={{ width: '100%' }} >
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{  pt: 2 }}>
            <Box />
            <Button onClick={()=> navigate('/')}> BACK TO HOME  </Button>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {activeStep === 0 && <> <Window  /> </>}
          {/* {activeStep === 1 && <> <Garden  /> </>} */}
          {activeStep === 1 && <> <Resid />  </>}
          {/* {activeStep === 3 && <> <Commercial  /> </>} */}
          {/* {activeStep === 2 && <> <Others /> </>} */}
          {activeStep === 2 && <> <Booking  /> </>}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>

            <Button
              color="primary"
              onClick={() => navigate('/')}
              sx={{ mr: 2 }}
            >
              Home
            </Button>


            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
      {/* <ToastContainer /> */}
      <Toaster
          position="bottom-center"
      />
    </Box>
  );
}