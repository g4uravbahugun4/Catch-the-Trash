import Head from "next/head";
import axios from "axios";
import { parseCookies, destroyCookie } from "nookies";
import baseUrl from "../utils/baseUrl";
import { redirectUser } from "../utils/authUser";
import '../styles/globals.css' 

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="UTF-8" />
        <title>Catch the Trash</title>
      </Head>
      
        <Component {...pageProps} />
      
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const { token } = parseCookies(ctx);
  
  let pageProps = {};

  const protectedRoutes =
    ctx.pathname === "/" ||
    ctx.pathname === "/highscores" ||
    ctx.pathname === "/gameEnd" ;

  if (!token) {

    protectedRoutes && redirectUser(ctx, "/login");
  }
  //
  else {
    try {
   
      const res = await axios.get(`${baseUrl}/api/auth`, {
        headers: { Authorization: token },
     
      });

      const { user} = res.data;
    
      if (user) !protectedRoutes && redirectUser(ctx, "/");
  
      pageProps.user = user;
      
    
    } catch (error) {
      destroyCookie(ctx, "token");
      redirectUser(ctx, "/login");
    }
  }

  return { pageProps };
};

export default MyApp;
