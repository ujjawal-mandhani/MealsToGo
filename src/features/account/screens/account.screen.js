import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AccountBackground } from "../components/account.styles";
import { AccountCover } from "../components/account.styles";
import { AccountContainer } from "../components/account.styles";
import { AuthButton } from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
