import { IconButton, Grid } from '@mui/material';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import player from './components.module.scss';
import { ITrack } from '@/types/track';
import Link from 'next/link';
import ti from './components.module.scss';
import InputSlider from './UI/Volume';
import SongSlider from './UI/SongSlider';

const Player = () => {
  const track: ITrack = {
    _id: '1',
    name: 'Two Moons',
    artist: 'Bobby Richards',
    text: 'Текст песни',
    listens: 42,
    picture:
      'https://sun9-79.userapi.com/impg/DYbCfZFAZDjUXxbd7oW--xc71VcGhY8Ussu3vg/CIB9YVh2nuo.jpg?size=800x800&quality=96&sign=aeccac3fd3ea015bbf062f7c5d7f2d07&type=album',
    audio: 'http://localhost:5000/audio/6835743c-936b-4fbb-9e3f-c53133927ec5.mp3',
    comments: [],
  };
  const active = false;
  return (
    <footer className={player.box__player}>
      <Grid container style={{ alignItems: 'center' }}>
        <IconButton color="warning" size="large" onClick={(e) => e.stopPropagation()}>
          {active ? <PauseCircleIcon /> : <PlayCircleIcon />}
        </IconButton>
        <img
          className={player.image__player}
          src="https://sun9-79.userapi.com/impg/DYbCfZFAZDjUXxbd7oW--xc71VcGhY8Ussu3vg/CIB9YVh2nuo.jpg?size=800x800&quality=96&sign=aeccac3fd3ea015bbf062f7c5d7f2d07&type=album"
        />
        <Grid container className={ti.name_wrapper}>
          <Link href={`tracks/${track._id}`}>{track.name}</Link>
          <div onClick={(e) => e.stopPropagation()} className={ti.artist}>
            {track.artist}
          </div>
        </Grid>

        <Grid className={ti.song_slider}>
          <SongSlider left={0} right={100} change={() => ({})} />
        </Grid>

        <Grid className={ti.volume}>
          <InputSlider left={0} right={100} change={() => ({})} />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Player;
