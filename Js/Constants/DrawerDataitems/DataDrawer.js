import Billing from "../../screens/Billing/Billing";
import Comparison from "../../screens/Consumption Log/Comparisonfd/Comparison";
import History from "../../screens/Consumption Log/History/History";
import Dashboardone from "../../screens/Dashboardd/Dashboardone";
import Energy from "../../screens/EnergySavingTips/Energy";
import AllFAQ from "../../screens/FAQ/AllFAQ";
import Logout from "../../screens/Logout/Logout";
import Mdi from "../../screens/MDI/Mdi";
import Notifications from "../../screens/Notification/Notifications";
import Power from "../../screens/PowerQuality/Power";
import Profile from "../../screens/Settingspage/SettingComponents/ProfileInformation/Profile";
import Setting from "../../screens/Settingspage/SettingComponents/Setting";
import Usefullinks from "../../screens/Useful/Usefullinks";

export const draweritems = [
  {
    "name": 'Dashboardone',
    "label": 'Dashboard',
    "component": Dashboardone,
    "icon": 'home',
  },
  {
    "name": 'Comparison',
    "label": 'Comparison',
    "component": Comparison,
    "icon": 'percent',
    // dropdownItems: [
    //     { label: 'Consumer History', component: History },
    //     { label: 'Another Dropdown Item', component: Billing },
    //   ],
  },
  {
    "name": 'History',
    'label':'History',
    'component': History,
    "icon": 'clock'
   },
   {
    "name": 'Billing',
    'label':'Billing',
    'component': Billing,
    "icon": 'credit-card'
   }
   , {
    "name": 'Mdi',
    'label': 'MDI',
    'component': Mdi,
    "icon": 'exclamation-circle'
},
{
    "name": 'Power',
    'label': 'Power Quality',
    'component': Power,
    "icon": 'check-square'
},
{
    "name": 'EventAnalysis',
    'label': 'Event Analysis',
    'component':'',
    "icon": 'calendar'
},
{
    "name": 'Energy',
    'label': 'Energy Tips',
    'component': Energy,
    "icon": 'bolt'
},
{
    "name": 'AllFAQ',
    'label': 'FAQ',
    'component': AllFAQ,
    "icon": 'file'
},
{
    "name": 'Notifications',
    'label': 'Notification',
    'component': Notifications,
    "icon": 'bell'
},
{
    "name": 'Setting',
    'label': 'Settings',
    'component': Setting,
    "icon": 'cog'
},
// {
//     "name":null,
//     'label': 'Customer Engagement',
//     'component':null,
//     "icon": 'border-all'
// },
// {
//     "name":null,
//     'label': 'Contact Us',
//     'component':null,
//     "icon": 'border-all'
// },{
//     "name":null,
//     'label': 'Esyasoft+',
//     'component':null,
//     "icon": 'border-all'
// },
{
    "name": 'Usefullinks',
    'label': 'Useful Links',
    'component': Usefullinks,
    "icon": 'border-all'
},
{
    "name": 'Logout',
    'label': 'Logout',
    'component': Logout,
    "icon": 'sign-out-alt'
},

];
