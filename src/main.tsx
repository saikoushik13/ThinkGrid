import { Devvit, useState } from '@devvit/public-api';
import { Router } from './posts/Router.js';

Devvit.configure({
  redditAPI: true,
  redis: true,
});

Devvit.addCustomPostType({
  name: 'THINKGRID',
  height: 'tall',
  render: Router,
});

Devvit.addMenuItem({
  label: 'Create THINKGRID',
  location: 'subreddit',
  onPress: async (_event, context) => {
    const currentSubreddit = await context.reddit.getCurrentSubreddit();
    await context.reddit.submitPost({
      title: 'THINKGRID',
      subredditName: currentSubreddit.name,
      preview: (
        <vstack>
          <text>Loading THINKGRID...</text>
        </vstack>
      ),
    });
    context.ui.showToast(`Created THINKGRID post in ${currentSubreddit.name}`);
  },
});

export default Devvit;