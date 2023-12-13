import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5"
import Profile from "../SettingComponents/ProfileInformation/Profile"
import Manage from "../SettingComponents/ManageMultiple/Manage"
import Changepass from "../SettingComponents/ChangePassword/Changepass"
import ColorMode from "../SettingComponents/ColorModeComponent/ColorMode"
import SelectLanguage from "../SettingComponents/Language/SelectLanguage"
import UserManagementcomp from "../SettingComponents/UserManagement/UserManagementcomp"
import SendFeedback from "../SettingComponents/Feedback/SimilarComponents/SendFeedback"
import Terms from "../SettingComponents/TermsandCondition/Terms"
import Rateourapp from "../SettingComponents/RateApp/Rateourapp"
export let Profiledata=[{fonticon:'user',heading:"Profile", sub:"Information",detail:"Name, Email",navigationdata:"profile",navigationpage:Profile},{fonticon:'user-plus',heading:"Manage",sub:"Multiple Accounts",detail:"Switch Account",navigationdata:"manage",navigationpage:Manage},{fonticon:'lock',heading:"Change",sub:"Password",detail:"Change your current password",navigationdata:"changepass",navigationpage:Changepass}]
export let Appdata=[{fonticon:'sun',heading:"Color", sub:"Mode",detail:"To change the app view to light/dark",navigationdata:"colormode",navigationpage:ColorMode},{fonticon:'language',heading:"Change",sub:"Language",detail:"To change language",navigationdata:'language',navigationpage:SelectLanguage},{fonticon:'users',heading:"User",sub:"Management",detail:"To add Family Members",navigationdata:"usermanagement",navigationpage:UserManagementcomp}]
export let  General=[{fonticon:'heart',heading:"Rate Our", sub:"App",detail:"Rate & Rewiew the application",navigationdata:"rate",navigationpage:Rateourapp},{fonticon:'envelope',heading:"Send", sub:"Feedback",detail:"Share your thought of APDCL",navigationdata:"feedback",navigationpage:SendFeedback},{fonticon:'eye-slash',heading:"Terms and", sub:"Condition",detail:"Read our Privacy Policies & T/C",navigationdata:"terms",navigationpage:Terms}]
