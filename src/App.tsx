import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Fragment, useState } from 'react';
import './App.scss';
import MuiForm from './components/Form/Form';
import MainFormProvider from './components/Form/logic/MainFormProvider';
import PayloadDrawer from "./components/PayloadDrawer/PayloadDrawer";
import { PayloadDrawerType } from "./utils/types";

function App() {
    
    // States
    const [payload, setPayload] = useState<PayloadDrawerType>(null);

    return (
        <Fragment>
            <MainFormProvider>
                <MuiForm setPayload={setPayload} />
            </MainFormProvider>
            <PayloadDrawer payload={payload} setPayload={setPayload} />
        </Fragment>
    )
}

export default App
