import Billing from "../../screens/Billing/Billing";
import Comparison from "../../screens/Consumption Log/Comparisonfd/Comparison";
import History from "../../screens/Consumption Log/History/History";
import Dashboardone from "../../screens/DashboardScreen/Dashboard";
import Energy from "../../screens/EnergySavingTips/Energy";
import AllFAQ from "../../screens/FAQ/AllFAQ";
import Logout from "../../screens/Logout/Logout";
import Mdi from "../../screens/MDI/Mdi";
import Notifications from "../../screens/Notification/Notifications";
import Power from "../../screens/PowerQuality/Power";
import SendFeedback from "../../screens/Settingspage/SettingComponents/Feedback/SimilarComponents/SendFeedback";
import Rateourapp from "../../screens/Settingspage/SettingComponents/RateApp/Rateourapp";
import Setting from "../../screens/Settingspage/SettingComponents/Setting";
import Usefullinks from "../../screens/Useful/Usefullinks";


export const drawerItems = [ 
    {
        "name": 'Dashboardone',
        'label': 'Dashboard',
        "component": Dashboardone,
        "icon": 'home',
        'children':null
    },

    { 'name': 'ConsumptionLog',
        'label':'Consumption Log',
        "icon": 'bar-chart',
        'component':'',
        'children':[
            {
                "name": 'Comparison',
                'label': 'Comparison',
                 'component':Comparison,
                'icon': 'percent'
            },
            {
                "name": 'History',
                'label':'History',
                'component':History,
                'icon': 'clock'
            },
        ]
     },

    {
        "name": 'Billing',
        'label': 'Billing',
        'component': Billing,
        "icon": 'credit-card',
        'children':null
    },
    {
        "name": 'Mdi',
        'label': 'MDI',
        'component': Mdi,
        "icon": 'alert-octagon',
        'children':null
    },
    {
        "name": 'Power',
        'label': 'Power Quality',
        'component': Power,
        "icon": 'check-square',
        'children':null
    },
    {
        "name": 'EventAnalysis',
        'label': 'Event Analysis',
        'component':'',
        "icon": 'calendar',
        'children':null
    },
    {
        "name": 'Energy',
        'label': 'Energy Tips',
        'component': Energy,
        "icon": 'zap',
        'children':null
    },
    {
        "name": 'AllFAQ',
        'label': 'FAQ',
        'component': AllFAQ,
        "icon": 'file',
        'children':null
    },
    {
        "name": 'Notifications',
        'label': 'Notification',
        'component': Notifications,
        "icon": 'bell',
        'children':null
    },
    {
        "name": 'Setting',
        'label': 'Settings',
        'component': Setting,
        "icon": 'settings',
        'children':null
    },
    {
        "name": 'CustomerEngagement',
        'label':'Customer Engagement',
        'component': '',
        'icon':'',
        'children':null
    },
    {
        "name": 'Rateourapp',
        'label':'Rate Our App',
        'component': Rateourapp,
        'icon':'',
        'children':null

    },
    {
        "name": 'SendFeedback',
        'label':'Send Feedback',
        'component': SendFeedback,
        'icon':'',
        'children':null
    },
    {
    "name": 'ContactUs',
    'label':'Contact Us',
    'component': '',
    'icon':'at-sign',
    'children':null
},
    {
        "name": 'Usefullinks',
        'label':'Useful Links',
        'component': Usefullinks,
        'icon':'grid',
        'children':null
    },
    {
        "name": 'Logout',
        'label':'Log Out',
        'component':Logout,
        'icon':'log-out',
        'children':null
    },
]