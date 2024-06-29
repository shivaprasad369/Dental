import * as React from 'react';
import { styled } from '@mui/material/styles';

import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
  backgroundColor:'transparent'
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    
    {...props}
  />
))(({ theme }) => ({
//   backgroundColor: expanded
//     ? 'rgba(255, 255, 255, .05)'
//       : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '0px solid rgba(0, 0, 0, .125)',
  backgroundColor:'transparent'
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="mb-4 bg-transparent">
        <AccordionSummary style={{backgroundColor:expanded==='panel1'?'#960101':'white',color:expanded==='panel1'?'white':'#252525',borderRadius:'10px'}} className={`${expanded === 'panel1'? 'bg-[#960101]': 'bg-green-500'} w-[100%] h-[100%] bg-red-700`}>
        <h1 className='text-semibold text-[1.3em] tracking-wide py-1 font-semibold '>Collapsible Group Item #3</h1>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
          
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}  className="mb-4">
      <AccordionSummary style={{backgroundColor:expanded==='panel2'?'#960101':'white',color:expanded==='panel2'?'white':'#252525',borderRadius:'10px'}} className={`${expanded === 'panel2'? 'bg-green-500': 'bg-green-500'} w-[100%] h-[100%] bg-red-700`}>
        <h1 className='text-semibold text-[1.3em] tracking-wide py-1 font-semibold'>Collapsible Group Item #3</h1>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
       
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
      <AccordionSummary style={{backgroundColor:expanded==='panel3'?'#960101':'white',color:expanded==='panel3'?'white':'#252525',borderRadius:'10px'}} className={`${expanded === 'panel3'? 'bg-green-500': 'bg-green-500'} w-[100%] h-[100%] bg-red-700`}>
        <h1 className='text-semibold text-[1.3em] tracking-wide py-1 font-semibold'>Collapsible Group Item #3</h1>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
   
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className="mt-4">
      <AccordionSummary style={{backgroundColor:expanded==='panel4'?'#960101':'white',color:expanded==='panel4'?'white':'#252525',borderRadius:'10px'}} className={`${expanded === 'panel4'? 'bg-green-500': 'bg-green-500'} w-[100%] h-[100%] bg-red-700`}>
        <h1 className='text-semibold text-[1.3em] tracking-wide py-1 font-semibold'>Collapsible Group Item #3</h1>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
