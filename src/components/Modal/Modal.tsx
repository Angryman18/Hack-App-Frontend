// Modal.js

import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Transition from "../Transitions";
import { Stack } from "@mui/material";

const Modal = ({ open, toggle, children, onClose }: Component.ModalProps): any => {
  return (
    <Dialog fullScreen open={open} onClose={toggle} TransitionComponent={Transition}>
      <Stack sx={{ display: "block", marginLeft: "auto" }}>
        <IconButton
          edge='start'
          sx={{ margin: [1, 5] }}
          color='inherit'
          onClick={onClose}
          aria-label='close'
        >
          <CloseIcon fontSize='large' />
        </IconButton>
      </Stack>
      {children}
    </Dialog>
  );
};

export default Modal;
