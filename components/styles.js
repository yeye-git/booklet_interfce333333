import styled from 'styled-components';
import { Dimensions, View, Image, Text } from 'react-native';
import Constants from 'expo-constants';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Button } from 'react-native';
import { ImageBackground } from 'react-native';
import { ScrollView } from 'react-native';
import { Modal } from 'react-native';
let deviceWidth = Dimensions.get('window').width
let deviceheight = Dimensions.get('window').height

const bookletpageheight = deviceheight - (60);
const StatusBarHeight = Constants.statusBarHeight;
// colours
export const Colors = {
    primary: "#fffffff",
    secondary: "#ESE7EB",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand: "#6D28D9",
    green: "#10B981",
    red: "#EF4444",

};
const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;
export const StyledContainer = styled(View)`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${primary};
`;
export const InnerContainer = styled(View)`
    flex: 1;
    width: 100%;
    align-items: center;

`;

export const PageTitle = styled(Text)`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10px;
`;
export const PageLogo = styled(Image)`
    width: 250px;
    height: 200px;
`;

export const SubTitle = styled(Text)`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${tertiary};
`;

export const StyledTextInput = styled(TextInput)`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-botton: 10px;
    color: ${tertiary};

`;

export const StyledInputLabel = styled(Text)`
    color: ${tertiary};
    font-size: 13px;
    text-align: left;
`;
export const StyledFormArea = styled(View)`

    width: 90%;
`;
export const BookletSideBar = styled(View)`
        flex: 1;
        width: 50px;
        flexDirection: column;
        backgroundColor: #88AAFF;
`;
export const SBButtonCont = styled(TouchableOpacity)`
        width: 100%;
        height: 50px;
        align-items: center;
        justifyContent: center;
        padding-top: 40px;
        padding-bottom: 40px;
`;
export const SBIcon = styled(Image)`
    width: 48px;
    height: 48px;
`;
export const QuestionContainer = styled(View)`
        flex: 2;
        backgroundColor: #E39FF6;
        flexDirection: column;
`;
export const BookletLayoutCont = styled(View)`
        width: 100%;
        height: 100%;
        backgroundColor: lightblue;
        flexDirection: row;
`;
export const QCHeader = styled(View)`
        width: 100%;
        height: 50px;
        align-items: center;
`;
export const QCHeaderText = styled(Text)`
    font-size: 16px;
    font-weight: bold;
`;
export const HomePageProfileImage = styled(View)`
    padding-top:70px;
    width: 100%;
    flexDirection: column;
    align-items: center;
    backgroundColor: #5141B6;
    padding-bottom: 15px;
`;
export const HomePageButtonsContainer = styled(View)`
    width: 100%;
    flexDirection: column;
    align-items: flex-start;
`;
export const HomePageButtons = styled(View)`
    height: 50px;
    width: 50px; 
    backgroundColor: #CBBBF7;
`;
export const HomePageButtonTextCont = styled(View)`
    width: 100%;
    align-items: flex-start;
    flexDirection: row;
    left: 20%;
    margin-top: 10px;
    margin-bottom: 10px;
`;
export const HomeContentPane = styled(View)`
    width: 100%;
    align-items: center;
    flexDirection: column;
`;
export const StudentNamePane = styled(View)`
    width: 100%;
    height: 100px;
    align-items: center;
    justifyContent: center;
`;
export const StudentNameButton = styled(Button)`
    width: 50%;
    height: 60px;
    align-items: center;

    
`;
export const StudButtonText = styled(Text)`
    justifyContent: center;
    font-size: 30px;
    font-weight: bold;
    left: 10px;
`;
export const ProfileContentPane = styled(View)`
    width: 100%;
    align-items: center;
    flexDirection: column;
    margin-bottom:100px;
     backgroundColor: #f2f2f2;
`;
export const ProfileTopContainer = styled(View)`
    width: 100%;
    height: 150px;
    padding-top:170px;
    align-items: center;
    flexDirection: column;
    backgroundColor: #8d58f0;
    justifyContent: center;
    // margin-bottom:50px
`;
export const ProfileBottomContainer = styled(View)`
    margin-top:40px;
    width: 100%;
    height: 380px;
    border-radius:15px;
    align-items: center;
    flexDirection: column;
`;
export const ProfileImageTextCont = styled(View)`
    width: 330px;
    height: 250px;
    flexDirection: row;
    border-radius:15px;
    backgroundColor: #7435C4;
    
`;
export const ProfileTopTextCont = styled(View)`
    width: 50%;
    height: 100%;
    flexDirection: column;
    backgroundColor: #7435C4;
    justifyContent: center;
    align-items: center;
    border-radius:20px;
    // //box-shadow:5px 5px 5px red;
    
    
`;
export const ProfileTopImageCont = styled(View)`
    width: 50%;
    height: 100%;
    justifyContent: center;
    align-items: center;
`;
export const ProfileHeadText = styled(Text)`
    justifyContent: center;
    font-size: 30px;
    padding: 30px;
    color: #ffff;
`;
export const ProfileSubText = styled(Text)`
    justifyContent: center;
    font-size: 16px;
    padding-bottom: 30px;
    color: #ffff;
`;
export const ProfileImage = styled(Image)`
    width: 120px;
    height: 135px;
    
`;
export const ProfileAboutMe = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
    width: 100%;
    height: 30px;
    // margin-left:80px;
