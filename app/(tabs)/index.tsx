import { StyleSheet } from "react-native";

import { View } from "@/components/Themed";
import { Description, Input, Label, TextField } from "heroui-native";
import { useState } from "react";

const data = Array.from({ length: 50 }, (_, i) => ({
  value: i.toString(),
  label: `Option ${i}`,
}));

export default function TabOneScreen() {
  const [email, setEmail] = useState("");
  return (
    <View style={styles.container}>
      <TextField isRequired>
        <Label>Email</Label>
        <Input
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <Description>
          We'll never share your email with anyone else.
        </Description>
      </TextField>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
