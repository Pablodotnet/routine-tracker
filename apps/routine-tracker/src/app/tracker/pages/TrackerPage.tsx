import { AddOutlined } from '@mui/icons-material';
import { TrackerLayout } from '../layout/TrackerLayout';
import { NoteView, NothingSelectedView } from '../views';
import { IconButton } from '@mui/material';

export const TrackerPage = () => {
  return (
    <TrackerLayout>
      <NothingSelectedView />
      {/* <NoteView /> */}
      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </TrackerLayout>
  );
};
