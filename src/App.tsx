import "./App.css";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import MuiPicker from "./component/MuiPicker";
import MuiTabs from "./component/MuiTabs";
// import MuiLoadingButton from "./component/MuiLoadingButton";
// import MuiAlter from "./component/MuiAlter";
// import MuiChip from "./component/MuiChip";
// import MuiDialog from "./component/MuiDialog";
// import MuiProgress from "./component/MuiProgress";
// import { MuiSkeleton } from "./component/MuiSkeleton";
// import { MuiSnackbar } from "./component/MuiSnackbar";
// import MuiTable from "./component/MuiTable";
// import MuiTooltip from "./component/MuiTooltip";
// import { MuiAvatar } from './component/MuiAvatar';
// import { MuiBadge } from './component/MuiBadge';
// import { MuiBottomnavigation } from './component/MuiBottomnavigation';
// import { MuiList } from './component/MuiList';
// import MuiSpeedDial from './component/MuiSpeedDial';
// import MuiAccordion from './component/MuiAccordion';
// import { MuiImageList } from './component/MuiImageList';
// import MuiAutoComplete from './component/MuiAutoComplete';
// import MuiLayout from './component/MuiLayout';
// import MuiCheckBox from './component/MuiCheckBox';
// import MuiTextField from './component/MuiTextField';
// import MuiTyporaphy from './component/MuiTyporaphy';
// import MuiButton from './component/MuiButton';
// import MuiSelect from './component/MuiSelect';
// import MuiRadio from './component/MuiRadioButton';
// import MuiSwitch from './component/MuiSwitch';
// import MuiRating from './component/MuiRating';
// import MuiCard from './component/MuiCard';
// import { MuiNavbar } from './component/MuiNavbar';
// import {MuiLink} from './component/MuiLink';
// import { MuiBreadcrumbs } from './component/MuiBreadcrumbs';
// import { MuiDrawer } from './component/MuiDrawer';


function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        {/* <MuiTyporaphy /> */}
        {/* <MuiButton /> */}
        {/* <MuiTextField /> */}
        {/* <MuiSelect /> */}
        {/* <MuiRadio /> */}
        {/* <MuiCheckBox /> */}
        {/* < MuiSwitch /> */}
        {/* <MuiRating /> */}
        {/* <MuiAutoComplete /> */}
        {/* <MuiLayout /> */}
        {/* <MuiCard /> */}
        {/* <MuiAccordion /> */}
        {/* <MuiImageList /> */}
        {/* <MuiNavbar /> */}
        {/* <MuiLink /> */}
        {/* <MuiBreadcrumbs />
      <MuiDrawer /> */}
        {/* <MuiSpeedDial /> */}
        {/* <MuiBottomnavigation /> */}
        {/* <MuiAvatar /> */}
        {/* <MuiBadge /> */}
        {/* <MuiList /> */}
        {/* <MuiChip /> */}
        {/* <MuiTooltip /> */}
        {/* <MuiTable /> */}
        {/* <MuiAlter /> */}
        {/* <MuiSnackbar /> */}
        {/* <MuiDialog /> */}
        {/* <MuiProgress /> */}
        {/* <MuiSkeleton /> */}
        {/* <MuiSkeleton /> */}
        {/* <MuiLoadingButton /> */}
        {/* <MuiPicker /> */}
        <MuiTabs />
      </div>
    </LocalizationProvider>
  );
}

export default App;
