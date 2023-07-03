import React from 'react';
import { ITrack } from '@/types/track';
import tl from './components.module.scss';
import TrackItem from './TrackItem';

interface TrackListProps {
  tracks: ITrack[];
}

const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
  return (
    <div className={tl.container}>
      <div className={tl.box}>
        {tracks.map((track) => (
          <TrackItem key={track._id} track={track} />
        ))}
      </div>
    </div>
  );
};

export default TrackList;
