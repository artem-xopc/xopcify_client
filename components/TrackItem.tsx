import React from 'react';
import { ITrack } from '@/types/track';
import ti from './components.module.scss';
import { IconButton } from '@mui/material';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import deleteCross from '../assets/icons/delete-cross.png';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  const router = useRouter();
  return (
    <div className={ti.container} onClick={() => router.push('/tracks/' + track._id)}>
      <div className={ti.box}>
        <IconButton color="warning" size="large" onClick={(e) => e.stopPropagation()}>
          {active ? <PauseCircleIcon /> : <PlayCircleIcon />}
        </IconButton>
        <Link href={`tracks/${track._id}`}>
          <img className={ti.image} src={track.picture} alt="Track logo" />
        </Link>
        <span className={ti.name_wrapper}>
          <Link href={`tracks/${track._id}`}>{track.name}</Link>
          <div onClick={(e) => e.stopPropagation()}>{track.artist}</div>
        </span>
        {active && <div>00:42 / 03:00</div>}
        <div className={ti.delete__button} onClick={(e) => e.stopPropagation()}>
          <IconButton color="error" size="large">
            <HighlightOffIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default TrackItem;
