import React from 'react';
import { ITrack } from '@/types/track';
import ti from './components.module.scss';

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  return (
    <div className={ti.container}>
      <div className={ti.box}>{track.name}</div>
    </div>
  );
};

export default TrackItem;
