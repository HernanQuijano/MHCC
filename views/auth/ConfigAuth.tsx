import {
    SignInWithPasswordCredentials,
    SignUpWithPasswordCredentials,
  } from "@supabase/supabase-js";
  import { useState } from "react";
  import { Alert } from "react-native";
  import { IniciarSesion } from "./IniciarSesion";
  import { supabase } from "../../services/supabase";
  
  export function ConfigAuth() {
    const [loading, setLoading] = useState(false);
  
    const handleSignup = async (credentials: SignUpWithPasswordCredentials) => {
      if (!("email" in credentials)) return;
      setLoading(true);
      const { email, password, options } = credentials;
      const { error, data } = await supabase.auth.signUp({
        email,
        password,
        options,
      });
  
      if (error) Alert.alert(error.message);
  
      console.log(data);
      setLoading(false);
    };
  
    const handleLogin = async (credentials: SignInWithPasswordCredentials) => {
      if (!("email" in credentials)) return;
      setLoading(true);
      const { email, password } = credentials;
      const { error, data } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
  
      if (error) Alert.alert(error.message);
  
      console.log(data);
      setLoading(false);
    };
    return (
      <IniciarSesion loading={loading} onLogin={handleLogin} onSignUp={handleSignup} />
    );
  }

  export default ConfigAuth;