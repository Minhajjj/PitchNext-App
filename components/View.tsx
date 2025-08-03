import React from 'react';
import Ping from './Ping';
import { client } from '@/sanity/lib/client';
import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/queries';

const View = async ({ id }: { id: string }) => {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });

  // TODO : Update the number of views

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative inline-block">
        <div className="bg-sky-100 px-4 py-2 rounded-xl font-bold">
          {totalViews ?? 0} Views
        </div>
        <Ping />
      </div>
    </div>
  );
};

export default View;