`;
export const ProfileAboutMeText = styled(Text)`
    alignItems: center;
    justifyContent: center;
    font-size: 24px;
    color: #000000;
`;

export const ProfileAboutCText = styled(Text)`
   
    // justifyContent: center;
    font-size: 24px;
    // color: #000000;
`;

export const ProfileBottomTextCont = styled(View)`
    maring-top:80px;
    width: 100%;
    height: 180px;
    justifyContent: center;
    align-items: center;
    flexDirection: row;
`;
export const ProfileBottomTextCont2 = styled(View)`
    
    width: 160px;
    height: 90%;
    backgroundColor: #C0ACF7;
    justifyContent: center;
    align-items: center;
    margin: 10px;
    padding: 10px;
`;
export const ProfileButtonsCont = styled(View)`
    width: 100%;
    height: 90%;
    justifyContent: flex-start;
    align-items: center;
    margin: 10px;
    padding: 30px;
`;
export const AboutMeHeadText = styled(Text)`
    justifyContent: center;
    font-size: 16px;
    font-weight: bold;

`;
export const LoginPageView = styled(View)`
    width: ${deviceWidth}px;
    height: 100%;
    flexDirection: column;
    backgroundColor: #FFFFFF;
    align-items: center;

`;
export const LoginContSplash = styled(ImageBackground)`
  position: relative;
    width: 100%;
    height: 460px;
  background-color: antiquewhite;
`;
export const LoginContForms = styled(View)`
    margin-top: -30px;
    width: 100%;
`;
export const CustomTextInputWrapper = styled(View)`
    position: relative;
`
export const CustomTextInput = styled(TextInput)`
  background-color: #e7e0ec;
  padding: 12px 15px;
  height: 50px;
  border-radius: 25px;
`
export const CustomButton = styled(TouchableOpacity)`
  background-color: #6b5ec1;
  padding: 12px;
  margin-bottom: 30px;
`
export const CustomButtonText = styled(Text)`
  color: #ffffff;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
`
export const LoginContSubmissionButtons = styled(View)`
    width: 100%;
    flexDirection: row;
    justify-content: space-around;
    align-center: center;
`;
export const LoginContBottomButtons = styled(View)`
    width: 100%;
    flexDirection: row;
    justify-content: space-around;
    align-center: center;
`;
export const LoginHeadText = styled(Text)`
  position: absolute;
  left: 30px;
  top: 160px;
  width: 120px;
    justifyContent: center;
    font-size: 36px;
    font-weight: bold;
    color: #FFFFFF;

`;
export const LoginForms = styled(TextInput)`
    height: 40px;
    margin: 12px;
    border-bottom-width: 1px;
    border-color: #d9d9d9;
    padding: 10px;

`;
export const LoginButtons = styled(TouchableOpacity)`
    position: relative;
    backgroundColor: #c3faf7;
    padding: 20px;
    borderRadius: 80px;
    width: 80px;
    height: 80px;
    margin: 20px;
    align-center: center;
    justifyContent: center;
