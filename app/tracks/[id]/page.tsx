'use client';

import { ITrack } from '@/types/track';
import Link from 'next/link';
import styles from '../tracks.module.scss';
import Container from '@mui/material/Container';
import { Box, ButtonBase, Grid, Paper, TextField, Typography } from '@mui/material';

const TrackPage = () => {
  const track: ITrack = {
    _id: '1',
    name: 'Two Moons',
    artist: 'Bobby Richards',
    text: 'Текст песни',
    listens: 42,
    picture: 'http://localhost:5000/picture/e60e2a6b-7329-4482-af38-5fba3906563f.jpg',
    audio: 'audio/6835743c-936b-4fbb-9e3f-c53133927ec5.mp3',
    comments: [],
  };

  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 1000,
        flexGrow: 1,
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 200, height: 200 }}>
            <img alt="complex" src={track.picture} className={styles.image} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Standard license
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $19.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
  //   <Container className={styles.track__container}>
  //     <Grid>
  //       <Link href={'/tracks'}>
  //         <h3 className={styles.back__button}>Back to Tracks</h3>
  //       </Link>
  //     </Grid>
  //     <Box className={styles.box__item}>
  //       <Grid item xs={8} className={styles.image__item}>
  //         <img src={track.picture} className={styles.image} />
  //       </Grid>
  //       <Grid className={styles.track__info}>
  //         <h4 style={{ marginBottom: '5px' }}>
  //           {track.name} - {track.artist}
  //         </h4>
  //         <h6>Auditions - {track.listens}</h6>
  //       </Grid>
  //     </Box>
  //     <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
  //       <Grid className="text_title">Lyrics</Grid>
  //       <Grid>{track.text}</Grid>
  //     </Grid>
  //     <Grid container>
  //       <h3>Comment this track</h3>
  //       <TextField label="Enter your name" fullWidth />
  //       <TextField label="Comment" fullWidth multiline rows={6} />
  //     </Grid>
  //   </Container>
  // );
};

export default TrackPage;
