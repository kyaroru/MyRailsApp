import reactblogger from 'images/apps/reactblogger.png';
import rndraw from 'images/apps/rndraw.png';
import rntodoapp from 'images/apps/rntodoapp.png';
import bearsweeper from 'images/apps/bearsweeper.png';
import flags4fun from 'images/apps/flags4fun.png';
import flowy from 'images/apps/flowy.png';

const apps = [
  {
    id: 'flowy',
    image: flowy,
    label: 'Flowy: Spending Tracker',
    googleUrl:
      'https://play.google.com/store/apps/details?id=com.kyaroru.flowy',
    appleUrl:
      'https://apps.apple.com/us/app/flowy-spending-tracker/id1486077846?ls=1',
  },
  {
    id: 'flags4fun',
    image: flags4fun,
    label: 'Flags 4 Fun',
    googleUrl:
      'https://play.google.com/store/apps/details?id=com.kyaroru.flags4fun',
    appleUrl: 'https://apps.apple.com/us/app/flags-4-fun/id1477859310?ls=1',
    huaweiUrl: 'https://appgallery.huawei.com/#/app/C104364693',
  },
  {
    id: 'reactblogger',
    image: reactblogger,
    label: 'ReactBlogger',
    googleUrl:
      'https://play.google.com/store/apps/details?id=com.reactblogger&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
    appleUrl:
      'https://itunes.apple.com/us/app/reactblogger/id1447077887?ls=1&mt=8',
  },
  {
    id: 'rndraw',
    image: rndraw,
    label: 'RNDraw',
    googleUrl:
      'https://play.google.com/store/apps/details?id=com.rndraw&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
    appleUrl: 'https://itunes.apple.com/us/app/rndraw/id1447536209?ls=1&mt=8',
  },
  {
    id: 'rntodoapp',
    image: rntodoapp,
    label: 'RNTodoApp',
    googleUrl:
      'https://play.google.com/store/apps/details?id=com.rntodoapp&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
    appleUrl: null,
  },
];

const games = [
  {
    id: 'bearsweeper',
    image: bearsweeper,
    label: 'BearSweeper',
    googleUrl:
      'https://play.google.com/store/apps/details?id=com.bearsweeper&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
    appleUrl:
      'https://itunes.apple.com/us/app/bearsweeper/id1447809603?ls=1&mt=8',
    macstoreUrl:
      'https://itunes.apple.com/my/app/bearsweeper/id1448125669?mt=12',
    microsoftUrl:
      'https://www.microsoft.com/store/apps/9N72G3W07BZK?ocid=badge',
  },
];

export default { apps, games };