`;
export const LoginButtonText = styled(Text)`
    position: absolute;
    left: -8px;
    width: 120px;
    justifyContent: center;
    font-size: 30px;
    font-weight: bold;
`;
export const BottomButtons = styled(TouchableOpacity)`
    backgroundColor: #ece5ff;
    padding: 10px;
    borderRadius: 10px;
    width: 42%;
`;
export const BottomButtonText = styled(Text)`
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #333;
`;
//Signup Page
export const SignupContentPane = styled(View)`
    width: 100%;
    flex: 1;
    backgroundColor:#fff;
    align-center: center;
    flexDirection: column;
`;
export const MakingLearningFunHeaderBar = styled(View)`
     width: 100%;
     height: 140px;
     flexDirection: row;
     align-center: center;
     backgroundColor: #5141B6;
    
`;
export const UpperSignupPane = styled(View)`
    width: 100%;
    //height: 400px
    align-center: center;
    flexDirection: column;
`;
export const UpperPaneHeadTextCont = styled(View)`
    align-center: flex-start;
    flexDirection: column;
    
`;
export const UpperPaneHeadText = styled(Text)`
    margin-top:80px;
    padding: 10px;
    text-align: left;
    font-size: 30px;
    font-weight: bold;
    color: #770283;
    
`;
export const UpperPaneHeadSubText = styled(Text)`
    margin-left: 50px;
    text-align: left;
    font-size: 20px;
    color: #352A36;
    
`;
export const UpperPaneGooglePane = styled(View)`
    align-center: center;
    width: 100%;
    height: 100px;
    flexDirection: row;    
    backgroundColor: #234234;
`;

export const SUGoogleButton = styled(TouchableOpacity)`
    backgroundColor: #FFFFFF;
    borderRadius: 10px;
    borderColor: #AE00BF;
    width: 100%;
    height: 100%;
    align-center: center;
    justifyContent: center;
`;
export const GoogleFavicon = styled(Image)`
    width: 100%;
    height: 100%;
`;
export const EmailPasswordSignup = styled(View)`
    width: 100%;
    //height: 200px;
  margin-top: 20px;
`;
export const RememberCont = styled(View)`
    width: 100%;
    //height: 50px;
    flexDirection: row;
    justifyContent: center;
`;
export const RememberForm = styled(View)`
    width: 50%;
    height: 100%;
    align-center: center;
    justifyContent: center;
    flexDirection: row;
    padding-left: 10px;
`;
export const ForgotForm = styled(View)`
    width: 50%;
    height: 100%;
    align-center: flex-end;

`;
export const SignupHead = styled(Text)`
    margin-left: 20px;
    text-align: left;
    font-size: 20px;
    color: #352A36;
`;
export const SigninSubText = styled(Text)`
    margin-left: 10px;
    margin-top: 3px;
    text-align: left;
    font-size: 18px;

`;
export const ForgotText = styled(Text)`
    margin-right: 25px;
    margin-top: 3px;
    text-align: right;
    font-size: 18px;

`;
export const SignupButtonsCont = styled(View)`
    width: 100%;
    align-center: center;
    flexDirection:column;
    justify-content: center;
    flex: 1;
    //margin-top: 50px;

`;
export const SignupButtons = styled(TouchableOpacity)`
    backgroundColor: #ECE5FF;
    padding: 20px;
    borderRadius: 10px;
    width: 90%;
    height: 80px;
    margin: 20px;
    align-center: center;
    justifyContent: center;
`;
export const SignupButtonText = styled(Text)`
    justifyContent: center;
    font-size: 24px;
    font-weight: bold;
    color: #3F3D56;
    textAlign: center;
    
`;
//Bookshelf Styles
export const BookshelfContPane = styled(View)`
    width: 100%;
    height: 100%;
`;

export const SearchBarBSCont = styled(View)`
    width: 100%;
    height: 52px;
`;
export const CompletedBookletsScroll = styled(ScrollView)`
    width: 100%;
    height: 100%;
    backgroundColor: #FFFFFF;
    
