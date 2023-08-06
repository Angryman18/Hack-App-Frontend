// Modal.js

import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Transition from "../Transitions";
import { Stack } from "@mui/material";

const Modal = ({ open, toggle, children, onClose }: Component.ModalProps): JSX.Element => {
  return (
    <Dialog fullScreen open={open} onClose={toggle} TransitionComponent={Transition}>
      <Stack sx={{ display: "block", marginLeft: "auto" }}>
        <IconButton
          edge='start'
          color='inherit'
          sx={{ margin: [1, 5] }}
          onClick={onClose}
          aria-label='close'
        >
          <CloseIcon fontSize='large' />
        </IconButton>
      </Stack>
      <Stack sx={{ marginTop: -6 }}>{children}</Stack>
    </Dialog>
  );
};

export default Modal;
