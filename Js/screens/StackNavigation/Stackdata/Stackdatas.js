import Consumer from "../../Consumer/Consumer";
import Forgotpassword from "../../ForgotPassword screens/Forgotpassword";
// import Otp from "../../OtpPage/Otp";
import MainAppp from "../../Splash screens/Main/MainAppp";
import Setting from "../../Settingspage/SettingComponents/Setting";
import Profile from "../../Settingspage/SettingComponents/ProfileInformation/Profile";
import Manage from "../../Settingspage/SettingComponents/ManageMultiple/Manage";
import Changepass from "../../Settingspage/SettingComponents/ChangePassword/Changepass";
import ColorMode from "../../Settingspage/SettingComponents/ColorModeComponent/ColorMode";
import SelectLanguage from "../../Settingspage/SettingComponents/Language/SelectLanguage";
import UserManagementcomp from "../../Settingspage/SettingComponents/UserManagement/UserManagementcomp";
import SendFeedback from "../../Settingspage/SettingComponents/Feedback/SimilarComponents/SendFeedback";
import Terms from "../../Settingspage/SettingComponents/TermsandCondition/Terms";
import DrawerNavigations from "../../NavigationData/DrawerNavigations";
import Rateourapp from "../../Settingspage/SettingComponents/RateApp/Rateourapp";
import SignupPage from "../../SignUp/SignupPage";
import Onboarding from "../../Onboarding-screens/Onboarding";
import LoginScreen from "../../Loginpage/LoginScreen";
import { Otp } from "../../OtpPage/Otp";


export const stackarray=[
{'name':'mainappp','componentname':MainAppp},
{'name':'onboardingone','componentname':Onboarding},
{'name':'consumer','componentname':Consumer},
{'name':'signup','componentname':SignupPage},
{'name':'otp','componentname':Otp},
{'name':'forgotpassword','componentname':Forgotpassword},
{'name':'drawer','componentname':DrawerNavigations},
{'name':'login','componentname':LoginScreen},
// {'name':'Setting','componentname':Setting},
{'name':'profile','componentname':Profile},
{'name':'manage','componentname':Manage},
{'name':'changepass','componentname':Changepass},
{'name':'language','componentname':SelectLanguage},
{'name':'rate','componentname':Rateourapp},
{'name':'usermanagement','componentname':UserManagementcomp},
{'name':'feedback','componentname':SendFeedback},
{'name':'terms','componentname':Terms},
{'name':'colormode','componentname':ColorMode},
]