`;
export const CompletedBooklets = styled(ScrollView)`
    width: 100%;
    height: 80%;
    align-center: center;
    flexDirection: column;
    padding-bottom: 10px;
    backgroundColor: #FFFFFF;
`;

export const BookshelfIcon = styled(TouchableOpacity)`
    backgroundColor: #ECE5FF;
    padding: 5px;
    borderRadius: 10px;
    width: 100%;
    height: 90px;
    align-center: center;
    justifyContent: center;
`;
export const BSButtonSubText = styled(Text)`
    justifyContent: center;
    font-size: 18px;
   
    color: #3F3D56;
    textAlign: center;
    margin-bottom: 5px;
    
`;
export const BSIconCont = styled(View)`
    flexDirection: column;
    height: auto;
    width: 100px;
    margin: 15px;
    align-center: center;

    
`;
export const HorizontalCont = styled(View)`
    flexDirection: row;
    width: 100%;
    align-center: center;
    flexWrap: wrap;
`;
export const BookshelfImage = styled(Image)`
    width: 100%;
    height: 100%;
`;
export const BookshelfBorder = styled(View)`
    width: 100%;
    height: 3px;
    backgroundColor: #5141B6;
    

`;
export const BSTitleBarCont = styled(View)`
    justifyContent: center;
    flexDirection: row;
    width: 100%;
    height: 30px;
    margin: 5px;
    align-items: flex-start;

    
`;
export const BSTitleBarText = styled(Text)`
    justifyContent: center;
    font-size: 24px;
    font-weight: bold;
    color: #3F3D56;
    
`;
export const BSRecentBar = styled(View)`
    flexDirection: row;
    justifyContent:space-between;
    width: 100%;
    //height: 30px;
    margin: 5px;
    align-items: center;
`;
export const PlusImage = styled(Image)`
    width: 75px;
    height: 75px;
`;


//Forget content pane - Entire Page - yellow: #ffff00
export const ForgotContentPane = styled(View)` 
    width: 100%;
    flex: 1;
    align-items: center;
    flexDirection: column;
    backgroundColor: #ffffff;
`;
//Profile bottom container - Profile student - 28 - blue: #00ffff
export const UpperForgotPane = styled(View)`
    width: 100%;
    height: 380px;
    margin: 100px;
    align-items: center;
    flexDirection: column;
    backgroundColor: #ECE5FF;
`;
// ProfileBottomTextCont - Purple: #C0ACF7
export const LowerForgotPane = styled(View)`
    width: 100%;
    height: 280px;
    justifyContent: center;
    align-items: center;
    flexDirection: column;
    backgroundColor: #ECE5FF;
`;
//Forgot page head text
export const ForgotHeadText = styled(Text)`
    justifyContent: center;
    text-align: center;
    font-size: 26px;
    font-weight: bold;
`;
// Forgot page sub text
export const ForgotSubText = styled(Text)`
    justifyContent: center;
    text-align: center;
    margin: 10px;
    font-size: 17px;
    font-weight: normal;
`;
// ProfileBottomTextCont2 - Bright white: #ffffff
export const ForgotButtonCont = styled(View)`
    width: 300px;
    height: 30%;
    backgroundColor: #ECE5FF;
    justifyContent: center;
    align-items: center;
    margin: 30px;
    padding: 10px;
`;
//Forgot page Email account
export const ForgotForms = styled(TextInput)`
    height: 40px;
    width: 80%;
    margin: 10px;
    borderWidth: 1px;
    padding: 10px;
`;
//Forgot page button
export const ForgotButtons = styled(TouchableOpacity)`
    backgroundColor: #C0ACF7;
    padding: 20px;
    borderRadius: 10px;
    width: 70%;
    height: 80px;
    margin: 20px;
    align-center: center;
    justifyContent: center;
`;
export const BookletContentPane = styled(View)` 
    width: 100%;
    height: 100%;
    align-items: center;
    flexDirection: column;
    backgroundColor: #ffffff;
`;
export const BookletPaddingBar = styled(View)` 
    width: 100%;
    height: 60px;
    align-items: center;
    flexDirection: column;
    backgroundColor: #EAE1FA;
