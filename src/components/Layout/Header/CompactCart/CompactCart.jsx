import React from 'react'
import Popover from '@material-ui/core/Popover'

const CompactCart = ({ anchorEl, handleClose }) => (
  <Popover
    onClose={handleClose}
    open={Boolean(anchorEl)}
    anchorEl={anchorEl}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    disableRestoreFocus
  >
    <h2 style={{ padding: '10px' }}>Compact Cart!</h2>
  </Popover>
)

export default CompactCart
