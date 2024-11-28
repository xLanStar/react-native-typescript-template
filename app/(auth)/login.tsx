import { useLoginMutation } from "@/services/auth.service";
// import { GoogleSignin, GoogleSigninButton } from "@react-native-google-signin/google-signin";
import { GoogleLogin } from "@react-oauth/google";

// if (Platform.OS !== "web") {
//   GoogleSignin.configure({
//     webClientId:
//       "388742713943-l62d1jmm6kgtuskil4glmsrvpmfkho33.apps.googleusercontent.com",
//   });
// }

const Login: React.FC = () => {
  const [login] = useLoginMutation();

  // const loginWithGoogle = useGoogleLogin({
  //   onSuccess: (tokenResponse) => {
  //     login({
  //       code: tokenResponse.code,
  //       state: tokenResponse.state,
  //     });
  //   },
  //   flow: "auth-code",
  //   ux_mode: "redirect",
  // });

  return (
    <>
      {/* App */}
      {/* <Button
        title="Google Login"
        onPress={async () => {
          if (Platform.OS === "web") {
            loginWithGoogle();
          } else {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo);
          }
        }}
      /> */}

      <GoogleLogin
        useOneTap
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          login({
            provider: "google",
            process: "login",
            token: {
              client_id:
                "388742713943-l62d1jmm6kgtuskil4glmsrvpmfkho33.apps.googleusercontent.com",
              id_token: credentialResponse.credential,
            },
          });
        }}
      />
    </>
  );
};

export default Login;