`;
export const BookletHomeBar = styled(View)` 
    width: 100%;
    height: 60px;
    align-items: center;
    flexDirection: row;
    backgroundColor: #EAE1FA;
`;
export const BookletMainBar = styled(View)` 
    width: 100%;
    height: ${bookletpageheight}px;
    align-items: center;
    flexDirection: row;
    backgroundColor: #ABCABC;
`;
export const BookletIconBar = styled(View)` 
    width: 75px;
    height: 100%;
    align-items: flex-start;
    flexDirection: column;
    backgroundColor: #88eaf0;
`;

export const ScrollablePane = styled(ScrollView)` 
    width: 100%;
    height: 100%;
    flexDirection: column;
    backgroundColor: #FFFFFF;
`;

export const QuestionContentPane = styled(TouchableOpacity)`
    backgroundColor: #ECE5FF;
    padding: 5px;
    borderRadius: 10px;
    width: 87%;
    height: auto;
    align-center: center;
    justifyContent: center;
    margin: 20px;
`;

export const DateContentPane = styled(TouchableOpacity)`
    backgroundColor: #CBBBF7;
    padding: 5px;
    borderRadius: 10px;
    width: 87%;
    height: 50px;
    align-center: center;
    justifyContent: center;
    margin: 20px;
`;
export const BookletHomeIconCont = styled(View)` 
    width: 75px;
    height: 100%;
    align-items: center;
    flexDirection: column;
    backgroundColor: #EAE1FA;
    
`;
export const BookletHomeIconContBTN = styled(TouchableOpacity)` 
    width: 100%;
    height: 100%;
    align-items: center;
    flexDirection: column;
    backgroundColor: #EAE1FA;
    
`;
export const ModalStyle = styled(View)` 
    
    width: 95%;
    height: auto;
    align-items: center;
    justifyContent: center;
    flexDirection: column;
    backgroundColor: #ADD8E6;
    margin: 20px;
    borderRadius: 20px;
    padding: 35px;,
    shadowColor: "#000",
    shadow-offset: 2px 0px;
    shadowOpacity: 0.25;
    shadowRadius: 4px;
    elevation: 5;
`;
export const BookletModal = styled(Modal)` 
    width: 100%;
    height: 100%;
`;
export const CenterModalView = styled(View)` 
    flex: 1;
    justifyContent: center;
    align-items: center;
    margin-top: 22px;
    height: auto;
`;
export const ShortResponseModal = styled(View)`
    width: 100%;
    height: auto;
    flexDirection: column;

`;
export const ContentModalButtonCont = styled(View)`
    width: 100%;
    height: auto;
    backgroundColor: #F6CEFC;
    padding: 20px;
`;
export const ModalButtonCont = styled(View)`
    width: 100%;
    height: 100px;
    backgroundColor: #DCBDCB;
    flexDirection: row;
    align-items:center;
    justifyContent: center;

`;
export const ModalButtons = styled(TouchableOpacity)`
    backgroundColor: #ECE5FF;
    padding: 5px;
    borderRadius: 10px;
    width: 30%;
    height: 90%;
    align-center: center;
    justifyContent: center;
    margin-left: 30px;
    margin-right: 30px;

`;
export const ModalButtonText = styled(Text)`
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`;
export const ModalHeadingText = styled(Text)`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`;
export const ModalQuestionBodyText = styled(Text)`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    width: 100%;
    marginTop: 5px;
    marginBottom: 5px;
`;
export const ModalAnswerBodyText = styled(Text)`
    font-size: 16px;
    text-align: left;
    width: 100%;
    marginTop: 10px;
    marginBottom: 10px;
    padding: 10px;
    borderWidth:2px;
    borderColor: purple;
    borderRadius: 15px;
    backgroundColor: #ffffff;
    overflow: hidden;
`;
export const ModalTextInput = styled(TextInput)`
    height: 50px;
    margin: 12px;
    borderWidth:1px;
    padding: 10px;
    background-color: #FFFFFF;

`;
export const ModalSuperHeadingText = styled(Text)`
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin: 10px;
`;
export const BookletHeadingText = styled(View)`
    width: 100%;
    height: 100%;
    backgroundColor: #F6CEFC;
    justifyContent: center;
    align-items: center;
