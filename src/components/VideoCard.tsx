import React from 'react';
import { Play, Flame, ExternalLink } from 'lucide-react';
import { VideoItem } from '../types';

interface VideoCardProps {
  video: VideoItem;
  onSelect: (video: VideoItem) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, onSelect }) => {
  return (
    <div
      id={`video-card-${video.id}`}
      onClick={() => onSelect(video)}
      className="group relative flex flex-col bg-neutral-900 rounded-3xl border border-neutral-800 hover:border-neutral-700 overflow-hidden cursor-pointer transition-all duration-300 shadow-xl"
    >
      {/* Card Media / Stylized Blueprint Canvas */}
      <div className="relative aspect-[9/13] w-full overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 flex flex-col justify-between p-4 border-b border-neutral-800/80">
        {/* Background Pattern Grid */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none group-hover:opacity-25 transition-opacity" />

        {/* Custom Thumbnail if available */}
        {video.thumbnailUrl && (
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
          />
        )}

        {/* Top Badges */}
        <div className="relative z-10 flex items-center justify-between pointer-events-none">
          {/* Sample Style Tag */}
          <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-[10px] font-bold text-blue-300 uppercase tracking-wider shadow-sm flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Sample Style
          </span>

          <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-neutral-400 border border-neutral-800">
            {video.duration}
          </span>
        </div>

        {/* Center Blueprint Emblem & Play Icon */}
        <div className="relative z-10 flex flex-col items-center justify-center my-auto py-4">
          <div className="w-12 h-12 rounded-2xl bg-neutral-950/80 backdrop-blur-md border border-neutral-700/80 text-white flex items-center justify-center shadow-2xl group-hover:border-blue-500/50 group-hover:scale-110 transition-all duration-300">
            <Play className="w-5 h-5 fill-white text-white ml-0.5" />
          </div>
          <span className="text-[10px] font-mono text-neutral-500 mt-2 tracking-wider uppercase group-hover:text-neutral-300 transition-colors">
            9:16 Feed Frame
          </span>
        </div>

        {/* Bottom Hook Pill */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono">
          {video.metrics && (
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-neutral-800 text-blue-300">
              <Flame className="w-3 h-3 text-blue-400 fill-blue-400" />
              <span>{video.metrics.hookRate} Hook</span>
            </div>
          )}
          <span className="text-neutral-400 bg-black/70 px-2 py-0.5 rounded-full border border-neutral-800">
            {video.aspectRatio}
          </span>
        </div>
      </div>

      {/* Card Meta & Hook Description */}
      <div className="p-4 flex flex-col flex-grow justify-between space-y-3">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
              {video.category}
            </span>
            <span className="text-[10px] font-mono text-blue-400">
              Slot Ready
            </span>
          </div>
          <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
            {video.title}
          </h3>
          <p className="text-xs text-neutral-400 italic line-clamp-2 font-normal">
            "{video.hookHeadline}"
          </p>
        </div>

        {/* Footer tags */}
        <div className="pt-2.5 border-t border-neutral-800/80 flex items-center justify-between text-xs">
          <span className="text-[10px] font-mono text-neutral-400 bg-neutral-950 px-2 py-0.5 rounded-full border border-neutral-800/60">
            {video.tags[0]}
          </span>
          <span className="text-[11px] font-bold text-neutral-300 group-hover:text-white flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
            Preview Style <ExternalLink className="w-3 h-3 text-blue-400" />
          </span>
        </div>
      </div>
    </div>
  );
};
