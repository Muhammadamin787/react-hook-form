import { Box, Drawer } from "@mui/material"
import { PayloadDrawerType } from "../../utils/types"
import "./payload-drawer.scss";

export type PayloadDrawerProps = {
     payload: PayloadDrawerType,
     setPayload: (json: PayloadDrawerType) => void
}

const PayloadDrawer = ({ payload, setPayload }: PayloadDrawerProps) => {
     return (
          <Drawer
               anchor={"right"}
               open={!!payload}
               onClose={() => setPayload(null)}
               style={{ width: "200px" }}>
               <Box sx={{
                    ...boxSx,
                    height: "100%",
                    bgcolor: 'rgba(230,230,230,.3)',
               }}>
                    <h3>Payload</h3>
                    <pre style={{ color: "#1976D2" }}>{payload}</pre>
               </Box>
          </Drawer>)
}

const boxSx = { wordWrap: "break-word", padding: "0 20px", fontSize: "1.3em" }

export default PayloadDrawer