`;
export const BookletHeadingTextInput = styled(TextInput)`
    height: 80%;
    width: 80%;
    font-weight: bold;
    borderWidth:1px;
    font-size: 24px;
    background-color: #FFFFFF;
    text-align: center;
`;
export const MCQContainer = styled(View)`
    width: 100%;
    flexDirection: column;
    align-items: flex-start;
`;
export const BookletButtonsContainer = styled(View)`
    width: 100%;
    flexDirection: column;
    align-items: flex-start;
`;
export const BookletButtonTextCont = styled(View)`
    width: 70%;
    align-items: flex-start;
    flexDirection: row;
    left: 5%;
    margin-top: 10px;
    margin-bottom: 10px;
`;
export const MCQButtons = styled(View)`
    height: 30px;
    width: 30px; 
    margin: 5px;
    align-items: center;
    backgroundColor: #ADD8E6;
`;
export const MCQButtonsScroll = styled(View)`
    height: 20px;
    width: 20px; 
    margin: 0px;
    align-items: center;
    backgroundColor: #ADD8E6;
`;
export const MCQButtonText = styled(Text)`
    justifyContent: center;
    font-size: 30px;
    font-weight: bold;
    left: 10px;
`;
export const DateSub = styled(Text)`
    justifyContent: center;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
`;
export const MCQRadioButton = styled(View)`
    width: 30%; 
    alignItems: center; 
    marginTop:6%; 
    margin: 1px;
`;
export const NoAccessToCameraTextCont = styled(View)`
    height: 40%;
    width: 100%; 
    alignItems: center; 
    margin: 5px;
    borderRadius: 5px;
    borderWidth: 3px;
    borderColor: #CBBBF7;
`;
export const HaveAccessToCameraCont = styled(View)`
    height: 50%;
    width: 100%; 
    borderRadius: 5px;
    borderWidth: 3px;
    borderColor: #CBBBF7;
`;
export const NoAccessToCameraText = styled(Text)`
    justifyContent: center;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
`;
export const ClassView = styled(View)`
    height:100%;
    width: 100%;
`;
export const ClassViewTopPad = styled(View)`
    height:200px;
    width: 100%;
    backgroundColor: #8DE5EA;
`;
export const ClassViewHeading = styled(View)`
    height:auto;
    width: 100%;
    backgroundColor: #FFFFFF;
    align-items: center;
`;
export const TitleView = styled(View)` 
    
    width: 50%;
    height: 60px;
    align-items: center;
    justifyContent: center;
    flexDirection: column;
    backgroundColor: #8DE5EA;
    margin: 10px;
    borderRadius: 10px;
    shadowColor: "#000",
    shadow-offset: 2px 0px;
    shadowOpacity: 0.25;
    shadowRadius: 4px;
    elevation: 5;
`;
export const ClassHeadText = styled(Text)`
    justifyContent: center;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
`;
export const ClassViewSearchBar = styled(View)`
    height:auto;
    width: 100%;
    backgroundColor: #FFFFFF;
    align-items: center;
`;
export const ClassSubjects = styled(View)`
    height:auto;
    width: 100%;
    backgroundColor: #FFFFFF;
    align-items: center;
`;
export const ClassRow = styled(View)`
    height:80px;
    width: auto;
    backgroundColor: #FFFFFF;
    align-items: center;
    flex-direction: row;
`;
export const SubjectButtons = styled(TouchableOpacity)` 
    
    width: 130px;
    height: 60px;
    align-items: center;
    justifyContent: center;
    flexDirection: column;
    backgroundColor: #ECE5FF;
    padding: 10px;
    margin: 20px;
    borderRadius: 20px;
    shadowColor: "#000",
    shadow-offset: 2px 0px;
    shadowOpacity: 0.25;
    shadowRadius: 4px;
    elevation: 5;
`;
export const ClassButtonText = styled(Text)`
    justifyContent: center;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
`;
export const ScrollImage = styled(Image)`
    width: 260px;
    height: 225px;
    padding: 20px;
`;
export const StudentBookletHeading = styled(Text)`
    height: 80%;
    width: 80%;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
`;
